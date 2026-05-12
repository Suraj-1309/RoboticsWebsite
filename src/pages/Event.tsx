import React, { useState } from 'react';
import { ArrowLeft, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import upcomingEventsData from '@/data/upcoming_events.json';
import completedEventsData from '@/data/completed_events.json';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const upcomingEvents = upcomingEventsData;
  const pastEvents = completedEventsData;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20  relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Our <span className="text-gradient">Events</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us in exciting robotics competitions, workshops, and exhibitions. 
              Build, learn, and compete with fellow robotics enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Event Tabs */}
      <section className="py-7">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-card rounded-2xl p-2 border border-border">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'past'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'upcoming' 
              ? upcomingEvents.map((event, index) => (
                  <div key={event.id} style={{ animationDelay: `${index * 100}ms` }}>
                    <EventCard event={event} />
                  </div>
                ))
              : pastEvents.map((event, index) => (
                  <div key={event.id} style={{ animationDelay: `${index * 100}ms` }}>
                    <EventCard event={event} isPast={true} />
                  </div>
                ))
            }
          </div>
        </div>
      </section>
      <Footer />
    </div>
)
}
export default Events;