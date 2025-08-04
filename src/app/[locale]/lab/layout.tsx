import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Link from "next/link";
import type { Metadata } from "next";

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Lab Navigation Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Horizon Lab Portal
              </h1>
            </div>
            <nav className="flex space-x-8">
              <Link 
                href={`/${locale}/lab`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link 
                href={`/${locale}/lab/bookings`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                Bookings
              </Link>
              <Link 
                href={`/${locale}/lab/reports`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                Reports
              </Link>
              <Link 
                href={`/${locale}/lab/communications`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                Communications
              </Link>
              <Link 
                href={`/${locale}/lab/payments`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                Payments
              </Link>
              <Link 
                href={`/${locale}/lab/signin`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                Sign Out
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </main>
    </div>
  );
}