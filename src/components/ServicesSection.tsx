import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Code, Users, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const whatsappUrl = "https://wa.me/917988072487";

  const services = [
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "Internship Report Files",
      description: "Complete internship reports with professional formatting, certificates, and documentation. Perfect for academic submissions.",
      features: ["Professional formatting", "Authentic certificates", "Complete documentation", "Quick delivery"]
    },
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: "Coding Projects",
      description: "Expert-level coding projects in Web Development, Cybersecurity, and Machine Learning with full source code and documentation.",
      features: ["Web Development", "Cybersecurity projects", "Machine Learning models", "Complete source code"]
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Customized Assistance",
      description: "Personalized project help, one-on-one tutorials, and step-by-step guidance tailored to your specific requirements.",
      features: ["One-on-one tutorials", "Custom project development", "Step-by-step guidance", "24/7 support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your college project and internship needs. 
            Professional quality, delivered on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
              <CardHeader>
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full mt-6 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground group-hover:shadow-md transition-all"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Enquire on WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need something specific? We offer customized solutions for all academic requirements.
          </p>
          <Button
            size="lg"
            variant="default"
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Discuss Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;