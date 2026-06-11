import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Ina-assume na ang file mo na ito ay nasa src/components/ folder. 
// Kung nasa src/ folder ito mismo, tanggalin ang isang tuldok (gawing './assets/...')
import heroVideo from '../assets/vid-hero/hero-vid.mp4';
import heroPoster from '../assets/hero-1.png';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: "easeOut" as const }
    },
};

export default function Hero() {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col overflow-hidden bg-slate-950 font-sans"
            aria-label="Hero section"
        >
            {/* ── Background Video & Seamless Vignette ── */}
            <div className="absolute inset-0 z-0">
                <video
                    onCanPlayThrough={() => setVideoLoaded(true)}
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={heroPoster}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    aria-hidden="true"
                />

                {/* Overlays for contrast and seamless blending */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
            </div>

            {/* ── Main Body ── */}
            {/* Added pt-28 to ensure it clears any mobile navbar floating above it */}
            <div className="relative z-20 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-28 pb-16 lg:py-24">

                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col max-w-2xl w-full"
                >
                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        // Scaled down text size for base mobile, standardizing the line-height
                        className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] font-extrabold leading-tight sm:leading-[1.06] tracking-tight text-white mb-5 sm:mb-6"
                    >
                        When It Matters
                        <br />
                        <span className="text-[#c9a84c]">Most,</span> We Stand
                        <br />
                        With You.
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={itemVariants}
                        className="text-sm sm:text-base leading-relaxed text-white/60 font-light mb-8 sm:mb-10 max-w-md pr-4 sm:pr-0"
                    >
                        Your trusted partner for comprehensive legal & notary services —
                        combining expertise, integrity, and genuine care for every client.
                    </motion.p>

                    {/* CTAs */}
                    {/* Made buttons w-full on mobile for better tapping, then w-auto on larger screens */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 bg-[#c9a84c] text-[#0f1929] text-[11px] font-bold tracking-[0.16em] uppercase px-8 py-4 rounded-[3px] transition-all duration-200 hover:bg-[#d4b86a] hover:-translate-y-px shadow-[0_4px_20px_rgba(201,168,76,0.2)] hover:shadow-[0_6px_28px_rgba(201,168,76,0.35)]"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#practice-areas"
                            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 text-white/65 text-[11px] font-semibold tracking-[0.14em] uppercase px-8 py-4 rounded-[3px] border border-white/20 transition-all duration-200 hover:border-white/45 hover:text-white hover:-translate-y-px"
                        >
                            Our Services
                            <ChevronDown size={13} className="opacity-70 group-hover:translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Hours */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-start sm:items-center gap-3 pt-6 border-t border-white/[0.10]"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse mt-1.5 sm:mt-0" />
                        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.18em] uppercase text-white/50 leading-relaxed">
                            Open Monday – Saturday, 8:00 AM – 5:00 PM
                        </span>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}