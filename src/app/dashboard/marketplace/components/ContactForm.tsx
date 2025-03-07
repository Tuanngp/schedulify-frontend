'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ContactFormProps {
  creatorName: string;
  onClose: () => void;
  onSubmit: (data: ContactFormData) => void;
}

export interface ContactFormData {
  projectTitle: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

export default function ContactForm({ creatorName, onClose, onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    projectTitle: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-[600px] max-h-[90vh] overflow-y-auto">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Contact {creatorName}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Project Title
              </label>
              <Input
                value={formData.projectTitle}
                onChange={(e) =>
                  setFormData({ ...formData, projectTitle: e.target.value })
                }
                placeholder="Enter project title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Project Type
              </label>
              <Select
                value={formData.projectType}
                onValueChange={(value) =>
                  setFormData({ ...formData, projectType: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video">Video Production</SelectItem>
                  <SelectItem value="animation">Animation</SelectItem>
                  <SelectItem value="graphics">Graphic Design</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Budget Range
              </label>
              <Select
                value={formData.budget}
                onValueChange={(value) =>
                  setFormData({ ...formData, budget: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<500">Less than $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5000+">$5,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Project Timeline
              </label>
              <Select
                value={formData.timeline}
                onValueChange={(value) =>
                  setFormData({ ...formData, timeline: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">Less than 1 week</SelectItem>
                  <SelectItem value="short">1-2 weeks</SelectItem>
                  <SelectItem value="medium">2-4 weeks</SelectItem>
                  <SelectItem value="long">1+ month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Project Description
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Describe your project requirements, goals, and any specific details..."
                rows={5}
                required
              />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Send Request</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 