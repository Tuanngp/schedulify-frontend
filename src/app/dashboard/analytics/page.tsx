'use client';

import { useEffect, useState } from 'react';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { DateRange, PerformanceData, Platform, PlatformData, PostType, TopContent } from './types';

export default function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });

  const [platform, setPlatform] = useState<Platform>('all');
  const [postType, setPostType] = useState<PostType>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<{
    performance: PerformanceData[];
    platforms: PlatformData[];
    demographics: { age: string; value: number }[];
    topContent: TopContent[];
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          startDate: dateRange.startDate.toISOString(),
          endDate: dateRange.endDate.toISOString(),
          platform,
          postType,
        });

        const response = await fetch(`/api/analytics?${params}`);
        if (!response.ok) {
          throw new Error('Failed to fetch analytics data');
        }

        const analyticsData = await response.json();
        setData(analyticsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dateRange, platform, postType]);

  const handleDateRangeChange = (ranges: RangeKeyDict) => {
    const selection = ranges.selection;
    if (selection.startDate && selection.endDate) {
      setDateRange({
        startDate: selection.startDate,
        endDate: selection.endDate,
        key: 'selection'
      });
    }
  };

  const handleExportCSV = () => {
    if (!data) return;

    const csvContent = "data:text/csv;charset=utf-8," + 
      Object.entries(data).map(([key, value]) => 
        JSON.stringify(value)
      ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "analytics_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleExportPDF = () => {
    // TODO: Implement PDF export using jsPDF
    console.log('Exporting PDF...');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      
      {/* Filters Section */}
      <div className="mb-8 flex flex-wrap gap-4 items-center">
        <DateRangePicker
          ranges={[dateRange]}
          onChange={handleDateRangeChange}
          className="bg-white rounded-lg shadow"
        />
        
        <select 
          value={platform}
          onChange={(e) => setPlatform(e.target.value as Platform)}
          className="p-2 border rounded-lg"
        >
          <option value="all">All Platforms</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter</option>
          <option value="linkedin">LinkedIn</option>
        </select>

        <select
          value={postType}
          onChange={(e) => setPostType(e.target.value as PostType)}
          className="p-2 border rounded-lg"
        >
          <option value="all">All Post Types</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
          <option value="text">Text</option>
        </select>

        <div className="flex gap-2">
          <button
            onClick={handleExportCSV}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Export CSV
          </button>
          <button
            onClick={handleExportPDF}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Performance Metrics</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data.performance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="engagement" stroke="#8884d8" />
                <Line type="monotone" dataKey="followers" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Platform Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={data.platforms}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Post Performance</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data.performance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="posts" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Detailed Analysis Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Detailed Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Engagement Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data.performance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="engagement" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="followers" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Audience Demographics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.demographics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Top Performing Content */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Top Performing Content</h2>
        <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Content</th>
                <th className="text-left p-2">Platform</th>
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Engagement</th>
                <th className="text-left p-2">Reach</th>
                <th className="text-left p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.topContent.map((content) => (
                <tr key={content.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{content.title}</td>
                  <td className="p-2">{content.platform}</td>
                  <td className="p-2">{content.type}</td>
                  <td className="p-2">{content.engagement.toLocaleString()}</td>
                  <td className="p-2">{content.reach.toLocaleString()}</td>
                  <td className="p-2">{new Date(content.publishedAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
} 