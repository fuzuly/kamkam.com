import { NextRequest, NextResponse } from 'next/server';
// @ts-expect-error no types for iyzipay
import Iyzipay from 'iyzipay';

const iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API_KEY,
  secretKey: process.env.IYZICO_SECRET_KEY,
  uri: process.env.IYZICO_BASE_URL,
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const params = new URLSearchParams(body);
  const token = params.get('token');

  const baseUrl = process.env.BASE_URL ?? 'https://kamkamapp.com';

  if (!token) {
    return NextResponse.redirect(`${baseUrl}/odeme-sonuc.html?status=error`);
  }

  return new Promise<NextResponse>((resolve) => {
    iyzipay.checkoutForm.retrieve({ locale: 'tr', token }, (err: Error, result: Record<string, unknown>) => {
      if (err || result.status !== 'success' || result.paymentStatus !== 'SUCCESS') {
        resolve(NextResponse.redirect(`${baseUrl}/odeme-sonuc.html?status=error&reason=payment_failed`));
        return;
      }
      const paymentId = result.paymentId ?? '';
      resolve(NextResponse.redirect(`${baseUrl}/odeme-sonuc.html?status=success&paymentId=${paymentId}&price=3`));
    });
  });
}
