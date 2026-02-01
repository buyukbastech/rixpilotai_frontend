import { motion } from 'framer-motion';
import { MessageCircle, Bot, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const steps = [
    {
        id: 1,
        icon: MessageCircle,
        title: "Danışan WhatsApp'tan Yazıyor",
        description: "Danışanınız randevu almak, bilgi sormak veya mevcut randevusunu değiştirmek için WhatsApp üzerinden mesaj gönderir.",
    },
    {
        id: 2,
        icon: Bot,
        title: "AI Asistan Anında Yanıt Veriyor",
        description: "Yapay zeka destekli asistanınız danışanın mesajını anlayarak saniyeler içinde doğru ve profesyonel bir yanıt üretir.",
    },
    {
        id: 3,
        icon: CheckCircle2,
        title: "İşlem Otomatik Tamamlanıyor",
        description: "Randevu oluşturma, hatırlatma gönderme veya bilgi aktarma gibi işlemler otomatik olarak gerçekleştirilir.",
    },
];

const HowItWorksSection = () => {
    const { t } = useLanguage();

    const steps = [
        {
            id: 1,
            icon: MessageCircle,
            title: t.howItWorks.steps[0].title,
            description: t.howItWorks.steps[0].description,
        },
        {
            id: 2,
            icon: Bot,
            title: t.howItWorks.steps[1].title,
            description: t.howItWorks.steps[1].description,
        },
        {
            id: 3,
            icon: CheckCircle2,
            title: t.howItWorks.steps[2].title,
            description: t.howItWorks.steps[2].description,
        },
    ];

    return (
        <section id={t.header.howItWorksId} className="py-24 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-primary/5 to-black/0 opacity-30" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="glass-card inline-block px-4 py-2 text-sm text-primary font-medium tracking-wide mb-6">
                        {t.howItWorks.label}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tighter-custom mb-6">
                        {t.howItWorks.title.part1}
                        <span className="font-bold text-gradient">{t.howItWorks.title.part2}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t.howItWorks.description}
                    </p>
                </motion.div>

                {/* Steps Timeline */}
                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Step Number Badge */}
                                <div className="absolute top-0 right-[calc(50%-40px)] w-8 h-8 rounded-full bg-background border border-primary/30 flex items-center justify-center text-xs font-bold text-primary z-20">
                                    {String(step.id).padStart(2, '0')}
                                </div>

                                {/* Icon Circle */}
                                <div className="w-32 h-32 rounded-full glass-card flex items-center justify-center mb-8 relative z-10 group-hover:scale-105 transition-transform duration-300 border-2 border-transparent group-hover:border-primary/20">
                                    <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
                                        <step.icon className="w-10 h-10 text-primary icon-glow" />
                                    </div>
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed max-w-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
