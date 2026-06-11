import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User } from 'lucide-react';
import { FIRM_KNOWLEDGE_BASE } from '../utils/firmData';
import logo from '../assets/logo.png'; // Ginamit natin ang logo mo rito

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: 'Hello! I am the De Leon Laurente Legal Assistant. How can I help you today?' }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userText = input.trim();
        setInput('');

        const updatedMessages: Message[] = [...messages, { role: 'user', content: userText }];
        setMessages(updatedMessages);
        setIsLoading(true);

        try {
            // Tanggalin ang greeting (index 0 na assistant message)
            // para magsimula lagi sa 'user' ang conversation history
            const historyForApi = updatedMessages
                .slice(1) // skip the greeting
                .map(msg => ({ role: msg.role, content: msg.content }));

            // Ensure the last message is always from the user (safety check)
            // at walang consecutive same-role messages
            const cleanHistory: { role: string; content: string }[] = [];
            for (const msg of historyForApi) {
                const last = cleanHistory[cleanHistory.length - 1];
                if (last && last.role === msg.role) {
                    // Merge consecutive same-role messages
                    last.content += '\n' + msg.content;
                } else {
                    cleanHistory.push({ ...msg });
                }
            }

            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'llama-3.1-8b-instant',
                    messages: [
                        { role: 'system', content: FIRM_KNOWLEDGE_BASE },
                        ...cleanHistory
                    ],
                    max_tokens: 400,
                    temperature: 0.1
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Groq Error:', JSON.stringify(errorData, null, 2));
                throw new Error(errorData?.error?.message ?? `HTTP ${response.status}`);
            }

            const data = await response.json();
            const botReply = data.choices[0]?.message?.content
                ?? "I'm sorry, I couldn't process that. Please try again.";

            setMessages(prev => [...prev, { role: 'assistant', content: botReply }]);

        } catch (error) {
            console.error('Fetch Error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'I am having connection issues right now. Please call our office directly at (044) 816 0603.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Button - Gumamit na tayo ng Logo imbes na MessageSquare icon */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 p-3.5 bg-[#c9a84c] rounded-full shadow-lg hover:scale-105 transition-transform z-[100] ${isOpen ? 'hidden' : 'block'}`}
            >
                <img
                    src={logo}
                    alt="Chat"
                    className="w-7 h-7 object-contain brightness-0"
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-[#020617] border border-slate-800 rounded-[3px] shadow-2xl flex flex-col z-[100] overflow-hidden font-sans"
                    >
                        {/* Header */}
                        <div className="bg-slate-900 px-5 py-4 border-b border-slate-800 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 flex items-center justify-center p-1.5">
                                    {/* Logo na ginawang kulay puti para lumitaw sa dark mode */}
                                    <img src={logo} alt="AI" className="w-full h-full object-contain brightness-0 invert opacity-90" />
                                </div>
                                <div>
                                    <h3 className="text-slate-100 text-sm font-semibold tracking-wide">Legal Assistant</h3>
                                    <p className="text-[#c9a84c] text-[10px] uppercase tracking-widest flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-4">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.role === 'assistant' && (
                                        <div className="w-6 h-6 rounded-full bg-slate-800 flex-shrink-0 flex items-center justify-center mt-1 p-1">
                                            {/* Logo ulit bilang avatar ng bot */}
                                            <img src={logo} alt="AI" className="w-full h-full object-contain brightness-0 invert opacity-70" />
                                        </div>
                                    )}
                                    <div className={`p-3 rounded-[3px] max-w-[80%] text-[13px] leading-relaxed ${msg.role === 'user'
                                        ? 'bg-[#c9a84c] text-slate-950 rounded-tr-none font-medium'
                                        : 'bg-slate-900 border border-slate-800/60 text-slate-300 rounded-tl-none font-light'
                                        }`}>
                                        {msg.content}
                                    </div>
                                    {msg.role === 'user' && (
                                        <div className="w-6 h-6 rounded-full bg-[#c9a84c]/20 flex-shrink-0 flex items-center justify-center mt-1">
                                            <User className="text-[#c9a84c]" size={12} />
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Typing indicator */}
                            {isLoading && (
                                <div className="flex gap-3 justify-start">
                                    <div className="w-6 h-6 rounded-full bg-slate-800 flex-shrink-0 flex items-center justify-center mt-1 p-1">
                                        <img src={logo} alt="AI" className="w-full h-full object-contain brightness-0 invert opacity-70" />
                                    </div>
                                    <div className="p-3 rounded-[3px] bg-slate-900 border border-slate-800 rounded-tl-none flex gap-1 items-center">
                                        <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input & AI Disclaimer Notice */}
                        <div className="p-4 bg-slate-900 border-t border-slate-800">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask about our services..."
                                    className="w-full bg-[#020617] border border-slate-800 rounded-[3px] py-3 pl-4 pr-12 text-[13px] text-slate-200 focus:outline-none focus:border-[#c9a84c]/50 transition-colors placeholder:text-slate-600"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-[#c9a84c] disabled:opacity-50 transition-colors"
                                >
                                    <Send size={16} />
                                </button>
                            </div>

                            {/* ── AI DISCLAIMER NOTICE ── */}
                            <p className="text-[9px] sm:text-[10px] text-slate-500 text-center mt-3 font-light px-2 leading-relaxed">
                                <span className="font-medium text-slate-400">Notice:</span> I am an AI assistant and may occasionally make mistakes. Please do not share highly sensitive or confidential information in this chat.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}