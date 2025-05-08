
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { topLists } from '@/data/siteData';
import { ArrowRight } from 'lucide-react';

const TopLists = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-amsterdam-red text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Top Listes Thématiques
          </h1>
          <p className="text-xl max-w-3xl">
            Découvrez Amsterdam à travers nos sélections thématiques : des lieux instagrammables aux musées atypiques,
            en passant par les meilleures adresses pour voir un coucher de soleil inoubliable.
          </p>
        </div>
      </section>

      {/* Lists Preview */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topLists.map((list) => (
              <Card key={list.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img 
                    src={list.image}
                    alt={list.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h2 className="text-2xl font-bold text-white">
                      {list.title}
                    </h2>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    {list.intro}
                  </p>
                  <a 
                    href={`/top-lists/${list.slug}`}
                    className="text-amsterdam-blue font-semibold hover:text-amsterdam-orange flex items-center"
                  >
                    Voir la liste complète <ArrowRight size={16} className="ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 p-8 bg-amsterdam-blue/10 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-amsterdam-blue mb-4">Plus de Listes Bientôt</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Nos experts locaux travaillent sur de nouvelles listes thématiques pour vous aider à découvrir 
              Amsterdam sous toutes ses facettes. Revenez bientôt !
            </p>
          </div>

          {/* Featured List */}
          <div className="mt-16">
            <h2 className="section-title mb-8">
              {topLists[0]?.title || "Lieux Instagrammables à Amsterdam"}
            </h2>

            <div className="space-y-8">
              {(topLists[0]?.items || []).map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="md:w-1/3 h-60 md:h-auto">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="text-xl font-bold text-amsterdam-blue mb-2">
                      {index + 1}. {item.title}
                    </h3>
                    <p className="text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 text-gray-500">
              <p>Et plus encore... Nous ajouterons prochainement l'article complet !</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopLists;
