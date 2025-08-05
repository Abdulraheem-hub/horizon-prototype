'use client';

import { useTranslations, useLocale } from 'next-intl';
import { UserLayout } from '@/components/UserLayout';

export default function AboutPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">{t('navigation.about')}</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
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
      </div>
    </UserLayout>
  );
}
