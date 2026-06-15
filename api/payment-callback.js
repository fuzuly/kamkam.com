const Iyzipay = require('iyzipay');

const iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API_KEY,
  secretKey: process.env.IYZICO_SECRET_KEY,
  uri: process.env.IYZICO_BASE_URL || 'https://sandbox.iyzipay.com',
});

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.redirect(302, '/odeme-sonuc?status=fail&reason=invalid_method');
  }

  const token = req.body?.token;

  if (!token) {
    return res.redirect(302, '/odeme-sonuc?status=fail&reason=missing_token');
  }

  return new Promise((resolve) => {
    iyzipay.checkoutForm.retrieve({ locale: Iyzipay.LOCALE.TR, token }, (err, result) => {
      if (err || result.status !== 'success' || result.paymentStatus !== 'SUCCESS') {
        const reason = encodeURIComponent(result?.errorMessage || err?.message || 'payment_failed');
        res.redirect(302, `/odeme-sonuc?status=fail&reason=${reason}`);
        return resolve();
      }

      const params = new URLSearchParams({
        status: 'success',
        paymentId: result.paymentId || '',
        conversationId: result.conversationId || '',
        price: result.price || '30',
      });
      res.redirect(302, `/odeme-sonuc?${params.toString()}`);
      resolve();
    });
  });
};
