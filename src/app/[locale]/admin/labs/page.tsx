type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AdminLabsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Labs Management</h1>
        <p className="text-gray-600 mt-2">Manage partner laboratories and their services</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Registered Labs</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Add New Lab
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Central Lab Services</h3>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">123 Medical Center Dr, City</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Tests:</span>
                <span className="font-medium">156</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Pending Results:</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Rating:</span>
                <span className="font-medium">4.8/5</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded text-sm font-medium hover:bg-blue-100">
                View Details
              </button>
              <button className="flex-1 bg-gray-50 text-gray-600 px-3 py-2 rounded text-sm font-medium hover:bg-gray-100">
                Edit
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Metro Diagnostics</h3>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">456 Healthcare Ave, City</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Tests:</span>
                <span className="font-medium">89</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Pending Results:</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Rating:</span>
                <span className="font-medium">4.6/5</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded text-sm font-medium hover:bg-blue-100">
                View Details
              </button>
              <button className="flex-1 bg-gray-50 text-gray-600 px-3 py-2 rounded text-sm font-medium hover:bg-gray-100">
                Edit
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Quick Test Labs</h3>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Pending
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">789 Lab Street, City</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Tests:</span>
                <span className="font-medium">42</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Pending Results:</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Rating:</span>
                <span className="font-medium">4.2/5</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded text-sm font-medium hover:bg-blue-100">
                View Details
              </button>
              <button className="flex-1 bg-gray-50 text-gray-600 px-3 py-2 rounded text-sm font-medium hover:bg-gray-100">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Total Labs</h3>
          <p className="text-3xl font-bold text-blue-600">28</p>
          <p className="text-sm text-gray-500">Registered partners</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Active Labs</h3>
          <p className="text-3xl font-bold text-green-600">24</p>
          <p className="text-sm text-gray-500">Currently operational</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Pending Approval</h3>
          <p className="text-3xl font-bold text-yellow-600">4</p>
          <p className="text-sm text-gray-500">Awaiting verification</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Average Rating</h3>
          <p className="text-3xl font-bold text-purple-600">4.7</p>
          <p className="text-sm text-gray-500">Out of 5 stars</p>
        </div>
      </div>
    </div>
  );
}
