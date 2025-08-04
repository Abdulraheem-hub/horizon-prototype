'use client';

import { useLocale } from 'next-intl';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PhysicianPortal() {
  const locale = useLocale();
  const router = useRouter();

  useEffect(() => {
    // Redirect to physician signin by default
    router.push(`/${locale}/physician/signin`);
  }, [locale, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting to Physician Portal...</p>
      </div>
    </div>
  );
}