'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function LabDashboard() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('lab');

  // Mock data - in real app this would come from API
  const dashboardData = {
    todayBookings: 12,
    pendingReports: 8,
    completedTests: 45,
    pendingCommunications: 3
  };

  const recentBookings = [
    { id: 1, patientName: 'John Doe', testType: 'Blood Test', time: '09:00 AM', status: 'Confirmed' },
    { id: 2, patientName: 'Jane Smith', testType: 'X-Ray', time: '10:30 AM', status: 'Pending' },
    { id: 3, patientName: 'Mike Johnson', testType: 'MRI', time: '02:00 PM', status: 'In Progress' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-xl sm:text-2xl font-bold leading-7 text-gray-900">{t('dashboard')}</h1>
        <p className="mt-2 text-sm text-gray-600">
          {t('description')}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-xs sm:text-sm">{t('stats.todayBookings')}</CardDescription>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-[#71C9CE]">
              {dashboardData.todayBookings}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">{t('stats.todayBookingsDesc')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-xs sm:text-sm">{t('stats.pendingReports')}</CardDescription>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-orange-600">
              {dashboardData.pendingReports}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">{t('stats.pendingReportsDesc')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-xs sm:text-sm">{t('stats.completedTests')}</CardDescription>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-green-600">
              {dashboardData.completedTests}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">{t('stats.completedTestsDesc')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-xs sm:text-sm">{t('stats.messages')}</CardDescription>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-blue-600">
              {dashboardData.pendingCommunications}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">{t('stats.messagesDesc')}</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">{t('quickActions.title')}</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href={`/${locale}/lab/bookings`}>
            <Button className="w-full h-16 sm:h-20 bg-[#71C9CE] hover:bg-[#48B0B5] text-white">
              <div className="text-center">
                <div className="text-xs sm:text-sm font-medium">{t('quickActions.viewBookings')}</div>
                <div className="text-xs opacity-90">{t('quickActions.viewBookingsDesc')}</div>
              </div>
            </Button>
          </Link>
          
          <Link href={`/${locale}/lab/reports`}>
            <Button className="w-full h-16 sm:h-20 bg-orange-500 hover:bg-orange-600 text-white">
              <div className="text-center">
                <div className="text-xs sm:text-sm font-medium">{t('quickActions.uploadReports')}</div>
                <div className="text-xs opacity-90">{t('quickActions.uploadReportsDesc')}</div>
              </div>
            </Button>
          </Link>
          
          <Link href={`/${locale}/lab/communications`}>
            <Button className="w-full h-16 sm:h-20 bg-blue-500 hover:bg-blue-600 text-white">
              <div className="text-center">
                <div className="text-xs sm:text-sm font-medium">{t('quickActions.messages')}</div>
                <div className="text-xs opacity-90">{t('quickActions.messagesDesc')}</div>
              </div>
            </Button>
          </Link>
          
          <Link href={`/${locale}/lab/payments`}>
            <Button className="w-full h-16 sm:h-20 bg-green-500 hover:bg-green-600 text-white">
              <div className="text-center">
                <div className="text-xs sm:text-sm font-medium">{t('quickActions.paymentReports')}</div>
                <div className="text-xs opacity-90">{t('quickActions.paymentReportsDesc')}</div>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      {/* Recent Bookings */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">{t('recentBookings.title')}</h2>
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('recentBookings.patient')}
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('recentBookings.testType')}
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('recentBookings.time')}
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('recentBookings.status')}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {booking.patientName}
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.testType}
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.time}
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          booking.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : booking.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {booking.status === 'Confirmed' ? t('recentBookings.confirmed') : 
                           booking.status === 'Pending' ? t('recentBookings.pending') : 
                           t('recentBookings.inProgress')}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}