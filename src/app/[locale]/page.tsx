'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    router.push(`/${newLocale}`);
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1 w-full">
        <nav className="flex justify-between items-center">
          <div className="flex gap-6">
            <a href={`/${locale}`} className="text-blue-600 hover:text-blue-800">
              {t('navigation.home')}
            </a>
            <a href={`/${locale}/about`} className="text-blue-600 hover:text-blue-800">
              {t('navigation.about')}
            </a>
            <a href={`/${locale}/contact`} className="text-blue-600 hover:text-blue-800">
              {t('navigation.contact')}
            </a>
          </div>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {t('content.switchLanguage')} ({locale === 'en' ? 'العربية' : 'English'})
          </button>
        </nav>
      </header>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t('description')}
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{t('content.welcome')}</h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t('content.subtitle')}
          </p>
        </div>

        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/[locale]/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500">
        <p>&copy; 2025 Horizon Prototype. {t('footer.rights')}</p>
      </footer>
    </div>
  );
}
