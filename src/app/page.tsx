import { redirect } from 'next/navigation';

// This page will redirect to the default locale
export default function RootPage() {
  redirect('/en');
}
