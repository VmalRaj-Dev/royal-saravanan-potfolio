import { Facebook, Twitter, Users, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SocialSection = () => {
  const socialStats = [
    {
      platform: "Facebook",
      followers: "4,973 followers",
      icon: Facebook,
      color: "bg-blue-600",
      link: "https://www.facebook.com/rnandakumarbjp"
    },
    {
      platform: "Twitter",
      followers: "Active Updates",
      icon: Twitter,
      color: "bg-sky-500",
      link: "https://twitter.com/rnandakumarbjp"
    }
  ];

  const recentUpdates = [
    {
      type: "Community Event",
      title: "Temple Festival Participation",
      description: "Participated in the Pooram festival celebrations at Bhagavathi Amman Temple in Palakkad district.",
      time: "Recent Activity",
      engagement: "20 interactions"
    },
    {
      type: "Party Meeting",
      title: "District Leadership Conference",
      description: "Conducted organizational meeting with district leaders and coordinators in Coimbatore.",
      time: "This Week",
      engagement: "High Participation"
    },
    {
      type: "Social Initiative",
      title: "Community Outreach Program",
      description: "Engaging with local communities to understand their needs and strengthen grassroots connections.",
      time: "Ongoing",
      engagement: "Positive Response"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-gradient mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our activities and initiatives. Follow us on social media 
            for the latest updates on events, policies, and community engagement.
          </p>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mt-6"></div>
        </div>

        {/* Social Media Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {socialStats.map((social, index) => {
            const Icon = social.icon;
            return (
              <Card key={index} className="card-elegant scale-on-hover fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`${social.color} p-3 rounded-full`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {social.platform}
                        </h3>
                        <p className="text-muted-foreground">
                          {social.followers}
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(social.link, '_blank')}
                    >
                      Follow
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The events and activities are updated as soon as possible on social media. 
                    Keep following us for the latest updates.
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Recent Activities & Updates
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {recentUpdates.map((update, index) => (
              <Card key={index} className="card-elegant fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="bg-primary/10 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-primary">
                        {update.type}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">
                    {update.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {update.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-accent font-medium">
                      {update.time}
                    </span>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <MessageCircle size={14} />
                      <span>{update.engagement}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Join Our Community
              </h3>
              <p className="text-muted-foreground mb-6">
                Be part of our growing community dedicated to positive change and development. 
                Your voice matters in shaping Tamil Nadu's future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-primary"
                  onClick={() => window.open('https://www.facebook.com/rnandakumarbjp', '_blank')}
                >
                  Follow on Facebook
                </Button>
                <Button 
                  className="btn-secondary"
                  onClick={() => document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Become a Volunteer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;