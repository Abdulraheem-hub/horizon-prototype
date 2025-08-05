'use client';

import { useTranslations, useLocale } from 'next-intl';
import { UserLayout } from '@/components/UserLayout';

export default function ContactPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">{t('navigation.contact')}</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {locale === 'en' ? (
              <>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-gray-800 mb-6">
                  We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-4">تواصل معنا</h2>
                <p className="text-gray-800 mb-6">
                  نحن نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.
                </p>
              </>
            )}
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">{locale === 'en' ? 'Email' : 'البريد الإلكتروني'}</h3>
                <p className="text-gray-700">contact@horizon-prototype.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{locale === 'en' ? 'Phone' : 'الهاتف'}</h3>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{locale === 'en' ? 'Address' : 'العنوان'}</h3>
                <p className="text-gray-700">
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
                  className="input w-full"
                  placeholder={locale === 'en' ? 'Your name' : 'اسمك'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {locale === 'en' ? 'Email' : 'البريد الإلكتروني'}
                </label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder={locale === 'en' ? 'your@email.com' : 'email@example.com'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {locale === 'en' ? 'Message' : 'الرسالة'}
                </label>
                <textarea
                  rows={4}
                  className="input w-full resize-none"
                  placeholder={locale === 'en' ? 'Your message...' : 'رسالتك...'}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                {locale === 'en' ? 'Send Message' : 'إرسال الرسالة'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
