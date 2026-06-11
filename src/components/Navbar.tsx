import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; // Siguraduhing tama ang path nito

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = ['About', 'Attorneys', 'Practice Areas', 'FAQ', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 font-sans ${scrolled || isOpen
                ? 'bg-[#020617]/95 backdrop-blur-md border-b border-slate-800/50 py-3 md:py-2.5'
                : 'bg-transparent py-4 md:py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
                <div className="flex justify-between items-center">

                    {/* ── Brand / Logo Section ── */}
                    <a href="#home" className="flex items-center gap-2.5 md:gap-3 group z-50">
                        <img
                            src={logo}
                            alt="De Leon Laurente Law Logo"
                            className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-300"
                        />
                        {/* Inalis ang "hidden" para makita na siya sa mobile, inayos ang font scaling */}
                        <div className="flex flex-col mt-0.5">
                            <span className="text-slate-100 font-serif text-[12px] sm:text-[14px] md:text-[15px] tracking-[0.15em] uppercase leading-tight">
                                De Leon Laurente
                            </span>
                            <span className="text-[#c9a84c] text-[7px] sm:text-[8px] md:text-[9px] font-bold tracking-[0.3em] uppercase">
                                Law Office
                            </span>
                        </div>
                    </a>

                    {/* ── Desktop Menu (No Buttons, Just Links) ── */}
                    <div className="hidden md:flex space-x-8 lg:space-x-10 items-center">
                        {links.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(' ', '-')}`}
                                className="relative text-slate-300 hover:text-white text-[11px] font-medium tracking-[0.15em] uppercase transition-colors group py-2"
                            >
                                {link}
                                {/* Minimalist Hover Underline */}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* ── Mobile Menu Toggle ── */}
                    <div className="md:hidden z-50">
                        {/* Naglagay ng -mr-2 para hindi tabingi sa right padding ng screen */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 p-2 -mr-2 hover:text-[#c9a84c] transition-colors focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Mobile Menu Overlay ── */}
            {/* Ginawang mas mabilis ang dropdown (duration-300) at mas malinis ang borders */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-slate-800/80 overflow-hidden transition-all duration-300 ease-in-out shadow-2xl ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 py-3 flex flex-col">
                    {links.map((link, idx) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setIsOpen(false)}
                            className={`block py-4 px-4 text-slate-300 hover:text-[#c9a84c] hover:bg-slate-900/50 uppercase tracking-[0.2em] text-[11px] font-medium transition-colors rounded-[3px] ${idx !== links.length - 1 ? 'border-b border-slate-800/50' : ''
                                }`}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}