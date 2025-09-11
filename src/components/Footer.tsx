import { Heart, Facebook, Twitter, Mail, MapPin } from "lucide-react";
import lotusLogo from "@/assets/lotus-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Biography", href: "#biography" },
    { name: "Volunteer", href: "#volunteer" },
    { name: "Contact", href: "#contact" }
  ];

  const importantLinks = [
    { name: "BJP Tamil Nadu", href: "https://www.bjp.org/tamilnadu" },
    { name: "BJP National", href: "https://www.bjp.org" },
    { name: "Government of India", href: "https://www.india.gov.in" },
    { name: "Tamil Nadu Government", href: "https://www.tn.gov.in" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-accent text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={lotusLogo} 
                alt="BJP Lotus Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold">BJP Tamil Nadu</h3>
                <p className="text-white/80 text-sm">R. Nandakumar</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Dedicated to serving Tamil Nadu with the principles of Dharma and Integral Humanism. 
              Working towards a developed and prosperous state for all.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/rnandakumarbjp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/rnandakumarbjp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Important Links</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-white/60" />
                <div>
                  <p className="text-white/80">
                    Tamil Nadu State BJP Secretary<br />
                    Observer Pollachi Loksabha<br />
                    Coimbatore, Tamil Nadu
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-white/60" />
                <p className="text-white/80">
                  Connect via social media
                </p>
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-sm italic text-white/90">
                "Dharma sustains society"
              </p>
              <p className="text-xs text-white/70 mt-1">
                அறம் சமுதாயத்தை காக்கும்
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/80">
                © 2024 R. Nandakumar - BJP Tamil Nadu. All rights reserved.
              </p>
              <p className="text-sm text-white/60 mt-1">
                Committed to Integral Humanism and Nation Building
              </p>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <span>Made with</span>
              <Heart size={16} className="text-red-400" fill="currentColor" />
              <span>for Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;