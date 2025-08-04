'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

export default function TestsPage() {
  const t = useTranslations();
  const locale = useLocale();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Mock data for tests
  const tests = [
    {
      id: 'blood-test',
      name: t('tests.bloodTest'),
      category: 'Laboratory',
      price: 45,
      duration: '15 minutes',
      description: 'Complete blood count and comprehensive metabolic panel',
      preparation: 'Fasting for 8-12 hours recommended',
      locations: ['Downtown Clinic', 'North Branch', 'South Medical Center'],
      icon: '🩸'
    },
    {
      id: 'xray',
      name: t('tests.xray'),
      category: 'Radiology',
      price: 80,
      duration: '10 minutes',
      description: 'Digital X-ray imaging for bones and chest',
      preparation: 'Remove all metal objects',
      locations: ['Downtown Clinic', 'North Branch'],
      icon: '🦴'
    },
    {
      id: 'mri',
      name: t('tests.mri'),
      category: 'Radiology',
      price: 350,
      duration: '45 minutes',
      description: 'Magnetic resonance imaging for detailed body scans',
      preparation: 'Remove all metal objects, inform staff of implants',
      locations: ['Downtown Clinic'],
      icon: '🧠'
    },
    {
      id: 'ultrasound',
      name: t('tests.ultrasound'),
      category: 'Radiology',
      price: 120,
      duration: '30 minutes',
      description: 'Ultrasound imaging for abdominal and pelvic regions',
      preparation: 'Full bladder required for some scans',
      locations: ['Downtown Clinic', 'North Branch', 'South Medical Center'],
      icon: '🔍'
    },
    {
      id: 'ecg',
      name: t('tests.ecg'),
      category: 'Cardiology',
      price: 60,
      duration: '20 minutes',
      description: 'Electrocardiogram to monitor heart activity',
      preparation: 'Avoid caffeine 2 hours before test',
      locations: ['Downtown Clinic', 'North Branch'],
      icon: '💓'
    },
    {
      id: 'ct-scan',
      name: 'CT Scan',
      category: 'Radiology',
      price: 250,
      duration: '30 minutes',
      description: 'Computed tomography for detailed cross-sectional images',
      preparation: 'May require contrast agent, fasting if indicated',
      locations: ['Downtown Clinic'],
      icon: '🔬'
    }
  ];

  const locations = ['All Locations', 'Downtown Clinic', 'North Branch', 'South Medical Center'];
  const categories = ['All Categories', 'Laboratory', 'Radiology', 'Cardiology'];

  const filteredTests = tests.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || selectedLocation === 'All Locations' || 
                           test.locations.includes(selectedLocation);
    const matchesCategory = !selectedCategory || selectedCategory === 'All Categories' || 
                           test.category === selectedCategory;
    
    return matchesSearch && matchesLocation && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-white/50 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href={`/${locale}`} className="text-2xl font-bold text-gray-900">
                Horizon
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href={`/${locale}`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {t('navigation.home')}
                  </Link>
                  <span className="text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {t('navigation.tests')}
                  </span>
                  <Link href={`/${locale}/about`} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {t('navigation.about')}
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href={`/${locale}/profile`} className="btn-secondary">
                {t('navigation.profile')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('tests.title')}
          </h1>
        </div>

        {/* Search and Filters */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                {t('tests.search')}
              </label>
              <input
                id="search"
                type="text"
                className="input w-full"
                placeholder={t('tests.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                {t('tests.filterByLocation')}
              </label>
              <select
                id="location"
                className="input w-full"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                {t('tests.filterByCategory')}
              </label>
              <select
                id="category"
                className="input w-full"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Test Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map(test => (
            <div key={test.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">{test.icon}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{test.name}</h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    {test.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{test.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('tests.price')}:</span>
                  <span className="font-semibold text-primary">${test.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('tests.duration')}:</span>
                  <span className="text-gray-900">{test.duration}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  <strong>{t('tests.preparation')}:</strong> {test.preparation}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Available at:</p>
                <div className="flex flex-wrap gap-1">
                  {test.locations.map(location => (
                    <span key={location} className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              <Link 
                href={`/${locale}/booking/${test.id}`}
                className="btn-primary w-full text-center"
              >
                {t('tests.bookNow')}
              </Link>
            </div>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-400 text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No tests found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </main>
    </div>
  );
}