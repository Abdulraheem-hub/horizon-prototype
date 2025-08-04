'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function PhysicianDashboard() {
  const t = useTranslations();
  const locale = useLocale();

  // Mock data for demonstration
  const dashboardData = {
    physician: {
      name: "Dr. Sarah Johnson",
      specialization: "Pulmonology",
      hospital: "General Hospital"
    },
    metrics: {
      totalReferrals: 142,
      avgTurnaround: "2.3 days",
      pendingResults: 8,
      thisMonthReferrals: 23
    },
    recentActivity: [
      { id: 1, patient: "John Doe", test: "Pulmonary Function Test", status: "completed", date: "2025-01-15" },
      { id: 2, patient: "Jane Smith", test: "Sleep Study", status: "in-progress", date: "2025-01-14" },
      { id: 3, patient: "Mike Wilson", test: "Chest X-Ray", status: "pending", date: "2025-01-13" }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('physician.dashboard.welcome')} {dashboardData.physician.name}
        </h1>
        <p className="text-gray-600">
          {dashboardData.physician.specialization} • {dashboardData.physician.hospital}
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card text-center">
          <div className="text-3xl font-bold text-primary mb-2">
            {dashboardData.metrics.totalReferrals}
          </div>
          <p className="text-gray-600 text-sm">{t('physician.dashboard.totalReferrals')}</p>
        </div>

        <div className="card text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {dashboardData.metrics.avgTurnaround}
          </div>
          <p className="text-gray-600 text-sm">{t('physician.dashboard.avgTurnaround')}</p>
        </div>

        <div className="card text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">
            {dashboardData.metrics.pendingResults}
          </div>
          <p className="text-gray-600 text-sm">{t('physician.dashboard.pendingResults')}</p>
        </div>

        <div className="card text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {dashboardData.metrics.thisMonthReferrals}
          </div>
          <p className="text-gray-600 text-sm">{t('physician.dashboard.thisMonth')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {t('physician.dashboard.quickActions')}
            </h2>
            <div className="space-y-4">
              <Link
                href={`/${locale}/physician/referrals`}
                className="w-full btn-primary text-center py-3 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {t('physician.dashboard.newReferral')}
              </Link>
              
              <Link
                href={`/${locale}/physician/reports`}
                className="w-full btn-secondary text-center py-3 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('physician.dashboard.viewReports')}
              </Link>
              
              <Link
                href={`/${locale}/physician/support`}
                className="w-full btn-secondary text-center py-3 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {t('physician.dashboard.messageSupport')}
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('physician.dashboard.recentActivity')}
              </h2>
              <Link
                href={`/${locale}/physician/referrals`}
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                View All →
              </Link>
            </div>
            
            <div className="space-y-4">
              {dashboardData.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-medium text-gray-900">{activity.patient}</h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(activity.status)}`}
                      >
                        {activity.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{activity.test}</p>
                    <p className="text-xs text-gray-400">{activity.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}