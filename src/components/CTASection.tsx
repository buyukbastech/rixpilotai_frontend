import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import rixpilotLogo from '@/assets/rixpilotai_3.png';
import { DemoModal } from './DemoModal';
import { useState } from 'react';

const CTASection = () => {
  const { t } = useLanguage();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section id={t.header.contactId} className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 md:p-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col items-center justify-center mb-10"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                <img
                  src={rixpilotLogo}
                  alt="Rixpilot AI"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(45,212,191,0.6)]"
                />
              </div>
              <span className="text-5xl font-bold tracking-tighter bg-gradient-to-r from-[#2DD4BF] via-[#5EEAD4] to-[#0F766E] bg-clip-text text-transparent">
                Rixpilot AI
              </span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter-custom mb-6">
            {t.cta.title}
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12">
            {t.cta.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="btn-glow text-base px-8 py-4 flex items-center gap-2 group"
            >
              {t.cta.btn}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  );
};

export default CTASection;
