import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Instagram, MessageCircle, QrCode } from "lucide-react";

const ContactSection = () => {
  const whatsappUrl = "https://wa.me/917988072487";

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us through WhatsApp for instant support 
            and personalized assistance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-whatsapp/10 rounded-full">
                      <MessageCircle className="h-6 w-6 text-whatsapp" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary">WhatsApp</h3>
                      <p className="text-muted-foreground">Instant messaging & support</p>
                    </div>
                  </div>
                  <Button
                    variant="whatsapp"
                    className="w-full"
                    onClick={() => window.open(whatsappUrl, "_blank")}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary">Phone</h3>
                      <p className="text-muted-foreground">Direct call support</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold text-primary">+91 7988072487</p>
                    <p className="text-sm text-muted-foreground mt-1">Available 24/7</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Instagram className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary">Instagram</h3>
                      <p className="text-muted-foreground">Follow for updates</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-primary">@thecollegeprojecthub</p>
                    <Button
                      variant="outline"
                      className="mt-2 w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      onClick={() => window.open("https://instagram.com/thecollegeprojecthub", "_blank")}
                    >
                      <Instagram className="mr-2 h-4 w-4" />
                      Follow on Instagram
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp QR Code Section */}
            <div className="text-center">
              <Card className="border-2 border-whatsapp/20 bg-whatsapp/5">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-whatsapp/10 rounded-full mb-4">
                      <QrCode className="h-12 w-12 text-whatsapp" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      Scan QR Code
                    </h3>
                    <p className="text-muted-foreground">
                      Scan with your phone camera to connect instantly on WhatsApp
                    </p>
                  </div>

                  {/* QR Code Placeholder */}
                  <div className="bg-white p-6 rounded-lg shadow-inner mx-auto max-w-xs">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <QrCode className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">
                          QR Code for WhatsApp
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      variant="whatsapp"
                      size="lg"
                      className="w-full"
                      onClick={() => window.open(whatsappUrl, "_blank")}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Or Click to Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Excel in Your Projects?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of successful students who have achieved their academic goals with our expert assistance. 
              Contact us now and take the first step towards project excellence.
            </p>
            <Button
              size="lg"
              variant="default"
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg px-8"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Your Project Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;