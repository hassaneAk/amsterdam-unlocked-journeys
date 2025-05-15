import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    type: string;
  }[];
}

interface QuizState {
  currentQuestion: number;
  answers: Record<number, string>;
  completed: boolean;
  result: string | null;
}

const Quiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    completed: false,
    result: null
  });

  const handleAnswer = (optionId: string, typeValue: string) => {
    setQuizState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [prev.currentQuestion]: typeValue
      },
      currentQuestion: 
        prev.currentQuestion < questions.length - 1 
        ? prev.currentQuestion + 1 
        : prev.currentQuestion,
      completed: prev.currentQuestion === questions.length - 1
    }));

    if (quizState.currentQuestion === questions.length - 1) {
      calculateResult();
    }
  };

  const calculateResult = () => {
    // Count the occurrences of each type
    const typeCount: Record<string, number> = {};
    
    Object.values(quizState.answers).forEach(type => {
      typeCount[type] = (typeCount[type] || 0) + 1;
    });
    
    // Find the most common type
    let maxCount = 0;
    let result = '';
    
    Object.entries(typeCount).forEach(([type, count]) => {
      if (count > maxCount) {
        maxCount = count;
        result = type;
      }
    });
    
    setQuizState(prev => ({
      ...prev,
      result
    }));
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      answers: {},
      completed: false,
      result: null
    });
  };

  const questions: Question[] = [
    {
      id: 0,
      question: "Comment préférez-vous découvrir un nouveau lieu ?",
      options: [
        { id: "q1a", text: "En suivant un guide organisé", type: "culturel" },
        { id: "q1b", text: "En errant sans plan précis", type: "aventurier" },
        { id: "q1c", text: "En visitant les lieux les plus populaires", type: "classique" },
        { id: "q1d", text: "En cherchant des endroits hors des sentiers battus", type: "explorateur" }
      ]
    },
    {
      id: 1,
      question: "Quel type d'hébergement préférez-vous ?",
      options: [
        { id: "q2a", text: "Un hôtel de luxe avec service complet", type: "luxe" },
        { id: "q2b", text: "Une auberge de jeunesse pour rencontrer des gens", type: "social" },
        { id: "q2c", text: "Un appartement local pour vivre comme un habitant", type: "authentique" },
        { id: "q2d", text: "Un hôtel-boutique unique et original", type: "original" }
      ]
    },
    {
      id: 2,
      question: "Comment planifiez-vous votre journée en voyage ?",
      options: [
        { id: "q3a", text: "Itinéraire détaillé heure par heure", type: "organisé" },
        { id: "q3b", text: "Quelques points d'intérêt, mais flexible", type: "équilibré" },
        { id: "q3c", text: "Totalement improvisé selon l'humeur du moment", type: "spontané" },
        { id: "q3d", text: "En suivant les recommandations locales", type: "curieux" }
      ]
    },
    {
      id: 3,
      question: "Quelle activité vous attire le plus à Amsterdam ?",
      options: [
        { id: "q4a", text: "Visiter des musées et sites historiques", type: "culturel" },
        { id: "q4b", text: "Explorer les quartiers à vélo", type: "actif" },
        { id: "q4c", text: "Découvrir la gastronomie locale", type: "gourmand" },
        { id: "q4d", text: "Profiter de la vie nocturne", type: "festif" }
      ]
    },
    {
      id: 4,
      question: "Avec qui voyagez-vous généralement ?",
      options: [
        { id: "q5a", text: "En couple", type: "romantique" },
        { id: "q5b", text: "En famille", type: "familial" },
        { id: "q5c", text: "Entre amis", type: "social" },
        { id: "q5d", text: "En solo", type: "indépendant" }
      ]
    }
  ];

  const getCurrentQuestion = () => {
    return questions[quizState.currentQuestion];
  };

  const results: Record<string, { title: string, description: string, recommendation: string }> = {
    culturel: {
      title: "Le Voyageur Culturel",
      description: "Vous êtes passionné par l'histoire, l'art et l'architecture. Vous cherchez à comprendre les lieux que vous visitez.",
      recommendation: "Explorez le Rijksmuseum, le Musée Van Gogh et la Maison Anne Frank. Faites une promenade architecturale dans le quartier Jordaan."
    },
    aventurier: {
      title: "L'Aventurier Sans Limites",
      description: "Vous aimez l'imprévu et les découvertes spontanées. Vous préférez créer votre propre chemin.",
      recommendation: "Louez un vélo et explorez les canaux moins touristiques. Visitez NDSM Wharf, un chantier naval transformé en quartier artistique alternatif."
    },
    explorateur: {
      title: "L'Explorateur Curieux",
      description: "Vous cherchez l'authenticité et les expériences uniques, loin des sentiers battus.",
      recommendation: "Découvrez le quartier de De Pijp et ses marchés locaux. Explorez Westerpark et ses espaces créatifs dans d'anciennes usines."
    },
    classique: {
      title: "Le Voyageur Classique",
      description: "Vous appréciez les incontournables et les expériences reconnues. Vous aimez les valeurs sûres.",
      recommendation: "Visitez les célèbres canaux d'Amsterdam lors d'une croisière. Découvrez la place du Dam et le Palais Royal."
    },
    luxe: {
      title: "Le Voyageur de Luxe",
      description: "Vous recherchez le confort, l'élégance et les services haut de gamme. Vous aimez vous faire plaisir.",
      recommendation: "Séjournez dans un hôtel 5 étoiles avec vue sur les canaux. Dînez dans un restaurant gastronomique étoilé au guide Michelin."
    },
    social: {
      title: "Le Voyageur Social",
      description: "Vous aimez rencontrer de nouvelles personnes et partager des expériences. Vous êtes ouvert et sociable.",
      recommendation: "Participez à une visite guidée à pied pour rencontrer d'autres voyageurs. Explorez les bars et cafés animés du quartier Latin."
    },
    authentique: {
      title: "Le Voyageur Authentique",
      description: "Vous cherchez à vivre comme un local et à découvrir la culture de l'intérieur. Vous êtes curieux et respectueux.",
      recommendation: "Visitez un marché local et goûtez aux spécialités culinaires néerlandaises. Apprenez quelques mots de néerlandais pour interagir avec les habitants."
    },
    original: {
      title: "Le Voyageur Original",
      description: "Vous aimez les expériences insolites et les lieux atypiques. Vous êtes créatif et anticonformiste.",
      recommendation: "Visitez le musée Electric Ladyland, dédié à l'art fluorescent. Explorez le quartier de Christiania, une communauté alternative autogérée."
    },
    organisé: {
      title: "Le Voyageur Organisé",
      description: "Vous aimez planifier chaque détail de votre voyage et optimiser votre temps. Vous êtes méthodique et efficace.",
      recommendation: "Réservez vos billets pour les musées et attractions à l'avance. Utilisez une application de transport en commun pour vous déplacer facilement."
    },
    équilibré: {
      title: "Le Voyageur Équilibré",
      description: "Vous aimez avoir un plan, mais vous laissez aussi de la place à l'improvisation. Vous êtes flexible et adaptable.",
      recommendation: "Prévoyez quelques activités incontournables, mais laissez-vous du temps pour flâner dans les rues et découvrir des endroits cachés."
    },
    spontané: {
      title: "Le Voyageur Spontané",
      description: "Vous préférez vivre au jour le jour et vous laisser guider par vos envies. Vous êtes aventureux et imprévisible.",
      recommendation: "Laissez votre hôtel au hasard et explorez les environs. Suivez votre instinct et découvrez des endroits inattendus."
    },
    curieux: {
      title: "Le Voyageur Curieux",
      description: "Vous aimez apprendre de nouvelles choses et découvrir des cultures différentes. Vous êtes ouvert d'esprit et intéressé.",
      recommendation: "Visitez une bibliothèque locale et découvrez la littérature néerlandaise. Assistez à un spectacle de danse ou de théâtre pour découvrir la scène artistique locale."
    },
    actif: {
      title: "Le Voyageur Actif",
      description: "Vous aimez bouger et pratiquer des activités physiques pendant votre voyage. Vous êtes dynamique et sportif.",
      recommendation: "Louez un vélo et explorez les environs d'Amsterdam. Faites une randonnée dans les dunes de sable de Zandvoort."
    },
    gourmand: {
      title: "Le Voyageur Gourmand",
      description: "Vous aimez découvrir de nouvelles saveurs et déguster des spécialités locales. Vous êtes épicurien et gourmand.",
      recommendation: "Goûtez aux stroopwafels, aux bitterballen et au fromage Gouda. Visitez un marché alimentaire et découvrez les produits locaux."
    },
    festif: {
      title: "Le Voyageur Festif",
      description: "Vous aimez faire la fête et profiter de la vie nocturne. Vous êtes sociable et extraverti.",
      recommendation: "Explorez les bars et clubs de Leidseplein et Rembrandtplein. Assistez à un concert de musique live."
    },
    romantique: {
      title: "Le Voyageur Romantique",
      description: "Vous aimez les moments intimes et les expériences romantiques. Vous êtes attentionné et passionné.",
      recommendation: "Faites une promenade en bateau sur les canaux au coucher du soleil. Dînez dans un restaurant romantique avec vue sur les canaux."
    },
    familial: {
      title: "Le Voyageur Familial",
      description: "Vous aimez voyager avec votre famille et partager des moments inoubliables. Vous êtes attentionné et protecteur.",
      recommendation: "Visitez le zoo d'Amsterdam et le musée des sciences NEMO. Faites une promenade dans le Vondelpark."
    },
    indépendant: {
      title: "Le Voyageur Indépendant",
      description: "Vous aimez voyager seul et découvrir le monde à votre rythme. Vous êtes autonome et confiant.",
      recommendation: "Explorez les musées et attractions qui vous intéressent le plus. Prenez le temps de vous détendre dans un café et d'observer les gens."
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-amsterdam-blue">Quel type de voyageur êtes-vous à Amsterdam ?</h1>
      
      <div className="max-w-2xl mx-auto">
        {!quizState.completed ? (
          <Card>
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Question {quizState.currentQuestion + 1}/{questions.length}</span>
                  <span className="text-amsterdam-orange">{Math.round((quizState.currentQuestion / questions.length) * 100)}% complété</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div 
                    className="bg-amsterdam-orange h-2 rounded-full" 
                    style={{ width: `${(quizState.currentQuestion / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-4">{getCurrentQuestion().question}</h2>
              
              <div className="grid gap-3">
                {getCurrentQuestion().options.map(option => (
                  <Button 
                    key={option.id}
                    variant="outline" 
                    className="justify-start h-auto p-4 text-left hover:border-amsterdam-blue hover:bg-amsterdam-blue/5"
                    onClick={() => handleAnswer(option.id, option.type)}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-amsterdam-beige/30">
            <CardContent className="p-6">
              {quizState.result && (
                <>
                  <div className="flex items-center justify-center mb-6">
                    <CheckCircle className="text-amsterdam-green h-12 w-12" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-center mb-2 text-amsterdam-blue">
                    {results[quizState.result].title}
                  </h2>
                  
                  <p className="text-center mb-6 text-gray-700">
                    {results[quizState.result].description}
                  </p>
                  
                  <div className="bg-white p-4 rounded-lg mb-6">
                    <h3 className="font-semibold mb-2 text-amsterdam-blue">Notre recommandation :</h3>
                    <p className="text-gray-700">
                      {results[quizState.result].recommendation}
                    </p>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <Button 
                      variant="outline" 
                      onClick={resetQuiz}
                      className="border-amsterdam-blue text-amsterdam-blue hover:bg-amsterdam-blue/10"
                    >
                      Refaire le quiz
                    </Button>
                    <Button className="bg-amsterdam-orange hover:bg-amber-600">
                      Voir les itinéraires recommandés <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Quiz;
