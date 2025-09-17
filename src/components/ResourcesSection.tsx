import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Video, Download, ExternalLink } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: "Project Development Guide",
      description: "Complete step-by-step guide for developing college projects from scratch to completion.",
      type: "PDF Guide",
      readTime: "15 min read",
      category: "Tutorial"
    },
    {
      icon: <Video className="h-8 w-8 text-accent" />,
      title: "Web Development Basics",
      description: "Learn fundamental concepts of HTML, CSS, and JavaScript with practical examples.",
      type: "Video Tutorial",
      readTime: "45 min watch",
      category: "Web Development"
    },
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "Internship Report Template",
      description: "Professional template for writing comprehensive internship reports with proper formatting.",
      type: "Document Template",
      readTime: "Download",
      category: "Template"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: "Machine Learning Fundamentals",
      description: "Introduction to ML concepts, algorithms, and practical implementation techniques.",
      type: "Blog Article",
      readTime: "20 min read",
      category: "Machine Learning"
    },
    {
      icon: <Video className="h-8 w-8 text-accent" />,
      title: "Cybersecurity Best Practices",
      description: "Essential security practices and tools for developing secure applications.",
      type: "Video Series",
      readTime: "60 min watch",
      category: "Cybersecurity"
    },
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "Project Documentation Guide",
      description: "Learn how to create professional project documentation and technical specifications.",
      type: "Guide",
      readTime: "12 min read",
      category: "Documentation"
    }
  ];

  const categories = ["All", "Tutorial", "Web Development", "Machine Learning", "Cybersecurity", "Template", "Documentation"];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Resources & Tutorials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free resources, tutorials, and guides to help you excel in your projects. 
            Stay updated with the latest trends and best practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-primary text-primary-foreground" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    {resource.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <FileText className="h-3 w-3" />
                    <span>{resource.type}</span>
                  </span>
                  <span>{resource.readTime}</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-md transition-all"
                >
                  {resource.type.includes("Download") || resource.type.includes("Template") ? (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </>
                  ) : (
                    <>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Read More
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6">
            Get the latest tutorials, project ideas, and tips delivered to your WhatsApp. 
            Join our community of learners and never miss an update.
          </p>
          <Button
            size="lg"
            variant="default"
            onClick={() => window.open("https://wa.me/917988072487?text=Hi! I'd like to join your updates community", "_blank")}
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground shadow-lg"
          >
            Join WhatsApp Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;