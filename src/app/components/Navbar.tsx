import { Link } from 'react-router';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="font-semibold text-xl">Iz Academy</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <Link to="/" className="text-foreground hover:text-primary transition">
              Accueil
            </Link>
            <Link to="/courses" className="text-foreground hover:text-primary transition">
              Cours
            </Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition">
              FAQ
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/login"
              className="px-4 py-2 text-primary hover:bg-accent rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,82,233,0.3)]"
            >
              Connexion
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,82,233,0.5)]"
            >
              S'inscrire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/courses"
              className="block py-2 text-foreground hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Cours
            </Link>
            <Link
              to="/faq"
              className="block py-2 text-foreground hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-foreground hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block py-2 text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Connexion
            </Link>
            <Link
              to="/register"
              className="block py-2 px-4 bg-primary text-primary-foreground rounded-lg text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              S'inscrire
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}