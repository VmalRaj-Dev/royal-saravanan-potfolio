import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/rnandakumar-profile.jpg";
import lotusLogo from "@/assets/lotus-logo.png";
import LeadersGallery from "./LeadersGallery";

const HeroSection = () => {
  return (
    <>
      {/* Leaders Gallery Section */}
      <LeadersGallery />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255,153,51,0.9) 0%, rgba(255,193,127,0.8) 50%, rgba(76,175,80,0.7) 100%), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        
        {/* Content Container */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left fade-in">
              {/* BJP Header */}
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <img 
                  src={lotusLogo} 
                  alt="BJP Lotus" 
                  className="h-16 w-16 mr-4 scale-on-hover"
                />
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    BHARATIYA JANATA PARTY
                  </h1>
                  <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mt-2"></div>
                </div>
              </div>

              {/* Philosophy Quote */}
              <blockquote className="text-xl md:text-2xl text-white/95 mb-8 italic font-medium">
                "DHARMA SUSTAINS SOCIETY <br />
                <span className="text-accent-light text-lg">(அறம் சமுதாயத்தை காக்கும்)</span>"
              </blockquote>

              {/* Core Principle */}
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/30">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  INTEGRAL HUMANISM IS BASIC PRINCIPLE OF BJP
                </h2>
                <p className="text-white/90 text-lg">
                  CRAFTED BY PANDIT DHEENADAYAL UPADHAYA
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  className="btn-secondary group"
                  onClick={() => document.getElementById('biography')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More About Our Vision
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  className="btn-accent"
                  onClick={() => document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Our Movement
                </Button>
              </div>
            </div>

            {/* Right Column - Profile Card */}
            <div className="flex justify-center lg:justify-end slide-up">
              <div className="card-elegant max-w-md w-full text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-elegant">
                    <img 
                      src={profileImage} 
                      alt="R. Nandakumar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-white p-2 rounded-full">
                    <Star size={18} fill="currentColor" />
                  </div>
                </div>

                {/* Profile Info */}
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  R. NANDAKUMAR
                </h3>
                
                <div className="space-y-2 mb-6">
                  <p className="text-lg font-semibold text-foreground">
                    Tamil Nadu State BJP Secretary
                  </p>
                  <p className="text-muted-foreground">
                    Observer Pollachi Loksabha Constituency
                  </p>
                  <p className="text-accent font-medium text-lg">
                    Coimbatore
                  </p>
                </div>

                {/* Biography Button */}
                <Button 
                  className="btn-primary w-full"
                  onClick={() => document.getElementById('biography')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Read Biography
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;