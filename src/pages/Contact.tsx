
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.",
      duration: 5000,
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-amsterdam-orange text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Contactez-Nous
          </h1>
          <p className="text-xl max-w-3xl">
            Une question sur Amsterdam ? Une suggestion pour notre site ? Ou simplement envie de partager 
            votre expérience avec nous ? N'hésitez pas à nous contacter !
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-amsterdam-blue mb-6">Envoyez-nous un message</h2>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                        Prénom
                      </label>
                      <Input 
                        id="firstname"
                        type="text"
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom
                      </label>
                      <Input 
                        id="lastname"
                        type="text"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="votre-email@exemple.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <Input 
                      id="subject"
                      type="text"
                      placeholder="Sujet de votre message"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Votre message..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="bg-amsterdam-blue hover:bg-blue-700 w-full py-6 text-lg"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-amsterdam-blue mb-6">Informations de contact</h2>
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">info@amsterdam-unlocked.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Réseaux sociaux</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-amsterdam-blue hover:text-amsterdam-orange">Instagram</a>
                      <a href="#" className="text-amsterdam-blue hover:text-amsterdam-orange">Facebook</a>
                      <a href="#" className="text-amsterdam-blue hover:text-amsterdam-orange">Twitter</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <h2 className="text-2xl font-bold text-amsterdam-blue mb-6">FAQ</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-amsterdam-blue">Quand est le meilleur moment pour visiter Amsterdam ?</h3>
                    <p className="text-gray-600 mt-2">
                      Le printemps (avril à mai) est idéal avec les tulipes en fleur et le temps agréable. 
                      L'automne (septembre à novembre) est également une bonne période avec moins de touristes.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-amsterdam-blue">Comment se déplacer dans la ville ?</h3>
                    <p className="text-gray-600 mt-2">
                      Le vélo est le mode de transport privilégié à Amsterdam. Les transports en commun 
                      (tram, métro, bus) sont également efficaces. N'oubliez pas la carte OV-chipkaart pour vos déplacements.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-amsterdam-blue">Est-ce que vous proposez des visites guidées ?</h3>
                    <p className="text-gray-600 mt-2">
                      Actuellement, nous ne proposons pas de visites guidées, mais nous travaillons sur des partenariats 
                      avec des guides locaux. Restez informés en vous inscrivant à notre newsletter !
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
