'use client'

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LabBookings() {
  const [selectedBooking, setSelectedBooking] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data - in real app this would come from API
  const bookings = [
    {
      id: 1,
      patientName: 'John Doe',
      patientId: 'P001',
      testType: 'Blood Test - Complete Blood Count',
      scheduledDate: '2024-01-15',
      scheduledTime: '09:00 AM',
      status: 'confirmed',
      notes: 'Fasting required - 12 hours',
      priority: 'routine',
      physicianName: 'Dr. Smith',
      contactNumber: '+1-555-0123'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      patientId: 'P002',
      testType: 'X-Ray - Chest',
      scheduledDate: '2024-01-15',
      scheduledTime: '10:30 AM',
      status: 'pending',
      notes: 'Patient has metal implant - inform technician',
      priority: 'urgent',
      physicianName: 'Dr. Johnson',
      contactNumber: '+1-555-0124'
    },
    {
      id: 3,
      patientName: 'Mike Johnson',
      patientId: 'P003',
      testType: 'MRI - Brain',
      scheduledDate: '2024-01-15',
      scheduledTime: '02:00 PM',
      status: 'in-progress',
      notes: 'Claustrophobic patient - may need sedation',
      priority: 'urgent',
      physicianName: 'Dr. Williams',
      contactNumber: '+1-555-0125'
    },
    {
      id: 4,
      patientName: 'Sarah Davis',
      patientId: 'P004',
      testType: 'Ultrasound - Abdominal',
      scheduledDate: '2024-01-16',
      scheduledTime: '11:00 AM',
      status: 'confirmed',
      notes: 'Full bladder required',
      priority: 'routine',
      physicianName: 'Dr. Brown',
      contactNumber: '+1-555-0126'
    }
  ];

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.testType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (bookingId: number, newStatus: string) => {
    // In real app, this would make an API call
    console.log(`Changing booking ${bookingId} status to ${newStatus}`);
  };

  const handleReschedule = (bookingId: number) => {
    // In real app, this would open a date/time picker
    console.log(`Reschedule booking ${bookingId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'routine': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold leading-7 text-gray-900">Bookings Management</h1>
        <p className="mt-2 text-sm text-gray-600">
          View and manage assigned bookings. Confirm appointments or reschedule as needed.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700">
            Search Bookings
          </label>
          <Input
            id="search"
            type="search"
            placeholder="Search by patient name, ID, or test type"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Filter by Status
          </label>
          <select
            id="status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#71C9CE] focus:outline-none focus:ring-[#71C9CE]"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Assigned Bookings ({filteredBookings.length})</CardTitle>
            <CardDescription>
              Click on a booking to view details and take action
            </CardDescription>
          </CardHeader>
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
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priority
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedBooking(booking)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {booking.patientName}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {booking.patientId}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{booking.testType}</div>
                        <div className="text-sm text-gray-500">Dr. {booking.physicianName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{booking.scheduledDate}</div>
                        <div className="text-sm text-gray-500">{booking.scheduledTime}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(booking.priority)}`}>
                          {booking.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusChange(booking.id, 'confirmed');
                            }}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            Confirm
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReschedule(booking.id);
                            }}
                          >
                            Reschedule
                          </Button>
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

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Booking Details</h3>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Patient:</span> {selectedBooking.patientName}
                </div>
                <div>
                  <span className="font-medium">Patient ID:</span> {selectedBooking.patientId}
                </div>
                <div>
                  <span className="font-medium">Test:</span> {selectedBooking.testType}
                </div>
                <div>
                  <span className="font-medium">Date:</span> {selectedBooking.scheduledDate}
                </div>
                <div>
                  <span className="font-medium">Time:</span> {selectedBooking.scheduledTime}
                </div>
                <div>
                  <span className="font-medium">Physician:</span> {selectedBooking.physicianName}
                </div>
                <div>
                  <span className="font-medium">Contact:</span> {selectedBooking.contactNumber}
                </div>
                <div>
                  <span className="font-medium">Notes:</span> {selectedBooking.notes}
                </div>
                <div>
                  <span className="font-medium">Priority:</span>{' '}
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(selectedBooking.priority)}`}>
                    {selectedBooking.priority}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <Button
                  onClick={() => handleStatusChange(selectedBooking.id, 'confirmed')}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                >
                  Confirm Booking
                </Button>
                <Button
                  onClick={() => handleReschedule(selectedBooking.id)}
                  variant="outline"
                  className="flex-1"
                >
                  Reschedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}