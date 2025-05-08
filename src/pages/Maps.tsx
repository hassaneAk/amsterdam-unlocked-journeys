
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { coffeeShops, bikeRoutes, secretSpots } from '@/data/siteData';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const Maps = () => {
  const [selectedTab, setSelectedTab] = useState("coffee-shops");
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-amsterdam-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Cartes Interactives d'Amsterdam
          </h1>
          <p className="text-xl max-w-3xl">
            Découvrez Amsterdam à travers nos cartes personnalisées. Explorez les coffee shops emblématiques, 
            les itinéraires à vélo recommandés et les lieux secrets que seuls les locaux connaissent.
          </p>
        </div>
      </section>

      {/* Maps Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Tabs 
            defaultValue="coffee-shops" 
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="coffee-shops">Coffee Shops</TabsTrigger>
              <TabsTrigger value="bike-routes">Balades à Vélo</TabsTrigger>
              <TabsTrigger value="secret-spots">Amsterdam Secret</TabsTrigger>
            </TabsList>
            
            <TabsContent value="coffee-shops" className="animate-fade-in">
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h2 className="text-2xl font-bold text-amsterdam-blue mb-4">
                  Coffee Shops Emblématiques
                </h2>
                <p className="text-gray-700 mb-4">
                  Amsterdam est connue pour ses coffee shops uniques. Découvrez notre sélection des établissements
                  les plus emblématiques et appréciés de la ville.
                </p>
                <div className="bg-amsterdam-orange/10 border border-amsterdam-orange/20 rounded-lg p-4 text-amsterdam-red">
                  <p><strong>Note:</strong> N'oubliez pas que la consommation de cannabis est réglementée aux Pays-Bas. 
                  Informez-vous sur les règles en vigueur avant votre visite.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {coffeeShops.map((shop) => (
                  <Card key={shop.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={shop.image}
                        alt={shop.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-bold mb-2">{shop.name}</h3>
                      <p className="text-gray-600 mb-3">{shop.description}</p>
                      <div className="flex items-start gap-2 text-gray-500">
                        <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                        <span>{shop.address}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Carte Interactive</h3>
                <p className="text-gray-600 mb-4">
                  Désolé, la carte interactive sera disponible prochainement. Nous travaillons à intégrer 
                  une carte dynamique avec tous les coffee shops répertoriés et des fonctionnalités de filtrage.
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Carte en cours de développement</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="bike-routes" className="animate-fade-in">
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h2 className="text-2xl font-bold text-amsterdam-blue mb-4">
                  Balades à Vélo Recommandées
                </h2>
                <p className="text-gray-700 mb-4">
                  Amsterdam est l'une des villes les plus adaptées au vélo au monde. Découvrez nos itinéraires 
                  recommandés pour explorer la ville à deux roues comme un vrai local.
                </p>
                <div className="bg-amsterdam-green/10 border border-amsterdam-green/20 rounded-lg p-4 text-amsterdam-green">
                  <p><strong>Conseil:</strong> Louez un vélo pour la durée de votre séjour plutôt que de payer à la journée
                  pour faire des économies. N'oubliez pas de toujours verrouiller votre vélo.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-8">
                {bikeRoutes.map((route) => (
                  <Card key={route.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                        <img 
                          src={route.image}
                          alt={route.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-5 md:w-2/3">
                        <h3 className="text-xl font-bold mb-2">{route.name}</h3>
                        <p className="text-gray-600 mb-3">{route.description}</p>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-semibold block">Distance</span>
                            <span className="text-gray-500">{route.distance}</span>
                          </div>
                          <div>
                            <span className="font-semibold block">Durée</span>
                            <span className="text-gray-500">{route.duration}</span>
                          </div>
                          <div>
                            <span className="font-semibold block">Difficulté</span>
                            <span className="text-gray-500">{route.difficulty}</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Carte des Itinéraires</h3>
                <p className="text-gray-600 mb-4">
                  Désolé, la carte interactive sera disponible prochainement. Nous travaillons à intégrer 
                  une carte dynamique avec tous les itinéraires tracés et des informations détaillées.
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Carte en cours de développement</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="secret-spots" className="animate-fade-in">
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h2 className="text-2xl font-bold text-amsterdam-blue mb-4">
                  Amsterdam Secret
                </h2>
                <p className="text-gray-700 mb-4">
                  Découvrez les trésors cachés d'Amsterdam que la plupart des touristes ne connaissent pas.
                  Ces lieux uniques vous offriront une perspective authentique et originale de la ville.
                </p>
                <div className="bg-amsterdam-red/10 border border-amsterdam-red/20 rounded-lg p-4 text-amsterdam-red">
                  <p><strong>Astuce:</strong> Visitez ces lieux tôt le matin pour éviter la foule et profiter d'une 
                  expérience plus authentique et tranquille.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {secretSpots.map((spot) => (
                  <Card key={spot.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={spot.image}
                        alt={spot.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-bold mb-2">{spot.name}</h3>
                      <p className="text-gray-600 mb-3 text-sm">{spot.description}</p>
                      <div className="flex items-start gap-2 text-gray-500 text-sm">
                        <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{spot.address}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Carte des Lieux Secrets</h3>
                <p className="text-gray-600 mb-4">
                  Désolé, la carte interactive sera disponible prochainement. Nous travaillons à intégrer 
                  une carte dynamique avec tous les lieux secrets et des informations détaillées.
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Carte en cours de développement</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Maps;
