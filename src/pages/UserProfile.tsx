
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, BookOpen, Briefcase, Heart, FileText, Settings, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

const UserProfile = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    bio: "Aspiring software developer with a passion for creating innovative solutions.",
    joinDate: "January 2024"
  });

  const [isEditing, setIsEditing] = useState(false);

  const assessmentHistory = [
    {
      id: 1,
      name: "Comprehensive Career Assessment",
      date: "March 15, 2024",
      score: "85%",
      sections: ["Verbal: 88%", "Analytical: 82%", "Quantitative: 85%", "Subject: 85%"],
      status: "Completed"
    },
    {
      id: 2,
      name: "Technical Skills Assessment",
      date: "March 10, 2024",
      score: "92%",
      sections: ["Programming: 95%", "Problem Solving: 89%"],
      status: "Completed"
    },
    {
      id: 3,
      name: "Personality Assessment",
      date: "March 5, 2024",
      score: "N/A",
      sections: ["Personality Type: INTJ", "Work Style: Analytical"],
      status: "Completed"
    }
  ];

  const savedCareers = [
    {
      id: 1,
      title: "Software Developer",
      match: "92%",
      category: "Technology",
      savedDate: "March 16, 2024"
    },
    {
      id: 2,
      title: "Data Scientist",
      match: "88%",
      category: "Analytics",
      savedDate: "March 15, 2024"
    },
    {
      id: 3,
      title: "UX Designer",
      match: "85%",
      category: "Design",
      savedDate: "March 14, 2024"
    }
  ];

  const savedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp Solutions",
      location: "New York, NY",
      salary: "$70,000 - $95,000",
      savedDate: "March 17, 2024"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Innovation Labs",
      location: "San Francisco, CA",
      salary: "$80,000 - $110,000",
      savedDate: "March 16, 2024"
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log("Profile updated:", user);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
              <p className="text-gray-600">Manage your profile and view your career journey</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="relative mx-auto">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-xl">
                      {user.firstName[0]}{user.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <CardTitle className="mt-4">{user.firstName} {user.lastName}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Member since</p>
                  <p className="font-semibold">{user.joinDate}</p>
                </div>
                <Button 
                  className="w-full" 
                  onClick={() => setIsEditing(!isEditing)}
                  variant={isEditing ? "outline" : "default"}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  {isEditing ? "Cancel Edit" : "Edit Profile"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="assessments">Assessments</TabsTrigger>
                <TabsTrigger value="careers">Saved Careers</TabsTrigger>
                <TabsTrigger value="jobs">Saved Jobs</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="w-5 h-5" />
                      <span>Personal Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={user.firstName}
                          onChange={(e) => setUser({...user, firstName: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={user.lastName}
                          onChange={(e) => setUser({...user, lastName: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={user.phone}
                          onChange={(e) => setUser({...user, phone: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={user.location}
                          onChange={(e) => setUser({...user, location: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={user.bio}
                        onChange={(e) => setUser({...user, bio: e.target.value})}
                        disabled={!isEditing}
                        rows={3}
                      />
                    </div>
                    {isEditing && (
                      <div className="flex space-x-2">
                        <Button onClick={handleSave} className="bg-gradient-to-r from-blue-600 to-green-600">
                          Save Changes
                        </Button>
                        <Button variant="outline" onClick={handleCancel}>
                          Cancel
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="assessments" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-5 h-5" />
                      <span>Assessment History</span>
                    </CardTitle>
                    <CardDescription>Track your career assessment progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {assessmentHistory.map((assessment) => (
                        <div key={assessment.id} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold">{assessment.name}</h3>
                            <span className="text-sm text-gray-500">{assessment.date}</span>
                          </div>
                          <div className="flex items-center space-x-4 mb-2">
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                              {assessment.status}
                            </span>
                            {assessment.score !== "N/A" && (
                              <span className="text-sm font-semibold text-blue-600">
                                Score: {assessment.score}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">
                            {assessment.sections.map((section, idx) => (
                              <span key={idx} className="mr-4">{section}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="careers" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5" />
                      <span>Saved Career Recommendations</span>
                    </CardTitle>
                    <CardDescription>Careers you've bookmarked for further exploration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {savedCareers.map((career) => (
                        <div key={career.id} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold">{career.title}</h3>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                  {career.category}
                                </span>
                                <span className="text-sm font-semibold text-green-600">
                                  {career.match} Match
                                </span>
                                <span className="text-sm text-gray-500">
                                  Saved: {career.savedDate}
                                </span>
                              </div>
                            </div>
                            <Button size="sm" variant="outline">
                              <Heart className="w-4 h-4 mr-1 fill-current text-red-500" />
                              Saved
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="jobs" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Briefcase className="w-5 h-5" />
                      <span>Saved Job Opportunities</span>
                    </CardTitle>
                    <CardDescription>Job listings you've saved for later review</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {savedJobs.map((job) => (
                        <div key={job.id} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold">{job.title}</h3>
                              <p className="text-sm text-gray-600">{job.company}</p>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-sm flex items-center space-x-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{job.location}</span>
                                </span>
                                <span className="text-sm font-semibold text-green-600">
                                  {job.salary}
                                </span>
                                <span className="text-sm text-gray-500">
                                  Saved: {job.savedDate}
                                </span>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Heart className="w-4 h-4 mr-1 fill-current text-red-500" />
                                Saved
                              </Button>
                              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-600">
                                Apply
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
