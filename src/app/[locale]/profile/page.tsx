'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Footer } from '@/components/Footer';

export default function ProfilePage() {
  const t = useTranslations();
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState('appointments');

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-01-15',
    emergencyContact: 'Jane Doe - +1 (555) 987-6543'
  };

  // Mock appointments data
  const upcomingAppointments = [
    {
      id: '1',
      testName: t('tests.bloodTest'),
      date: '2025-01-15',
      time: '10:00 AM',
      location: 'Downtown Clinic',
      status: 'confirmed',
      confirmationNumber: 'HZ-ABC123'
    },
    {
      id: '2',
      testName: t('tests.ecg'),
      date: '2025-01-20',
      time: '2:30 PM',
      location: 'North Branch',
      status: 'pending',
      confirmationNumber: 'HZ-DEF456'
    }
  ];

  const pastAppointments = [
    {
      id: '3',
      testName: t('tests.xray'),
      date: '2024-12-10',
      time: '9:00 AM',
      location: 'Downtown Clinic',
      status: 'completed',
      confirmationNumber: 'HZ-GHI789',
      reportAvailable: true
    },
    {
      id: '4',
      testName: t('tests.bloodTest'),
      date: '2024-11-25',
      time: '11:00 AM',
      location: 'South Medical Center',
      status: 'completed',
      confirmationNumber: 'HZ-JKL012',
      reportAvailable: true
    }
  ];

  // Mock test reports data
  const testReports = [
    {
      id: '1',
      testName: t('tests.xray'),
      date: '2024-12-10',
      reportDate: '2024-12-11',
      status: 'normal',
      downloadUrl: '#'
    },
    {
      id: '2',
      testName: t('tests.bloodTest'),
      date: '2024-11-25',
      reportDate: '2024-11-26',
      status: 'normal',
      downloadUrl: '#'
    }
  ];

  const handleRateService = (appointmentId: string) => {
    // Navigate to rating page
    console.log('Rating service for appointment:', appointmentId);
  };

  const handleDownloadReport = (reportId: string) => {
    // Simulate PDF download
    console.log('Downloading report:', reportId);
    alert('Report download started...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-white/50 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href={`/${locale}`} className="text-2xl font-bold text-gray-900">
              Horizon
            </Link>
            <div className="flex items-center space-x-4">
              <Link href={`/${locale}/tests`} className="btn-secondary">
                {t('navigation.tests')}
              </Link>
              <button className="btn-secondary">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="card">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl">👤</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>

              <nav className="space-y-2">
                <button
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'appointments' 
                      ? 'bg-primary text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('appointments')}
                >
                  {t('profile.appointments')}
                </button>
                <button
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'reports' 
                      ? 'bg-primary text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('reports')}
                >
                  {t('profile.testReports')}
                </button>
                <button
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'personal' 
                      ? 'bg-primary text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('personal')}
                >
                  {t('profile.personalInfo')}
                </button>
                <button
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'settings' 
                      ? 'bg-primary text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('settings')}
                >
                  {t('profile.settings')}
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">{t('profile.appointments')}</h1>

                {/* Upcoming Appointments */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">{t('profile.upcomingAppointments')}</h2>
                  {upcomingAppointments.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="card">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-lg">{appointment.testName}</h3>
                              <p className="text-gray-600">{appointment.date} at {appointment.time}</p>
                              <p className="text-gray-600">{appointment.location}</p>
                              <p className="text-sm text-gray-500">Confirmation: {appointment.confirmationNumber}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              appointment.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="card text-center py-8">
                      <p className="text-gray-600">No upcoming appointments</p>
                      <Link href={`/${locale}/tests`} className="btn-primary mt-4 inline-block">
                        Book a Test
                      </Link>
                    </div>
                  )}
                </div>

                {/* Past Appointments */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">{t('profile.pastAppointments')}</h2>
                  <div className="space-y-4">
                    {pastAppointments.map((appointment) => (
                      <div key={appointment.id} className="card">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">{appointment.testName}</h3>
                            <p className="text-gray-600">{appointment.date} at {appointment.time}</p>
                            <p className="text-gray-600">{appointment.location}</p>
                            <p className="text-sm text-gray-500">Confirmation: {appointment.confirmationNumber}</p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                              {appointment.status}
                            </span>
                            {appointment.reportAvailable && (
                              <button 
                                className="btn-secondary text-sm"
                                onClick={() => handleDownloadReport(appointment.id)}
                              >
                                {t('profile.viewReport')}
                              </button>
                            )}
                            <button 
                              className="btn-secondary text-sm"
                              onClick={() => handleRateService(appointment.id)}
                            >
                              Rate Service
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Test Reports Tab */}
            {activeTab === 'reports' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">{t('profile.testReports')}</h1>
                
                {testReports.length > 0 ? (
                  <div className="space-y-4">
                    {testReports.map((report) => (
                      <div key={report.id} className="card">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-lg">{report.testName}</h3>
                            <p className="text-gray-600">Test Date: {report.date}</p>
                            <p className="text-gray-600">Report Date: {report.reportDate}</p>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              report.status === 'normal' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {report.status}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <button 
                              className="btn-secondary"
                              onClick={() => handleDownloadReport(report.id)}
                            >
                              {t('profile.viewReport')}
                            </button>
                            <button 
                              className="btn-primary"
                              onClick={() => handleDownloadReport(report.id)}
                            >
                              {t('profile.downloadReport')}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="card text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-400 text-2xl">📄</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('profile.noReports')}</h3>
                    <p className="text-gray-600 mb-4">Your test reports will appear here once available</p>
                    <Link href={`/${locale}/tests`} className="btn-primary">
                      Book a Test
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Personal Info Tab */}
            {activeTab === 'personal' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">{t('profile.personalInfo')}</h1>
                
                <div className="card">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <p className="text-gray-900">{user.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <p className="text-gray-900">{user.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <p className="text-gray-900">{user.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                      <p className="text-gray-900">{new Date(user.dateOfBirth).toLocaleDateString()}</p>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact</label>
                      <p className="text-gray-900">{user.emergencyContact}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="btn-primary">
                      {t('common.edit')} Information
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">{t('profile.settings')}</h1>
                
                <div className="card">
                  <h3 className="text-lg font-semibold mb-4">Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-gray-600">Receive email updates about your appointments</p>
                      </div>
                      <input type="checkbox" className="toggle" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">SMS Notifications</h4>
                        <p className="text-sm text-gray-600">Receive SMS reminders</p>
                      </div>
                      <input type="checkbox" className="toggle" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Report Notifications</h4>
                        <p className="text-sm text-gray-600">Get notified when reports are ready</p>
                      </div>
                      <input type="checkbox" className="toggle" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-4">Language</h3>
                  <select className="input w-full">
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                  </select>
                </div>

                <div className="card border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">Danger Zone</h3>
                  <div className="space-y-4">
                    <button className="btn-secondary border-red-300 text-red-700 hover:bg-red-50">
                      Change Password
                    </button>
                    <button className="btn-secondary border-red-300 text-red-700 hover:bg-red-50">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}