'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Toaster } from '@/components/ui/toaster';
import { motion } from 'framer-motion';
import { History, PenBox, Sparkles } from 'lucide-react';
import ContentCreator from './components/ContentCreator';
import ContentHistory from './components/ContentHistory';

export default function AIContentAssistant() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Content Assistant
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tạo nội dung chất lượng cao với sự hỗ trợ của AI - nhanh chóng và hiệu quả
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="create" className="w-full">
            <TabsList className="mb-6 bg-white/50 backdrop-blur-sm p-1 rounded-full border shadow-sm">
              <TabsTrigger value="create" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-300">
                <PenBox className="w-4 h-4 mr-2" />
                Tạo Nội Dung
              </TabsTrigger>
              <TabsTrigger value="history" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-300">
                <History className="w-4 h-4 mr-2" />
                Lịch Sử
              </TabsTrigger>
            </TabsList>

            <TabsContent value="create">
              <Card className="border-none shadow-lg bg-white/70 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-8">
                  <ContentCreator />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card className="border-none shadow-lg bg-white/70 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-8">
                  <ContentHistory />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      
      <Toaster />
    </div>
  );
} 