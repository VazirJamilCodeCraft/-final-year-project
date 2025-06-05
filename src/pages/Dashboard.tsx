
import { useState } from "react";
import { Link } from "react-router-dom";
import { Target, User, BookOpen, Calendar, Settings, LogOut, BarChart3, FileText, Search, GraduationCap, Briefcase, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ChatBot from "@/components/ChatBot";

const Dashboard = () => {
  const [user] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">Career Counselling</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.firstName}!</span>
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, {user.firstName}!
          </h1>
          <p className="text-gray-600">
            Continue your career development journey with personalized guidance and resources.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Assessments Taken</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <FileText className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Career Matches</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <Target className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Saved Jobs</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Briefcase className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Profile Score</p>
                  <p className="text-2xl font-bold">85%</p>
                </div>
                <BarChart3 className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Career Modules */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Career Development Modules</CardTitle>
                <CardDescription>Explore our comprehensive career guidance tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/assessment" className="group">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:shadow-md transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-800">Career Assessment</h3>
                      </div>
                      <p className="text-sm text-gray-600">Take comprehensive tests to discover your strengths and career fit</p>
                    </div>
                  </Link>

                  <Link to="/recommendations" className="group">
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100 hover:shadow-md transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-800">Career Recommendations</h3>
                      </div>
                      <p className="text-sm text-gray-600">Get personalized career suggestions based on your assessment</p>
                    </div>
                  </Link>

                  <Link to="/exploration" className="group">
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <Search className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-800">Career Exploration</h3>
                      </div>
                      <p className="text-sm text-gray-600">Explore careers by categories and detailed information</p>
                    </div>
                  </Link>

                  <Link to="/jobs" className="group">
                    <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-100 hover:shadow-md transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-800">Job Search</h3>
                      </div>
                      <p className="text-sm text-gray-600">Find job opportunities matching your career interests</p>
                    </div>
                  </Link>

                  <Link to="/education" className="group">
                    <div className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-100 hover:shadow-md transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-800">Educational Opportunities</h3>
                      </div>
                      <p className="text-sm text-gray-600">Discover universities and scholarships for your career path</p>
                    </div>
                  </Link>

                  <Link to="/profile" className="group">
                    <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-100 hover:shadow-md transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-800">User Profile</h3>
                      </div>
                      <p className="text-sm text-gray-600">Manage your profile and view your career journey</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Fast access to key features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  <FileText className="w-4 h-4 mr-2" />
                  Start Assessment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  View Saved Items
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Progress Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Account Settings
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-sm text-gray-800">Completed Verbal Assessment</h4>
                    <p className="text-xs text-gray-600">2 hours ago</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-sm text-gray-800">Saved 3 Software Engineer Jobs</h4>
                    <p className="text-xs text-gray-600">1 day ago</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-sm text-gray-800">Explored Medical Careers</h4>
                    <p className="text-xs text-gray-600">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* ChatBot Component */}
      <ChatBot />
    </div>
  );
};

export default Dashboard;
