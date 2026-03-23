import React, { useState } from 'react';
import { Instagram, ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import teamMembers from "../data/TeamMembers.js"

interface TeamMember {
  position: string;
  name: string;
  image: string;
  instagram: string;
  gradient: string;
  year?: string;
}

const Team = () => {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // Extract unique years from data, put 'All' first
  const years: string[] = [
    'All',
    ...Array.from(new Set((teamMembers as TeamMember[]).map((m) => m.year).filter(Boolean))) as string[]
  ];

  // Filter members based on selected year
  const filteredMembers: TeamMember[] = selectedYear === 'All'
    ? teamMembers
    : (teamMembers as TeamMember[]).filter((m) => m.year === selectedYear);

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
        <div className="max-w-7xl mx-auto px-4">

          {/* SELECT Button + Dropdown */}
          <div className="flex justify-end mb-10 relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary text-primary font-semibold text-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300"
            >
              {selectedYear === 'All' ? 'SELECT YEAR' : `Year: ${selectedYear}`}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-12 right-0 z-50 bg-card border border-border rounded-xl shadow-lg overflow-hidden min-w-[140px]">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => { setSelectedYear(year); setDropdownOpen(false); }}
                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors duration-200
                      ${selectedYear === year
                        ? 'bg-primary text-white'
                        : 'text-foreground hover:bg-muted'
                      }`}
                  >
                    {year === 'All' ? 'All Years' : `Year ${year}`}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
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
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider">{member.position}</p>
                    {member.year && (
                      <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {member.year}
                      </span>
                    )}
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

          {/* Empty state */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-24 text-muted-foreground text-lg">
              No team members found for <span className="text-primary font-semibold">{selectedYear}</span>.
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
