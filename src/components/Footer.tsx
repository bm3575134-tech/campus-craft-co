import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  const whatsappUrl = "https://wa.me/917988072487";
  
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">The College Project Hub</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Your trusted partner for college projects, internship reports, and academic success. 
                We provide professional assistance to help students excel in their academic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="secondary"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://instagram.com/thecollegeprojecthub", "_blank")}
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow Us
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("resources")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
                  >
                    Resources
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-primary-foreground/80">+91 7988072487</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-4 w-4 text-whatsapp" />
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
                  >
                    WhatsApp Chat
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="h-4 w-4 text-accent" />
                  <a 
                    href="https://instagram.com/thecollegeprojecthub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
                  >
                    @thecollegeprojecthub
                  </a>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="mt-6 p-3 bg-whatsapp/20 rounded-lg border border-whatsapp/30">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Available Now</span>
                </div>
                <p className="text-xs text-primary-foreground/80">
                  24/7 support for urgent requirements
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} The College Project Hub. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
              >
                Terms of Service
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline flex items-center"
              >
                Support <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Float Button for Mobile */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <Button
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground shadow-2xl rounded-full p-4 h-auto"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;