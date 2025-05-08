
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-amsterdam-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            À Propos d'Amsterdam Unlocked
          </h1>
          <p className="text-xl max-w-3xl">
            Découvrez notre mission : vous aider à vivre des expériences inoubliables à Amsterdam, 
            loin des sentiers battus et des attractions touristiques classiques.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container max-w-4xl mx-auto px-4 py-12">
        <Card className="mb-8">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amsterdam-blue mb-4">Notre Mission</h2>
            <p className="text-gray-700 mb-6">
              Amsterdam Unlocked est né d'une passion pour la ville d'Amsterdam et d'une frustration face aux 
              guides touristiques classiques qui ne révèlent souvent qu'une infime partie de ce que cette 
              ville extraordinaire a à offrir.
            </p>
            <p className="text-gray-700 mb-6">
              Notre mission est simple : vous aider à découvrir Amsterdam comme un local, en vous proposant 
              des itinéraires personnalisés, des lieux insolites et des expériences authentiques qui sortent 
              des sentiers battus.
            </p>
            <p className="text-gray-700">
              Que vous soyez un amateur d'art, un passionné d'histoire, un fêtard ou un amoureux de la nature, 
              nous avons créé des contenus sur mesure pour vous aider à vivre votre Amsterdam.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amsterdam-blue mb-4">Qui Sommes-Nous ?</h2>
            <p className="text-gray-700 mb-6">
              Nous sommes une équipe de passionnés d'Amsterdam, composée d'expatriés tombés amoureux de la ville 
              et de locaux qui en connaissent les moindres recoins. Notre équipe comprend :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Des guides touristiques professionnels</li>
              <li>Des blogueurs voyage spécialisés sur les Pays-Bas</li>
              <li>Des photographes urbains</li>
              <li>Des amateurs de bonne cuisine et de belles terrasses</li>
            </ul>
            <p className="text-gray-700">
              Notre diversité est notre force : chacun apporte sa perspective unique pour vous offrir 
              un contenu riche, varié et authentique.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amsterdam-blue mb-4">Ce Que Nous Proposons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-amsterdam-red mb-2">Cartes interactives</h3>
                <p className="text-gray-700 mb-4">
                  Des cartes personnalisées pour vous orienter vers les coffee shops emblématiques, 
                  les plus beaux itinéraires à vélo et les lieux secrets d'Amsterdam.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amsterdam-red mb-2">Quiz interactifs</h3>
                <p className="text-gray-700 mb-4">
                  Découvrez quel type de voyageur vous êtes à Amsterdam et recevez des recommandations sur mesure.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amsterdam-red mb-2">Top listes thématiques</h3>
                <p className="text-gray-700 mb-4">
                  Des sélections soigneusement élaborées pour vous faire découvrir le meilleur d'Amsterdam 
                  selon vos centres d'intérêt.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amsterdam-red mb-2">Conseils d'initiés</h3>
                <p className="text-gray-700 mb-4">
                  Des astuces et recommandations pour vivre une expérience authentique, économiser du temps et de l'argent.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amsterdam-blue mb-4">Contactez-Nous</h2>
            <p className="text-gray-700 mb-6">
              Vous avez des questions, des suggestions ou vous souhaitez partager votre expérience à Amsterdam ? 
              N'hésitez pas à nous contacter, nous serions ravis d'échanger avec vous !
            </p>
            <p className="text-gray-700">
              Pour nous contacter, rendez-vous sur notre <a href="/contact" className="text-amsterdam-blue hover:text-amsterdam-orange underline">page contact</a> ou 
              envoyez-nous directement un email à <a href="mailto:info@amsterdam-unlocked.com" className="text-amsterdam-blue hover:text-amsterdam-orange underline">info@amsterdam-unlocked.com</a>.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;
