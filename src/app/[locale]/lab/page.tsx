'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LabDashboard() {
  const params = useParams();
  const locale = params.locale as string;

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
    <div className="px-4 py-6 sm:px-0">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold leading-7 text-gray-900">Lab Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Welcome to your lab portal. Manage bookings, upload reports, and communicate with the Horizon team.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Today&apos;s Bookings</CardDescription>
            <CardTitle className="text-3xl font-bold text-[#71C9CE]">
              {dashboardData.todayBookings}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Active appointments for today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Pending Reports</CardDescription>
            <CardTitle className="text-3xl font-bold text-orange-600">
              {dashboardData.pendingReports}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Reports awaiting upload</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Completed Tests</CardDescription>
            <CardTitle className="text-3xl font-bold text-green-600">
              {dashboardData.completedTests}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Messages</CardDescription>
            <CardTitle className="text-3xl font-bold text-blue-600">
              {dashboardData.pendingCommunications}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Pending communications</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href={`/${locale}/lab/bookings`}>
            <Button className="w-full h-20 bg-[#71C9CE] hover:bg-[#48B0B5] text-white">
              <div className="text-center">
                <div className="text-sm font-medium">View Bookings</div>
                <div className="text-xs opacity-90">Manage appointments</div>
              </div>
            </Button>
          </Link>
          
          <Link href={`/${locale}/lab/reports`}>
            <Button className="w-full h-20 bg-orange-500 hover:bg-orange-600 text-white">
              <div className="text-center">
                <div className="text-sm font-medium">Upload Reports</div>
                <div className="text-xs opacity-90">Submit test results</div>
              </div>
            </Button>
          </Link>
          
          <Link href={`/${locale}/lab/communications`}>
            <Button className="w-full h-20 bg-blue-500 hover:bg-blue-600 text-white">
              <div className="text-center">
                <div className="text-sm font-medium">Messages</div>
                <div className="text-xs opacity-90">Communicate with admin</div>
              </div>
            </Button>
          </Link>
          
          <Link href={`/${locale}/lab/payments`}>
            <Button className="w-full h-20 bg-green-500 hover:bg-green-600 text-white">
              <div className="text-center">
                <div className="text-sm font-medium">Payment Reports</div>
                <div className="text-xs opacity-90">Financial reconciliation</div>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Bookings</h2>
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Test Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {booking.patientName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.testType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          booking.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : booking.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {booking.status}
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