import { motion } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';
import { useState } from 'react';
import apronovaLogo from '@/assets/apronovalogo.png';

import { useLanguage } from '@/context/LanguageContext';
import { DemoModal } from './DemoModal';

const GlassHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-4 mt-4">
        <nav className="glass-card px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              // Clear the hash from the URL without reloading
              history.pushState("", document.title, window.location.pathname + window.location.search);
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/20 via-orange-300/20 to-amber-500/20 blur-xl opacity-60 animate-pulse" />
              <img
                src={apronovaLogo}
                alt="Apronova Logo"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]"
              />
            </div>
            <span className="text-lg md:text-xl font-semibold tracking-tight group-hover:text-white transition-colors">{t.header.logoText}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href={`#${t.header.featuresId}`} className="relative group text-muted-foreground hover:text-white transition-colors text-sm font-medium">
              {t.header.features}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={`#${t.header.solutionsId}`} className="relative group text-muted-foreground hover:text-white transition-colors text-sm font-medium">
              {t.header.solutions}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={`#${t.header.howItWorksId}`} className="relative group text-muted-foreground hover:text-white transition-colors text-sm font-medium">
              {t.header.howItWorks}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={`#${t.header.contactId}`} className="relative group text-muted-foreground hover:text-white transition-colors text-sm font-medium">
              {t.header.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/apronova.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-2.5 text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://panel.apronova.ai/login"
              className="glass-card px-6 py-2.5 text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {t.header.login}
            </a>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="btn-glow animate-glow-pulse"
            >
              {t.header.demo}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card mt-2 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex flex-col gap-4">
                <a href={`#${t.header.featuresId}`} className="text-xl font-medium text-foreground py-2 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>
                  {t.header.features}
                </a>
                <a href={`#${t.header.solutionsId}`} className="text-xl font-medium text-foreground py-2 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>
                  {t.header.solutions}
                </a>
                <a href={`#${t.header.howItWorksId}`} className="text-xl font-medium text-foreground py-2 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>
                  {t.header.howItWorks}
                </a>
                <a href={`#${t.header.contactId}`} className="text-xl font-medium text-foreground py-2 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>
                  {t.header.contact}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <a
                  href="https://www.instagram.com/apronova.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center justify-center py-3 text-muted-foreground hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://panel.apronova.ai/login"
                  className="glass-card flex items-center justify-center py-3 text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {t.header.login}
                </a>
              </div>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDemoModalOpen(true);
                }}
                className="btn-glow mt-2 py-4 text-base"
              >
                {t.header.demo}
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </motion.header>
  );
};

export default GlassHeader;
