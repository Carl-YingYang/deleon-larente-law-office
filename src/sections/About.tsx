import { motion } from 'framer-motion';
import { Shield, Scale, Users, Briefcase } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" }
    }
} as const;

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
} as const;

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden font-sans border-t border-slate-900">
            {/* Subtle Background Glow - scaled down for mobile to prevent overflow/excessive blur */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-900/10 blur-[100px] md:blur-[150px] pointer-events-none" />

            {/* Reduced outer padding on mobile (px-4) to give cards more breathing room */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="flex flex-col gap-10 md:gap-12"
                >
                    {/* ── 1. CLEAR SECTION HEADER (Context Provider) ── */}
                    <motion.div variants={fadeUp} className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                            <div className="h-[1px] w-4 md:w-8 bg-[#c9a84c]" />
                            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-[#c9a84c]">
                                About De Leon Laurente Law Office
                            </span>
                            <div className="h-[1px] w-4 md:w-8 bg-[#c9a84c]" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100 tracking-tight mb-4 md:mb-6">
                            Trust & Integrity
                        </h2>

                        <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light px-2 sm:px-0">
                            De Leon Laurente Law Office is a Philippine-based legal practice dedicated to delivering reliable,
                            ethical, and client-focused legal services. We provide practical legal solutions while
                            maintaining absolute professionalism.
                        </p>
                    </motion.div>

                    {/* ── 2. MISSION & VISION (Primary Focus Cards) ── */}
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-2 md:mt-4">
                        {/* Mission */}
                        {/* Reduced padding on mobile from p-8 to p-6 */}
                        <motion.div variants={fadeUp} className="group relative bg-slate-900/40 border border-slate-800/80 rounded-[3px] p-6 md:p-10 overflow-hidden hover:bg-slate-900/60 hover:border-slate-700 transition-all duration-300 shadow-lg">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c]/0 to-transparent group-hover:via-[#c9a84c]/50 transition-all duration-500" />
                            <h3 className="text-xl md:text-2xl font-serif text-slate-200 mb-3 md:mb-4 flex items-center gap-3">
                                <span className="text-[#c9a84c] text-xs font-sans tracking-widest font-bold">01.</span>
                                Our Mission
                            </h3>
                            <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
                                To empower individuals, families, and businesses by providing accessible, transparent,
                                and effective legal services. We strive to uphold justice and fairness in every case we handle.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div variants={fadeUp} className="group relative bg-slate-900/40 border border-slate-800/80 rounded-[3px] p-6 md:p-10 overflow-hidden hover:bg-slate-900/60 hover:border-slate-700 transition-all duration-300 shadow-lg">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c]/0 to-transparent group-hover:via-[#c9a84c]/50 transition-all duration-500" />
                            <h3 className="text-xl md:text-2xl font-serif text-slate-200 mb-3 md:mb-4 flex items-center gap-3">
                                <span className="text-[#c9a84c] text-xs font-sans tracking-widest font-bold">02.</span>
                                Our Vision
                            </h3>
                            <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
                                To be recognized as the most trusted law firm in the region, known for unquestionable integrity,
                                professionalism, and unwavering dedication to securing our clients’ success.
                            </p>
                        </motion.div>
                    </div>

                    {/* ── 3. CORE VALUES (Secondary Feature Cards) ── */}
                    <div className="pt-4 md:pt-8">
                        <motion.div variants={fadeUp} className="text-center mb-6 md:mb-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-slate-500">
                                Our Core Values
                            </span>
                        </motion.div>

                        {/* Pinalitan ang grid-cols-1 ng grid-cols-2 para maging 2x2 grid sa mobile */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                            {[
                                { icon: Shield, title: 'Integrity', desc: 'Honesty and absolute transparency.' },
                                { icon: Scale, title: 'Justice', desc: 'Committed to fairness and the rule of law.' },
                                { icon: Users, title: 'Client-Centered', desc: 'Tailoring strategies to your situation.' },
                                { icon: Briefcase, title: 'Professionalism', desc: 'Maintaining the highest ethical standards.' }
                            ].map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    className="group flex flex-col p-4 md:p-8 bg-slate-900/20 border border-slate-800/50 rounded-[3px] hover:bg-slate-900/40 hover:border-[#c9a84c]/30 transition-all duration-300"
                                >
                                    <div className="mb-3 md:mb-6">
                                        {/* Pinaliit nang konti ang icon (w-5 h-5) sa mobile */}
                                        <value.icon className="text-[#c9a84c] stroke-[1.5] group-hover:scale-110 transition-transform duration-300 w-5 h-5 md:w-7 md:h-7" />
                                    </div>
                                    {/* Pinaliit din ang text size para magkasya nang maayos */}
                                    <h4 className="font-bold text-slate-200 mb-1.5 md:mb-2 tracking-wide text-[10px] md:text-xs uppercase">{value.title}</h4>
                                    <p className="text-slate-500 text-[10px] md:text-xs font-light leading-relaxed">
                                        {value.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}