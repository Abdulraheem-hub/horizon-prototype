'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Footer } from '@/components/Footer';

export default function PaymentPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const params = useParams();
  const testId = params.testId as string;

  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: {
      street: '',
      city: '',
      zipCode: '',
      country: ''
    }
  });

  // Mock test data
  const testDetails = {
    'blood-test': {
      name: t('tests.bloodTest'),
      price: 45,
      duration: '15 minutes',
      icon: '🩸'
    },
    'xray': {
      name: t('tests.xray'),
      price: 80,
      duration: '10 minutes',
      icon: '🦴'
    },
    'ecg': {
      name: t('tests.ecg'),
      price: 60,
      duration: '20 minutes',
      icon: '💓'
    }
  };

  const test = testDetails[testId as keyof typeof testDetails] || testDetails['blood-test'];

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to success page
      router.push(`/${locale}/payment/success`);
    }, 3000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-white/50 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href={`/${locale}`} className="text-2xl font-bold text-gray-900">
              Horizon
            </Link>
            <div className="flex items-center space-x-4">
              <Link href={`/${locale}/booking/${testId}`} className="btn-secondary">
                {t('common.back')} to Booking
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">{t('payment.title')}</h1>

            <form onSubmit={handlePayment} className="space-y-6">
              {/* Payment Method Selection */}
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">{t('payment.paymentMethod')}</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <div className="flex items-center">
                      <span className="text-xl mr-2">💳</span>
                      <span>{t('payment.creditCard')}</span>
                    </div>
                  </label>

                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="apple-pay"
                      checked={paymentMethod === 'apple-pay'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <div className="flex items-center">
                      <span className="text-xl mr-2">🍎</span>
                      <span>{t('payment.applePay')}</span>
                    </div>
                  </label>

                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="google-pay"
                      checked={paymentMethod === 'google-pay'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <div className="flex items-center">
                      <span className="text-xl mr-2">🟢</span>
                      <span>{t('payment.googlePay')}</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Credit Card Form */}
              {paymentMethod === 'credit-card' && (
                <div className="card">
                  <h3 className="text-lg font-semibold mb-4">Card Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('payment.cardNumber')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="input w-full"
                        placeholder="1234 5678 9012 3456"
                        value={paymentData.cardNumber}
                        onChange={(e) => setPaymentData({
                          ...paymentData,
                          cardNumber: formatCardNumber(e.target.value)
                        })}
                        maxLength={19}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('payment.expiryDate')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="input w-full"
                          placeholder="MM/YY"
                          value={paymentData.expiryDate}
                          onChange={(e) => setPaymentData({
                            ...paymentData,
                            expiryDate: formatExpiryDate(e.target.value)
                          })}
                          maxLength={5}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('payment.cvv')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="input w-full"
                          placeholder="123"
                          value={paymentData.cvv}
                          onChange={(e) => setPaymentData({
                            ...paymentData,
                            cvv: e.target.value.replace(/\D/g, '').slice(0, 4)
                          })}
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('payment.cardholderName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="input w-full"
                        placeholder="John Doe"
                        value={paymentData.cardholderName}
                        onChange={(e) => setPaymentData({
                          ...paymentData,
                          cardholderName: e.target.value
                        })}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Apple Pay / Google Pay */}
              {(paymentMethod === 'apple-pay' || paymentMethod === 'google-pay') && (
                <div className="card">
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">
                        {paymentMethod === 'apple-pay' ? '🍎' : '🟢'}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {paymentMethod === 'apple-pay' ? t('payment.applePay') : t('payment.googlePay')}
                    </h3>
                    <p className="text-gray-600">
                      You will be redirected to complete the payment
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isProcessing}
                className="btn-primary w-full text-lg py-4"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  `${t('payment.payNow')} - $${test.price}`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">{test.icon}</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">{test.name}</h3>
                  <p className="text-sm text-gray-600">{test.duration}</p>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Test Fee</span>
                  <span>${test.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>$5</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${((test.price + 5) * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                  <span>{t('payment.total')}</span>
                  <span>${((test.price + 5) * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Secure Payment</h4>
                <p className="text-sm text-green-700">
                  Your payment information is encrypted and secure. We never store your card details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}