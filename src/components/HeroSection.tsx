import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import heroClinic from '@/assets/rixpilot_klinik.mp4';
import { DemoModal } from './DemoModal';
import heroAnaliz from '@/assets/rixpilot_analiz.mp4';
import heroWhatsapp from '@/assets/rixpilot_whatsapp.mp4';
import heroSacEkim from '@/assets/rixpilot_sac_ekim.mp4';
import heroHappyDoctor from '@/assets/rixpilot_happy_doctor.mp4';
import heroAi2 from '@/assets/rixpilot_ai2.mp4';

const heroVideos = [
  heroClinic,
  heroAnaliz,
  heroWhatsapp,
  heroSacEkim,
  heroHappyDoctor,
  heroAi2
];

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { t } = useLanguage();

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideoIndex}
            src={heroVideos[currentVideoIndex]}
            autoPlay
            muted
            loop={false}
            playsInline
            onEnded={handleVideoEnded}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="glass-card px-4 py-2 text-sm text-primary font-medium tracking-wide">
              {t.hero.label}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter-custom leading-none mb-8"
          >
            <span className="text-gradient">{t.hero.title.part1}</span>{t.hero.title.part2}
            <br />
            <span className="font-medium">{t.hero.title.part3}</span>
            <br />
            {t.hero.title.part4}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t.hero.subtitle.part1} <span className="text-gradient font-bold">{t.hero.subtitle.part2}</span>{t.hero.subtitle.part3}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="btn-glow text-base px-8 py-4"
            >
              {t.hero.demoBtn}
            </button>
            <button className="glass-card px-8 py-4 text-foreground hover:bg-white/5 transition-all duration-300 rounded-full">
              {t.hero.howItWorksBtn}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
