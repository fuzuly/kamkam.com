import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';

// iyzipay v2 auth — matches create-business-payment route
function iyziAuthHeader(apiKey: string, secretKey: string, rnd: string, path: string, body: unknown): string {
  const sig = createHmac('sha256', secretKey)
    .update(rnd + path + JSON.stringify(body))
    .digest('hex');
  const params = `apiKey:${apiKey}&randomKey:${rnd}&signature:${sig}`;
  return 'IYZWSv2 ' + Buffer.from(params).toString('base64');
}

export async function POST(req: NextRequest) {
  const baseUrl = process.env.BASE_URL ?? 'https://kamkamapp.com';

  try {
    const rawBody = await req.text();
    const params = new URLSearchParams(rawBody);
    const token = params.get('token');

    if (!token) {
      return NextResponse.redirect(`${baseUrl}/odeme-sonuc.html?status=error`, 303);
    }

    const apiKey = process.env.IYZICO_API_KEY!;
    const secretKey = process.env.IYZICO_SECRET_KEY!;

    const payload = { locale: 'tr', token };
    const path = '/payment/iyzipos/checkoutform/auth/ecom/detail';
    const rnd = `${Date.now()}${Math.random().toString(36).slice(2, 8)}`;
    const auth = iyziAuthHeader(apiKey, secretKey, rnd, path, payload);

    const res = await fetch(`https://api.iyzipay.com${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth,
        'x-iyzi-rnd': rnd,
        'x-iyzi-client-version': 'iyzipay-node-2.0.69',
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    const result = await res.json() as Record<string, unknown>;

    if (result.status !== 'success' || result.paymentStatus !== 'SUCCESS') {
      return NextResponse.redirect(`${baseUrl}/odeme-sonuc.html?status=error&reason=payment_failed`, 303);
    }

    const paymentId = (result.paymentId as string) ?? '';
    const price = (result.paidPrice as string) ?? '';
    return NextResponse.redirect(
      `${baseUrl}/odeme-sonuc.html?status=success&paymentId=${paymentId}&price=${price}`,
      303
    );

  } catch {
    return NextResponse.redirect(`${baseUrl}/odeme-sonuc.html?status=error&reason=server_error`, 303);
  }
}
