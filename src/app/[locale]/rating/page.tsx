'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function RatingPage() {
  const t = useTranslations();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const appointmentId = searchParams.get('appointment');

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const getRatingText = (value: number) => {
    switch (value) {
      case 5: return t('rating.excellent');
      case 4: return t('rating.good');
      case 3: return t('rating.average');
      case 2: return t('rating.poor');
      case 1: return t('rating.veryPoor');
      default: return '';
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-green-600 text-3xl">🙏</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('rating.thankYou')}
            </h2>
            <p className="text-gray-600 mb-8">
              Your feedback helps us improve our services
            </p>
            <div className="space-y-3">
              <Link href={`/${locale}/profile`} className="btn-primary w-full text-center">
                Back to Profile
              </Link>
              <Link href={`/${locale}/tests`} className="btn-secondary w-full text-center">
                Book Another Test
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-white/50 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href={`/${locale}`} className="text-2xl font-bold text-gray-900">
              Horizon
            </Link>
            <div className="flex items-center space-x-4">
              <Link href={`/${locale}/profile`} className="btn-secondary">
                Back to Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('rating.title')}
          </h1>
          <p className="text-gray-600">
            {t('rating.rateExperience')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="card">
            {/* Star Rating */}
            <div className="text-center mb-6">
              <div className="flex justify-center items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`text-4xl transition-colors ${
                      star <= rating ? 'text-yellow-400' : 'text-gray-300'
                    } hover:text-yellow-400`}
                    onClick={() => handleRatingClick(star)}
                  >
                    ⭐
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-lg font-medium text-gray-900">
                  {getRatingText(rating)}
                </p>
              )}
            </div>

            {/* Written Review */}
            <div>
              <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
                {t('rating.writeReview')} ({t('common.optional')})
              </label>
              <textarea
                id="review"
                rows={4}
                className="input w-full"
                placeholder="Tell us about your experience..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={rating === 0 || isSubmitting}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('common.loading') : t('rating.submitRating')}
            </button>
          </div>
        </form>

        {/* Service Details */}
        {appointmentId && (
          <div className="card mt-6 bg-gray-50">
            <h3 className="font-semibold mb-2">Service Details</h3>
            <p className="text-sm text-gray-600">Appointment ID: {appointmentId}</p>
            <p className="text-sm text-gray-600">Date: January 15, 2025</p>
            <p className="text-sm text-gray-600">Service: Blood Test</p>
            <p className="text-sm text-gray-600">Location: Downtown Clinic</p>
          </div>
        )}
      </main>
    </div>
  );
}