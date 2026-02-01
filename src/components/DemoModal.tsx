import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Building, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from('demo_requests')
                .insert([
                    {
                        full_name: formData.name,
                        email: formData.email,
                        company_name: formData.company,
                        // Let the database handle created_at with its default value
                    },
                ]);

            if (error) throw error;



            setIsSuccess(true);
            toast.success(t.demoModal.successMessage || 'Demo talebiniz başarıyla alındı!');
            setFormData({ name: '', email: '', company: '' });

            // Auto close after showing success message for a few seconds
            setTimeout(() => {
                onClose();
                // Reset success state after closing so it's ready for next time
                setTimeout(() => setIsSuccess(false), 300);
            }, 3000);
        } catch (error: any) {
            console.error('SUPABASE ERROR:', error);
            toast.error(
                (t.demoModal.errorMessage || 'Bir hata oluştu.') +
                (error.message ? ` (${error.message})` : '')
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-black/60 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden backdrop-blur-xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Header */}
                        <div className="mb-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide mb-4 border border-primary/20">
                                {t.demoModal.badge}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                                {t.demoModal.title.prefix}
                                <span className="bg-gradient-to-r from-[#2DD4BF] via-[#5EEAD4] to-[#0F766E] bg-clip-text text-transparent">
                                    {t.demoModal.title.highlight}
                                </span>
                                {t.demoModal.title.suffix}
                            </h2>
                            <p className="text-gray-400 text-lg">
                                {t.demoModal.subtitle}
                            </p>
                        </div>

                        {/* Form */}
                        {/* Form or Success View */}
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {t.demoModal.successMessage?.split('!')[0]}!
                                </h3>
                                <p className="text-gray-400 max-w-sm">
                                    {t.demoModal.successMessage?.split('!')[1] || 'En kısa sürede sizinle iletişime geçeceğiz.'}
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">
                                        {t.demoModal.form.nameLabel}
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                            <User className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder={t.demoModal.form.namePlaceholder}
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">
                                        {t.demoModal.form.emailLabel}
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                            <Mail className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder={t.demoModal.form.emailPlaceholder}
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">
                                        {t.demoModal.form.companyLabel}
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                            <Building className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            placeholder={t.demoModal.form.companyPlaceholder}
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-lg shadow-primary/25 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="animate-pulse">Loading...</span>
                                    ) : (
                                        <>
                                            {t.demoModal.form.submit}
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-gray-500 mt-4">
                                    {t.demoModal.form.privacy}
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
