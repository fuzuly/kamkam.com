import { NextRequest, NextResponse } from 'next/server';
// @ts-expect-error no types for iyzipay
import Iyzipay from 'iyzipay';

const iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API_KEY,
  secretKey: process.env.IYZICO_SECRET_KEY,
  uri: 'https://api.iyzipay.com',
});

export async function POST(req: NextRequest) {
  const { name, surname, email, phone, bizName, taxNumber } = await req.json();

  if (!name || !surname || !email || !phone || !bizName || !taxNumber) {
    return NextResponse.json({ error: 'Tüm alanlar zorunludur.' }, { status: 400 });
  }

  const baseUrl = process.env.BASE_URL ?? 'https://kamkamapp.com';
  const conversationId = `biz-${Date.now()}`;

  const rawPhone = phone.replace(/\D/g, '');
  const iyziPhone = rawPhone.startsWith('0')
    ? `+90${rawPhone.slice(1)}`
    : `+90${rawPhone}`;

  const request = {
    locale: 'tr',
    conversationId,
    price: '2000',
    paidPrice: '2000',
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
      identityNumber: taxNumber.length === 11 ? taxNumber : '11111111111',
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
        price: '2000',
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
