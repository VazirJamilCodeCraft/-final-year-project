
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, MapPin, Briefcase, Clock, DollarSign, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const JobSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp Solutions",
      location: "New York, NY",
      type: "Full-time",
      salary: "$70,000 - $95,000",
      category: "Technology",
      posted: "2 days ago",
      description: "Looking for a skilled Frontend Developer to join our dynamic team...",
      requirements: ["React.js", "TypeScript", "Tailwind CSS", "3+ years experience"]
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$85,000 - $120,000",
      category: "Analytics",
      posted: "1 day ago",
      description: "Seeking a Data Scientist to analyze complex datasets and provide insights...",
      requirements: ["Python", "Machine Learning", "SQL", "Statistics"]
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Design Studio",
      location: "Los Angeles, CA",
      type: "Contract",
      salary: "$60,000 - $85,000",
      category: "Design",
      posted: "3 days ago",
      description: "Creative UX Designer needed to enhance user experience across platforms...",
      requirements: ["Figma", "User Research", "Prototyping", "Design Systems"]
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "StartupTech",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$75,000 - $100,000",
      category: "Technology",
      posted: "1 week ago",
      description: "Join our innovative team as a Software Engineer building next-gen solutions...",
      requirements: ["JavaScript", "Node.js", "AWS", "5+ years experience"]
    },
    {
      id: 5,
      title: "Marketing Analyst",
      company: "Growth Marketing Inc",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$55,000 - $75,000",
      category: "Business",
      posted: "4 days ago",
      description: "Analyze marketing campaigns and provide data-driven recommendations...",
      requirements: ["Google Analytics", "Excel", "SQL", "Marketing Experience"]
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesKeyword = !searchKeyword || 
      job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      job.company.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      job.requirements.some(req => req.toLowerCase().includes(searchKeyword.toLowerCase()));
    
    const matchesLocation = !location || 
      job.location.toLowerCase().includes(location.toLowerCase());
    
    const matchesCategory = !category || job.category === category;
    
    return matchesKeyword && matchesLocation && matchesCategory;
  });

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
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
              <h1 className="text-2xl font-bold text-gray-800">Job Search</h1>
              <p className="text-gray-600">Find opportunities that match your career goals</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Search Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Search & Filter Jobs</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="keyword">Keyword</Label>
                <Input
                  id="keyword"
                  placeholder="Job title, company, or skills"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="City, state, or remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All categories</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Analytics">Analytics</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Medical">Medical</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Results */}
        <div className="mb-4">
          <p className="text-gray-600">{filteredJobs.length} jobs found</p>
        </div>

        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl flex items-center space-x-2">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      <span>{job.title}</span>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="font-semibold">{job.company}</span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </span>
                      </div>
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSaveJob(job.id)}
                      className={savedJobs.includes(job.id) ? "bg-red-50 text-red-600" : ""}
                    >
                      <Heart className={`w-4 h-4 mr-1 ${savedJobs.includes(job.id) ? "fill-current" : ""}`} />
                      {savedJobs.includes(job.id) ? "Saved" : "Save"}
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Apply
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.requirements.map((req, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {req}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">{job.category}</span>
                  <span>Posted {job.posted}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
