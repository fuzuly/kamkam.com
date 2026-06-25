import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, surname, email, phone, bizName, taxNumber } = await req.json();

    if (!name || !surname || !email || !phone || !bizName || !taxNumber) {
      return NextResponse.json({ error: 'Tüm alanlar zorunludur.' }, { status: 400 });
    }

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Iyzipay = require('iyzipay');
    const iyzipay = new Iyzipay({
      apiKey: process.env.IYZICO_API_KEY,
      secretKey: process.env.IYZICO_SECRET_KEY,
      uri: 'https://api.iyzipay.com',
    });

    const baseUrl = process.env.BASE_URL ?? 'https://kamkamapp.com';
    const conversationId = `biz-${Date.now()}`;

    const rawPhone = phone.replace(/\D/g, '');
    const iyziPhone = rawPhone.startsWith('0') ? `+90${rawPhone.slice(1)}` : `+90${rawPhone}`;

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
        identityNumber: taxNumber.replace(/\D/g, '').slice(0, 11).padEnd(11, '0'),
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

    const result = await new Promise<Record<string, unknown>>((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('iyzipay timeout (8s)')), 8000);
      iyzipay.checkoutFormInitialize.create(request, (err: Error, res: Record<string, unknown>) => {
        clearTimeout(timer);
        if (err) reject(err);
        else resolve(res);
      });
    });

    if (result.status !== 'success') {
      return NextResponse.json(
        { error: (result.errorMessage as string) ?? 'Ödeme formu oluşturulamadı.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ checkoutFormContent: result.checkoutFormContent });

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
