
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, MapPin, DollarSign, Calendar, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EducationalOpportunities = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [country, setCountry] = useState("");
  const [degreeType, setDegreeType] = useState("");
  const [program, setProgram] = useState("");

  const universities = [
    {
      id: 1,
      name: "MIT - Massachusetts Institute of Technology",
      location: "Cambridge, MA, USA",
      ranking: "#1 in Engineering",
      programs: ["Computer Science", "Engineering", "Business"],
      tuition: "$53,450/year",
      acceptanceRate: "7%",
      description: "Leading institution in technology and engineering education",
      website: "mit.edu"
    },
    {
      id: 2,
      name: "Stanford University",
      location: "Stanford, CA, USA",
      ranking: "#2 in Computer Science",
      programs: ["Computer Science", "Business", "Medicine"],
      tuition: "$56,169/year",
      acceptanceRate: "4%",
      description: "Premier university known for innovation and entrepreneurship",
      website: "stanford.edu"
    },
    {
      id: 3,
      name: "University of Oxford",
      location: "Oxford, UK",
      ranking: "#1 in UK",
      programs: ["Medicine", "Law", "Literature", "Sciences"],
      tuition: "£9,250-£37,510/year",
      acceptanceRate: "17%",
      description: "One of the oldest and most prestigious universities in the world",
      website: "ox.ac.uk"
    },
    {
      id: 4,
      name: "Harvard University",
      location: "Cambridge, MA, USA",
      ranking: "#1 in Medicine",
      programs: ["Medicine", "Law", "Business", "Liberal Arts"],
      tuition: "$51,925/year",
      acceptanceRate: "5%",
      description: "Ivy League institution with world-class medical and business programs",
      website: "harvard.edu"
    }
  ];

  const scholarships = [
    {
      id: 1,
      name: "Gates Scholarship",
      amount: "Full Tuition + Living Expenses",
      eligibility: "Undergraduate students with financial need",
      deadline: "September 15, 2024",
      category: "Merit-based",
      description: "Covers full cost of attendance for outstanding minority students",
      application: "Online application with essays"
    },
    {
      id: 2,
      name: "Rhodes Scholarship",
      amount: "£17,310/year + fees",
      eligibility: "Graduate students under 24",
      deadline: "October 6, 2024",
      category: "Academic Excellence",
      description: "Prestigious scholarship for study at Oxford University",
      application: "Through endorsed application process"
    },
    {
      id: 3,
      name: "Fulbright Program",
      amount: "$25,000 - $50,000",
      eligibility: "Graduate students and professionals",
      deadline: "October 12, 2024",
      category: "International Exchange",
      description: "Study, research, or teach abroad in over 140 countries",
      application: "Online application with research proposal"
    },
    {
      id: 4,
      name: "National Merit Scholarship",
      amount: "$2,500 - $10,000",
      eligibility: "High school students with high PSAT scores",
      deadline: "Various deadlines",
      category: "Academic Merit",
      description: "Based on PSAT/NMSQT performance and academic achievement",
      application: "Automatic consideration based on PSAT scores"
    }
  ];

  const filteredUniversities = universities.filter(uni => {
    const matchesKeyword = !searchKeyword || 
      uni.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      uni.programs.some(prog => prog.toLowerCase().includes(searchKeyword.toLowerCase()));
    
    const matchesCountry = !country || 
      uni.location.toLowerCase().includes(country.toLowerCase());
    
    const matchesProgram = !program || 
      uni.programs.some(prog => prog.toLowerCase().includes(program.toLowerCase()));
    
    return matchesKeyword && matchesCountry && matchesProgram;
  });

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesKeyword = !searchKeyword || 
      scholarship.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      scholarship.category.toLowerCase().includes(searchKeyword.toLowerCase());
    
    return matchesKeyword;
  });

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
              <h1 className="text-2xl font-bold text-gray-800">Educational Opportunities</h1>
              <p className="text-gray-600">Discover universities and scholarships for your career path</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Search Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5" />
              <span>Search Educational Opportunities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="keyword">Keyword</Label>
                <Input
                  id="keyword"
                  placeholder="University, program, or field"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="All countries" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All countries</SelectItem>
                    <SelectItem value="USA">United States</SelectItem>
                    <SelectItem value="UK">United Kingdom</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="Australia">Australia</SelectItem>
                    <SelectItem value="Germany">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="degree">Degree Type</Label>
                <Select value={degreeType} onValueChange={setDegreeType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All degrees" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All degrees</SelectItem>
                    <SelectItem value="bachelor">Bachelor's</SelectItem>
                    <SelectItem value="master">Master's</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="certificate">Certificate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="program">Program</Label>
                <Select value={program} onValueChange={setProgram}>
                  <SelectTrigger>
                    <SelectValue placeholder="All programs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All programs</SelectItem>
                    <SelectItem value="computer science">Computer Science</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="medicine">Medicine</SelectItem>
                    <SelectItem value="law">Law</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="universities" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
          </TabsList>

          <TabsContent value="universities" className="space-y-6">
            <div className="mb-4">
              <p className="text-gray-600">{filteredUniversities.length} universities found</p>
            </div>
            
            {filteredUniversities.map((university) => (
              <Card key={university.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center space-x-2">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                        <span>{university.name}</span>
                      </CardTitle>
                      <CardDescription className="mt-2">
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{university.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>{university.ranking}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{university.tuition}</span>
                          </span>
                        </div>
                      </CardDescription>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Visit Website
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{university.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Programs Offered</h4>
                      <div className="flex flex-wrap gap-1">
                        {university.programs.map((prog, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {prog}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Acceptance Rate</h4>
                      <p className="text-green-600 font-semibold">{university.acceptanceRate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="scholarships" className="space-y-6">
            <div className="mb-4">
              <p className="text-gray-600">{filteredScholarships.length} scholarships found</p>
            </div>
            
            {filteredScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <span>{scholarship.name}</span>
                      </CardTitle>
                      <CardDescription className="mt-2">
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="font-semibold text-green-600">{scholarship.amount}</span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Due: {scholarship.deadline}</span>
                          </span>
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                            {scholarship.category}
                          </span>
                        </div>
                      </CardDescription>
                    </div>
                    <Button className="bg-gradient-to-r from-green-600 to-blue-600">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{scholarship.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Eligibility</h4>
                      <p className="text-sm text-gray-600">{scholarship.eligibility}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Application Process</h4>
                      <p className="text-sm text-gray-600">{scholarship.application}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EducationalOpportunities;
