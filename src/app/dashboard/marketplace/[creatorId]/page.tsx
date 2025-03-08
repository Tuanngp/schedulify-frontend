'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import ContactForm, { ContactFormData } from '../components/ContactForm';
interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

const mockCreator = {
  id: '1',
  name: 'John Doe',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
  coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
  bio: 'Professional video editor and motion graphics designer with 5 years of experience working with major brands.',
  skills: ['Video Editing', 'Motion Graphics', 'After Effects', 'Premiere Pro'],
  priceRange: '$50-100/hr',
  rating: 4.8,
  totalReviews: 124,
  portfolio: [
    {
      id: '1',
      title: 'Brand Commercial',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      description: 'Created a 30-second commercial for a major sports brand',
    },
    // Add more portfolio items
  ],
  reviews: [
    {
      id: '1',
      user: 'Jane Smith',
      rating: 5,
      comment: 'Excellent work! Delivered the project ahead of schedule.',
      date: '2024-02-15',
    },
    // Add more reviews
  ],
};

export default function CreatorProfilePage() {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactSubmit = (data: ContactFormData) => {
    // Handle form submission here
    console.log('Form submitted:', data);
    setShowContactForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="relative mb-8">
        <div className="h-48 w-full rounded-lg bg-gray-200 overflow-hidden">
          <img
            src={mockCreator.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 left-8 flex items-end gap-4">
          <Avatar className="w-24 h-24 border-4 border-white">
            <AvatarImage src={mockCreator.avatar} />
            <AvatarFallback>{mockCreator.name[0]}</AvatarFallback>
          </Avatar>
          <div className="mb-2">
            <h1 className="text-2xl font-bold">{mockCreator.name}</h1>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★</span>
              <span>{mockCreator.rating}</span>
              <span className="text-gray-500">({mockCreator.totalReviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 mt-12">
        {/* Main Content */}
        <div className="flex-1">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio">
              <div className="grid grid-cols-2 gap-6">
                {mockCreator.portfolio.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-6">
                {mockCreator.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{review.user}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          <span>{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">About Me</h2>
                  <p className="text-gray-600 mb-6">{mockCreator.bio}</p>

                  <h3 className="font-semibold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {mockCreator.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-semibold mb-2">Price Range</h3>
                  <p className="text-gray-600">{mockCreator.priceRange}</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="w-1/3">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Hire {mockCreator.name}</h2>
              <p className="text-gray-600 mb-6">
                Starting from {mockCreator.priceRange}
              </p>
              <Button
                className="w-full mb-4"
                onClick={() => setShowContactForm(true)}
              >
                Contact Creator
              </Button>
              <Button variant="outline" className="w-full">
                Save to Favorites
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm
          creatorName={mockCreator.name}
          onClose={() => setShowContactForm(false)}
          onSubmit={handleContactSubmit}
        />
      )}
    </div>
  );
} 