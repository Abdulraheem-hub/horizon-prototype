'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { UserLayout } from '@/components/UserLayout';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
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

  return (
    <UserLayout>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('content.welcome')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('content.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/tests`} className="btn-primary text-center">
              {t('tests.title')}
            </Link>
            <Link href={`/${locale}/auth/signup`} className="btn-secondary text-center">
              {t('navigation.signUp')}
            </Link>
          </div>
        </div>

        {/* Featured Tests */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            MVP Diagnostic Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pulmonary Function Test Card */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🫁</span>
                </div>
                <h3 className="text-xl font-semibold ml-4">Full Pulmonary Function Test</h3>
              </div>
              <p className="text-gray-600 mb-4">Comprehensive lung function assessment including spirometry and gas exchange</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary">&#x20C0; 180</span>
                <Link 
                href={`/${locale}/booking/${tests[0].id}`}
                className="btn-primary text-center"
              >
                {t('tests.bookNow')}
              </Link>
              </div>
            </div>

            {/* Sleep Study Home Card */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xl">🛌</span>
                </div>
                <h3 className="text-xl font-semibold ml-4">Sleep Study (Home)</h3>
              </div>
              <p className="text-gray-600 mb-4">Home sleep apnea test with portable monitoring equipment</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary"><span className="ml-1">{'SAR'.replace('SAR', '\u20C0')}</span> 350</span>
                <Link 
                href={`/${locale}/booking/${tests[1].id}`}
                className="btn-primary text-center"
              >
                {t('tests.bookNow')}
              </Link>
              </div>
            </div>

            {/* Sleep Study In-Lab Card */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold ml-4">Sleep Study (In-Lab)</h3>
              </div>
              <p className="text-gray-600 mb-4">Comprehensive polysomnography in controlled lab environment</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-primary"><span className="ml-1">{'SAR'.replace('SAR', '\u20C0')}</span> 850</span>
                <Link 
                href={`/${locale}/booking/${tests[2].id}`}
                className="btn-primary text-center"
              >
                {t('tests.bookNow')}
              </Link>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works - Timeline */}
        <div className="mt-20">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Follow these simple steps to book your medical test and get your results quickly and efficiently
            </p>
          </div>
          
          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto px-4">
            {/* Timeline Line - Desktop only */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 timeline-line opacity-30"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-8 md:space-y-20">
              {/* Step 1 - Browse Tests */}
              <div className="timeline-step relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 w-full">
                  <div className="text-center md:text-right">
                    <div className="timeline-icon inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-[#71C9CE] to-[#48B0B5] rounded-full shadow-lg mb-4">
                      <svg className="w-6 md:w-8 h-6 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Browse Tests</h3>
                    <p className="text-gray-600 text-sm md:text-base px-4 md:px-0">
                      Explore our comprehensive catalog of medical tests. Filter by category, price, or location to find exactly what you need.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot - Desktop only */}
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#71C9CE] rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                <div className="md:w-1/2 md:pl-12 w-full mt-4 md:mt-0">
                  <div className="timeline-card card bg-gradient-to-br from-[#E3F4F4] to-white border-l-4 border-[#71C9CE] mx-4 md:mx-0">
                    <div className="flex items-center space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#71C9CE] text-white font-bold rounded-full flex items-center justify-center text-sm">1</span>
                      <span className="text-sm font-medium text-gray-700">Start Your Journey</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 - Book Appointment */}
              <div className="timeline-step relative flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 w-full">
                  <div className="text-center md:text-left">
                    <div className="timeline-icon inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-[#48B0B5] to-[#71C9CE] rounded-full shadow-lg mb-4">
                      <svg className="w-6 md:w-8 h-6 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v2a1 1 0 01-1 1h-1v11a1 1 0 01-1 1H6a1 1 0 01-1-1V11H4a1 1 0 01-1-1V8a1 1 0 011-1h4z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Book Appointment</h3>
                    <p className="text-gray-600 text-sm md:text-base px-4 md:px-0">
                      Choose your preferred location and time slot. Our flexible scheduling system makes it easy to find a convenient appointment.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot - Desktop only */}
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#48B0B5] rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                <div className="md:w-1/2 md:pr-12 w-full mt-4 md:mt-0">
                  <div className="timeline-card card bg-gradient-to-br from-blue-50 to-white border-l-4 border-[#48B0B5] mx-4 md:mx-0">
                    <div className="flex items-center space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#48B0B5] text-white font-bold rounded-full flex items-center justify-center text-sm">2</span>
                      <span className="text-sm font-medium text-gray-700">Schedule Your Test</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - Make Payment */}
              <div className="timeline-step relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 w-full">
                  <div className="text-center md:text-right">
                    <div className="timeline-icon inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg mb-4">
                      <svg className="w-6 md:w-8 h-6 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Secure Payment</h3>
                    <p className="text-gray-600 text-sm md:text-base px-4 md:px-0">
                      Complete your booking with our secure payment system. Multiple payment options available for your convenience.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot - Desktop only */}
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                <div className="md:w-1/2 md:pl-12 w-full mt-4 md:mt-0">
                  <div className="timeline-card card bg-gradient-to-br from-green-50 to-white border-l-4 border-green-500 mx-4 md:mx-0">
                    <div className="flex items-center space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white font-bold rounded-full flex items-center justify-center text-sm">3</span>
                      <span className="text-sm font-medium text-gray-700">Complete Payment</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 - Get Results */}
              <div className="timeline-step relative flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 w-full">
                  <div className="text-center md:text-left">
                    <div className="timeline-icon inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-lg mb-4">
                      <svg className="w-6 md:w-8 h-6 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Get Results</h3>
                    <p className="text-gray-600 text-sm md:text-base px-4 md:px-0">
                      Access your test results online through your secure portal. Download reports and share them with your healthcare provider.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot - Desktop only */}
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                <div className="md:w-1/2 md:pr-12 w-full mt-4 md:mt-0">
                  <div className="timeline-card card bg-gradient-to-br from-purple-50 to-white border-l-4 border-purple-500 mx-4 md:mx-0">
                    <div className="flex items-center space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white font-bold rounded-full flex items-center justify-center text-sm">4</span>
                      <span className="text-sm font-medium text-gray-700">Access Your Results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
          </div>
            <div className="text-center mt-12 md:mt-16 px-4">
              <Link href={`/${locale}/tests`} className="btn-primary text-center inline-block w-full sm:w-auto">
                Browse Available Tests
              </Link>
            </div>
        </div>
      </div>
    </UserLayout>
  );
}
