'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function PhysicianReferrals() {
  const t = useTranslations();
  
  const [activeTab, setActiveTab] = useState('new');
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    testType: '',
    urgency: 'routine',
    notes: ''
  });
  const [generatedCode, setGeneratedCode] = useState('');

  // Mock referrals data
  const referrals = [
    { id: 1, patientName: "John Doe", patientId: "P001", testType: "Pulmonary Function Test", status: "pending", date: "2025-01-15", referralCode: "REF001" },
    { id: 2, patientName: "Jane Smith", patientId: "P002", testType: "Sleep Study", status: "scheduled", date: "2025-01-14", referralCode: "REF002" },
    { id: 3, patientName: "Mike Wilson", patientId: "P003", testType: "Chest X-Ray", status: "completed", date: "2025-01-13", referralCode: "REF003" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate referral code
    const code = `REF${Date.now().toString().slice(-6)}`;
    setGeneratedCode(code);
    console.log('New referral:', { ...formData, referralCode: code });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateQRCode = (referralCode: string) => {
    // In a real app, this would generate an actual QR code
    alert(`QR Code generated for referral: ${referralCode}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-purple-100 text-purple-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('physician.referrals.title')}
        </h1>
        <p className="text-gray-600">
          Refer patients and track referral status
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setActiveTab('new')}
              className={`py-2 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'new'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {t('physician.referrals.newReferral')}
            </button>
            <button
              onClick={() => setActiveTab('track')}
              className={`py-2 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'track'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {t('physician.referrals.trackReferrals')}
            </button>
          </nav>
        </div>
      </div>

      {/* New Referral Tab */}
      {activeTab === 'new' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {t('physician.referrals.newReferral')}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('physician.referrals.patientName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Enter patient name"
                  />
                </div>

                <div>
                  <label htmlFor="patientId" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('physician.referrals.patientId')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="patientId"
                    name="patientId"
                    value={formData.patientId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="P001"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="testType" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('physician.referrals.testType')} <span className="text-red-500">*</span>
                </label>
                <select
                  id="testType"
                  name="testType"
                  value={formData.testType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="">Select test type</option>
                  <option value="pulmonary-function-test">Pulmonary Function Test</option>
                  <option value="sleep-study-home">Sleep Study (Home)</option>
                  <option value="sleep-study-lab">Sleep Study (Lab)</option>
                  <option value="chest-xray">Chest X-Ray</option>
                  <option value="ct-scan">CT Scan</option>
                  <option value="blood-test">Blood Test</option>
                </select>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('physician.referrals.urgency')}
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="routine">{t('physician.referrals.routine')}</option>
                  <option value="urgent">{t('physician.referrals.urgent')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('physician.referrals.notes')}
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Additional notes or instructions..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3"
              >
                {t('physician.referrals.submitReferral')}
              </button>
            </form>
          </div>

          {/* Generated Referral Code */}
          {generatedCode && (
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {t('physician.referrals.referralCode')}
              </h2>
              
              <div className="text-center py-8">
                <div className="w-32 h-32 bg-gray-200 mx-auto mb-4 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">QR Code</span>
                </div>
                <p className="text-2xl font-bold text-primary mb-4">{generatedCode}</p>
                
                <div className="space-y-3">
                  <button
                    onClick={() => generateQRCode(generatedCode)}
                    className="w-full btn-secondary py-2"
                  >
                    {t('physician.referrals.generateQR')}
                  </button>
                  
                  <button
                    onClick={() => navigator.clipboard.writeText(generatedCode)}
                    className="w-full btn-secondary py-2"
                  >
                    Copy Code
                  </button>
                  
                  <button
                    onClick={() => setGeneratedCode('')}
                    className="w-full btn-secondary py-2"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Track Referrals Tab */}
      {activeTab === 'track' && (
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {t('physician.referrals.trackReferrals')}
            </h2>
            <div className="flex gap-2">
              <input
                type="search"
                placeholder="Search referrals..."
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Test Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('physician.referrals.status')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {referrals.map((referral) => (
                  <tr key={referral.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{referral.patientName}</div>
                        <div className="text-sm text-gray-500">{referral.patientId}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{referral.testType}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(referral.status)}`}>
                        {referral.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{referral.date}</td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-900">{referral.referralCode}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <button
                          onClick={() => generateQRCode(referral.referralCode)}
                          className="text-primary hover:text-primary/80"
                          title="Generate QR Code"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                          </svg>
                        </button>
                        <button
                          className="text-gray-400 hover:text-gray-600"
                          title="View Details"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}