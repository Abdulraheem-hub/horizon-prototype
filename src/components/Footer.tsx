'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Horizon</h3>
            <p className="text-gray-300 mb-4">
              A multilingual medical testing platform providing comprehensive diagnostic services.
            </p>
            <p className="text-sm text-gray-400">
              &copy; 2025 Horizon Medical Testing Platform. {t('footer.rights')}
            </p>
          </div>

          {/* Portal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Portals</h4>
            <div className="space-y-2">
              <Link 
                href={`/${locale}/physician/signin`} 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Physician Portal
              </Link>
              <Link 
                href={`/${locale}/lab/signin`} 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Lab Portal
              </Link>
              <Link 
                href={`/${locale}/admin/signin`} 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Admin Portal
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                href={`/${locale}/about`} 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                {t('navigation.about')}
              </Link>
              <Link 
                href={`/${locale}/contact`} 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                {t('navigation.contact')}
              </Link>
              <Link 
                href={`/${locale}/tests`} 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                {t('navigation.tests')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}