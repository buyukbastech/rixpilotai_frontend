import { motion, useInView, animate } from 'framer-motion';
import { Zap, Globe, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useRef } from 'react';

const AnimatedValue = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    const span = ref.current;
    if (!span || !isInView) return;

    // Parse the string into tokens: number or text
    // Regex matches numbers with optional decimals (e.g. 99.9, 15, 7)
    const tokens = value.split(/([\d]+(?:\.[\d]+)?)/);

    // Create spans for each token
    span.innerHTML = '';
    const tokenElements: { element: HTMLSpanElement; isNumber: boolean; value: number; precision: number }[] = [];

    tokens.forEach((token) => {
      if (!token) return;

      const tokenSpan = document.createElement('span');
      const numValue = parseFloat(token);
      const isNumber = !isNaN(numValue) && isFinite(numValue);

      if (isNumber) {
        tokenSpan.textContent = "0";
        const precision = token.includes('.') ? token.split('.')[1].length : 0;
        tokenElements.push({ element: tokenSpan, isNumber: true, value: numValue, precision });
      } else {
        tokenSpan.textContent = token;
      }

      span.appendChild(tokenSpan);
    });

    // Animate numbers
    const controls = tokenElements.filter(t => t.isNumber).map(token => {
      return animate(0, token.value, {
        duration: 1.5,
        ease: "circOut",
        onUpdate: (latest) => {
          token.element.textContent = latest.toFixed(token.precision);
        }
      });
    });

    return () => controls.forEach(c => c.stop());

  }, [value, isInView]);

  return <span ref={ref} className="inline-flex" />;
};

const FloatingStats = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Zap,
      value: t.stats.efficiency.value,
      label: t.stats.efficiency.label,
    },
    {
      icon: Globe,
      value: t.stats.global.value,
      label: t.stats.global.label,
    },
    {
      icon: Clock,
      value: t.stats.time.value,
      label: t.stats.time.label,
    },
  ];

  return (
    <section className="relative z-20 -mt-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 md:p-8 float-animation"
        >
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary icon-glow" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground mb-1 tabular-nums">
                  <AnimatedValue value={stat.value} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FloatingStats;
