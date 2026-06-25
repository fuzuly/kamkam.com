import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';

// iyzipay v2 auth — matches utils.js generateHashV2 exactly
function iyziAuthHeader(apiKey: string, secretKey: string, rnd: string, path: string, body: unknown): string {
  const sig = createHmac('sha256', secretKey)
    .update(rnd + path + JSON.stringify(body))
    .digest('hex');
  const params = `apiKey:${apiKey}&randomKey:${rnd}&signature:${sig}`;
  return 'IYZWSv2 ' + Buffer.from(params).toString('base64');
}

export async function POST(req: NextRequest) {
  try {
    const { name, surname, email, phone, bizName, taxNumber } = await req.json();

    if (!name || !surname || !email || !phone || !bizName || !taxNumber) {
      return NextResponse.json({ error: 'Tüm alanlar zorunludur.' }, { status: 400 });
    }

    const apiKey = process.env.IYZICO_API_KEY!;
    const secretKey = process.env.IYZICO_SECRET_KEY!;
    const baseUrl = process.env.BASE_URL ?? 'https://kamkamapp.com';
    const conversationId = `biz-${Date.now()}`;

    const rawPhone = phone.replace(/\D/g, '');
    const iyziPhone = rawPhone.startsWith('0') ? `+90${rawPhone.slice(1)}` : `+90${rawPhone}`;
    const identityNumber = taxNumber.replace(/\D/g, '').slice(0, 11).padEnd(11, '0');

    const payload: Record<string, unknown> = {
      locale: 'tr',
      conversationId,
      price: '2400',
      paidPrice: '2400',
      currency: 'TRY',
      basketId: `enterprise-${conversationId}`,
      paymentGroup: 'PRODUCT',
      callbackUrl: `${baseUrl}/api/payment-callback`,
      enabledInstallments: [1, 2, 3, 6, 9],
      buyer: {
        id: email,
        name,
        surname,
        gsmNumber: iyziPhone,
        email,
        identityNumber,
        registrationAddress: 'Türkiye',
        city: 'Istanbul',
        country: 'Turkey',
      },
      shippingAddress: {
        contactName: `${name} ${surname}`,
        city: 'Istanbul',
        country: 'Turkey',
        address: 'Türkiye',
      },
      billingAddress: {
        contactName: bizName,
        city: 'Istanbul',
        country: 'Turkey',
        address: 'Türkiye',
      },
      basketItems: [
        {
          id: 'enterprise-setup',
          name: 'KamKam Enterprise Kurulum',
          category1: 'İşletme Yazılımı',
          itemType: 'VIRTUAL',
          price: '2400',
        },
      ],
    };

    const path = '/payment/iyzipos/checkoutform/initialize/auth/ecom';
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

    const data = await res.json() as Record<string, unknown>;

    if (data.status !== 'success') {
      return NextResponse.json(
        { error: (data.errorMessage as string) ?? 'Ödeme formu oluşturulamadı.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ checkoutFormContent: data.checkoutFormContent });

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
