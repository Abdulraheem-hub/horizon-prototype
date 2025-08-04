'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function PhysicianReports() {
  const t = useTranslations();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [testFilter, setTestFilter] = useState('');

  // Mock reports data
  const reports = [
    {
      id: 1,
      patientName: "John Doe",
      patientId: "P001",
      testType: "Pulmonary Function Test",
      reportDate: "2025-01-15",
      status: "completed",
      referralCode: "REF001",
      results: {
        summary: "Normal lung function",
        details: "FEV1: 3.2L (95% predicted), FVC: 4.1L (98% predicted)"
      }
    },
    {
      id: 2,
      patientName: "Jane Smith",
      patientId: "P002",
      testType: "Sleep Study (Home)",
      reportDate: "2025-01-14",
      status: "completed",
      referralCode: "REF002",
      results: {
        summary: "Mild sleep apnea detected",
        details: "AHI: 12 events/hour, Average SpO2: 92%"
      }
    },
    {
      id: 3,
      patientName: "Mike Wilson",
      patientId: "P003",
      testType: "Chest X-Ray",
      reportDate: "2025-01-13",
      status: "completed",
      referralCode: "REF003",
      results: {
        summary: "Clear chest X-ray",
        details: "No acute cardiopulmonary abnormalities identified"
      }
    },
    {
      id: 4,
      patientName: "Sarah Johnson",
      patientId: "P004",
      testType: "Sleep Study (Lab)",
      reportDate: "2025-01-12",
      status: "pending",
      referralCode: "REF004",
      results: null
    }
  ];

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.patientId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTest = !testFilter || report.testType === testFilter;
    const matchesDate = !dateFilter || report.reportDate >= dateFilter;
    
    return matchesSearch && matchesTest && matchesDate;
  });

  const downloadReport = (reportId: number) => {
    // In a real app, this would trigger a download
    alert(`Downloading report ${reportId}`);
  };

  const viewReportDetails = (report: {
    id: number;
    patientName: string;
    patientId: string;
    testType: string;
    reportDate: string;
    status: string;
    referralCode: string;
    results: {
      summary: string;
      details: string;
    } | null;
  }) => {
    // In a real app, this would open a detailed view
    alert(`Viewing details for ${report.patientName} - ${report.testType}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('physician.reports.title')}
        </h1>
        <p className="text-gray-600">
          {t('physician.reports.accessReports')}
        </p>
      </div>

      {/* Filters */}
      <div className="card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              {t('physician.reports.searchPatient')}
            </label>
            <input
              type="search"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Patient name or ID..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="dateFilter" className="block text-sm font-medium text-gray-700 mb-2">
              {t('physician.reports.filterByDate')}
            </label>
            <input
              type="date"
              id="dateFilter"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="testFilter" className="block text-sm font-medium text-gray-700 mb-2">
              {t('physician.reports.filterByTest')}
            </label>
            <select
              id="testFilter"
              value={testFilter}
              onChange={(e) => setTestFilter(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="">All test types</option>
              <option value="Pulmonary Function Test">Pulmonary Function Test</option>
              <option value="Sleep Study (Home)">Sleep Study (Home)</option>
              <option value="Sleep Study (Lab)">Sleep Study (Lab)</option>
              <option value="Chest X-Ray">Chest X-Ray</option>
              <option value="CT Scan">CT Scan</option>
              <option value="Blood Test">Blood Test</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Patient Reports ({filteredReports.length})
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Test Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('physician.reports.reportDate')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Results Summary
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{report.patientName}</div>
                      <div className="text-sm text-gray-500">{report.patientId}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{report.testType}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{report.reportDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {report.results ? (
                      <div>
                        <div className="text-sm font-medium text-gray-900">{report.results.summary}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">{report.results.details}</div>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">Pending</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      {report.status === 'completed' && (
                        <>
                          <button
                            onClick={() => viewReportDetails(report)}
                            className="text-primary hover:text-primary/80"
                            title={t('physician.reports.viewDetails')}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => downloadReport(report.id)}
                            className="text-blue-600 hover:text-blue-800"
                            title={t('physician.reports.downloadReport')}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </button>
                        </>
                      )}
                      {report.status === 'pending' && (
                        <span className="text-sm text-gray-400">Report pending</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No reports found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search criteria or date filters.
            </p>
          </div>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="card text-center">
          <div className="text-2xl font-bold text-primary mb-2">
            {reports.filter(r => r.status === 'completed').length}
          </div>
          <p className="text-gray-600 text-sm">Completed Reports</p>
        </div>

        <div className="card text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-2">
            {reports.filter(r => r.status === 'pending').length}
          </div>
          <p className="text-gray-600 text-sm">Pending Reports</p>
        </div>

        <div className="card text-center">
          <div className="text-2xl font-bold text-blue-600 mb-2">
            {reports.length}
          </div>
          <p className="text-gray-600 text-sm">Total Reports</p>
        </div>
      </div>
    </div>
  );
}