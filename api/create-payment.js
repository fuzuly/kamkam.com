const Iyzipay = require('iyzipay');

const iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API_KEY,
  secretKey: process.env.IYZICO_SECRET_KEY,
  uri: process.env.IYZICO_BASE_URL || 'https://sandbox.iyzipay.com',
});

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, surname, email, phone } = req.body || {};

  if (!name || !surname || !email || !phone) {
    return res.status(400).json({ error: 'Ad, soyad, e-posta ve telefon zorunludur.' });
  }

  const baseUrl = process.env.BASE_URL || `https://${process.env.VERCEL_URL}`;
  const conversationId = `kk-${Date.now()}`;

  const request = {
    locale: Iyzipay.LOCALE.TR,
    conversationId,
    price: '30',
    paidPrice: '30',
    currency: Iyzipay.CURRENCY.TRY,
    basketId: `basket-${conversationId}`,
    paymentGroup: Iyzipay.PAYMENT_GROUP.SUBSCRIPTION,
    callbackUrl: `${baseUrl}/api/payment-callback`,
    enabledInstallments: [1, 2, 3, 6],
    buyer: {
      id: email,
      name,
      surname,
      email,
      gsmNumber: phone,
      registrationDate: new Date().toISOString().slice(0, 19).replace('T', ' '),
      lastLoginDate: new Date().toISOString().slice(0, 19).replace('T', ' '),
      registrationAddress: 'Türkiye',
      ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1',
      city: 'Istanbul',
      country: 'Turkey',
      zipCode: '34000',
    },
    shippingAddress: {
      contactName: `${name} ${surname}`,
      city: 'Istanbul',
      country: 'Turkey',
      address: 'Dijital Hizmet — Fiziksel Teslimat Yok',
      zipCode: '34000',
    },
    billingAddress: {
      contactName: `${name} ${surname}`,
      city: 'Istanbul',
      country: 'Turkey',
      address: 'Dijital Hizmet — Fiziksel Teslimat Yok',
      zipCode: '34000',
    },
    basketItems: [
      {
        id: 'KAMKAM-STARTER',
        name: 'KamKam Starter Aylık Abonelik',
        category1: 'Yazılım',
        category2: 'SaaS Abonelik',
        itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
        price: '30',
      },
    ],
  };

  return new Promise((resolve) => {
    iyzipay.checkoutFormInitialize.create(request, (err, result) => {
      if (err || result.status !== 'success') {
        const message = result?.errorMessage || err?.message || 'iyzico bağlantı hatası';
        res.status(502).json({ error: message });
        return resolve();
      }

      res.status(200).json({
        checkoutFormContent: result.checkoutFormContent,
        token: result.token,
        tokenExpireTime: result.tokenExpireTime,
      });
      resolve();
    });
  });
};
