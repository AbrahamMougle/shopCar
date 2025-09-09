import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + description */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">🚐 VanLife</h2>
          <p className="text-sm leading-relaxed">
            Découvrez la liberté de voyager autrement avec nos vans aménagés.
            Confort, aventure et souvenirs inoubliables vous attendent.
          </p>
        </div>

        {/* Navigation + Infos utiles fusionnés */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/vans" className="hover:text-white transition">
                  Vans
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Infos utiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/conditions" className="hover:text-white transition">
                  Conditions d’utilisation
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="hover:text-white transition">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-white font-semibold mb-3">Suivez-nous</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:contact@vanlife.com" className="hover:text-white transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} VanLife. Tous droits réservés.
      </div>
    </footer>
  );
}
