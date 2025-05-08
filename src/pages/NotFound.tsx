
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-amsterdam-blue">404</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">Oops! On dirait que tu t'es perdu dans les canaux...</p>
        <p className="mb-8 text-gray-500 max-w-md mx-auto">
          La page que tu cherches n'existe pas. Peut-être as-tu pris un mauvais tournant à Amsterdam ? 
          Retourne à la page d'accueil pour continuer ton exploration.
        </p>
        <Link to="/">
          <Button className="bg-amsterdam-orange hover:bg-amber-600 text-white py-2 px-6 text-lg">
            Retour à l'Accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
