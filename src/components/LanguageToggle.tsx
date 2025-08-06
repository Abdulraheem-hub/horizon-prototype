'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface LanguageToggleProps {
  className?: string;
}

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'es', name: 'ES' },
  { code: 'fr', name: 'FR' },
];

export function LanguageToggle({ className }: LanguageToggleProps) {
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <div className={cn("relative language-toggle-container", className)} dir="ltr">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#71C9CE] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#71C9CE] focus:ring-opacity-50 rounded-md"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span>{currentLanguage.name}</span>
        <svg 
          className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Overlay to close dropdown when clicking outside */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-20 min-w-[80px]">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={cn(
                  "block w-full text-left px-3 py-2 text-sm transition-colors duration-200",
                  "hover:bg-gray-50 focus:bg-gray-50 focus:outline-none",
                  language.code === locale 
                    ? "text-[#71C9CE] bg-gray-50 font-medium" 
                    : "text-gray-700"
                )}
              >
                {language.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}