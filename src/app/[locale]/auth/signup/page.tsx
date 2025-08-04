'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function SignUpPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = t('common.required');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('common.required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = t('common.required');
    }
    
    if (!formData.password) {
      newErrors.password = t('common.required');
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
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
      // Redirect to welcome or tests page
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
            {t('auth.signUp')}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {t('auth.alreadyHaveAccount')}{' '}
            <Link href={`/${locale}/auth/signin`} className="font-medium text-primary hover:text-primary-dark">
              {t('auth.signIn')}
            </Link>
          </p>
        </div>

        {!otpSent ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    {t('auth.fullName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className={`input w-full mt-1 ${errors.fullName ? 'border-red-500' : ''}`}
                    placeholder={t('auth.fullName')}
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                  {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t('auth.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={`input w-full mt-1 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder={t('auth.email')}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    {t('auth.phone')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={`input w-full mt-1 ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder={t('auth.phone')}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    {t('auth.password')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className={`input w-full mt-1 ${errors.password ? 'border-red-500' : ''}`}
                    placeholder={t('auth.password')}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    {t('auth.confirmPassword')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className={`input w-full mt-1 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                    placeholder={t('auth.confirmPassword')}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full"
                >
                  {isLoading ? t('common.loading') : t('auth.signUp')}
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
                  We&apos;ve sent a verification code to {formData.email} and {formData.phone}
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