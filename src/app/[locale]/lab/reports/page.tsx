'use client'

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function LabReports() {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [reportData, setReportData] = useState({
    patientId: '',
    testType: '',
    reportTitle: '',
    description: '',
    urgency: 'routine'
  });

  // Mock data for pending reports
  const pendingReports = [
    {
      id: 1,
      patientName: 'John Doe',
      patientId: 'P001',
      testType: 'Blood Test - Complete Blood Count',
      testDate: '2024-01-14',
      dueDate: '2024-01-16',
      status: 'pending'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      patientId: 'P002',
      testType: 'X-Ray - Chest',
      testDate: '2024-01-14',
      dueDate: '2024-01-16',
      status: 'pending'
    },
    {
      id: 3,
      patientName: 'Mike Johnson',
      patientId: 'P003',
      testType: 'MRI - Brain',
      testDate: '2024-01-15',
      dueDate: '2024-01-17',
      status: 'in-progress'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setReportData({ ...reportData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    // Simulate file upload
    setTimeout(() => {
      setIsUploading(false);
      alert('Report uploaded successfully!');
      // Reset form
      setReportData({
        patientId: '',
        testType: '',
        reportTitle: '',
        description: '',
        urgency: 'routine'
      });
      setSelectedFiles(null);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold leading-7 text-gray-900">Report Management</h1>
        <p className="mt-2 text-sm text-gray-600">
          Upload test reports with metadata. Ensure all reports are accurate and complete before submission.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload New Report */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Upload Test Report</CardTitle>
              <CardDescription>
                Upload PDF or document files with complete patient and test information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpload} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="patientId" className="block text-sm font-medium text-gray-700">
                      Patient ID
                    </label>
                    <Input
                      id="patientId"
                      name="patientId"
                      type="text"
                      required
                      value={reportData.patientId}
                      onChange={handleInputChange}
                      placeholder="P001"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="testType" className="block text-sm font-medium text-gray-700">
                      Test Type
                    </label>
                    <select
                      id="testType"
                      name="testType"
                      value={reportData.testType}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#71C9CE] focus:outline-none focus:ring-[#71C9CE]"
                    >
                      <option value="">Select Test Type</option>
                      <option value="blood-test">Blood Test</option>
                      <option value="xray">X-Ray</option>
                      <option value="mri">MRI</option>
                      <option value="ultrasound">Ultrasound</option>
                      <option value="ecg">ECG</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="reportTitle" className="block text-sm font-medium text-gray-700">
                    Report Title
                  </label>
                  <Input
                    id="reportTitle"
                    name="reportTitle"
                    type="text"
                    required
                    value={reportData.reportTitle}
                    onChange={handleInputChange}
                    placeholder="Complete Blood Count - Normal Results"
                  />
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={reportData.urgency}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#71C9CE] focus:outline-none focus:ring-[#71C9CE]"
                  >
                    <option value="routine">Routine</option>
                    <option value="high">High Priority</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Report Description / Notes
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={reportData.description}
                    onChange={handleInputChange}
                    placeholder="Additional notes or findings..."
                  />
                </div>

                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                    Upload Report File(s)
                  </label>
                  <Input
                    id="file"
                    name="file"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="mt-1"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Supported formats: PDF, DOC, DOCX. Maximum 10MB per file.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">
                        Upload Guidelines
                      </h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Ensure patient information is clearly visible</li>
                          <li>Include all relevant test parameters and results</li>
                          <li>Verify accuracy before uploading</li>
                          <li>Use high-quality scans for physical reports</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isUploading || !selectedFiles}
                  className="w-full bg-[#71C9CE] hover:bg-[#48B0B5] text-white"
                >
                  {isUploading ? 'Uploading...' : 'Upload Report'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Pending Reports */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Pending Reports ({pendingReports.length})</CardTitle>
              <CardDescription>
                Reports awaiting upload or completion
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-200">
                {pendingReports.map((report) => (
                  <div key={report.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">
                          {report.patientName}
                        </h4>
                        <p className="text-sm text-gray-500">ID: {report.patientId}</p>
                        <p className="text-sm text-gray-900 mt-1">{report.testType}</p>
                        <div className="flex space-x-4 mt-2 text-xs text-gray-500">
                          <span>Test Date: {report.testDate}</span>
                          <span>Due: {report.dueDate}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                        <Button 
                          size="sm"
                          onClick={() => {
                            setReportData({
                              ...reportData,
                              patientId: report.patientId,
                              testType: report.testType.toLowerCase().replace(/\s+/g, '-')
                            });
                          }}
                        >
                          Upload
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Uploads */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Uploads</CardTitle>
              <CardDescription>Successfully uploaded reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <p>No recent uploads</p>
                <p className="text-sm">Uploaded reports will appear here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}