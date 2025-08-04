'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function SignInPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
    }, 1000);
  };

  const handleOtpVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard or tests page
      router.push(`/${locale}/tests`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href={`/${locale}`} className="text-2xl font-bold text-gray-900">
            Horizon
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {t('auth.signIn')}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {t('auth.dontHaveAccount')}{' '}
            <Link href={`/${locale}/auth/signup`} className="font-medium text-primary hover:text-primary-dark">
              {t('auth.signUp')}
            </Link>
          </p>
        </div>

        {!otpSent ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t('auth.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input w-full mt-1"
                    placeholder={t('auth.email')}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    {t('auth.password')}
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="input w-full mt-1"
                    placeholder={t('auth.password')}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      checked={formData.rememberMe}
                      onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      {t('auth.rememberMe')}
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link href={`/${locale}/auth/forgot-password`} className="font-medium text-primary hover:text-primary-dark">
                      {t('auth.forgotPassword')}
                    </Link>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full"
                >
                  {isLoading ? t('common.loading') : t('auth.signIn')}
                </button>
              </div>
            </div>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleOtpVerification}>
            <div className="card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('auth.otpSent')}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  We&apos;ve sent a verification code to {formData.email}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                    {t('auth.enterOTP')}
                  </label>
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    required
                    maxLength={6}
                    className="input w-full mt-1 text-center text-lg tracking-widest"
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || otp.length !== 6}
                  className="btn-primary w-full"
                >
                  {isLoading ? t('common.loading') : t('auth.verifyOTP')}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    className="text-sm text-primary hover:text-primary-dark"
                    onClick={() => {
                      // Simulate resending OTP
                      console.log('Resending OTP...');
                    }}
                  >
                    {t('auth.resendOTP')}
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        <div className="text-center">
          <Link href={`/${locale}`} className="text-sm text-gray-600 hover:text-gray-900">
            ← {t('common.back')} to Home
          </Link>
        </div>
      </div>
    </div>
  );
}