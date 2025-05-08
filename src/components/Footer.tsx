
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-amsterdam-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Amsterdam Unlocked</h3>
            <p className="text-sm text-gray-300 mb-4">
              Découvrez Amsterdam comme jamais auparavant avec nos guides personnalisés, 
              cartes interactives et conseils d'initiés.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-amsterdam-orange transition-colors">Accueil</Link></li>
              <li><Link to="/maps" className="hover:text-amsterdam-orange transition-colors">Cartes Interactives</Link></li>
              <li><Link to="/quiz" className="hover:text-amsterdam-orange transition-colors">Quiz Voyageur</Link></li>
              <li><Link to="/top-lists" className="hover:text-amsterdam-orange transition-colors">Top Listes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-amsterdam-orange transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="hover:text-amsterdam-orange transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-amsterdam-orange transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-amsterdam-orange transition-colors">Politique de Confidentialité</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-2">
              Inscrivez-vous pour recevoir nos derniers bons plans et conseils sur Amsterdam.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-3 py-2 bg-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amsterdam-orange"
              />
              <button
                type="submit"
                className="bg-amsterdam-orange hover:bg-amber-600 text-white py-2 px-4 rounded-md transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Amsterdam Unlocked. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
