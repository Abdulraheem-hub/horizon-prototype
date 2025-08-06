import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Link from "next/link";
import type { Metadata } from "next";
import { MobileMenu } from '@/components/MobileMenu';
import { Footer } from '@/components/Footer';
import { LanguageToggle } from '@/components/LanguageToggle';

export const metadata: Metadata = {
  title: "Lab Portal - Horizon",
  description: "Lab Portal for managing bookings and reports",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LabLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = await getTranslations('lab');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Lab Navigation Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                {t('title')}
              </h1>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
              <Link 
                href={`/${locale}/lab`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.dashboard')}
              </Link>
              <Link 
                href={`/${locale}/lab/bookings`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.bookings')}
              </Link>
              <Link 
                href={`/${locale}/lab/reports`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.reports')}
              </Link>
              <Link 
                href={`/${locale}/lab/communications`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.communications')}
              </Link>
              <Link 
                href={`/${locale}/lab/payments`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.payments')}
              </Link>
              <Link 
                href={`/${locale}/lab/signin`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.signOut')}
              </Link>
              <LanguageToggle />
            </nav>
            
            <MobileMenu>
              <Link 
                href={`/${locale}/lab`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.dashboard')}
              </Link>
              <Link 
                href={`/${locale}/lab/bookings`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.bookings')}
              </Link>
              <Link 
                href={`/${locale}/lab/reports`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.reports')}
              </Link>
              <Link 
                href={`/${locale}/lab/communications`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.communications')}
              </Link>
              <Link 
                href={`/${locale}/lab/payments`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.payments')}
              </Link>
              <div className="px-3 py-2">
                <LanguageToggle />
              </div>
              <Link 
                href={`/${locale}/lab/signin`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.signOut')}
              </Link>
            </MobileMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </main>

      {/* Footer */}
      <NextIntlClientProvider messages={messages}>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}