import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowLeft, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {upcomingEvents, pastEvents} from '../data/Events.js';


const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const EventCard = ({ event, isPast = false }: { event: any, isPast?: boolean }) => (
    <div className="group card-tech hover:scale-[1.02] transition-all duration-500 overflow-hidden">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-20`}></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${event.gradient} text-white`}>
            {event.category}
          </span>
        </div>

        {/* Achievement Badge */}
        {event.achievement && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-tech-orange text-white text-xs font-semibold">
              <Trophy size={12} />
              {event.achievement}
            </div>
          </div>
        )}

        {/* Status Overlay for Past Events */}
        {isPast && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-semibold">Event Completed</span>
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Event Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-foreground font-medium">{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Clock className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">{event.time}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-tech-green" />
            <span className="text-muted-foreground">{event.location}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Users className="w-4 h-4 text-tech-orange" />
            <span className="text-muted-foreground">{event.participants}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-border">
          {isPast ? (
            <button className="w-full py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <a href='https://www.instagram.com/theroboticsclub/'>View Event Details</a>
            </button>
          ) : (
            <button className="w-full btn-hero text-sm py-2">
              <a href={event.registrationLink}>Register Now</a>
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
          
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
      <section className="py-8">
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