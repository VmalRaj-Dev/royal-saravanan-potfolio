import { Star } from "lucide-react";
import modieader from "@/assets/leader-modi.jpg";
import shahLeader from "@/assets/leader-shah.jpg";
import femaleLeader from "@/assets/leader-female.jpg";
import profileImage from "@/assets/rnandakumar-profile.jpg";

const LeadersGallery = () => {
  const leaders = [
    {
      name: "Narendra Modi",
      position: "Prime Minister",
      image: modieader,
      isHighlighted: true
    },
    {
      name: "Amit Shah", 
      position: "Home Minister",
      image: shahLeader,
      isHighlighted: true
    },
    {
      name: "Senior Leader",
      position: "BJP Leader",
      image: femaleLeader,
      isHighlighted: false
    },
    {
      name: "R. Nandakumar",
      position: "TN State Secretary",
      image: profileImage,
      isHighlighted: true
    },
    {
      name: "Senior Leader",
      position: "BJP Leader", 
      image: modieader,
      isHighlighted: false
    },
    {
      name: "Senior Leader",
      position: "BJP Leader",
      image: shahLeader,
      isHighlighted: false
    },
    {
      name: "Senior Leader",
      position: "BJP Leader",
      image: femaleLeader,
      isHighlighted: false
    },
    {
      name: "Senior Leader",
      position: "BJP Leader",
      image: profileImage,
      isHighlighted: false
    },
    {
      name: "Senior Leader",
      position: "BJP Leader",
      image: modieader,
      isHighlighted: false
    },
    {
      name: "Senior Leader",
      position: "BJP Leader",
      image: shahLeader,
      isHighlighted: false
    },
    {
      name: "Senior Leader",
      position: "BJP Leader",
      image: femaleLeader,
      isHighlighted: false
    }
  ];

  return (
    <div className="bg-gradient-to-r from-primary/5 via-background to-accent/5 py-8 border-b border-border/30">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Our Leadership
          </h3>
          <p className="text-muted-foreground">
            Dedicated leaders serving the nation with commitment and vision
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="relative overflow-hidden">
          {/* Scrolling Animation Container */}
          <div className="flex animate-scroll space-x-6 pb-4">
            {[...leaders, ...leaders].map((leader, index) => (
              <div
                key={`${leader.name}-${index}`}
                className="flex-shrink-0 text-center group"
              >
                <div className="relative mb-3">
                  {/* Leader Photo */}
                  <div 
                    className={`
                      relative rounded-full overflow-hidden border-4 shadow-lg
                      transition-all duration-300 group-hover:scale-105
                      ${leader.isHighlighted 
                        ? 'w-24 h-24 md:w-28 md:h-28 border-primary/50 shadow-primary/20' 
                        : 'w-20 h-20 md:w-24 md:h-24 border-border/30 shadow-soft'
                      }
                    `}
                  >
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay for highlighted leaders */}
                    {leader.isHighlighted && (
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    )}
                  </div>
                  
                  {/* Star indicator for key leaders */}
                  {leader.isHighlighted && (
                    <div className="absolute -top-1 -right-1 bg-primary text-white p-1.5 rounded-full shadow-lg">
                      <Star size={12} fill="currentColor" />
                    </div>
                  )}
                </div>
                
                {/* Leader Info */}
                <div className="min-w-[100px]">
                  <h4 className={`
                    font-semibold text-sm leading-tight mb-1
                    ${leader.isHighlighted ? 'text-primary' : 'text-foreground'}
                  `}>
                    {leader.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {leader.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlays for smooth scroll effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default LeadersGallery;