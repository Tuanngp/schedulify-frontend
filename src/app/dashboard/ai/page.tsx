'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContentCreator from './components/ContentCreator';
import { Toaster } from '@/components/ui/toaster';
import ContentHistory from './components/ContentHistory';

export default function AIContentAssistant() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AI Content Assistant</h1>
      
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="create">Tạo Nội Dung</TabsTrigger>
          <TabsTrigger value="history">Lịch Sử</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create">
          <Card>
            <CardContent className="pt-6">
              <ContentCreator />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history">
          <Card>
            <CardContent className="pt-6">
              <ContentHistory />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Toaster />
    </div>
  );
} 