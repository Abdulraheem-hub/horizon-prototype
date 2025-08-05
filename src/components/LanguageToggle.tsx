'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "relative inline-flex items-center h-10 w-20 rounded-full border-2 border-gray-200 bg-white transition-all duration-300 ease-in-out hover:border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
        "dark:bg-gray-800 dark:border-gray-600 dark:hover:border-gray-500",
        className
      )}
      role="switch"
      aria-checked={locale === 'ar'}
      aria-label={`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`}
    >
      {/* Background track */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600" />
      
      {/* Language labels */}
      <div className="relative flex w-full items-center justify-between px-1 text-xs font-semibold">
        <span
          className={cn(
            "flex-1 text-center transition-colors duration-300 z-10",
            locale === 'en' 
              ? "text-white" 
              : "text-gray-600 dark:text-gray-300"
          )}
        >
          EN
        </span>
        <span
          className={cn(
            "flex-1 text-center transition-colors duration-300 z-10",
            locale === 'ar' 
              ? "text-white" 
              : "text-gray-600 dark:text-gray-300"
          )}
        >
          AR
        </span>
      </div>
      
      {/* Sliding indicator */}
      <div
        className={cn(
          "absolute top-1 h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg transition-all duration-300 ease-in-out",
          "hover:shadow-xl",
          locale === 'en' 
            ? "left-1 translate-x-0" 
            : "left-1 translate-x-10"
        )}
      />
    </button>
  );
}