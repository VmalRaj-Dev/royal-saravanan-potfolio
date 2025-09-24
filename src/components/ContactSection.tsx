import { Mail, MapPin, Phone, Facebook, Twitter, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Perundurai", "Tamil Nadu", "India"],
      action: "View on Map"
    },
    {
      icon: Phone,
      title: "Phone & Mobile",
      details: ["Available through", "BJP Tamil Nadu Office", "Official channels"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email & Online",
      details: ["Social Media Direct Messages", "Facebook: Royal K Saravanan", "Twitter: @royalksaravanan"],
      action: "Send Message"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://www.facebook.com/saravanan.bjp.925/",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Twitter,
      name: "Twitter", 
      link: "https://x.com/royalksaravanan",
      color: "bg-sky-500 hover:bg-sky-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-gradient mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you. 
            Reach out through any of the channels below or send us a message.
          </p>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mt-6"></div>
        </div>

        {/* Contact Methods */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="card-elegant scale-on-hover fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-1 mb-6">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 slide-up">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Send className="mr-3 h-6 w-6" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll respond as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        value={contactForm.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        value={contactForm.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={contactForm.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      value={contactForm.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="btn-primary w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="slide-up">
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Office Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        Available for meetings by appointment<br />
                        Community events as scheduled
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Response Time</h4>
                      <p className="text-sm text-muted-foreground">
                        We typically respond to messages within 24-48 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Follow Us
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Stay updated with our latest activities
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full justify-start"
                          onClick={() => window.open(social.link, '_blank')}
                        >
                          <Icon className="h-4 w-4 mr-3" />
                          {social.name}
                        </Button>
                      );
                    })}
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-primary rounded-lg text-white text-sm">
                    <p className="font-medium mb-1">Stay Connected</p>
                    <p className="opacity-90">
                      Follow us on social media for real-time updates on events, 
                      initiatives, and community programs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;