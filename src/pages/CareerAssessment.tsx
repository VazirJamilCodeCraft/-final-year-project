
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, FileText, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CareerAssessment = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const assessmentSections = [
    {
      id: "verbal",
      title: "Verbal Reasoning",
      description: "Test your language and communication skills",
      duration: "30 minutes",
      questions: 25,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "analytical",
      title: "Analytical Thinking",
      description: "Evaluate your logical reasoning abilities",
      duration: "45 minutes",
      questions: 30,
      color: "from-green-500 to-green-600"
    },
    {
      id: "quantitative",
      title: "Quantitative Aptitude",
      description: "Assess your numerical and mathematical skills",
      duration: "40 minutes",
      questions: 35,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "subject",
      title: "Subject Knowledge",
      description: "Test domain-specific knowledge and expertise",
      duration: "50 minutes",
      questions: 40,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
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
              <h1 className="text-2xl font-bold text-gray-800">Career Assessment</h1>
              <p className="text-gray-600">Discover your strengths and career potential</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Assessment Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-blue-600" />
              <span>Assessment Overview</span>
            </CardTitle>
            <CardDescription>
              Complete all four sections to get comprehensive career recommendations tailored to your profile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">130</div>
                <div className="text-sm text-gray-600">Total Questions</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">165</div>
                <div className="text-sm text-gray-600">Total Minutes</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">4</div>
                <div className="text-sm text-gray-600">Sections</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">24h</div>
                <div className="text-sm text-gray-600">Valid For</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {assessmentSections.map((section) => (
            <Card key={section.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <Button 
                    size="sm" 
                    className={`bg-gradient-to-r ${section.color} hover:opacity-90`}
                    onClick={() => setSelectedSection(section.id)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start
                  </Button>
                </div>
                <CardTitle className="text-xl">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>Duration: {section.duration}</span>
                    </div>
                    <span className="text-gray-600">{section.questions} questions</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-2 rounded-full w-0"></div>
                  </div>
                  <p className="text-xs text-gray-500">Not started</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Before You Start:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-blue-500" />
                    <span>Ensure you have a stable internet connection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-blue-500" />
                    <span>Find a quiet environment free from distractions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-blue-500" />
                    <span>You can complete sections in any order</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-blue-500" />
                    <span>Each section has a time limit</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">During the Test:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-green-500" />
                    <span>Read each question carefully</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-green-500" />
                    <span>You can skip questions and return later</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-green-500" />
                    <span>Auto-submit when time runs out</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-green-500" />
                    <span>Review your answers before submitting</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CareerAssessment;
