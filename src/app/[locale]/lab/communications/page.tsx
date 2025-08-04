'use client'

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function LabCommunications() {
  const [newMessage, setNewMessage] = useState({
    subject: '',
    message: '',
    priority: 'medium',
    category: 'general'
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'Horizon Admin',
      subject: 'Updated Test Protocols',
      message: 'Please review the updated protocols for COVID-19 testing. New safety measures are now in effect.',
      timestamp: '2024-01-15 09:30 AM',
      priority: 'high',
      status: 'unread',
      category: 'protocol'
    },
    {
      id: 2,
      from: 'Lab Admin',
      subject: 'Equipment Maintenance Schedule',
      message: 'The MRI machine will be down for maintenance on Jan 20th from 2-4 PM.',
      timestamp: '2024-01-14 02:15 PM',
      priority: 'medium',
      status: 'read',
      category: 'maintenance'
    },
    {
      id: 3,
      from: 'Lab Admin',
      subject: 'Payment Processing Delay',
      message: 'There may be a 24-hour delay in payment processing due to system maintenance.',
      timestamp: '2024-01-13 11:20 AM',
      priority: 'low',
      status: 'read',
      category: 'billing'
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add new message to the conversation
    const message = {
      id: messages.length + 1,
      from: 'You',
      subject: newMessage.subject,
      message: newMessage.message,
      timestamp: new Date().toLocaleString(),
      priority: newMessage.priority,
      status: 'sent',
      category: newMessage.category
    };

    setMessages([message, ...messages]);
    
    // Reset form
    setNewMessage({
      subject: '',
      message: '',
      priority: 'medium',
      category: 'general'
    });

    alert('Message sent successfully!');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'font-bold';
      case 'read': return 'font-normal';
      case 'sent': return 'font-normal text-blue-600';
      default: return 'font-normal';
    }
  };

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold leading-7 text-gray-900">Communications</h1>
        <p className="mt-2 text-sm text-gray-600">
          Communicate with Horizon admin team. Report issues, ask questions, or provide updates.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* New Message */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send New Message</CardTitle>
              <CardDescription>
                Contact the Horizon admin team with questions, issues, or updates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSendMessage} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={newMessage.category}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#71C9CE] focus:outline-none focus:ring-[#71C9CE]"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing Question</option>
                      <option value="scheduling">Scheduling Issue</option>
                      <option value="protocol">Protocol Question</option>
                      <option value="equipment">Equipment Issue</option>
                      <option value="urgent">Urgent Matter</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                      Priority
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={newMessage.priority}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#71C9CE] focus:outline-none focus:ring-[#71C9CE]"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={newMessage.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={newMessage.message}
                    onChange={handleInputChange}
                    placeholder="Provide detailed information about your inquiry or issue..."
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">
                        Communication Guidelines
                      </h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Be specific and provide context for your inquiry</li>
                          <li>Include patient IDs or booking numbers when relevant</li>
                          <li>Use appropriate priority levels</li>
                          <li>Expect response within 24 hours for routine matters</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#71C9CE] hover:bg-[#48B0B5] text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Message History */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Message History</CardTitle>
              <CardDescription>
                Recent communications with the Horizon team
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {messages.map((msg) => (
                  <div key={msg.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className={`text-sm ${getStatusColor(msg.status)}`}>
                            {msg.subject}
                          </h4>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(msg.priority)}`}>
                            {msg.priority}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          From: {msg.from} • {msg.timestamp}
                        </p>
                      </div>
                      {msg.status === 'unread' && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {msg.message}
                    </p>
                    <div className="mt-3 flex space-x-2">
                      <Button size="sm" variant="outline">
                        Reply
                      </Button>
                      <Button size="sm" variant="outline">
                        Mark as Read
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact Info */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Emergency Contact</CardTitle>
              <CardDescription>For urgent matters requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Support Hotline:</span>
                  <span className="text-[#71C9CE]">1-800-HORIZON</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Emergency Email:</span>
                  <span className="text-[#71C9CE]">urgent@horizon.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Response Time:</span>
                  <span>Within 2 hours</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-700">
                  <strong>Emergency Protocol:</strong> For critical issues affecting patient safety or urgent test results, 
                  call the support hotline immediately.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}