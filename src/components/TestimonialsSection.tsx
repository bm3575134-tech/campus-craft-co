import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      university: "Delhi University",
      rating: 5,
      text: "Excellent service! Got my machine learning project completed with full documentation. The quality was outstanding and delivery was on time. Highly recommended!",
      project: "Machine Learning Model"
    },
    {
      name: "Rahul Verma",
      role: "IT Student", 
      university: "Mumbai University",
      rating: 5,
      text: "Amazing support for my web development project. The team provided step-by-step guidance and the final output exceeded my expectations. Great communication throughout!",
      project: "Web Development"
    },
    {
      name: "Ananya Patel",
      role: "Engineering Student",
      university: "IIT Delhi",
      rating: 5,
      text: "Perfect internship reports with authentic certificates. Professional formatting and quick turnaround. Will definitely use their services again for future projects.",
      project: "Internship Report"
    },
    {
      name: "Vikash Kumar",
      role: "Cybersecurity Student",
      university: "Bangalore Institute",
      rating: 5,
      text: "Outstanding cybersecurity project with complete source code and documentation. The team's expertise is evident in the quality of work delivered.",
      project: "Cybersecurity Project"
    },
    {
      name: "Sneha Gupta",
      role: "MCA Student",
      university: "Pune University",
      rating: 5,
      text: "Fantastic customized assistance! They helped me understand complex concepts and guided me through my project development. Excellent tutorial support!",
      project: "Custom Project Assistance"
    },
    {
      name: "Arjun Singh",
      role: "Final Year Student",
      university: "Chennai Institute",
      rating: 5,
      text: "Professional service with 24/7 support. Got help with multiple projects throughout my semester. Quality work and reasonable pricing. Highly satisfied!",
      project: "Multiple Projects"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from students who have successfully completed their projects with our help. 
            Join our community of satisfied learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50 relative overflow-hidden">
              <CardContent className="p-6 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-8 w-8 text-accent" />
                </div>

                {/* Rating */}
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Project Type Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {testimonial.project}
                  </span>
                </div>

                {/* Student Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-primary text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {testimonial.university}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;