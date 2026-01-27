import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Vul alle verplichte velden in",
        description: "Naam, e-mail en bericht zijn verplicht.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Bericht verzonden!",
      description: "We nemen binnen 24u contact met je op."
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };
  return <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vertel ons over je project — we denken graag mee
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Laten we praten</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">Plan een vrijblijvend gesprek of stuur een bericht. </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">E-mail</h4>
                      <p className="text-muted-foreground">hello@mavix.be</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                
              </Card>

              <Card className="shadow-soft">
                
              </Card>
            </div>

            {/* CTA Highlight */}
            <div className="bg-gradient-hero rounded-xl p-6 text-primary-foreground">
              <h4 className="font-semibold mb-2">Klaar om te bouwen?</h4>
              <p className="opacity-90 text-sm">
                Van eerste gesprek tot oplevering — wij regelen het
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-medium">
            
            
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;