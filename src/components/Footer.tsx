import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Étanchéité Caraïbes"
              className="h-16 mb-4"
            />
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Plus de 30 ans d'expertise en étanchéité et couverture métallique
              au service des particuliers et professionnels de Guadeloupe.
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+590690940779"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Phone size={18} className="text-primary-foreground" />
              </a>
              <a
                href="mailto:etancheitecaraibesservice@gmail.com"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Mail size={18} className="text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-heading">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Qui nous sommes
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Nos services
                </a>
              </li>
              <li>
                <a
                  href="#realisations"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Réalisations
                </a>
              </li>
              <li>
                <a
                  href="#avis"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Avis clients
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contact / Devis
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-heading">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="tel:+590690940779"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +590 690 94 07 79
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:etancheitecaraibesservice@gmail.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm break-all"
                >
                  etancheitecaraibesservice@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  Rés Les Yuccas, Pointe de la Verdure,
                  <br />
                  97190 Le Gosier, Guadeloupe
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20 text-center text-secondary-foreground/60 text-sm">
          <p>
            © {currentYear} Étanchéité Caraïbes. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
