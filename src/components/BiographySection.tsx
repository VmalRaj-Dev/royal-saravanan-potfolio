import { Award, MapPin, Calendar, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BiographySection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Tamil Nadu State BJP Secretary",
      description: "Leading the party's organizational structure across Tamil Nadu with dedication and strategic vision."
    },
    {
      icon: MapPin,
      title: "Observer Pollachi Loksabha Constituency",
      description: "Overseeing and strengthening the party's presence in the strategically important Pollachi constituency."
    },
    {
      icon: Heart,
      title: "Community Leadership",
      description: "Committed to serving the people of Tamil Nadu through various social welfare initiatives and community programs."
    },
    {
      icon: Calendar,
      title: "Dedicated Service",
      description: "Years of unwavering commitment to the principles of Integral Humanism and service to the nation."
    }
  ];

  return (
    <section id="biography" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-gradient mb-4">
            Biography
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A dedicated leader committed to the principles of Dharma and Integral Humanism, 
            serving the people of Tamil Nadu with unwavering dedication.
          </p>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mt-6"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - About */}
          <div className="slide-up">
            <Card className="card-elegant h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  About R. Nandakumar
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    R. Nandakumar stands as a beacon of dedicated service and principled leadership 
                    in Tamil Nadu's political landscape. As the State BJP Secretary, he embodies 
                    the party's core values of nationalism, development, and good governance.
                  </p>
                  <p>
                    His role as Observer for the Pollachi Loksabha Constituency demonstrates his 
                    strategic importance in strengthening the party's grassroots presence across 
                    Tamil Nadu. Based in Coimbatore, he has been instrumental in building bridges 
                    between diverse communities and fostering inclusive development.
                  </p>
                  <p>
                    Guided by the philosophy of Integral Humanism as envisioned by Pandit 
                    Dheenadayal Upadhaya, R. Nandakumar continues to work towards creating 
                    a society where Dharma sustains and guides all aspects of governance and 
                    social progress.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Key Principles */}
          <div className="slide-up">
            <Card className="card-elegant h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Guiding Principles
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Dharma-Centric Governance</h4>
                      <p className="text-muted-foreground">
                        Believing that righteous principles (Dharma) form the foundation of a just society.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Integral Humanism</h4>
                      <p className="text-muted-foreground">
                        Following Pandit Dheenadayal Upadhaya's vision of holistic human development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Grassroots Connect</h4>
                      <p className="text-muted-foreground">
                        Maintaining strong connections with people at every level of society.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="card-elegant scale-on-hover fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BiographySection;