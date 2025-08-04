'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  const t = useTranslations();
  const locale = useLocale();

  const bookingDetails = {
    confirmationNumber: 'HZ-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
    testName: 'Blood Test',
    date: '2025-01-15',
    time: '10:00 AM',
    location: 'Downtown Clinic',
    amount: '$54.00'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-green-600 text-3xl">✅</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('payment.paymentSuccessful')}
          </h2>
          <p className="text-gray-600 mb-8">
            Your appointment has been confirmed!
          </p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Booking Confirmation</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Confirmation Number:</span>
              <span className="font-semibold">{bookingDetails.confirmationNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Test:</span>
              <span>{bookingDetails.testName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time:</span>
              <span>{bookingDetails.date} at {bookingDetails.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Location:</span>
              <span>{bookingDetails.location}</span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span className="text-gray-600">Amount Paid:</span>
              <span className="font-semibold text-green-600">{bookingDetails.amount}</span>
            </div>
          </div>
        </div>

        <div className="card bg-blue-50 border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">What&apos;s Next?</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• You&apos;ll receive a confirmation email shortly</li>
            <li>• Please arrive 15 minutes before your appointment</li>
            <li>• Bring a valid ID and insurance card</li>
            <li>• Follow any preparation instructions for your test</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link 
            href={`/${locale}/profile`}
            className="btn-primary w-full text-center"
          >
            View My Appointments
          </Link>
          <Link 
            href={`/${locale}/tests`}
            className="btn-secondary w-full text-center"
          >
            Book Another Test
          </Link>
          <Link 
            href={`/${locale}`}
            className="block text-center text-sm text-gray-600 hover:text-gray-900"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}