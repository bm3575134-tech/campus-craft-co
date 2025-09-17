import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const whatsappUrl = "https://wa.me/917988072487";

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-primary">
              The College Project Hub
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("resources")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              variant="whatsapp"
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
            >
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card shadow-lg rounded-md mt-2">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("resources")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  variant="whatsapp"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;