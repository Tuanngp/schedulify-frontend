'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

interface Creator {
  id: string;
  name: string;
  avatar: string;
  skills: string[];
  rating: number;
  priceRange: string;
  bio: string;
}

const mockCreators: Creator[] = [
  {
    id: '1',
    name: 'John Doe',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    skills: ['Video Editing', 'Motion Graphics'],
    rating: 4.8,
    priceRange: '$50-100/hr',
    bio: 'Professional video editor with 5 years of experience',
  },
  // Add more mock creators here
];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('rating');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Content Creator Marketplace</h1>
      
      <div className="flex gap-6">
        {/* Filter Sidebar */}
        <div className="w-1/4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Skills</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select skills" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video-editing">Video Editing</SelectItem>
                  <SelectItem value="motion-graphics">Motion Graphics</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="illustration">Illustration</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between mt-2">
                <span>${priceRange[0]}/hr</span>
                <span>${priceRange[1]}/hr</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Rating</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Minimum rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                  <SelectItem value="2">2+ Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4">
          {/* Search and Sort */}
          <div className="flex gap-4 mb-6">
            <Input
              type="text"
              placeholder="Search creators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Creators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCreators.map((creator) => (
              <div key={creator.id} className="bg-white rounded-lg shadow p-4">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{creator.name}</h3>
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  <span>★</span>
                  <span className="text-gray-700">{creator.rating}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {creator.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 px-2 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{creator.priceRange}</p>
                <Button className="w-full">View Profile</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 