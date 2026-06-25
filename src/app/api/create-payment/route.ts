import { NextRequest, NextResponse } from 'next/server';
// @ts-expect-error no types for iyzipay
import Iyzipay from 'iyzipay';

const iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API_KEY,
  secretKey: process.env.IYZICO_SECRET_KEY,
  uri: process.env.IYZICO_BASE_URL,
});

export async function POST(req: NextRequest) {
  const { name, surname, email, phone } = await req.json();

  if (!name || !surname || !email || !phone) {
    return NextResponse.json({ error: 'Tüm alanlar zorunludur.' }, { status: 400 });
  }

  const baseUrl = process.env.BASE_URL ?? 'https://kamkamapp.com';
  const conversationId = `kamkam-${Date.now()}`;

  const request = {
    locale: 'tr',
    conversationId,
    price: '3',
    paidPrice: '3',
    currency: 'TRY',
    basketId: 'starter-monthly',
    paymentGroup: 'SUBSCRIPTION',
    callbackUrl: `${baseUrl}/api/payment-callback`,
    enabledInstallments: [1],
    buyer: {
      id: email,
      name,
      surname,
      gsmNumber: phone.replace(/\s/g, ''),
      email,
      identityNumber: '11111111111',
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
      contactName: `${name} ${surname}`,
      city: 'Istanbul',
      country: 'Turkey',
      address: 'Türkiye',
    },
    basketItems: [
      {
        id: 'starter-monthly',
        name: 'KamKam Starter Aylık Abonelik',
        category1: 'Abonelik',
        itemType: 'VIRTUAL',
        price: '3',
      },
    ],
  };

  return new Promise<NextResponse>((resolve) => {
    iyzipay.checkoutFormInitialize.create(request, (err: Error, result: Record<string, unknown>) => {
      if (err || result.status !== 'success') {
        resolve(
          NextResponse.json(
            { error: (result?.errorMessage as string) ?? err?.message ?? 'Ödeme formu oluşturulamadı.' },
            { status: 500 }
          )
        );
        return;
      }
      resolve(NextResponse.json({ checkoutFormContent: result.checkoutFormContent }));
    });
  });
}
