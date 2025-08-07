'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { LanguageToggle } from '@/components/LanguageToggle';
import { MobileMenu } from '@/components/MobileMenu';

interface PhysicianLayoutProps {
  children: React.ReactNode;
}

export default function PhysicianLayout({ children }: PhysicianLayoutProps) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-white/50 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href={`/${locale}/physician/dashboard`}>
                  <h1 className="text-2xl font-bold text-gray-900">Horizon <span className="text-primary">MD</span></h1>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 rtl:space-x-reverse">
                  <Link href={`/${locale}/physician/dashboard`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {t('physician.navigation.dashboard')}
                  </Link>
                  <Link href={`/${locale}/physician/referrals`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {t('physician.navigation.referrals')}
                  </Link>
                  <Link href={`/${locale}/physician/reports`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {t('physician.navigation.reports')}
                  </Link>
                  <Link href={`/${locale}/physician/support`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {t('physician.navigation.support')}
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
                <Link href={`/${locale}`} className="btn-secondary">
                  {t('physician.navigation.backToMain')}
                </Link>
                <Link href={`/${locale}/physician/signin`} className="btn-primary">
                  {t('physician.navigation.signOut')}
                </Link>
                <LanguageToggle />
              </div>
              <MobileMenu>
                <Link href={`/${locale}/physician/dashboard`} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                  {t('physician.navigation.dashboard')}
                </Link>
                <Link href={`/${locale}/physician/referrals`} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                  {t('physician.navigation.referrals')}
                </Link>
                <Link href={`/${locale}/physician/reports`} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                  {t('physician.navigation.reports')}
                </Link>
                <Link href={`/${locale}/physician/support`} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                  {t('physician.navigation.support')}
                </Link>
                <div className="px-3 py-2">
                  <LanguageToggle />
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex space-x-3 px-3 rtl:space-x-reverse">
                    <Link href={`/${locale}`} className="btn-secondary flex-1 text-center">
                      {t('physician.navigation.backToMain')}
                    </Link>
                    <Link href={`/${locale}/physician/signin`} className="btn-primary flex-1 text-center">
                      {t('physician.navigation.signOut')}
                    </Link>
                  </div>
                </div>
              </MobileMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}