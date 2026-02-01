import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import rixpilotLogo from '@/assets/rixpilotai_3.png';

import { useLanguage } from '@/context/LanguageContext';
import { DemoModal } from './DemoModal';

const GlassHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

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
            <div className="relative w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-cyan-500 blur-lg opacity-60 animate-pulse" />
              <img
                src={rixpilotLogo}
                alt="Rixpilot Logo"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]"
              />
            </div>
            <span className="text-xl font-semibold tracking-tight group-hover:text-white transition-colors">{t.header.logoText}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href={`#${t.header.featuresId}`} className="relative group text-muted-foreground hover:text-white transition-colors text-sm font-medium">
              {t.header.features}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={`#${t.header.solutionsId}`} className="relative group text-muted-foreground hover:text-white transition-colors text-sm font-medium">
              {t.header.solutions}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={`#${t.header.howItWorksId}`} className="relative group text-muted-foreground hover:text-white transition-colors text-sm font-medium">
              {t.header.howItWorks}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href={`#${t.header.contactId}`} className="relative group text-muted-foreground hover:text-white transition-colors text-sm font-medium">
              {t.header.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="glass-card px-3 py-1 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {language.toUpperCase()}
            </button>
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
            <div className="flex flex-col gap-4 mt-8">
              <a href={`#${t.header.featuresId}`} className="text-lg font-medium text-foreground" onClick={() => setIsMenuOpen(false)}>
                {t.header.features}
              </a>
              <a href={`#${t.header.solutionsId}`} className="text-lg font-medium text-foreground" onClick={() => setIsMenuOpen(false)}>
                {t.header.solutions}
              </a>
              <a href={`#${t.header.howItWorksId}`} className="text-lg font-medium text-foreground" onClick={() => setIsMenuOpen(false)}>
                {t.header.howItWorks}
              </a>
              <a href={`#${t.header.contactId}`} className="text-lg font-medium text-foreground" onClick={() => setIsMenuOpen(false)}>
                {t.header.contact}
              </a>

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={toggleLanguage}
                  className="glass-card px-4 py-2 text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {language === 'tr' ? 'English' : 'Türkçe'}
                </button>
              </div>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDemoModalOpen(true);
                }}
                className="btn-glow mt-4"
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
