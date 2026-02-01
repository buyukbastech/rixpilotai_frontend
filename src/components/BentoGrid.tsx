import { motion } from 'framer-motion';
import { Camera, Link2, CalendarClock, MessageCircle, BarChart3, Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const BentoGrid = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Camera,
      title: t.features.items[0].title,
      description: t.features.items[0].description,
      size: 'large',
    },
    {
      icon: Link2,
      title: t.features.items[1].title,
      description: t.features.items[1].description,
      size: 'small',
    },
    {
      icon: CalendarClock,
      title: t.features.items[2].title,
      description: t.features.items[2].description,
      size: 'small',
    },
    {
      icon: MessageCircle,
      title: t.features.items[3].title,
      description: t.features.items[3].description,
      size: 'medium',
    },
    {
      icon: BarChart3,
      title: t.features.items[4].title,
      description: t.features.items[4].description,
      size: 'small',
    },
    {
      icon: Shield,
      title: t.features.items[5].title,
      description: t.features.items[5].description,
      size: 'small',
    },
  ];
  return (
    <section id={t.header.featuresId} className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="glass-card inline-block px-4 py-2 text-sm text-primary font-medium tracking-wide mb-6">
            {t.features.label}
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter-custom mb-6">
            {t.features.title.part1}
            <span className="font-bold text-gradient pr-2">{t.features.title.part2}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t.features.description}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="bento-item h-full flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                  <Camera className="w-7 h-7 text-primary icon-glow" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
                  {features[0].title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {features[0].description}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="h-2 flex-1 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '94%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-teal-glow rounded-full"
                    />
                  </div>
                  <span className="text-primary font-medium">{t.features.accuracy}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small Cards */}
          {features.slice(1, 3).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <div className="bento-item h-full min-h-[180px]">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary icon-glow" />
                </div>
                <h3 className="text-xl font-light tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Medium Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2"
          >
            <div className="bento-item h-full min-h-[180px]">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary icon-glow" />
                </div>
                <div>
                  <h3 className="text-xl font-light tracking-tight mb-2">
                    {features[3].title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {features[3].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Last two small cards */}
          {features.slice(4).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
            >
              <div className="bento-item h-full min-h-[180px]">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary icon-glow" />
                </div>
                <h3 className="text-xl font-light tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
