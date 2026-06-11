import { Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

// Custom Facebook Icon para walang error at consistent ang nipis ng linya
const FacebookIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-[#020617] pt-12 md:pt-20 pb-8 md:pb-10 border-t border-slate-900 font-sans relative overflow-hidden">

            {/* Subtle Top Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

            <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 relative z-10">

                {/* ── MAIN GRID: 2 Columns agad sa Mobile! ── */}
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 sm:gap-x-8 gap-y-10 md:gap-12 lg:gap-16 mb-10 md:mb-16">

                    {/* ── Column 1: Brand & Description (Sinasakop ang 2 columns sa mobile) ── */}
                    <div className="col-span-2 lg:col-span-5 flex flex-col items-start">
                        <a href="#home" className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 group">
                            <img
                                src={logo}
                                alt="De Leon Law Logo"
                                className="h-12 md:h-14 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="flex flex-col">
                                <span className="text-slate-100 font-serif text-base md:text-lg tracking-widest uppercase leading-tight">
                                    De Leon Laurente
                                </span>
                                <span className="text-[#c9a84c] font-sans text-[9px] md:text-[10px] tracking-[0.3em] font-bold uppercase">
                                    Law Office
                                </span>
                            </div>
                        </a>
                        <p className="text-slate-400 text-[13px] md:text-sm leading-relaxed font-light max-w-sm">
                            Providing dedicated, professional, and ethical legal services. We fight for your rights and protect your interests with unwavering commitment and integrity.
                        </p>
                    </div>

                    {/* ── Column 2: Quick Links (1 column sa mobile, kaya katabi ng Contact) ── */}
                    <div className="col-span-1 lg:col-span-3">
                        <h4 className="text-slate-100 font-serif text-[14px] md:text-lg mb-4 md:mb-6 tracking-wide">Explore</h4>
                        <ul className="space-y-2.5 md:space-y-3">
                            {['About Us', 'Our Attorneys', 'Practice Areas', 'FAQ', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                                        className="text-slate-400 hover:text-[#c9a84c] text-[12px] md:text-sm transition-colors font-light flex items-center gap-2 group"
                                    >
                                        <span className="w-2 h-[1px] bg-slate-700 group-hover:bg-[#c9a84c] transition-colors" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Column 3: Contact Info (1 column sa mobile, katabi ng Explore) ── */}
                    <div className="col-span-1 lg:col-span-4">
                        <h4 className="text-slate-100 font-serif text-[14px] md:text-lg mb-4 md:mb-6 tracking-wide">Connect With Us</h4>

                        {/* Pinaliit ang text (text-[11px]) at gap sa mobile dahil hati sila sa screen */}
                        <ul className="space-y-3 md:space-y-4 text-[11px] sm:text-[13px] md:text-sm text-slate-400 font-light">
                            <li className="flex items-start gap-2 md:gap-4 group">
                                <MapPin className="text-[#c9a84c] shrink-0 mt-0.5 group-hover:scale-110 transition-transform w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
                                <span className="leading-tight md:leading-relaxed">
                                    Unit A, 3Aces Apartments,<br />
                                    7965 Santa Maria Bypass Rd,<br />
                                    Sta. Clara, Santa Maria, 3022 Bulacan
                                </span>
                            </li>
                            <li className="flex items-start gap-2 md:gap-4 group">
                                <Phone className="text-[#c9a84c] shrink-0 mt-0.5 group-hover:scale-110 transition-transform w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
                                <div className="flex flex-col gap-0.5 md:gap-1">
                                    <a href="tel:0448160603" className="hover:text-[#c9a84c] transition-colors">(044) 816 0603</a>
                                    <a href="tel:09175436113" className="hover:text-[#c9a84c] transition-colors">0917 543 6113</a>
                                    <a href="tel:09178671997" className="hover:text-[#c9a84c] transition-colors">0917 867 1997</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2 md:gap-4 group">
                                <Mail className="text-[#c9a84c] shrink-0 mt-0.5 group-hover:scale-110 transition-transform w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
                                <a href="mailto:dl.lawoffice2025@gmail.com" className="hover:text-[#c9a84c] transition-colors break-all">
                                    dl.lawoffice2025@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 md:gap-4 group pt-1 md:pt-2">
                                <FacebookIcon className="text-[#c9a84c] shrink-0 group-hover:scale-110 transition-transform w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
                                <a
                                    href="https://www.facebook.com/61574530372681/about/?_rdr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#c9a84c] transition-colors"
                                >
                                    De Leon Law Office
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* ── Bottom Section: Disclaimer & Copyright ── */}
                <div className="pt-6 md:pt-8 border-t border-slate-900/80 flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-6">
                    <div className="md:w-2/3 text-center md:text-left">
                        <p className="text-[10px] md:text-[11px] text-slate-500/70 font-light leading-relaxed">
                            <span className="font-medium text-slate-500">Disclaimer:</span> The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only.
                        </p>
                    </div>
                    <div className="md:w-1/3 text-[10px] md:text-[11px] text-slate-500/70 font-light tracking-wider text-center md:text-right uppercase mt-2 md:mt-0">
                        &copy; {new Date().getFullYear()} De Leon Law Office.<br className="hidden md:block" /> All rights reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
}