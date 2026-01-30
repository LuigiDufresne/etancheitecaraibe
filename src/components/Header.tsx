import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Qui nous sommes", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Avis clients", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-primary py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Étanchéité Caraïbes"
            className={`transition-all duration-300 ${
              isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-secondary hover:text-primary"
                  : "text-primary-foreground hover:text-primary-foreground/80"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+590690940779"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              isScrolled
                ? "bg-primary text-primary-foreground hover:shadow-orange"
                : "bg-secondary text-secondary-foreground hover:bg-blue-light"
            }`}
          >
            <Phone size={18} />
            <span className="hidden xl:inline">+590 690 94 07 79</span>
            <span className="xl:hidden">Appeler</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled
              ? "text-secondary hover:bg-muted"
              : "text-primary-foreground hover:bg-primary-foreground/10"
          }`}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="container-custom py-4 px-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-3 px-4 rounded-lg font-medium text-secondary hover:bg-muted transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+590690940779"
                className="flex items-center justify-center gap-2 mt-2 py-3 px-4 rounded-lg font-semibold bg-primary text-primary-foreground"
              >
                <Phone size={18} />
                +590 690 94 07 79
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
