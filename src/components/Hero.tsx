import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const whatsappUrl = "https://wa.me/917988072487";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Students working on college projects" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/70"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJtMzYgMzQgMC0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJoLTZ2LTJjMC01LjUyIDQuNDgtMTAgMTAtMTBzMTAgNC40OCAxMCAxMHYyaDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The College Project Hub
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-4 font-medium text-primary-foreground/90">
            Your one-stop solution for college projects & internships.
          </p>
          <p className="text-lg sm:text-xl mb-12 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Get professional internship reports, expertly crafted coding projects, and personalized assistance 
            to excel in your academic journey. From Web Development to Machine Learning - we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg px-8 py-4 h-auto shadow-lg"
            >
              <MessageCircle className="mr-2" size={20} />
              Contact on WhatsApp
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 h-auto shadow-lg"
            >
              <ExternalLink className="mr-2" size={20} />
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm text-primary-foreground/80">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm text-primary-foreground/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;