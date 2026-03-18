import React from 'react';
import { Instagram, ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import teamMembers from "../data/TeamMembers.js"


const Team = () => {
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
                <Users className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Meet Our <span className="text-gradient">Team</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The brilliant minds behind Robotics Club Pantnagar, leading innovation and 
              pushing the boundaries of technology at College of Technology Pantnagar.
            </p>
          </div>
        </div>
      </section>
    
      {/* Team Grid */}

      <section className="py-16">
        <div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.position}
                className="group relative card-tech hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-5 rounded-2xl transition-opacity duration-300 group-hover:opacity-10`}></div>
                
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.gradient} p-1`}>
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className={`absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.gradient} opacity-20 blur-xl transition-all duration-300 group-hover:opacity-40`}></div>
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider">
                      {member.position}
                    </p>
                  </div>

                  {/* Instagram Handle */}
                  <div className="pt-4 border-t border-border">
                    <a 
                      href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300 group-hover:scale-110"
                    >
                      <Instagram size={16} />
                      <span className="text-sm font-medium">{member.instagram}</span>
                    </a>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;