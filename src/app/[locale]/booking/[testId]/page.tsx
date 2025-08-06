'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Footer } from '@/components/Footer';

export default function BookingPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const params = useParams();
  const testId = params.testId as string;

  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    location: '',
    date: '',
    time: '',
    patientInfo: {
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      emergencyContact: ''
    },
    specialInstructions: ''
  });

  // Mock test data
  const testDetails = {
    'blood-test': {
      name: t('tests.bloodTest'),
      price: 45,
      duration: '15 minutes',
      preparation: 'Fasting for 8-12 hours recommended',
      icon: '🩸'
    },
    'xray': {
      name: t('tests.xray'),
      price: 80,
      duration: '10 minutes',
      preparation: 'Remove all metal objects',
      icon: '🦴'
    },
    'ecg': {
      name: t('tests.ecg'),
      price: 60,
      duration: '20 minutes',
      preparation: 'Avoid caffeine 2 hours before test',
      icon: '💓'
    }
  };

  const test = testDetails[testId as keyof typeof testDetails] || testDetails['blood-test'];

  const locations = [
    { id: 'downtown', name: 'Downtown Clinic', address: '123 Main St, Downtown' },
    { id: 'north', name: 'North Branch', address: '456 North Ave, North District' },
    { id: 'south', name: 'South Medical Center', address: '789 South Blvd, South Area' }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Proceed to payment
      router.push(`/${locale}/payment/${testId}`);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return bookingData.location && bookingData.date && bookingData.time;
      case 2:
        return bookingData.patientInfo.fullName && 
               bookingData.patientInfo.email && 
               bookingData.patientInfo.phone &&
               bookingData.patientInfo.dateOfBirth;
      case 3:
        return true; // Review step
      default:
        return false;
    }
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
                {t('common.back')} to Tests
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">{test.icon}</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t('booking.title')} - {test.name}
          </h1>
          <p className="text-gray-600">${test.price} • {test.duration}</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  step < currentStep
                    ? 'bg-emerald-500 text-white shadow-md border-2 border-emerald-500' // Completed steps - emerald green
                    : step === currentStep 
                    ? 'bg-indigo-600 text-white shadow-lg border-2 border-indigo-600 ring-2 ring-indigo-300/50' // Current step - indigo blue
                    : 'bg-gray-100 border-2 border-gray-300 text-gray-700 shadow-sm hover:bg-gray-50 transition-colors' // Future steps
                }`}>
                  {step < currentStep ? '✓' : step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-1 ${
                    step < currentStep ? 'bg-emerald-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="card">
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">{t('booking.selectLocation')}</h2>
              
              {/* Location Selection */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-medium">{t('booking.selectLocation')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        bookingData.location === location.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setBookingData({...bookingData, location: location.id})}
                    >
                      <h4 className="font-medium">{location.name}</h4>
                      <p className="text-sm text-gray-600">{location.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-medium">{t('booking.selectDate')}</h3>
                <input
                  type="date"
                  className="input w-full md:w-auto"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Time Selection */}
              {bookingData.date && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">{t('booking.selectTime')}</h3>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        className={`p-2 text-sm border rounded transition-colors ${
                          bookingData.time === time
                            ? 'border-purple-500 bg-purple-100 text-purple-700 shadow-sm'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setBookingData({...bookingData, time})}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">{t('booking.patientInfo')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.fullName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    value={bookingData.patientInfo.fullName}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      patientInfo: {...bookingData.patientInfo, fullName: e.target.value}
                    })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="input w-full"
                    value={bookingData.patientInfo.email}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      patientInfo: {...bookingData.patientInfo, email: e.target.value}
                    })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('auth.phone')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="input w-full"
                    value={bookingData.patientInfo.phone}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      patientInfo: {...bookingData.patientInfo, phone: e.target.value}
                    })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="input w-full"
                    value={bookingData.patientInfo.dateOfBirth}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      patientInfo: {...bookingData.patientInfo, dateOfBirth: e.target.value}
                    })}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('booking.emergencyContact')}
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Emergency contact name and phone"
                    value={bookingData.patientInfo.emergencyContact}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      patientInfo: {...bookingData.patientInfo, emergencyContact: e.target.value}
                    })}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('booking.specialInstructions')}
                  </label>
                  <textarea
                    rows={3}
                    className="input w-full"
                    placeholder="Any special instructions or medical conditions"
                    value={bookingData.specialInstructions}
                    onChange={(e) => setBookingData({...bookingData, specialInstructions: e.target.value})}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">{t('booking.confirmBooking')}</h2>
              
              <div className="space-y-6">
                {/* Test Details */}
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Test Details</h3>
                  <p><strong>Test:</strong> {test.name}</p>
                  <p><strong>Price:</strong> ${test.price}</p>
                  <p><strong>Duration:</strong> {test.duration}</p>
                  <p><strong>Preparation:</strong> {test.preparation}</p>
                </div>

                {/* Appointment Details */}
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Appointment Details</h3>
                  <p><strong>Location:</strong> {locations.find(l => l.id === bookingData.location)?.name}</p>
                  <p><strong>Date:</strong> {new Date(bookingData.date).toLocaleDateString()}</p>
                  <p><strong>Time:</strong> {bookingData.time}</p>
                </div>

                {/* Patient Information */}
                <div>
                  <h3 className="font-medium mb-2">Patient Information</h3>
                  <p><strong>Name:</strong> {bookingData.patientInfo.fullName}</p>
                  <p><strong>Email:</strong> {bookingData.patientInfo.email}</p>
                  <p><strong>Phone:</strong> {bookingData.patientInfo.phone}</p>
                  <p><strong>Date of Birth:</strong> {new Date(bookingData.patientInfo.dateOfBirth).toLocaleDateString()}</p>
                  {bookingData.patientInfo.emergencyContact && (
                    <p><strong>Emergency Contact:</strong> {bookingData.patientInfo.emergencyContact}</p>
                  )}
                  {bookingData.specialInstructions && (
                    <p><strong>Special Instructions:</strong> {bookingData.specialInstructions}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t('common.back')}
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === 3 ? t('booking.proceedToPayment') : t('common.next')}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}