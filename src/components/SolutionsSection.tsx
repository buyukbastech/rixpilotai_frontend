import { motion } from 'framer-motion';
import { MessageCircle, Clock, Calendar, Shield, Zap, Users } from 'lucide-react';
import { BorderBeam } from './BorderBeam';
import { useLanguage } from '@/context/LanguageContext';

const SolutionsSection = () => {
    const { t } = useLanguage();

    const solutions = [
        {
            icon: MessageCircle,
            title: t.solutions.items[0].title,
            description: t.solutions.items[0].description,
        },
        {
            icon: Clock,
            title: t.solutions.items[1].title,
            description: t.solutions.items[1].description,
        },
        {
            icon: Calendar,
            title: t.solutions.items[2].title,
            description: t.solutions.items[2].description,
        },
        {
            icon: Shield,
            title: t.solutions.items[3].title,
            description: t.solutions.items[3].description,
        },
        {
            icon: Zap,
            title: t.solutions.items[4].title,
            description: t.solutions.items[4].description,
        },
        {
            icon: Users,
            title: t.solutions.items[5].title,
            description: t.solutions.items[5].description,
        },
    ];

    return (
        <section id={t.header.solutionsId} className="py-24 px-6 relative bg-black/40">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="glass-card inline-block px-4 py-2 text-sm text-primary font-medium tracking-wide mb-6">
                        {t.solutions.label}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tighter-custom mb-6">
                        {t.solutions.title.part1}
                        <span className="font-bold text-gradient">{t.solutions.title.part2}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t.solutions.description}
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="glass-card p-8 h-full hover:bg-white/5 transition-colors duration-300 group relative">
                                <BorderBeam
                                    size={300}
                                    duration={10}
                                    delay={0}
                                    colorFrom="#2DD4BF"
                                    colorTo="#0F766E"
                                />
                                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <solution.icon className="w-6 h-6 text-primary icon-glow" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
