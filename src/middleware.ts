import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar', 'es', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Redirect to default locale when visiting root
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en|es|fr)/:path*']
};
