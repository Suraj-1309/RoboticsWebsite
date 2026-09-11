import { Instagram } from 'lucide-react';

interface TeamCardProps {
  member: {
    position: string;
    name: string;
    batch?: string;
    image: string;
    instagram: string;
    gradient: string;
  };
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group relative card-tech hover:scale-105 transition-all duration-500">
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
          {member.batch && (
            <p className="text-xs text-muted-foreground mt-1">
              {member.batch}
            </p>
          )}
        </div>

        {/* Instagram Handle */}
        <div className="pt-4 border-t border-border">
          {member.instagram && member.instagram !== '@' ? (
            <a 
              href={`https://instagram.com/${member.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300 group-hover:scale-110"
            >
              <Instagram size={16} />
              <span className="text-sm font-medium">{member.instagram}</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-muted-foreground/50 text-sm">
              <Instagram size={16} />
              <span>Not available</span>
            </span>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
    </div>
  );
}
