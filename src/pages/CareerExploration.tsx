
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Heart, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const CareerExploration = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 'technology',
      name: 'Technology',
      careers: ['Software Developer', 'Data Scientist', 'Cybersecurity Specialist'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      careers: ['Doctor', 'Nurse', 'Physical Therapist'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'business',
      name: 'Business',
      careers: ['Marketing Manager', 'Financial Analyst', 'Project Manager'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      careers: ['Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer'],
      color: 'from-orange-500 to-orange-600'
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
              <h1 className="text-2xl font-bold text-gray-800">Career Exploration</h1>
              <p className="text-gray-600">Discover careers by categories and interests</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Explore Careers</CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search careers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Heart className="w-4 h-4 mr-2" />
                View Favorites
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Career Categories */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                      <Grid className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle>{category.name}</CardTitle>
                      <CardDescription>{category.careers.length} careers available</CardDescription>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.careers.map((career, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm">{career}</span>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
                <Button className={`w-full mt-4 bg-gradient-to-r ${category.color}`}>
                  Explore {category.name} Careers
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerExploration;
