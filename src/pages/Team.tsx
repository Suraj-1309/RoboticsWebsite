import React from "react";
import { ArrowLeft, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import teamMembersData from "@/data/team_members.json";
import executiveMembersData from "@/data/executive_members.json";

const teamMembers = teamMembersData;
const executiveMembers = executiveMembersData;

const BRANCH_NAMES: Record<string, string> = {
  ee: "Electrical Engineering",
  elcom: "Electronics & Communication Engineering",
  mech: "Mechanical Engineering",
  it: "Information Technology",
  cse: "Computer Engineering",
  ipe: "Industrial & Production Engineering",
};

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="mt-10 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
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
              The brilliant minds behind Robotics Club Pantnagar, leading
              innovation and pushing the boundaries of technology at College of
              Technology Pantnagar.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Members */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Executive <span className="text-gradient">Members</span>
            </h2>
            <p className="text-muted-foreground mt-2">Batch 2024-2028</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {executiveMembers.map(
              (
                member: { name: string; branch: string; image?: string },
                index: number
              ) => (
              <div
                key={`${member.name}-${index}`}
                className="card-tech p-5 text-center hover:scale-105 transition-all duration-500"
              >
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 mx-auto rounded-full object-cover mb-3"
                    loading="lazy"
                  />
                )}
                <h3 className="font-semibold text-foreground text-sm sm:text-base leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-2">
                  {BRANCH_NAMES[member.branch] ?? member.branch}
                </p>
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
