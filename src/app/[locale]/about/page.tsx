'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AboutPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    router.push(`/${newLocale}/about`);
  };

  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="mb-8">
        <nav className="flex justify-between items-center">
          <div className="flex gap-6">
            <Link href={`/${locale}`} className="text-blue-600 hover:text-blue-800">
              {t('navigation.home')}
            </Link>
            <Link href={`/${locale}/about`} className="text-blue-600 hover:text-blue-800 font-bold">
              {t('navigation.about')}
            </Link>
            <Link href={`/${locale}/contact`} className="text-blue-600 hover:text-blue-800">
              {t('navigation.contact')}
            </Link>
          </div>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {t('content.switchLanguage')} ({locale === 'en' ? 'العربية' : 'English'})
          </button>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t('navigation.about')}</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          {locale === 'en' ? (
            <>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                This is a demonstration of a multilingual Next.js application using next-intl.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our application supports both English and Arabic languages with proper RTL (Right-to-Left) 
                support for Arabic text. The internationalization is handled using next-intl, which provides 
                a comprehensive solution for managing translations and locale-specific content.
              </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Dynamic language switching</li>
                <li>RTL support for Arabic</li>
                <li>Locale-based routing</li>
                <li>Translated navigation and content</li>
                <li>Responsive design with Tailwind CSS</li>
              </ul>
            </>
          ) : (
            <>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                هذا عرض توضيحي لتطبيق Next.js متعدد اللغات باستخدام next-intl.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                يدعم تطبيقنا كلاً من اللغتين الإنجليزية والعربية مع دعم صحيح للكتابة من اليمين إلى اليسار (RTL) 
                للنص العربي. يتم التعامل مع التدويل باستخدام next-intl، والذي يوفر حلاً شاملاً لإدارة الترجمات 
                والمحتوى الخاص بكل لغة.
              </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">المميزات</h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>تبديل اللغة الديناميكي</li>
                <li>دعم الكتابة من اليمين إلى اليسار للعربية</li>
                <li>توجيه مسارات أساس اللغة</li>
                <li>ترجمة التنقل والمحتوى</li>
                <li>تصميم متجاوب باستخدام Tailwind CSS</li>
              </ul>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
