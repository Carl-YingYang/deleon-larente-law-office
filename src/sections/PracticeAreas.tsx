import { motion } from 'framer-motion';
import { Scale, FileSignature, Briefcase, MessageSquare, Shield, Users } from 'lucide-react';

// Na-fix ang TypeScript error gamit ang 'as const'
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
} as const;

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
} as const;

export default function PracticeAreas() {
    // Content updated directly from your office signage
    const areas = [
        {
            title: 'Notarial Services',
            desc: 'Comprehensive notary public services including affidavits, deeds, and proper document authentication.',
            icon: FileSignature
        },
        {
            title: 'Court Cases & Litigation',
            desc: 'Handling VAWC (R.A. 9262) cases, and civil cases limited to nullity of marriage, annulment & legal separation.',
            icon: Scale
        },
        {
            title: 'Contract Drafting & Review',
            desc: 'Expert preparation, thorough review, and structuring of legal contracts to protect your best interests.',
            icon: Briefcase
        },
        {
            title: 'Legal Consultation',
            desc: 'Professional legal advisory and well-researched opinions to guide your important decisions.',
            icon: MessageSquare
        },
        {
            title: 'Retainer Agreements',
            desc: 'Ongoing, reliable legal support and representation for businesses and individuals through structured retainers.',
            icon: Shield
        },
        {
            title: 'Labor & Special Cases',
            desc: 'Dedicated assistance for labor disputes, as well as violations of the Animal Welfare Act (R.A. 10631).',
            icon: Users
        },
    ];

    return (
        <section id="practice-areas" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden font-sans border-t border-slate-900">

            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[600px] bg-[#c9a84c]/5 blur-[100px] md:blur-[150px] pointer-events-none" />

            {/* Adjusted container padding for mobile */}
            <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 relative z-10">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="flex flex-col gap-8 md:gap-12"
                >
                    {/* ── Section Header ── */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6 mb-2 md:mb-4">
                        <motion.div variants={fadeUp} className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-3 md:mb-4">
                                <div className="h-[1px] w-6 bg-[#c9a84c]" />
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c9a84c]">
                                    Our Services
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100 tracking-tight mb-3 md:mb-4">
                                Practice Areas
                            </h2>
                            <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
                                Providing precise, ethical, and professional legal services tailored to your specific needs.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="hidden lg:block pb-2">
                            <a href="#contact" className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2">
                                Get in touch <span className="text-lg">→</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* ── Services Grid (2 Columns sa Mobile, 3 Columns sa Desktop) ── */}
                    {/* Pinalitan natin ang grid-cols-1 ng grid-cols-2 para magtabi agad sa phone */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                        {areas.map((area, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className="group relative bg-slate-900/40 border border-slate-800/60 p-4 sm:p-6 md:p-8 rounded-[3px] hover:bg-slate-900/80 hover:border-[#c9a84c]/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 flex flex-col"
                            >
                                {/* Top highlight on hover */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c]/0 to-transparent group-hover:via-[#c9a84c]/50 transition-all duration-500" />

                                {/* Icon Container (Pinaliit nang husto sa mobile para hindi sakop ang buong card) */}
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm bg-slate-950 border border-slate-800 flex items-center justify-center mb-3 md:mb-6 group-hover:border-[#c9a84c]/30 transition-colors duration-300">
                                    <area.icon className="text-[#c9a84c] stroke-[1.5] group-hover:scale-110 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </div>

                                {/* Text Content */}
                                {/* Pinaliit ang title at desc sa mobile para malinis basahin kahit magkatabi */}
                                <h3 className="text-[13px] sm:text-base md:text-lg font-serif font-medium text-slate-200 mb-1.5 md:mb-3 tracking-wide group-hover:text-[#c9a84c] transition-colors leading-tight">
                                    {area.title}
                                </h3>
                                <p className="text-[10px] sm:text-xs md:text-[13px] text-slate-400 font-light leading-relaxed flex-grow">
                                    {area.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
}