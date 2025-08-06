import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Link from "next/link";
import type { Metadata } from "next";
import { MobileMenu } from '@/components/MobileMenu';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Admin Panel - Horizon",
  description: "Horizon Admin Panel for system management",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function AdminLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = await getTranslations('admin');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Admin Navigation Header */}
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
                href={`/${locale}/admin`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.dashboard')}
              </Link>
              <Link 
                href={`/${locale}/admin/bookings`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.bookings')}
              </Link>
              <Link 
                href={`/${locale}/admin/users`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.users')}
              </Link>
              <Link 
                href={`/${locale}/admin/labs`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.labs')}
              </Link>
              <Link 
                href={`/${locale}/admin/analytics`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.analytics')}
              </Link>
              <Link 
                href={`/${locale}/admin/reports`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.reports')}
              </Link>
              <Link 
                href={`/${locale}/admin/signin`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                {t('navigation.signOut')}
              </Link>
            </nav>
            
            <MobileMenu>
              <Link 
                href={`/${locale}/admin`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.dashboard')}
              </Link>
              <Link 
                href={`/${locale}/admin/bookings`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.bookings')}
              </Link>
              <Link 
                href={`/${locale}/admin/users`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.users')}
              </Link>
              <Link 
                href={`/${locale}/admin/labs`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.labs')}
              </Link>
              <Link 
                href={`/${locale}/admin/analytics`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.analytics')}
              </Link>
              <Link 
                href={`/${locale}/admin/reports`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.reports')}
              </Link>
              <Link 
                href={`/${locale}/admin/signin`} 
                className="text-gray-600 hover:text-[#71C9CE] block px-3 py-2 text-base font-medium"
              >
                {t('navigation.signOut')}
              </Link>
            </MobileMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
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