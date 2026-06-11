import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
} as const;

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: 'Do you accept walk-in consultations?',
            a: 'We highly encourage scheduling an appointment to ensure an attorney is available to accommodate you. However, we do accept walk-ins depending on availability.'
        },
        {
            q: 'What are your office hours?',
            a: 'Our office is open from Monday to Saturday, 8:00 AM to 5:00 PM. Sunday consultations are also available, but strictly by appointment only.'
        },
        {
            q: 'How can I schedule an appointment?',
            a: 'You can schedule an appointment by calling our contact numbers, sending us an email, or reaching out through our Facebook page. Our staff will coordinate a convenient time for your consultation.'
        },
        {
            q: 'What should I bring to my first consultation?',
            a: 'Please bring any documents relevant to your case, a valid ID, and a timeline or summary of events. This helps us understand your situation clearly and provide the best legal advice.'
        }
    ];

    return (
        <section id="faq" className="py-12 md:py-24 bg-slate-950 relative border-t border-slate-900 font-sans overflow-hidden">

            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#c9a84c]/5 blur-[100px] md:blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid lg:grid-cols-12 gap-6 md:gap-12 lg:gap-16 items-start"
                >
                    {/* ── Left Side: Section Title & Context ── */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-32">
                        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3 md:mb-4">
                            <div className="h-[1px] w-6 bg-[#c9a84c]" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c9a84c]">
                                Client Support
                            </span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-100 tracking-tight mb-3 md:mb-6">
                            Frequently Asked Questions
                        </motion.h2>

                        {/* Pinaliit ang space sa ilalim ng text (mb-4) para mas dikit ang link */}
                        <motion.p variants={fadeUp} className="text-sm md:text-base text-slate-400 leading-relaxed font-light mb-4 md:mb-8 max-w-md">
                            Find quick answers to common questions about our services, office policies, and how to prepare for your consultation.
                        </motion.p>

                        {/* TADA! Tinanggal ang "hidden lg:block", ipinakita na siya sa mobile */}
                        <motion.div variants={fadeUp} className="mb-4 lg:mb-0">
                            <a href="#contact" className="text-[#c9a84c] text-[11px] md:text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2">
                                Still have questions? Contact us <span className="text-lg">→</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* ── Right Side: Modern Accordion List ── */}
                    {/* Mas pinagdikit-dikit ang mga FAQ boxes (gap-2) */}
                    <div className="lg:col-span-7 flex flex-col gap-2 md:gap-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openIndex === idx;

                            return (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    className={`border border-slate-800/60 rounded-[3px] overflow-hidden transition-all duration-300 ${isOpen ? 'bg-slate-900/60 border-[#c9a84c]/30 shadow-md' : 'bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/50'}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                        className="w-full text-left px-4 py-3.5 md:px-8 md:py-6 flex justify-between items-center gap-3 md:gap-4 focus:outline-none"
                                    >
                                        <span className={`font-medium transition-colors text-[13px] sm:text-sm md:text-base ${isOpen ? 'text-[#c9a84c]' : 'text-slate-200'}`}>
                                            {faq.q}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="flex-shrink-0"
                                        >
                                            <ChevronDown className={isOpen ? "text-[#c9a84c]" : "text-slate-500"} size={16} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                {/* Pinaliit ang text size ng sagot para mas compact */}
                                                <div className="px-4 pb-4 md:px-8 md:pb-8 pt-0 md:pt-1 text-slate-400 font-light text-[11.5px] sm:text-[13px] md:text-sm leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                </motion.div>
            </div>
        </section>
    );
}