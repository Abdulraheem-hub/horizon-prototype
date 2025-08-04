'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function AdminDashboard() {
  const params = useParams();
  const locale = params.locale as string;

  // Mock data - in real app this would come from API
  const dashboardData = {
    totalBookings: 487,
    activeUsers: 1250,
    totalLabs: 45,
    monthlyRevenue: 125400
  };

  const recentActivity = [
    { id: 1, type: 'booking', message: 'New booking created by John Doe', time: '5 minutes ago' },
    { id: 2, type: 'user', message: 'New user registered: Jane Smith', time: '12 minutes ago' },
    { id: 3, type: 'lab', message: 'Lab "MediLab Central" updated test list', time: '1 hour ago' },
    { id: 4, type: 'payment', message: 'Payment processed: $450.00', time: '2 hours ago' },
  ];

  const analytics = {
    testTypes: [
      { name: 'Blood Tests', count: 145, percentage: 35 },
      { name: 'X-Rays', count: 98, percentage: 24 },
      { name: 'MRI Scans', count: 87, percentage: 21 },
      { name: 'Ultrasounds', count: 82, percentage: 20 },
    ]
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold leading-7 text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Comprehensive overview of your Horizon platform. Manage bookings, users, labs, and view analytics.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Bookings</CardDescription>
            <CardTitle className="text-3xl font-bold text-[#71C9CE]">
              {dashboardData.totalBookings}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">All time bookings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Users</CardDescription>
            <CardTitle className="text-3xl font-bold text-blue-600">
              {dashboardData.activeUsers}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Registered users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Partner Labs</CardDescription>
            <CardTitle className="text-3xl font-bold text-purple-600">
              {dashboardData.totalLabs}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Active laboratory partners</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Monthly Revenue</CardDescription>
            <CardTitle className="text-3xl font-bold text-green-600">
              {formatCurrency(dashboardData.monthlyRevenue)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Current month earnings</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href={`/${locale}/admin/bookings`}>
            <Button className="w-full h-20 bg-[#71C9CE] hover:bg-[#48B0B5] text-white">
              <div className="text-center">
                <div className="text-sm font-medium">Manage Bookings</div>
                <div className="text-xs opacity-90">Override & control bookings</div>
              </div>
            </Button>
          </Link>
          
          <Link href={`/${locale}/admin/users`}>
            <Button className="w-full h-20 bg-blue-500 hover:bg-blue-600 text-white">
              <div className="text-center">
                <div className="text-sm font-medium">User Management</div>
                <div className="text-xs opacity-90">Manage users & permissions</div>
              </div>
            </Button>
          </Link>
          
          <Link href={`/${locale}/admin/labs`}>
            <Button className="w-full h-20 bg-purple-500 hover:bg-purple-600 text-white">
              <div className="text-center">
                <div className="text-sm font-medium">Labs & Tests</div>
                <div className="text-xs opacity-90">Add/remove labs & tests</div>
              </div>
            </Button>
          </Link>
          
          <Link href={`/${locale}/admin/analytics`}>
            <Button className="w-full h-20 bg-orange-500 hover:bg-orange-600 text-white">
              <div className="text-center">
                <div className="text-sm font-medium">Analytics</div>
                <div className="text-xs opacity-90">View detailed insights</div>
              </div>
            </Button>
          </Link>
          
          <Link href={`/${locale}/admin/reports`}>
            <Button className="w-full h-20 bg-green-500 hover:bg-green-600 text-white">
              <div className="text-center">
                <div className="text-sm font-medium">Financial Reports</div>
                <div className="text-xs opacity-90">Download & export data</div>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-200">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${
                        activity.type === 'booking' ? 'bg-[#71C9CE]' :
                        activity.type === 'user' ? 'bg-blue-500' :
                        activity.type === 'lab' ? 'bg-purple-500' :
                        'bg-green-500'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Test Types */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Popular Test Types</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {analytics.testTypes.map((test) => (
                  <div key={test.name}>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{test.name}</span>
                      <span className="font-medium">{test.count} tests</span>
                    </div>
                    <div className="mt-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#71C9CE] h-2 rounded-full"
                        style={{ width: `${test.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}