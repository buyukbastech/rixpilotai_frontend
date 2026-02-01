import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import rixpilotLogo from '@/assets/rixpilotai_3.png';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 blur-md rounded-full" />
              <img
                src={rixpilotLogo}
                alt="Rixpilot Logo"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
            <span className="text-lg font-medium tracking-tight">Rixpilot</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">{t.footer.legal}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t.footer.community}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t.header.contact}</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            {t.footer.rights}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
