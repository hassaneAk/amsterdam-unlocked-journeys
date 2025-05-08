
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Map, Star, Calendar } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1605101943206-05c8f4e64598)',
            filter: 'brightness(0.65)'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              Découvrez <span className="text-amsterdam-orange">Amsterdam</span> Autrement
            </h1>
            <p className="text-xl text-white mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Explorez la capitale néerlandaise à travers des expériences uniques, 
              des cartes interactives et des conseils d'initiés.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/maps">
                <Button className="bg-amsterdam-orange hover:bg-amber-600 text-white py-2 px-4 rounded-md text-lg">
                  Explorer les Cartes
                </Button>
              </Link>
              <Link to="/quiz">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white py-2 px-4 rounded-md text-lg backdrop-blur-sm">
                  Faire le Quiz
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-custom">
        <h2 className="section-title text-center mb-12">Découvrez nos Fonctionnalités</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="card-hover">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-amsterdam-blue/10 p-4 rounded-full mb-4">
                <Map size={32} className="text-amsterdam-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cartes Interactives</h3>
              <p className="text-gray-600 mb-4">
                Explorez Amsterdam avec nos cartes personnalisées : coffee shops emblématiques, 
                balades à vélo et lieux secrets.
              </p>
              <Link to="/maps" className="text-amsterdam-blue font-semibold hover:text-amsterdam-orange flex items-center mt-auto">
                Voir les cartes <ArrowRight size={16} className="ml-1" />
              </Link>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-amsterdam-red/10 p-4 rounded-full mb-4">
                <Star size={32} className="text-amsterdam-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quiz Interactif</h3>
              <p className="text-gray-600 mb-4">
                Découvrez quel type de voyageur vous êtes à Amsterdam et recevez 
                des recommandations personnalisées.
              </p>
              <Link to="/quiz" className="text-amsterdam-blue font-semibold hover:text-amsterdam-orange flex items-center mt-auto">
                Faire le quiz <ArrowRight size={16} className="ml-1" />
              </Link>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-amsterdam-green/10 p-4 rounded-full mb-4">
                <Calendar size={32} className="text-amsterdam-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Top Listes</h3>
              <p className="text-gray-600 mb-4">
                Parcourez nos sélections thématiques : lieux instagrammables, musées atypiques, 
                rooftops et bien plus.
              </p>
              <Link to="/top-lists" className="text-amsterdam-blue font-semibold hover:text-amsterdam-orange flex items-center mt-auto">
                Voir les listes <ArrowRight size={16} className="ml-1" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Spots */}
      <section className="bg-amsterdam-beige py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-6">Lieux Emblématiques</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            Découvrez quelques-uns des endroits incontournables d'Amsterdam, sélectionnés par nos experts locaux.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Vondelpark",
                image: "https://images.unsplash.com/photo-1567610095935-89ba81239e3a",
                category: "Parcs"
              },
              {
                name: "Rijksmuseum",
                image: "https://images.unsplash.com/photo-1559176865-44ead3482d61",
                category: "Musées"
              },
              {
                name: "Jordaan",
                image: "https://images.unsplash.com/photo-1572991844621-c5ffe0aaeef1",
                category: "Quartiers"
              },
              {
                name: "Canal Prinsengracht",
                image: "https://images.unsplash.com/photo-1584006682522-dc2ddba7f0b7",
                category: "Canaux"
              },
            ].map((spot, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg h-64 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={spot.image} 
                  alt={spot.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                  <span className="text-amsterdam-orange text-sm font-medium">{spot.category}</span>
                  <h3 className="text-white text-xl font-bold">{spot.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title mb-4">Prêt à Explorer Amsterdam ?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Commencez votre aventure avec nos cartes interactives, quiz personnalisés et guides exclusifs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/maps">
              <Button className="bg-amsterdam-blue hover:bg-blue-700 text-white py-2 px-6 rounded-md text-lg">
                Voir les Cartes
              </Button>
            </Link>
            <Link to="/quiz">
              <Button className="bg-amsterdam-orange hover:bg-amber-600 text-white py-2 px-6 rounded-md text-lg">
                Faire le Quiz
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
