'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Star, MessageSquare, Heart, Filter, Search, Sliders } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Creator {
  id: string;
  name: string;
  avatar: string;
  skills: string[];
  rating: number;
  reviews: number;
  priceRange: string;
  bio: string;
  availability: string;
  completionRate: number;
  responseTime: string;
  featured: boolean;
  verified: boolean;
  languages: string[];
  location: string;
}

// More realistic mock data
const mockCreators: Creator[] = [
  {
    id: '1',
    name: 'John Doe',
    avatar: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
    skills: ['Video Editing', 'Motion Graphics', 'VFX'],
    rating: 4.8,
    reviews: 143,
    priceRange: '$50-100/hr',
    bio: 'Professional video editor with 5+ years of experience specializing in commercial and promotional content.',
    availability: 'Available now',
    completionRate: 98,
    responseTime: '< 2 hours',
    featured: true,
    verified: true,
    languages: ['English', 'Spanish'],
    location: 'Los Angeles, CA'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    avatar: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
    skills: ['Photography', 'Retouching', 'Lighting'],
    rating: 4.9,
    reviews: 87,
    priceRange: '$75-120/hr',
    bio: 'Professional photographer specializing in portrait and product photography with a clean, minimalist style.',
    availability: 'Available in 2 days',
    completionRate: 100,
    responseTime: '< 6 hours',
    featured: false,
    verified: true,
    languages: ['English', 'Mandarin'],
    location: 'New York, NY'
  },
  {
    id: '3',
    name: 'Miguel Rodriguez',
    avatar: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
    skills: ['Illustration', 'Character Design', 'Concept Art'],
    rating: 4.7,
    reviews: 62,
    priceRange: '$60-90/hr',
    bio: 'Versatile illustrator with a passion for creating vibrant characters and immersive worlds for games and animation.',
    availability: 'Available next week',
    completionRate: 95,
    responseTime: '< 12 hours',
    featured: false,
    verified: true,
    languages: ['English', 'Portuguese'],
    location: 'Miami, FL'
  },
  {
    id: '4',
    name: 'Emma Wilson',
    avatar: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
    skills: ['Content Writing', 'Copywriting', 'SEO'],
    rating: 4.6,
    reviews: 55,
    priceRange: '$40-80/hr',
    bio: 'Experienced content writer helping brands find their voice and connect with audiences through compelling storytelling.',
    availability: 'Available now',
    completionRate: 97,
    responseTime: '< 3 hours',
    featured: true,
    verified: true,
    languages: ['English', 'French'],
    location: 'Toronto, Canada'
  },
  {
    id: '5',
    name: 'David Kim',
    avatar: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
    skills: ['Motion Graphics', '3D Animation', 'After Effects'],
    rating: 4.9,
    reviews: 112,
    priceRange: '$70-120/hr',
    bio: 'Motion graphics specialist with background in 3D animation, creating eye-catching visual content for brands.',
    availability: 'Available in 3 days',
    completionRate: 99,
    responseTime: '< 5 hours',
    featured: false,
    verified: true,
    languages: ['English', 'Korean'],
    location: 'Seattle, WA'
  },
  {
    id: '6',
    name: 'Aisha Patel',
    avatar: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
    skills: ['Social Media Marketing', 'Content Strategy', 'Analytics'],
    rating: 4.7,
    reviews: 78,
    priceRange: '$55-95/hr',
    bio: 'Strategic social media marketer helping brands build meaningful online presence and engagement.',
    availability: 'Available now',
    completionRate: 96,
    responseTime: '< 1 hour',
    featured: true,
    verified: true,
    languages: ['English', 'Hindi'],
    location: 'Chicago, IL'
  }
];

// All available skills for filtering
const allSkills = [
  'Video Editing', 'Motion Graphics', 'VFX', 'Photography', 'Retouching',
  'Lighting', 'Illustration', 'Character Design', 'Concept Art',
  'Content Writing', 'Copywriting', 'SEO', '3D Animation',
  'After Effects', 'Social Media Marketing', 'Content Strategy', 'Analytics'
];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [minRating, setMinRating] = useState('0');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredCreators, setFilteredCreators] = useState<Creator[]>(mockCreators);
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const creatorsPerPage = 6;

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Handle skill selection
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill) 
        : [...prev, skill]
    );
  };

  // Handle favorites
  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fid => fid !== id) 
        : [...prev, id]
    );
  };

  // Filter and sort creators
  useEffect(() => {
    let result = [...mockCreators];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(creator => 
        creator.name.toLowerCase().includes(query) || 
        creator.bio.toLowerCase().includes(query) || 
        creator.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }
    
    // Filter by skills
    if (selectedSkills.length > 0) {
      result = result.filter(creator => 
        selectedSkills.some(skill => creator.skills.includes(skill))
      );
    }
    
    // Filter by price range
    result = result.filter(creator => {
      const minPrice = parseInt(creator.priceRange.split('-')[0].replace(/\D/g, ''));
      return minPrice >= priceRange[0] && minPrice <= priceRange[1];
    });
    
    // Filter by minimum rating
    if (minRating !== '0') {
      result = result.filter(creator => creator.rating >= parseInt(minRating));
    }
    
    // Filter by verification status
    if (showVerifiedOnly) {
      result = result.filter(creator => creator.verified);
    }
    
    // Filter by availability
    if (availabilityFilter !== 'all') {
      result = result.filter(creator => 
        availabilityFilter === 'now' 
          ? creator.availability.includes('now') 
          : !creator.availability.includes('now')
      );
    }
    
    // Sort results
    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        result.sort((a, b) => {
          const aPrice = parseInt(a.priceRange.split('-')[0].replace(/\D/g, ''));
          const bPrice = parseInt(b.priceRange.split('-')[0].replace(/\D/g, ''));
          return aPrice - bPrice;
        });
        break;
      case 'price-high':
        result.sort((a, b) => {
          const aPrice = parseInt(a.priceRange.split('-')[0].replace(/\D/g, ''));
          const bPrice = parseInt(b.priceRange.split('-')[0].replace(/\D/g, ''));
          return bPrice - aPrice;
        });
        break;
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        break;
    }
    
    setFilteredCreators(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, selectedSkills, priceRange, minRating, sortBy, showVerifiedOnly, availabilityFilter]);

  // Pagination
  const indexOfLastCreator = currentPage * creatorsPerPage;
  const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
  const currentCreators = filteredCreators.slice(indexOfFirstCreator, indexOfLastCreator);
  const totalPages = Math.ceil(filteredCreators.length / creatorsPerPage);

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedSkills([]);
    setPriceRange([0, 200]);
    setMinRating('0');
    setSortBy('featured');
    setShowVerifiedOnly(false);
    setAvailabilityFilter('all');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section with Gradient */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-8 mb-12 shadow-xl">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="text-white">
                <h1 className="text-4xl font-bold mb-2 animate-fade-in">Content Creator Marketplace</h1>
                <p className="text-purple-100 text-lg">Find the perfect creative professional for your project</p>
              </div>
              <div className="mt-6 md:mt-0 flex gap-3">
                <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                  How It Works
                </Button>
                <Button className="bg-white text-purple-600 hover:bg-purple-50 transition-all duration-300">
                  Post a Project
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent" />
          </div>
        </div>
      
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden lg:block w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4 border border-gray-100 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Filters</h2>
                <Button variant="ghost" size="sm" onClick={resetFilters} className="text-gray-500 hover:text-purple-600 transition-colors">
                  Reset All
                </Button>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium mb-2">Skills</h3>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {allSkills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <Checkbox 
                          id={`skill-${skill}`} 
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => toggleSkill(skill)}
                        />
                        <Label htmlFor={`skill-${skill}`} className="ml-2">
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Price Range ($/hr)</h3>
                  <Slider
                    defaultValue={[0, 200]}
                    max={200}
                    step={5}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}+</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Minimum Rating</h3>
                  <Select value={minRating} onValueChange={setMinRating}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Any Rating</SelectItem>
                      <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      <SelectItem value="4">4+ Stars</SelectItem>
                      <SelectItem value="3.5">3.5+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Availability</h3>
                  <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Availability</SelectItem>
                      <SelectItem value="now">Available Now</SelectItem>
                      <SelectItem value="scheduled">Scheduled Availability</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="verified-only" 
                    checked={showVerifiedOnly}
                    onCheckedChange={() => setShowVerifiedOnly(!showVerifiedOnly)}
                  />
                  <Label htmlFor="verified-only">Verified creators only</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {/* Search and Sort Bar */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by name, skills, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden">
                        <Filter className="h-4 w-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                        <SheetDescription>
                          Refine your search results
                        </SheetDescription>
                      </SheetHeader>
                      
                      <div className="py-4 space-y-6">
                        <div>
                          <h3 className="font-medium mb-2">Skills</h3>
                          <div className="space-y-2 max-h-40 overflow-y-auto">
                            {allSkills.map((skill) => (
                              <div key={skill} className="flex items-center">
                                <Checkbox 
                                  id={`mobile-skill-${skill}`} 
                                  checked={selectedSkills.includes(skill)}
                                  onCheckedChange={() => toggleSkill(skill)}
                                />
                                <Label htmlFor={`mobile-skill-${skill}`} className="ml-2">
                                  {skill}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium mb-2">Price Range ($/hr)</h3>
                          <Slider
                            defaultValue={[0, 200]}
                            max={200}
                            step={5}
                            value={priceRange}
                            onValueChange={setPriceRange}
                          />
                          <div className="flex justify-between mt-2">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}+</span>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium mb-2">Minimum Rating</h3>
                          <Select value={minRating} onValueChange={setMinRating}>
                            <SelectTrigger>
                              <SelectValue placeholder="Any rating" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">Any Rating</SelectItem>
                              <SelectItem value="4.5">4.5+ Stars</SelectItem>
                              <SelectItem value="4">4+ Stars</SelectItem>
                              <SelectItem value="3.5">3.5+ Stars</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="mobile-verified-only" 
                            checked={showVerifiedOnly}
                            onCheckedChange={() => setShowVerifiedOnly(!showVerifiedOnly)}
                          />
                          <Label htmlFor="mobile-verified-only">Verified creators only</Label>
                        </div>
                        
                        <Button className="w-full" onClick={resetFilters}>Reset All Filters</Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
              
              {/* Active Filters */}
              {(selectedSkills.length > 0 || showVerifiedOnly || availabilityFilter !== 'all' || minRating !== '0' || (priceRange[0] > 0 || priceRange[1] < 200)) && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-sm text-gray-500">Active filters:</span>
                    
                    {selectedSkills.map(skill => (
                      <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                        {skill}
                        <button 
                          onClick={() => toggleSkill(skill)}
                          className="ml-1 rounded-full hover:bg-gray-200 h-4 w-4 inline-flex items-center justify-center"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                    
                    {showVerifiedOnly && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Verified Only
                        <button 
                          onClick={() => setShowVerifiedOnly(false)}
                          className="ml-1 rounded-full hover:bg-gray-200 h-4 w-4 inline-flex items-center justify-center"
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                    
                    {availabilityFilter !== 'all' && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {availabilityFilter === 'now' ? 'Available Now' : 'Scheduled'}
                        <button 
                          onClick={() => setAvailabilityFilter('all')}
                          className="ml-1 rounded-full hover:bg-gray-200 h-4 w-4 inline-flex items-center justify-center"
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                    
                    {minRating !== '0' && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {minRating}+ Stars
                        <button 
                          onClick={() => setMinRating('0')}
                          className="ml-1 rounded-full hover:bg-gray-200 h-4 w-4 inline-flex items-center justify-center"
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                    
                    {(priceRange[0] > 0 || priceRange[1] < 200) && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        ${priceRange[0]}-${priceRange[1]}/hr
                        <button 
                          onClick={() => setPriceRange([0, 200])}
                          className="ml-1 rounded-full hover:bg-gray-200 h-4 w-4 inline-flex items-center justify-center"
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={resetFilters}
                      className="text-xs"
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Results Summary */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-500">
                Showing {filteredCreators.length} creators 
                {filteredCreators.length !== mockCreators.length && ` (filtered from ${mockCreators.length})`}
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">View:</span>
                <Button variant="ghost" size="sm">
                  <i className="grid-view-icon"></i>
                </Button>
                <Button variant="ghost" size="sm">
                  <i className="list-view-icon"></i>
                </Button>
              </div>
            </div>

            {/* Creators Grid */}
            {filteredCreators.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCreators.map((creator) => (
                  <Card key={creator.id} className="group overflow-hidden rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {creator.featured && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold px-4 py-1.5 absolute right-0 top-4 z-10 rounded-l-full shadow-md">
                        Featured
                      </div>
                    )}
                    
                    <div className="relative">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className={`absolute top-2 right-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 ${
                          favorites.includes(creator.id) ? 'text-red-500 hover:text-red-600' : 'text-gray-400 hover:text-gray-600'
                        }`}
                        onClick={() => toggleFavorite(creator.id)}
                      >
                        <Heart 
                          className={`transition-all duration-300 ${favorites.includes(creator.id) ? 'fill-current scale-110' : 'scale-100'}`} 
                          size={18} 
                        />
                      </Button>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center text-lg font-semibold">
                            {creator.name}
                            {creator.verified && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <span className="inline-flex ml-1.5 items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
                                      <span className="text-white text-xs">✓</span>
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Verified Creator</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </CardTitle>
                          <CardDescription className="flex gap-2 items-center mt-1">
                            <div className="flex items-center text-yellow-400">
                              <Star className="fill-current" size={16} />
                              <span className="ml-1 text-gray-700 font-medium">{creator.rating}</span>
                            </div>
                            <span className="text-gray-400">({creator.reviews} reviews)</span>
                          </CardDescription>
                        </div>
                        
                        <Badge 
                          variant={creator.availability.includes('now') ? 'default' : 'outline'}
                          className={`${
                            creator.availability.includes('now') 
                              ? 'bg-green-500 hover:bg-green-600' 
                              : 'border-gray-200 text-gray-600'
                          } transition-colors duration-300`}
                        >
                          {creator.availability}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {creator.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {creator.bio}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
                        <div>
                          <p className="text-gray-400 mb-1">Price Range</p>
                          <p className="font-semibold text-gray-900">{creator.priceRange}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 mb-1">Location</p>
                          <p className="font-semibold text-gray-900">{creator.location}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 mb-1">Response Time</p>
                          <p className="font-semibold text-gray-900">{creator.responseTime}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 mb-1">Completion</p>
                          <p className="font-semibold text-gray-900">{creator.completionRate}%</p>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex gap-3 pt-4">
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
                        Contact
                      </Button>
                      <Button variant="outline" className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50 transition-colors duration-300">
                        View Profile
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-xl shadow-lg text-center border border-gray-100">
                <div className="mb-6 text-gray-400">
                  <Search size={64} className="mx-auto mb-6 opacity-50" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">No creators found</h3>
                <p className="text-gray-500 mb-6 text-lg">
                  We couldn't find any creators matching your filters. Try adjusting your search criteria.
                </p>
                <Button 
                  onClick={resetFilters}
                  className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
                >
                  Reset Filters
                </Button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredCreators.length > creatorsPerPage && (
              <div className="mt-12 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) setCurrentPage(currentPage - 1);
                        }}
                        className={`${
                          currentPage === 1 
                            ? 'pointer-events-none opacity-50' 
                            : 'hover:bg-purple-50 text-purple-600'
                        } transition-colors duration-300`}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          className={`${
                            currentPage === page
                              ? 'bg-purple-600 text-white'
                              : 'hover:bg-purple-50 text-purple-600'
                          } transition-colors duration-300`}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                        }}
                        className={`${
                          currentPage === totalPages 
                            ? 'pointer-events-none opacity-50' 
                            : 'hover:bg-purple-50 text-purple-600'
                        } transition-colors duration-300`}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}