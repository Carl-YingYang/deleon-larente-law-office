import { motion } from 'framer-motion';
import { User, CheckCircle2 } from 'lucide-react';

const attorneys = [
    {
        name: 'Atty. Theodore De Leon',
        role: 'Firm Partner',
        quote: '"Committed to delivering strategic, results-driven legal solutions."',
        details: [
            'Juris Doctor',
            'Member of the Integrated Bar of the Philippines',
            'Over 10 Years of Practice',
        ],
        specialties: ['Civil Litigation', 'Corporate Law', 'Family Law'],
    },
    {
        name: 'Atty. Jethro Laurente',
        role: 'Firm Partner',
        quote: '"Defending your rights with uncompromising dedication and expertise."',
        details: [
            'Juris Doctor',
            'Member of the Integrated Bar of the Philippines',
            'Over 10 Years of Practice',
        ],
        specialties: ['Criminal Defense', 'Labor Law', 'Contract Negotiation'],
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

export default function Attorneys() {
    return (
        <section id="attorneys" className="py-20 bg-slate-950 relative overflow-hidden border-t border-slate-900 font-sans">

            {/* ── Giant Faded Background Text Effect ── */}
            <div className="absolute top-20 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none opacity-[0.01]">
                <span className="text-[10rem] md:text-[15rem] font-serif font-bold whitespace-nowrap tracking-tighter text-white">
                    ATTORNEYS
                </span>
            </div>

            <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-12 relative z-10">

                {/* ── Section Header ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                    className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 lg:mb-16"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="h-[1px] w-6 bg-[#c9a84c]" />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c9a84c]">
                            Legal Experts
                        </span>
                        <div className="h-[1px] w-6 bg-[#c9a84c]" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 tracking-tight mb-4">
                        Meet Our Attorneys
                    </h2>

                    <p className="text-sm text-slate-400 leading-relaxed font-light">
                        The dedicated professionals behind De Leon Laurente Law Office, providing trusted legal guidance across diverse practice areas.
                    </p>
                </motion.div>

                {/* ── Editorial Profile Showcase ── */}
                <div className="flex flex-col gap-6 lg:gap-20">
                    {attorneys.map((atty, idx) => {
                        const isEven = idx % 2 === 0;

                        return (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeUp}
                                // Mobile: Naka-lock ang height at may rounded corners. Desktop: Original Grid Layout.
                                className="relative w-full bg-slate-900 lg:bg-transparent rounded-lg lg:rounded-none overflow-hidden lg:overflow-visible border border-slate-800 lg:border-none lg:grid lg:grid-cols-12 lg:gap-12 items-center group"
                            >
                                {/* ── Image/Portrait Side ── */}
                                <div className={`relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] z-0 ${isEven ? 'lg:order-1 lg:col-span-4' : 'lg:order-2 lg:col-span-4'}`}>

                                    {/* Offset Background Border (Leaning Effect) - Hidden on Mobile */}
                                    <div className={`hidden lg:block absolute inset-0 border border-[#c9a84c]/40 rounded-[3px] transition-transform duration-500 ease-out ${isEven ? 'translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2' : '-translate-x-3 translate-y-3 group-hover:-translate-x-2 group-hover:translate-y-2'}`} />

                                    {/* Image Container */}
                                    <div className="absolute inset-0 bg-transparent lg:bg-slate-900 lg:border border-slate-800 lg:rounded-[3px] flex items-center justify-center overflow-hidden lg:shadow-xl">

                                        {/* Mobile Dark Gradient Overlay - Dito papatong yung floating text */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/90 to-transparent lg:hidden z-10" />

                                        <div className="absolute inset-0 bg-[#c9a84c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                                        {/* Placeholder Icons - Inangat natin konti para di matakpan ng text sa mobile */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 lg:pt-0 lg:justify-center z-0">
                                            <User size={60} className="text-slate-700/50 lg:text-slate-700 group-hover:text-[#c9a84c] transition-colors duration-500 stroke-[1]" />
                                        </div>
                                    </div>
                                </div>

                                {/* ── Content Side (Naka-Float sa Mobile!) ── */}
                                <div className={`absolute inset-x-0 bottom-0 z-20 p-5 lg:relative lg:p-0 flex flex-col ${isEven ? 'lg:order-2 lg:col-span-8' : 'lg:order-1 lg:col-span-8'}`}>

                                    <h3 className="text-xl lg:text-3xl font-serif font-light text-slate-100 mb-0.5 lg:mb-1">
                                        {atty.name}
                                    </h3>
                                    <p className="text-[#c9a84c] font-medium uppercase tracking-[0.15em] text-[9px] lg:text-[11px] mb-3 lg:mb-5">
                                        {atty.role}
                                    </p>

                                    <blockquote className="border-l-2 border-[#c9a84c]/50 lg:border-slate-700/60 pl-3 lg:pl-4 mb-4 lg:mb-6 text-slate-200 lg:text-slate-300 font-light italic text-[11px] lg:text-base leading-relaxed">
                                        {atty.quote}
                                    </blockquote>

                                    {/* Credentials Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 lg:gap-y-2.5 gap-x-6 mb-4 lg:mb-6">
                                        {atty.details.map((detail, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <CheckCircle2 size={12} className="text-[#c9a84c] mt-[2px] lg:mt-[3px] flex-shrink-0 opacity-80 lg:w-[14px] lg:h-[14px]" />
                                                <span className="text-slate-300 lg:text-slate-400 font-light text-[10px] lg:text-[13px] leading-tight">
                                                    {detail}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Specialties - Inalis ang "Practice Focus" title sa mobile para makatipid sa space */}
                                    <div className="pt-3 lg:pt-5 border-t border-slate-700/50 lg:border-slate-800/60">
                                        <p className="hidden lg:block text-slate-500 text-[9px] tracking-[0.2em] uppercase mb-3 font-semibold">
                                            Practice Focus
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 lg:gap-2">
                                            {atty.specialties.map((spec, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 lg:px-3 lg:py-1.5 bg-slate-800/60 lg:bg-slate-900/40 border border-slate-700/50 lg:border-slate-800 text-slate-200 lg:text-slate-300 text-[9px] lg:text-[11px] tracking-wide rounded-[2px] font-light hover:border-[#c9a84c]/40 hover:text-white transition-colors"
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}