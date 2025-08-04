'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminAnalytics() {
  // Mock analytics data
  const analyticsData = {
    overview: {
      totalBookings: 1247,
      totalRevenue: 287500,
      activeUsers: 1450,
      avgTestTime: 2.3
    },
    testTypes: [
      { name: 'Blood Tests', count: 445, percentage: 36, revenue: 66750 },
      { name: 'X-Rays', count: 287, percentage: 23, revenue: 57400 },
      { name: 'MRI Scans', count: 156, percentage: 12, revenue: 117000 },
      { name: 'Ultrasounds', count: 198, percentage: 16, revenue: 29700 },
      { name: 'ECG', count: 161, percentage: 13, revenue: 16100 }
    ],
    monthlyTrends: [
      { month: 'Aug', bookings: 892, revenue: 203400 },
      { month: 'Sep', bookings: 976, revenue: 225600 },
      { month: 'Oct', bookings: 1045, revenue: 245800 },
      { month: 'Nov', bookings: 1123, revenue: 267200 },
      { month: 'Dec', bookings: 1189, revenue: 278900 },
      { month: 'Jan', bookings: 1247, revenue: 287500 }
    ],
    patientFlow: {
      newPatients: 156,
      returningPatients: 298,
      totalAppointments: 454,
      avgWaitTime: 18 // minutes
    },
    labPerformance: [
      { name: 'MediLab Central', tests: 345, avgTime: 1.8, rating: 4.8 },
      { name: 'HealthTech Labs', tests: 289, avgTime: 2.1, rating: 4.6 },
      { name: 'QuickTest Pro', tests: 267, avgTime: 2.4, rating: 4.5 },
      { name: 'CityLab Express', tests: 234, avgTime: 2.8, rating: 4.3 },
      { name: 'Premium Diagnostics', tests: 112, avgTime: 1.9, rating: 4.9 }
    ],
    revenueBreakdown: {
      testFees: 245000,
      processingFees: 15750,
      labCommissions: -67500,
      netRevenue: 193250
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold leading-7 text-gray-900">Analytics Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Comprehensive analytics and insights for the Horizon platform. Track performance, revenue, and user engagement.
        </p>
      </div>

      {/* Overview Metrics */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Bookings</CardDescription>
            <CardTitle className="text-3xl font-bold text-[#71C9CE]">
              {formatNumber(analyticsData.overview.totalBookings)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-3xl font-bold text-green-600">
              {formatCurrency(analyticsData.overview.totalRevenue)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">+18% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Users</CardDescription>
            <CardTitle className="text-3xl font-bold text-blue-600">
              {formatNumber(analyticsData.overview.activeUsers)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Avg Test Time</CardDescription>
            <CardTitle className="text-3xl font-bold text-purple-600">
              {analyticsData.overview.avgTestTime}h
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">-5% improvement</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Test Types Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Test Types Distribution</CardTitle>
            <CardDescription>Popular test types and their revenue contribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.testTypes.map((test, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{test.name}</span>
                    <div className="text-right">
                      <span className="text-gray-600">{test.count} tests</span>
                      <br />
                      <span className="text-green-600 font-medium">{formatCurrency(test.revenue)}</span>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#71C9CE] h-2 rounded-full"
                      style={{ width: `${test.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{test.percentage}% of total</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Revenue Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Growth Trend</CardTitle>
            <CardDescription>Bookings and revenue over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.monthlyTrends.map((month, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 text-sm font-medium">{month.month}</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{formatNumber(month.bookings)} bookings</div>
                      <div className="text-xs text-gray-500">{formatCurrency(month.revenue)}</div>
                    </div>
                  </div>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(month.bookings/1400)*100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Patient Flow */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Flow</CardTitle>
            <CardDescription>Patient engagement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">New Patients:</span>
                <span className="font-medium text-blue-600">{analyticsData.patientFlow.newPatients}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Returning Patients:</span>
                <span className="font-medium text-green-600">{analyticsData.patientFlow.returningPatients}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Total Appointments:</span>
                <span className="font-medium">{analyticsData.patientFlow.totalAppointments}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Avg Wait Time:</span>
                <span className="font-medium text-orange-600">{analyticsData.patientFlow.avgWaitTime} min</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Breakdown</CardTitle>
            <CardDescription>Financial performance analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Test Fees:</span>
                <span className="font-medium text-green-600">+{formatCurrency(analyticsData.revenueBreakdown.testFees)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Processing Fees:</span>
                <span className="font-medium text-green-600">+{formatCurrency(analyticsData.revenueBreakdown.processingFees)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Lab Commissions:</span>
                <span className="font-medium text-red-600">{formatCurrency(analyticsData.revenueBreakdown.labCommissions)}</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span className="font-medium">Net Revenue:</span>
                <span className="font-bold text-green-600">{formatCurrency(analyticsData.revenueBreakdown.netRevenue)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export Options */}
        <Card>
          <CardHeader>
            <CardTitle>Export Analytics</CardTitle>
            <CardDescription>Download detailed reports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full" variant="outline">
              Export to Excel
            </Button>
            <Button className="w-full" variant="outline">
              Generate PDF Report
            </Button>
            <Button className="w-full bg-[#71C9CE] hover:bg-[#48B0B5] text-white">
              Custom Report Builder
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Lab Performance */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Laboratory Performance</CardTitle>
            <CardDescription>
              Performance metrics for partner laboratories
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Laboratory
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tests Completed
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg Processing Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Performance
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {analyticsData.labPerformance.map((lab, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {lab.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {lab.tests}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {lab.avgTime}h
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ⭐ {lab.rating}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              lab.rating >= 4.8 ? 'bg-green-500' :
                              lab.rating >= 4.5 ? 'bg-blue-500' :
                              'bg-yellow-500'
                            }`}
                            style={{ width: `${(lab.rating/5)*100}%` }}
                          ></div>
                        </div>
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