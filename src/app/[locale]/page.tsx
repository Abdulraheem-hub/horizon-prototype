'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    router.push(`/${newLocale}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-white/50 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Horizon</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href={`/${locale}`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {t('navigation.home')}
                  </Link>
                  <Link href={`/${locale}/tests`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {t('navigation.tests')}
                  </Link>
                  <Link href={`/${locale}/about`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {t('navigation.about')}
                  </Link>
                  <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {t('navigation.contact')}
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="btn-secondary"
              >
                {locale === 'en' ? 'العربية' : 'English'}
              </button>
              <Link href={`/${locale}/auth/signin`} className="btn-secondary">
                {t('navigation.signIn')}
              </Link>
              <Link href={`/${locale}/auth/signup`} className="btn-primary">
                {t('navigation.signUp')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('content.welcome')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('content.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/tests`} className="btn-primary text-center">
              {t('tests.title')}
            </Link>
            <Link href={`/${locale}/auth/signup`} className="btn-secondary text-center">
              {t('navigation.signUp')}
            </Link>
          </div>
        </div>

        {/* Featured Tests */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Tests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blood Test Card */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xl">🩸</span>
                </div>
                <h3 className="text-xl font-semibold ml-4">{t('tests.bloodTest')}</h3>
              </div>
              <p className="text-gray-600 mb-4">Complete blood count and analysis</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">$45</span>
                <Link href={`/${locale}/tests/blood-test`} className="btn-primary">
                  {t('tests.bookNow')}
                </Link>
              </div>
            </div>

            {/* X-Ray Card */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🦴</span>
                </div>
                <h3 className="text-xl font-semibold ml-4">{t('tests.xray')}</h3>
              </div>
              <p className="text-gray-600 mb-4">Digital X-ray imaging</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">$80</span>
                <Link href={`/${locale}/tests/xray`} className="btn-primary">
                  {t('tests.bookNow')}
                </Link>
              </div>
            </div>

            {/* ECG Card */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">💓</span>
                </div>
                <h3 className="text-xl font-semibold ml-4">{t('tests.ecg')}</h3>
              </div>
              <p className="text-gray-600 mb-4">Electrocardiogram test</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">$60</span>
                <Link href={`/${locale}/tests/ecg`} className="btn-primary">
                  {t('tests.bookNow')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Browse Tests</h3>
              <p className="text-gray-600 text-sm">Choose from available medical tests</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Book Appointment</h3>
              <p className="text-gray-600 text-sm">Select location and time</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Make Payment</h3>
              <p className="text-gray-600 text-sm">Secure online payment</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Results</h3>
              <p className="text-gray-600 text-sm">Access reports online</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 Horizon Medical Testing Platform. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
