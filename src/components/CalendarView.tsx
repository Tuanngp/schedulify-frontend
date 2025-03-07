'use client';

import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { format } from 'date-fns';
import { Post, Platform, PostStatus } from '@/types/post';
import CreatePostModal from './post/CreatePostModal';
import '../styles/calendar.css';

interface CalendarViewProps {
  posts: Post[];
  onPostUpdate: (post: Post) => void;
  onPostCreate: (post: Post) => void;
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  post: Post | null;
}

// Định nghĩa mảng các nền tảng được hỗ trợ
const SUPPORTED_PLATFORMS: Platform[] = ['facebook', 'instagram', 'tiktok', 'zalo'];

const CalendarView: React.FC<CalendarViewProps> = ({ posts, onPostUpdate, onPostCreate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState<'dayGridMonth' | 'timeGridWeek' | 'timeGridDay'>('dayGridMonth');
  const [filters, setFilters] = useState({
    platforms: [] as Platform[],
    status: [] as PostStatus[],
  });
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    post: null,
  });
  const calendarRef = useRef<any>(null);

  const handleDateSelect = (selectInfo: any) => {
    setSelectedDate(selectInfo.start);
    setSelectedPost(null);
    setIsModalOpen(true);
  };

  const handleEventDrop = (dropInfo: any) => {
    const updatedPost = {
      ...dropInfo.event.extendedProps,
      scheduledDate: dropInfo.event.start,
    };
    onPostUpdate(updatedPost);
  };

  const handleEventClick = (clickInfo: any) => {
    setSelectedPost(clickInfo.event.extendedProps);
    setIsModalOpen(true);
  };

  const handleEventMouseEnter = (mouseEnterInfo: any) => {
    const rect = mouseEnterInfo.el.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: rect.right + 10,
      y: rect.top,
      post: mouseEnterInfo.event.extendedProps,
    });
  };

  const handleEventMouseLeave = () => {
    setTooltip({
      visible: false,
      x: 0,
      y: 0,
      post: null,
    });
  };

  const getEventClassNames = (eventInfo: any) => {
    const platform = eventInfo.event.extendedProps.platform;
    const status = eventInfo.event.extendedProps.status;
    
    return [
      `platform-${platform.toLowerCase()}`,
      `status-${status.toLowerCase()}`,
    ];
  };

  const handleFormSubmit = (postData: Post) => {
    if (selectedPost) {
      onPostUpdate(postData);
    } else {
      onPostCreate(postData);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="h-full relative">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex space-x-2">
          {/* Platform filters */}
          {SUPPORTED_PLATFORMS.map((platform) => (
            <button
              key={platform}
              className={`px-3 py-1 rounded ${
                filters.platforms.includes(platform) ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setFilters(prev => ({
                ...prev,
                platforms: prev.platforms.includes(platform)
                  ? prev.platforms.filter(p => p !== platform)
                  : [...prev.platforms, platform]
              }))}
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex space-x-2">
          {/* Status filters */}
          {Object.values(PostStatus).map((status) => (
            <button
              key={status}
              className={`px-3 py-1 rounded ${
                filters.status.includes(status) ? 'bg-green-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setFilters(prev => ({
                ...prev,
                status: prev.status.includes(status)
                  ? prev.status.filter(s => s !== status)
                  : [...prev.status, status]
              }))}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialView={view}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        events={posts.filter(post => 
          (filters.platforms.length === 0 || filters.platforms.includes(post.platform)) &&
          (filters.status.length === 0 || filters.status.includes(post.status))
        ).map(post => ({
          title: post.title,
          start: post.scheduledDate,
          extendedProps: post,
        }))}
        select={handleDateSelect}
        eventDrop={handleEventDrop}
        eventClick={handleEventClick}
        eventMouseEnter={handleEventMouseEnter}
        eventMouseLeave={handleEventMouseLeave}
        eventClassNames={getEventClassNames}
      />

      {tooltip.visible && tooltip.post && (
        <div
          className="calendar-event-tooltip"
          style={{
            top: `${tooltip.y}px`,
            left: `${tooltip.x}px`,
          }}
        >
          <h4>{tooltip.post.title}</h4>
          <p>Platform: {tooltip.post.platform.charAt(0).toUpperCase() + tooltip.post.platform.slice(1)}</p>
          <p>Status: {tooltip.post.status}</p>
          <p>Date: {format(new Date(tooltip.post.scheduledDate), 'PPp')}</p>
          {tooltip.post.tags && tooltip.post.tags.length > 0 && (
            <p>Tags: {tooltip.post.tags.join(', ')}</p>
          )}
        </div>
      )}

      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        initialDate={selectedDate || undefined}
        post={selectedPost || undefined}
      />
    </div>
  );
};

export default CalendarView; 