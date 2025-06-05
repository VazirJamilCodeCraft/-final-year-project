
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Star, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CareerRecommendations = () => {
  const recommendations = [
    {
      title: "Software Developer",
      match: 92,
      category: "Technology",
      description: "Design and develop software applications using various programming languages",
      skills: ["JavaScript", "React", "Node.js", "Problem Solving"],
      salaryRange: "$70,000 - $120,000",
      growth: "22%"
    },
    {
      title: "Data Scientist",
      match: 88,
      category: "Analytics",
      description: "Analyze complex data to help organizations make better decisions",
      skills: ["Python", "Machine Learning", "Statistics", "Data Visualization"],
      salaryRange: "$85,000 - $140,000",
      growth: "31%"
    },
    {
      title: "UX Designer",
      match: 85,
      category: "Design",
      description: "Create user-friendly interfaces and improve user experience",
      skills: ["Design Thinking", "Prototyping", "User Research", "Figma"],
      salaryRange: "$65,000 - $110,000",
      growth: "13%"
    }
  ];

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
              <h1 className="text-2xl font-bold text-gray-800">Career Recommendations</h1>
              <p className="text-gray-600">Personalized career suggestions based on your assessment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-6">
          {recommendations.map((career, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl flex items-center space-x-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span>{career.title}</span>
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-4 mt-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{career.category}</span>
                      <span className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-semibold text-green-600">{career.match}% Match</span>
                      </span>
                    </CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                    Explore Career
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{career.description}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {career.skills.map((skill, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>Salary Range</span>
                    </h4>
                    <p className="text-green-600 font-semibold">{career.salaryRange}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>Job Growth</span>
                    </h4>
                    <p className="text-blue-600 font-semibold">{career.growth}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerRecommendations;
