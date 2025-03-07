'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface SuggestionPanelProps {
  content: string;
}

interface Suggestions {
  headlines: string[];
  hashtags: string[];
  captions: string[];
  ctas: string[];
}

export default function SuggestionPanel({ content }: SuggestionPanelProps) {
  const [suggestions, setSuggestions] = useState<Suggestions>({
    headlines: [],
    hashtags: [],
    captions: [],
    ctas: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (content) {
      generateSuggestions();
    }
  }, [content]);

  const generateSuggestions = async () => {
    setIsLoading(true);
    try {
      // TODO: Integrate with OpenAI API
      const response = await fetch('/api/generate-suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) throw new Error('Lỗi khi tạo gợi ý');

      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Lỗi:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!content) return null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Gợi ý cải thiện</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center p-4">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Tiêu đề</h3>
                <div className="space-y-2">
                  {suggestions.headlines.map((headline, index) => (
                    <div key={index} className="p-2 bg-secondary rounded-lg flex justify-between items-center">
                      <p>{headline}</p>
                      <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(headline)}>
                        Sao chép
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Hashtags</h3>
                <div className="flex flex-wrap gap-2">
                  {suggestions.hashtags.map((hashtag, index) => (
                    <Badge key={index} variant="secondary" className="cursor-pointer" onClick={() => navigator.clipboard.writeText(hashtag)}>
                      {hashtag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Cải thiện caption</h3>
                <div className="space-y-2">
                  {suggestions.captions.map((caption, index) => (
                    <div key={index} className="p-2 bg-secondary rounded-lg flex justify-between items-center">
                      <p>{caption}</p>
                      <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(caption)}>
                        Sao chép
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Call-to-action</h3>
                <div className="space-y-2">
                  {suggestions.ctas.map((cta, index) => (
                    <div key={index} className="p-2 bg-secondary rounded-lg flex justify-between items-center">
                      <p>{cta}</p>
                      <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(cta)}>
                        Sao chép
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 