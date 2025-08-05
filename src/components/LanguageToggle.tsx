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
    <div className={cn("flex items-center gap-3 language-toggle-container", className)} dir="ltr">
      {/* EN Label */}
      <span
        className={cn(
          "text-sm font-medium transition-colors duration-200",
          locale === 'en' ? "text-[#71C9CE]" : "text-gray-500"
        )}
      >
        EN
      </span>
      
      {/* Custom Switch */}
      <label className="switch">
        <input
          type="checkbox"
          checked={locale === 'ar'}
          onChange={toggleLanguage}
          aria-label={`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`}
        />
        <span className="slider"></span>
      </label>
      
      {/* AR Label */}
      <span
        className={cn(
          "text-sm font-medium transition-colors duration-200",
          locale === 'ar' ? "text-[#71C9CE]" : "text-gray-500"
        )}
      >
        AR
      </span>
    </div>
  );
}