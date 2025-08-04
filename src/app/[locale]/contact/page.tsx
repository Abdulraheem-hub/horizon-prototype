'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ContactPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    router.push(`/${newLocale}/contact`);
  };

  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="mb-8">
        <nav className="flex justify-between items-center">
          <div className="flex gap-6">
            <Link href={`/${locale}`} className="text-blue-600 hover:text-blue-800">
              {t('navigation.home')}
            </Link>
            <Link href={`/${locale}/about`} className="text-blue-600 hover:text-blue-800">
              {t('navigation.about')}
            </Link>
            <Link href={`/${locale}/contact`} className="text-blue-600 hover:text-blue-800 font-bold">
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
        <h1 className="text-4xl font-bold mb-8">{t('navigation.contact')}</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {locale === 'en' ? (
              <>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-4">تواصل معنا</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  نحن نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.
                </p>
              </>
            )}
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">{locale === 'en' ? 'Email' : 'البريد الإلكتروني'}</h3>
                <p className="text-gray-600 dark:text-gray-400">contact@horizon-prototype.com</p>
              </div>
              <div>
                <h3 className="font-semibold">{locale === 'en' ? 'Phone' : 'الهاتف'}</h3>
                <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold">{locale === 'en' ? 'Address' : 'العنوان'}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {locale === 'en' 
                    ? '123 Tech Street, Digital City, DC 12345' 
                    : '123 شارع التكنولوجيا، المدينة الرقمية، DC 12345'
                  }
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {locale === 'en' ? 'Name' : 'الاسم'}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  placeholder={locale === 'en' ? 'Your name' : 'اسمك'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {locale === 'en' ? 'Email' : 'البريد الإلكتروني'}
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  placeholder={locale === 'en' ? 'your@email.com' : 'email@example.com'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {locale === 'en' ? 'Message' : 'الرسالة'}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  placeholder={locale === 'en' ? 'Your message...' : 'رسالتك...'}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                {locale === 'en' ? 'Send Message' : 'إرسال الرسالة'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
