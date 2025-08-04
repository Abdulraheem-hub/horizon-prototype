'use client'

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userFilter, setUserFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  // Mock user data
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      role: 'patient',
      status: 'active',
      joinDate: '2023-12-15',
      lastLogin: '2024-01-15 09:30 AM',
      totalBookings: 5,
      phone: '+1-555-0123'
    },
    {
      id: 2, 
      name: 'Dr. Sarah Smith',
      email: 'sarah.smith@hospital.com',
      role: 'physician',
      status: 'active',
      joinDate: '2023-10-20',
      lastLogin: '2024-01-15 08:45 AM',
      totalBookings: 0,
      phone: '+1-555-0124'
    },
    {
      id: 3,
      name: 'MediLab Central',
      email: 'admin@medilab.com',
      role: 'lab',
      status: 'active',
      joinDate: '2023-09-10',
      lastLogin: '2024-01-15 07:20 AM',
      totalBookings: 0,
      phone: '+1-555-0125'
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      role: 'patient',
      status: 'inactive',
      joinDate: '2023-11-30',
      lastLogin: '2024-01-10 02:15 PM',
      totalBookings: 2,
      phone: '+1-555-0126'
    },
    {
      id: 5,
      name: 'Horizon Admin',
      email: 'admin@horizon.com',
      role: 'admin',
      status: 'active',
      joinDate: '2023-08-01',
      lastLogin: '2024-01-15 10:00 AM',
      totalBookings: 0,
      phone: '+1-555-0127'
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = userFilter === 'all' || user.role === userFilter;
    return matchesSearch && matchesFilter;
  });

  const getUserStats = () => {
    return {
      total: users.length,
      active: users.filter(u => u.status === 'active').length,
      patients: users.filter(u => u.role === 'patient').length,
      physicians: users.filter(u => u.role === 'physician').length,
      labs: users.filter(u => u.role === 'lab').length,
      admins: users.filter(u => u.role === 'admin').length
    };
  };

  const stats = getUserStats();

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'patient': return 'bg-blue-100 text-blue-800';
      case 'physician': return 'bg-green-100 text-green-800';
      case 'lab': return 'bg-purple-100 text-purple-800';
      case 'admin': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleUserAction = (action: string, userId: number) => {
    // In real app, this would make API calls
    console.log(`${action} user ${userId}`);
    alert(`${action} action performed for user ${userId}`);
  };

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold leading-7 text-gray-900">User Management</h1>
        <p className="mt-2 text-sm text-gray-600">
          Manage all users in the system. View, edit, suspend, or activate user accounts.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Users</CardDescription>
            <CardTitle className="text-2xl font-bold text-[#71C9CE]">
              {stats.total}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active</CardDescription>
            <CardTitle className="text-2xl font-bold text-green-600">
              {stats.active}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Patients</CardDescription>
            <CardTitle className="text-2xl font-bold text-blue-600">
              {stats.patients}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Physicians</CardDescription>
            <CardTitle className="text-2xl font-bold text-green-600">
              {stats.physicians}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Labs</CardDescription>
            <CardTitle className="text-2xl font-bold text-purple-600">
              {stats.labs}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Admins</CardDescription>
            <CardTitle className="text-2xl font-bold text-red-600">
              {stats.admins}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Filters */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700">
            Search Users
          </label>
          <Input
            id="search"
            type="search"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Filter by Role
          </label>
          <select
            id="role"
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#71C9CE] focus:outline-none focus:ring-[#71C9CE]"
          >
            <option value="all">All Roles</option>
            <option value="patient">Patients</option>
            <option value="physician">Physicians</option>
            <option value="lab">Labs</option>
            <option value="admin">Admins</option>
          </select>
        </div>

        <div className="flex items-end">
          <Button className="bg-[#71C9CE] hover:bg-[#48B0B5] text-white">
            Add New User
          </Button>
        </div>
      </div>

      {/* Users Table */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>All Users ({filteredUsers.length})</CardTitle>
            <CardDescription>
              Click on a user to view details and manage their account
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Join Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Login
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedUser(user)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.joinDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.lastLogin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleUserAction('Edit', user.id);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleUserAction(user.status === 'active' ? 'Suspend' : 'Activate', user.id);
                            }}
                          >
                            {user.status === 'active' ? 'Suspend' : 'Activate'}
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

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">User Details</h3>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Name:</span> {selectedUser.name}
                </div>
                <div>
                  <span className="font-medium">Email:</span> {selectedUser.email}
                </div>
                <div>
                  <span className="font-medium">Phone:</span> {selectedUser.phone}
                </div>
                <div>
                  <span className="font-medium">Role:</span>{' '}
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(selectedUser.role)}`}>
                    {selectedUser.role}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Status:</span>{' '}
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedUser.status)}`}>
                    {selectedUser.status}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Join Date:</span> {selectedUser.joinDate}
                </div>
                <div>
                  <span className="font-medium">Last Login:</span> {selectedUser.lastLogin}
                </div>
                {selectedUser.role === 'patient' && (
                  <div>
                    <span className="font-medium">Total Bookings:</span> {selectedUser.totalBookings}
                  </div>
                )}
              </div>

              <div className="mt-6 flex space-x-3">
                <Button
                  onClick={() => handleUserAction('Edit', selectedUser.id)}
                  variant="outline"
                  className="flex-1"
                >
                  Edit User
                </Button>
                <Button
                  onClick={() => handleUserAction('Reset Password', selectedUser.id)}
                  variant="outline"
                  className="flex-1"
                >
                  Reset Password
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}