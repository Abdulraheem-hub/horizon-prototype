'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { LanguageToggle } from '@/components/LanguageToggle';
import { MobileMenu } from '@/components/MobileMenu';

interface UserLayoutProps {
  children: React.ReactNode;
}

/**
 * UserLayout Component
 * 
 * Main layout wrapper that provides:
 * - Responsive navigation (desktop horizontal, mobile hamburger menu)
 * - Language switching functionality
 * - Authentication state management (mocked for now)
 * - Proper RTL support for Arabic
 */
export function UserLayout({ children }: UserLayoutProps) {
  const t = useTranslations();
  const locale = useLocale();
  
  // Mock authentication state - replace with real auth context later
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Toggle authentication state for demo purposes
   * In a real app, this would be managed by an auth provider
   */
  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-white/50 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href={`/${locale}`}>
                  <h1 className="text-2xl font-bold text-gray-900">Horizon</h1>
                </Link>
              </div>
              
              {/* Desktop Navigation - hidden on mobile */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 rtl:space-x-reverse">
                  <Link href={`/${locale}`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                    {t('navigation.home')}
                  </Link>
                  <Link href={`/${locale}/tests`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                    {t('navigation.tests')}
                  </Link>
                  <Link href={`/${locale}/about`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                    {t('navigation.about')}
                  </Link>
                  <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                    {t('navigation.contact')}
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Desktop Actions - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
              <LanguageToggle />
              {!isAuthenticated ? (
                <>
                  <button onClick={handleSignIn} className="btn-secondary">
                    {t('navigation.signIn')}
                  </button>
                  <Link href={`/${locale}/auth/signup`} className="btn-primary">
                    {t('navigation.signUp')}
                  </Link>
                </>
              ) : (
                <button onClick={handleSignOut} className="btn-secondary">
                  {t('navigation.signOut')}
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <MobileMenu>
              {/* Mobile Navigation Items with 16px vertical spacing */}
              <div className="space-y-4">
                
                {/* Navigation Links */}
                <Link 
                  href={`/${locale}`} 
                  className="block text-gray-700 hover:text-[#71C9CE] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  {t('navigation.home')}
                </Link>
                
                <Link 
                  href={`/${locale}/tests`} 
                  className="block text-gray-700 hover:text-[#71C9CE] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  {t('navigation.tests')}
                </Link>
                
                <Link 
                  href={`/${locale}/about`} 
                  className="block text-gray-700 hover:text-[#71C9CE] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  {t('navigation.about')}
                </Link>
                
                <Link 
                  href={`/${locale}/contact`} 
                  className="block text-gray-700 hover:text-[#71C9CE] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  {t('navigation.contact')}
                </Link>

                {/* Language Switch Dropdown */}
                <div className="px-3 py-2">
                  <div className="text-sm text-gray-500 mb-2">Language</div>
                  <LanguageToggle />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Authentication Actions - conditionally rendered */}
                {!isAuthenticated ? (
                  <div className="space-y-4">
                    <button 
                      onClick={handleSignIn}
                      className="block w-full text-left text-gray-700 hover:text-[#71C9CE] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    >
                      {t('navigation.signIn')}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <button 
                      onClick={handleSignOut}
                      className="block w-full text-left text-gray-700 hover:text-[#71C9CE] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    >
                      {t('navigation.signOut')}
                    </button>
                  </div>
                )}
              </div>
            </MobileMenu>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}