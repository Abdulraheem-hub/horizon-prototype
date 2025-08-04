import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Link from "next/link";
import type { Metadata } from "next";

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Navigation Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Horizon Admin Panel
              </h1>
            </div>
            <nav className="flex space-x-8">
              <Link 
                href={`/${locale}/admin`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link 
                href={`/${locale}/admin/bookings`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                Bookings
              </Link>
              <Link 
                href={`/${locale}/admin/users`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                Users
              </Link>
              <Link 
                href={`/${locale}/admin/labs`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                Labs & Tests
              </Link>
              <Link 
                href={`/${locale}/admin/analytics`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                Analytics
              </Link>
              <Link 
                href={`/${locale}/admin/reports`} 
                className="text-gray-600 hover:text-[#71C9CE] px-3 py-2 text-sm font-medium"
              >
                Reports
              </Link>
              <Link 
                href={`/${locale}/admin/signin`} 
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