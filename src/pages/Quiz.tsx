
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { quizQuestions, travelerTypes } from '@/data/siteData';
import { Progress } from '@/components/ui/progress';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [travelerType, setTravelerType] = useState("");

  const handleAnswer = (type: string) => {
    const newAnswers = { ...answers, [currentQuestionIndex]: type };
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate result
      const types = Object.values(newAnswers);
      const typeCounts: Record<string, number> = {};
      
      types.forEach(type => {
        typeCounts[type] = (typeCounts[type] || 0) + 1;
      });
      
      let maxCount = 0;
      let maxType = "";
      
      Object.entries(typeCounts).forEach(([type, count]) => {
        if (count > maxCount) {
          maxCount = count;
          maxType = type;
        }
      });
      
      setTravelerType(maxType);
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setTravelerType("");
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
  const resultType = travelerType && travelerTypes[travelerType as keyof typeof travelerTypes];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-amsterdam-green text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Quel Type de Voyageur es-tu à Amsterdam ?
          </h1>
          <p className="text-xl max-w-3xl">
            Réponds à quelques questions simples et découvre quel type de voyageur tu es. Nous te proposerons 
            ensuite des recommandations personnalisées pour profiter au maximum de ton séjour à Amsterdam.
          </p>
        </div>
      </section>

      {/* Quiz Content */}
      <section className="container max-w-4xl mx-auto px-4 py-12">
        {!showResults ? (
          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Question {currentQuestionIndex + 1}/{quizQuestions.length}</span>
                  <span>{Math.floor(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <h2 className="text-2xl font-bold text-amsterdam-blue mb-6">
                {currentQuestion.question}
              </h2>
              
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left py-6 h-auto hover:bg-amsterdam-blue/5 hover:border-amsterdam-blue transition-colors"
                    onClick={() => handleAnswer(option.type)}
                  >
                    <span className="block text-lg">{option.text}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="animate-fade-in">
            <Card className="shadow-lg overflow-hidden mb-8">
              <div className="relative h-64">
                <img 
                  src={resultType?.image || "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4"}
                  alt={resultType?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-3xl font-bold text-white">
                    Tu es : {resultType?.title}
                  </h2>
                </div>
              </div>
              
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-gray-700 mb-4">
                  {resultType?.description}
                </p>
                
                <h3 className="text-xl font-bold text-amsterdam-blue mb-3">Nos recommandations pour toi :</h3>
                <p className="text-gray-700 mb-6">
                  {resultType?.recommendation}
                </p>
                
                <Button 
                  className="w-full bg-amsterdam-orange hover:bg-amber-600 text-white py-3"
                  onClick={resetQuiz}
                >
                  Refaire le quiz
                </Button>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Envie d'explorer davantage ?</h3>
              <p className="text-gray-600 mb-4">
                Découvre nos cartes interactives et nos listes thématiques pour planifier ton séjour parfait à Amsterdam.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="bg-amsterdam-blue hover:bg-blue-700">
                  <a href="/maps">Voir les Cartes</a>
                </Button>
                <Button asChild variant="outline" className="border-amsterdam-blue text-amsterdam-blue hover:bg-amsterdam-blue/10">
                  <a href="/top-lists">Top Listes</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Quiz;
