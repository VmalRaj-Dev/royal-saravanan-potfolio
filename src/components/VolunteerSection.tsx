import { useState } from "react";
import { Users, Heart, Target, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const VolunteerSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you soon about volunteer opportunities.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const volunteerOpportunities = [
    {
      icon: Users,
      title: "Community Outreach",
      description: "Help organize and participate in community events and awareness programs.",
      commitment: "Flexible timing"
    },
    {
      icon: Heart,
      title: "Social Welfare",
      description: "Assist in various social welfare initiatives and community support programs.",
      commitment: "Weekly involvement"
    },
    {
      icon: Target,
      title: "Campaign Support",
      description: "Support election campaigns and political awareness initiatives.",
      commitment: "During election periods"
    }
  ];

  const benefits = [
    "Be part of meaningful change in Tamil Nadu",
    "Develop leadership and organizational skills",
    "Connect with like-minded individuals",
    "Contribute to nation-building activities",
    "Training and development opportunities",
    "Recognition for outstanding service"
  ];

  return (
    <section id="volunteer" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-gradient mb-4">
            Volunteer With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our mission to build a stronger Tamil Nadu. Be part of the movement 
            that's working towards positive change and development in our communities.
          </p>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mt-6"></div>
        </div>

        {/* Volunteer Opportunities */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {volunteerOpportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <Card key={index} className="card-elegant scale-on-hover fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {opportunity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    {opportunity.description}
                  </p>
                  <div className="bg-accent/10 px-3 py-2 rounded-full inline-block">
                    <span className="text-sm font-medium text-accent">
                      {opportunity.commitment}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits and Form Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div className="slide-up">
            <Card className="card-elegant h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Heart className="mr-3 h-6 w-6" />
                  Why Volunteer With Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-gradient-primary rounded-lg text-white">
                  <h4 className="font-bold mb-2">Make a Difference Today</h4>
                  <p className="text-sm opacity-90">
                    Every volunteer contribution, no matter how small, creates ripples of positive 
                    change in our society. Join us in building a better Tamil Nadu.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Volunteer Form */}
          <div className="slide-up">
            <Card className="card-elegant h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Join Our Team
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get in touch with you about volunteer opportunities.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your interests and how you'd like to contribute..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="btn-primary w-full">
                    Submit Application
                  </Button>
                </form>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>Contact through social media</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>Available through BJP Tamil Nadu office</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Coimbatore, Tamil Nadu</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;