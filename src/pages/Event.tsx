import { useState }  from 'react';
import { Calendar, MapPin, Clock, Users, ArrowLeft, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const upcomingEvents = [
  
  {
    id: 2,
    title: 'Laser Tag 2026',
    date: '2026-05-15',
    time: '02:00 PM - 05:00 PM',
    location: 'NCT Waiting Hall',
    description: 'A high-intensity laser tag showdown where strategy, reflexes, and precision decide the ultimate champion!',
    category: 'Competition',
    participants: '100+ Teams',
    image: 'https://res.cloudinary.com/dw7ck0xbj/image/upload/v1778473158/laser_tag_xcaqrb.webp',
    gradient: 'from-accent to-tech-purple',
    registrationLink : 'https://forms.gle/Mfp2ntQNwzprT5V57'
  },
  {
    id: 3,
    title: 'TrailBlazer 2026',
    date: '2026-05-15',
    time: '02:00 PM - 05:00 PM',
    location: 'NCT 205B, B200AB',
    description: 'A fast-paced line-following bot competition where precision, speed, and smart design lead the way to victory!',    category: 'Competition',
    participants: '100+ Teams',
    image: 'https://res.cloudinary.com/dw7ck0xbj/image/upload/v1778473159/trail_blazer_qk2wi8.webp',
    gradient: 'from-accent to-tech-purple',
    registrationLink : 'https://docs.google.com/forms/d/e/1FAIpQLSd_B6KQJKR_O1HkYLZbbD7LXRPkV3ENeX-g8LTNzxvWh1CoVA/viewform'
  },
  {
    id: 1,
    title: 'Bare Bone Bots 2026',
    date: '2026-05-16',
    time: '02:00 PM - 05:00 PM',
    location: 'NCT 205B, B200AB',
    description: 'A minimalistic bot-making competition where your creativity matters more than expensive hardware!',
    category: 'Competition',
    participants: '100+ Teams',
    image: 'https://res.cloudinary.com/dw7ck0xbj/image/upload/v1778473159/bare_bone_bots_wfavuw.webp',
    gradient: 'from-accent to-tech-purple',
    registrationLink : 'https://docs.google.com/forms/d/e/1FAIpQLSdU-EN32Q_GzGa4hqf2yDpEBzemzWQqg_YvvI5I1dH7mEyg-w/viewform'
  },
];

const pastEvents = [
   {
    id: 5,
    title: 'Inbotics 2025',
    date: '2025-11-25',
    time: '02:00 PM - 05:00 PM',
    location: '114 BN Hall, NCT',
    description: 'Intensive 5-day bootcamp covering Arduino programming and hardware interfacing.',
    category: 'Workshop',
    participants: '90+ Visitors',
    image: 'https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/events/Inbotics.webp',
    gradient: 'from-accent to-tech-purple',
    status: 'completed'
  },
  {
    id: 4,
    title: 'Induction 2025',
    date: '2025-09-18',
    time: '02:00 PM - 05:00 PM',
    location: '205 B, NCT',
    description: 'Interview the new candidate to participate into The Robotics Club.',
    category: 'Induction',
    participants: '50+ Candidates',
    image: 'https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/events/Induction2025.webp',
    gradient: 'from-accent to-tech-purple',
    status : 'Completed'
  },
  {
    id: 3,
    title: 'Inbotics 2025',
    date: '2025-03-18',
    time: '02:00 PM',
    location: 'College of Technology',
    description: 'Intensive 5-day bootcamp covering Arduino programming and hardware interfacing.',
    category: 'Workshop',
    participants: '120+ Visitors',
    image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/events/Inbotics2025.webp",
    gradient: 'from-tech-purple to-accent',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Induction 2024',
    date: '2024-10-23',
    time: '02:00 PM',
    location: 'College of Technology',
    description: 'Interview the new candidate to participate into The Robotics Club.',
    category: 'Induction',
    participants: '50+ Candidates',
    image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/events/Induction2024.webp",
    gradient: 'from-tech-green to-primary',
    status: 'Completed'
  },
  {
    id: 1,
    title: 'Ranbhoomi 2024',
    date: '2024-05-25',
    time: '10:00 AM',
    location: 'College of Technology',
    description: 'Cultural event.',
    category: 'Competition',
    participants: '20+ Teams',
    image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/events/Ranbhoomi2024.webp",
    gradient: 'from-primary to-tech-orange',
    status: 'Completed',
  }
];

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