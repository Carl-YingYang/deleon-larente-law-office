import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
} as const;

export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-slate-950 relative border-t border-slate-900 font-sans">

            <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-900/10 blur-[100px] md:blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="flex flex-col gap-8 md:gap-10"
                >
                    {/* ── Section Header ── */}
                    <motion.div variants={fadeUp} className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                            <div className="h-[1px] w-6 bg-[#c9a84c]" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c9a84c]">
                                Get In Touch
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-100 tracking-tight mb-3 md:mb-4">
                            Contact Us
                        </h2>
                        <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
                            Ready to discuss your legal matters? Reach out to us for a consultation through any of the channels below. Our lines are always open to serve you better.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start mt-0 md:mt-2">

                        {/* ── Left Side: Contact "Modals" (Cards) ── */}
                        {/* GINAWANG 2x2 GRID (grid-cols-2) para magkatabi sila */}
                        <div className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4">

                            {/* Phone Numbers Card */}
                            {/* Ginawang flex-col para mapunta sa taas ang icon */}
                            <motion.div variants={fadeUp} className="bg-slate-900/40 border border-slate-800/60 p-4 md:p-5 rounded-[3px] hover:border-[#c9a84c]/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col gap-3 md:gap-4 items-start shadow-sm group">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#c9a84c]/30 transition-colors">
                                    <Phone className="text-[#c9a84c] group-hover:scale-110 transition-transform w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] md:text-[11px] font-bold text-slate-200 uppercase tracking-widest mb-2">Phone</h4>
                                    <div className="flex flex-col gap-1 text-[11px] md:text-xs text-slate-400 font-light leading-tight">
                                        <a href="tel:0448160603" className="hover:text-[#c9a84c] transition-colors">(044) 816 0603</a>
                                        <a href="tel:09175436113" className="hover:text-[#c9a84c] transition-colors">0917 543 6113</a>
                                        <a href="tel:09178671997" className="hover:text-[#c9a84c] transition-colors">0917 867 1997</a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Email Card */}
                            <motion.a
                                href="mailto:dl.lawoffice2025@gmail.com"
                                variants={fadeUp}
                                className="bg-slate-900/40 border border-slate-800/60 p-4 md:p-5 rounded-[3px] hover:border-[#c9a84c]/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col gap-3 md:gap-4 items-start shadow-sm group cursor-pointer"
                            >
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#c9a84c]/30 transition-colors">
                                    <Mail className="text-[#c9a84c] group-hover:scale-110 transition-transform w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
                                </div>
                                <div className="w-full">
                                    <h4 className="text-[10px] md:text-[11px] font-bold text-slate-200 uppercase tracking-widest mb-2 group-hover:text-[#c9a84c] transition-colors">Email ↗</h4>
                                    {/* break-all is crucial here so long emails wrap nicely in the small grid box */}
                                    <div className="text-[11px] md:text-xs text-slate-400 font-light group-hover:text-slate-300 transition-colors break-all leading-relaxed">
                                        dl.lawoffice2025@gmail.com
                                    </div>
                                </div>
                            </motion.a>

                            {/* Facebook Card */}
                            <motion.a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeUp}
                                className="bg-slate-900/40 border border-slate-800/60 p-4 md:p-5 rounded-[3px] hover:border-[#c9a84c]/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col gap-3 md:gap-4 items-start shadow-sm group cursor-pointer"
                            >
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#c9a84c]/30 transition-colors">
                                    <FacebookIcon className="text-[#c9a84c] group-hover:scale-110 transition-transform w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] md:text-[11px] font-bold text-slate-200 uppercase tracking-widest mb-2 group-hover:text-[#c9a84c] transition-colors">Facebook ↗</h4>
                                    <div className="text-[11px] md:text-xs text-slate-400 font-light group-hover:text-slate-300 transition-colors leading-relaxed">
                                        De Leon Laurente Law Office
                                    </div>
                                </div>
                            </motion.a>

                            {/* Address Card */}
                            <motion.a
                                href="https://www.google.com/maps/place/De+Leon+Law+Office/@14.823831,120.9545867,17z/data=!4m6!3m5!1s0x3397ad007ae450af:0x2007a593e6ffeff7!8m2!3d14.823831!4d120.9545652"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeUp}
                                className="bg-slate-900/40 border border-slate-800/60 p-4 md:p-5 rounded-[3px] hover:border-[#c9a84c]/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col gap-3 md:gap-4 items-start shadow-sm group cursor-pointer"
                            >
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#c9a84c]/30 transition-colors">
                                    <MapPin className="text-[#c9a84c] group-hover:scale-110 transition-transform w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] md:text-[11px] font-bold text-slate-200 uppercase tracking-widest mb-2 group-hover:text-[#c9a84c] transition-colors">
                                        Address ↗
                                    </h4>
                                    <p className="text-[11px] md:text-xs text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">
                                        Unit A, 3Aces Apartments,
                                        7965 Santa Maria Bypass Rd,
                                        Sta. Clara, Santa Maria
                                    </p>
                                </div>
                            </motion.a>

                        </div>

                        {/* ── Right Side: Dark Mode Google Map ── */}
                        <motion.div variants={fadeUp} className="lg:col-span-7 h-[350px] sm:h-[450px] lg:h-full lg:min-h-[500px] w-full bg-slate-900 border border-slate-800 rounded-[3px] overflow-hidden shadow-lg relative group mt-2 lg:mt-0">
                            <div className="absolute inset-0 bg-[#c9a84c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 mix-blend-overlay" />

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.042858102604!2d120.95199027618287!3d14.823836174351336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ad007ae450af%3A0x2007a593e6ffeff7!2sDe%20Leon%20Law%20Office!5e0!3m2!1sen!2sph!4v1718022000000!5m2!1sen!2sph"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(85%)" }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full object-cover"
                            ></iframe>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}