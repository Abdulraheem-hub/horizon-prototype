'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { UserLayout } from '@/components/UserLayout';

export default function TestsPage() {
  const t = useTranslations();
  const locale = useLocale();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Mock data for tests
  const tests = [
    {
      id: 'pulmonary-function-test',
      name: 'Full Pulmonary Function Test (PFT)',
      category: 'Pulmonary',
      price: 180,
      duration: '60 minutes',
      description: 'Comprehensive lung function assessment including spirometry, lung volumes, and gas exchange measurements',
      preparation: 'Avoid bronchodilators 4-6 hours before test, wear comfortable clothing, avoid heavy meals 2 hours prior',
      locations: ['Downtown Clinic', 'North Branch'],
      icon: '🫁',
      featured: true
    },
    {
      id: 'sleep-study-home',
      name: 'Sleep Disorder Test (Home)',
      category: 'Sleep Medicine',
      price: 350,
      duration: '8-10 hours (overnight)',
      description: 'Home sleep apnea test using portable monitoring equipment to diagnose sleep-related breathing disorders',
      preparation: 'Follow normal sleep routine, avoid alcohol and caffeine, maintain sleep diary for 3 days prior',
      locations: ['Equipment pickup available at all locations'],
      icon: '🛌',
      featured: true
    },
    {
      id: 'sleep-study-lab',
      name: 'Sleep Disorder Test (In-Lab)',
      category: 'Sleep Medicine',
      price: 850,
      duration: '10-12 hours (overnight)',
      description: 'Comprehensive polysomnography in controlled lab environment for detailed sleep disorder diagnosis',
      preparation: 'Bring comfortable sleepwear, avoid naps on test day, follow pre-test instructions packet',
      locations: ['Downtown Clinic Sleep Center'],
      icon: '🏥',
      featured: true
    }
    
  ];

  const locations = ['All Locations', 'Downtown Clinic', 'North Branch', 'South Medical Center'];
  const categories = ['All Categories', 'Laboratory', 'Radiology', 'Cardiology', 'Pulmonary', 'Sleep Medicine'];

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
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      </div>
    </UserLayout>
  );
}