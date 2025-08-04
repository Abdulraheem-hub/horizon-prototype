'use client'

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LabPayments() {
  const [dateFilter, setDateFilter] = useState({
    startDate: '2024-01-01',
    endDate: '2024-01-31'
  });

  // Mock payment reconciliation data
  const paymentData = {
    summary: {
      totalRevenue: 45750.00,
      totalTests: 284,
      averagePerTest: 161.09,
      pendingPayments: 3250.00,
      processingFees: 1375.50,
      netAmount: 41124.50
    },
    monthlyTrend: [
      { month: 'Oct 2023', revenue: 38500, tests: 245 },
      { month: 'Nov 2023', revenue: 42300, tests: 267 },
      { month: 'Dec 2023', revenue: 39800, tests: 251 },
      { month: 'Jan 2024', revenue: 45750, tests: 284 }
    ],
    transactions: [
      {
        id: 'TXN001',
        date: '2024-01-15',
        patientName: 'John Doe',
        testType: 'Blood Test',
        amount: 125.00,
        status: 'completed',
        referenceId: 'REF12345'
      },
      {
        id: 'TXN002',
        date: '2024-01-15',
        patientName: 'Jane Smith',
        testType: 'X-Ray',
        amount: 200.00,
        status: 'completed',
        referenceId: 'REF12346'
      },
      {
        id: 'TXN003',
        date: '2024-01-14',
        patientName: 'Mike Johnson',
        testType: 'MRI',
        amount: 750.00,
        status: 'pending',
        referenceId: 'REF12347'
      },
      {
        id: 'TXN004',
        date: '2024-01-14',
        patientName: 'Sarah Davis',
        testType: 'Ultrasound',
        amount: 150.00,
        status: 'completed',
        referenceId: 'REF12348'
      },
      {
        id: 'TXN005',
        date: '2024-01-13',
        patientName: 'Robert Wilson',
        testType: 'ECG',
        amount: 75.00,
        status: 'completed',
        referenceId: 'REF12349'
      }
    ]
  };

  const handleDateFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateFilter({ ...dateFilter, [e.target.name]: e.target.value });
  };

  const handleExportData = (format: string) => {
    // In a real app, this would generate and download the file
    alert(`Exporting payment data as ${format.toUpperCase()}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
        <h1 className="text-2xl font-bold leading-7 text-gray-900">Payment Reconciliation</h1>
        <p className="mt-2 text-sm text-gray-600">
          View payment reports, transaction history, and financial reconciliation data.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-3xl font-bold text-green-600">
              {formatCurrency(paymentData.summary.totalRevenue)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Current month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Tests</CardDescription>
            <CardTitle className="text-3xl font-bold text-[#71C9CE]">
              {paymentData.summary.totalTests}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Completed tests</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Average Per Test</CardDescription>
            <CardTitle className="text-3xl font-bold text-blue-600">
              {formatCurrency(paymentData.summary.averagePerTest)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">Revenue per test</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Net Amount</CardDescription>
            <CardTitle className="text-3xl font-bold text-purple-600">
              {formatCurrency(paymentData.summary.netAmount)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-600">After fees & pending</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Export */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex space-x-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={dateFilter.startDate}
              onChange={handleDateFilterChange}
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <Input
              id="endDate"
              name="endDate"
              type="date"
              value={dateFilter.endDate}
              onChange={handleDateFilterChange}
              className="mt-1"
            />
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            onClick={() => handleExportData('csv')}
            variant="outline"
          >
            Export CSV
          </Button>
          <Button 
            onClick={() => handleExportData('excel')}
            variant="outline"
          >
            Export Excel
          </Button>
          <Button 
            onClick={() => handleExportData('pdf')}
            className="bg-[#71C9CE] hover:bg-[#48B0B5] text-white"
          >
            Download Report
          </Button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Transaction History */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>
                Latest payment transactions and their status
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Test Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reference
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paymentData.transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {transaction.patientName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.testType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {formatCurrency(transaction.amount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.referenceId}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Summary & Monthly Trend */}
        <div className="space-y-6">
          {/* Payment Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Breakdown</CardTitle>
              <CardDescription>Detailed financial summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Total Revenue:</span>
                  <span className="font-medium">{formatCurrency(paymentData.summary.totalRevenue)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Processing Fees:</span>
                  <span className="font-medium text-red-600">-{formatCurrency(paymentData.summary.processingFees)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Pending Payments:</span>
                  <span className="font-medium text-yellow-600">-{formatCurrency(paymentData.summary.pendingPayments)}</span>
                </div>
                <hr />
                <div className="flex justify-between">
                  <span className="font-medium">Net Amount:</span>
                  <span className="font-bold text-green-600">{formatCurrency(paymentData.summary.netAmount)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Trend</CardTitle>
              <CardDescription>Revenue over the last 4 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {paymentData.monthlyTrend.map((month, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium">{month.month}</span>
                      <p className="text-xs text-gray-500">{month.tests} tests</p>
                    </div>
                    <span className="font-medium">{formatCurrency(month.revenue)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                Request Payment Details
              </Button>
              <Button className="w-full" variant="outline">
                Dispute Transaction
              </Button>
              <Button className="w-full bg-[#71C9CE] hover:bg-[#48B0B5] text-white">
                Contact Finance Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}