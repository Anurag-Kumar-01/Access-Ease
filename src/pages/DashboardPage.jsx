import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Volume2, 
  Type, 
  Palette, 
  Zap,
  Settings,
  BarChart3,
  Globe,
  Heart,
  Award,
  Bell,
  User,
  Search,
  Filter,
  Download,
  Share2,
  BookOpen,
  Target,
  TrendingUp,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  Plus,
  Minus,
  RotateCcw,
  Save,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Moon,
  Sun,
  Maximize2
} from 'lucide-react';

 function Dashboard() {
  const [activeService, setActiveService] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [currentUrl, setCurrentUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  // Mock user data
  const userData = {
    name: "Alex Johnson",
    email: "alex@example.com",
    plan: "Premium",
    usageThisMonth: 156,
    usageLimit: 500,
    sitesAnalyzed: 23,
    issuesFixed: 127
  };

  // Accessibility services data
  const accessibilityServices = [
    {
      id: 'screen-reader',
      title: 'Screen Reader Optimization',
      description: 'Enhance screen reader compatibility and navigation',
      icon: Volume2,
      color: 'bg-blue-500',
      status: 'active',
      lastUsed: '2 hours ago',
      fixes: 45
    },
    {
      id: 'keyboard-nav',
      title: 'Keyboard Navigation',
      description: 'Improve keyboard accessibility and focus management',
      icon: Keyboard,
      color: 'bg-green-500',
      status: 'active',
      lastUsed: '1 day ago',
      fixes: 32
    },
    {
      id: 'visual-enhancement',
      title: 'Visual Enhancements',
      description: 'Color contrast, font sizing, and visual accessibility',
      icon: Eye,
      color: 'bg-purple-500',
      status: 'active',
      lastUsed: '3 hours ago',
      fixes: 28
    },
    {
      id: 'hearing-support',
      title: 'Hearing Support',
      description: 'Audio descriptions and hearing assistance features',
      icon: Ear,
      color: 'bg-orange-500',
      status: 'inactive',
      lastUsed: '1 week ago',
      fixes: 12
    },
    {
      id: 'motor-assistance',
      title: 'Motor Assistance',
      description: 'Click alternatives and motor impairment support',
      icon: MousePointer,
      color: 'bg-red-500',
      status: 'active',
      lastUsed: '5 hours ago',
      fixes: 18
    },
    {
      id: 'cognitive-support',
      title: 'Cognitive Support',
      description: 'Simplified navigation and cognitive assistance',
      icon: Type,
      color: 'bg-cyan-500',
      status: 'active',
      lastUsed: '1 hour ago',
      fixes: 22
    }
  ];

  // Quick actions
  const quickActions = [
    { id: 'analyze', title: 'Analyze Website', icon: Search, color: 'bg-blue-600' },
    { id: 'generate-report', title: 'Generate Report', icon: BarChart3, color: 'bg-green-600' },
    { id: 'live-preview', title: 'Live Preview', icon: Eye, color: 'bg-purple-600' },
    { id: 'accessibility-score', title: 'Get Score', icon: Award, color: 'bg-yellow-600' }
  ];

  // Recent activity
  const recentActivity = [
    { id: 1, action: 'Analyzed website', url: 'example.com', time: '2 hours ago', status: 'completed' },
    { id: 2, action: 'Fixed color contrast', url: 'mysite.org', time: '4 hours ago', status: 'completed' },
    { id: 3, action: 'Generated report', url: 'webstore.net', time: '1 day ago', status: 'completed' },
    { id: 4, action: 'Keyboard navigation setup', url: 'blog.example.com', time: '2 days ago', status: 'in-progress' }
  ];

  const handleAnalyzeWebsite = () => {
    if (!currentUrl) return;
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setAnalysisResults({
        score: 78,
        issues: 23,
        improvements: 15,
        status: 'needs-attention'
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <>
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-40`}>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                AccessEase Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                className={`pl-10 pr-4 py-2 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Notifications */}
            <button className={`relative p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            {/* User menu */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="hidden md:block">
                <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {userData.name}
                </p>
                <p className="text-xs text-gray-500">{userData.plan} Plan</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${
          sidebarOpen ? 'w-64' : 'w-16'
        } ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r transition-all duration-300 fixed lg:relative h-screen overflow-y-auto`}>
          
          {/* Stats Cards */}
          {sidebarOpen && (
            <div className="p-4 space-y-4">
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>
                    Usage This Month
                  </span>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-end space-x-2">
                  <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {userData.usageThisMonth}
                  </span>
                  <span className="text-sm text-gray-500">/ {userData.usageLimit}</span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-blue-200'} rounded-full h-2 mt-2`}>
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${(userData.usageThisMonth / userData.usageLimit) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className={`${darkMode ? 'bg-gray-700' : 'bg-green-50'} p-3 rounded-lg`}>
                  <Globe className="w-6 h-6 text-green-500 mb-1" />
                  <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {userData.sitesAnalyzed}
                  </p>
                  <p className="text-xs text-gray-500">Sites Analyzed</p>
                </div>
                <div className={`${darkMode ? 'bg-gray-700' : 'bg-purple-50'} p-3 rounded-lg`}>
                  <CheckCircle className="w-6 h-6 text-purple-500 mb-1" />
                  <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {userData.issuesFixed}
                  </p>
                  <p className="text-xs text-gray-500">Issues Fixed</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            <div className={`${sidebarOpen ? 'text-xs' : 'text-center'} font-semibold text-gray-500 uppercase tracking-wide mb-4`}>
              {sidebarOpen ? 'Services' : ''}
            </div>
            
            {accessibilityServices.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`w-full flex items-center ${sidebarOpen ? 'space-x-3 px-3' : 'justify-center px-2'} py-3 rounded-lg transition-colors ${
                    activeService?.id === service.id
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                      : darkMode 
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <div className={`${service.color} p-2 rounded-lg`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  {sidebarOpen && (
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium">{service.title}</p>
                      <p className="text-xs opacity-75">
                        {service.status === 'active' ? 'Active' : 'Inactive'} • {service.fixes} fixes
                      </p>
                    </div>
                  )}
                  {sidebarOpen && service.status === 'active' && (
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 ${sidebarOpen ? 'lg:ml-0' : ''} p-6`}>
          {/* Website Analysis Section */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6 mb-6`}>
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Website Analysis
            </h2>
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="url"
                  placeholder="Enter website URL to analyze..."
                  value={currentUrl}
                  onChange={(e) => setCurrentUrl(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>
              <button
                onClick={handleAnalyzeWebsite}
                disabled={!currentUrl || isAnalyzing}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Analyze</span>
                  </>
                )}
              </button>
            </div>

            {/* Analysis Results */}
            {analysisResults && (
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                  Analysis Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${
                      analysisResults.score >= 80 ? 'text-green-500' : 
                      analysisResults.score >= 60 ? 'text-yellow-500' : 'text-red-500'
                    }`}>
                      {analysisResults.score}
                    </div>
                    <p className="text-sm text-gray-500">Accessibility Score</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {analysisResults.issues}
                    </div>
                    <p className="text-sm text-gray-500">Issues Found</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {analysisResults.improvements}
                    </div>
                    <p className="text-sm text-gray-500">Improvements</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-50'} border rounded-xl p-6 text-left transition-colors group`}
                >
                  <div className={`${action.color} p-3 rounded-lg inline-flex mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                    {action.title}
                  </h3>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </button>
              );
            })}
          </div>

          {/* Service Details or Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active Service Details */}
            {activeService ? (
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`${activeService.color} p-3 rounded-lg`}>
                    <activeService.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {activeService.title}
                    </h3>
                    <p className="text-sm text-gray-500">{activeService.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Status</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activeService.status === 'active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {activeService.status}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Last Used</span>
                    <span className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {activeService.lastUsed}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Fixes Applied</span>
                    <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {activeService.fixes}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors">
                      Configure Service
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                  Select a Service
                </h3>
                <p className="text-gray-500 text-center py-8">
                  Choose a service from the sidebar to view details and configuration options.
                </p>
              </div>
            )}

            {/* Recent Activity */}
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'completed' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></div>
                    <div className="flex-1">
                      <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">
                        {activity.url} • {activity.time}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-500 cursor-pointer" />
                  </div>
                ))}
              </div>
              
              <button className={`w-full mt-4 py-2 px-4 border ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              } rounded-lg text-sm font-medium transition-colors`}>
                View All Activity
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
export default Dashboard;