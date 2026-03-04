'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Gavel, ArrowLeft, Globe, Bot, Shield, AlertTriangle, Scale, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 20 } },
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-brand-light text-brand-dark overflow-x-hidden selection:bg-brand-cyan/30 relative">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-brand-border">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="p-1 rounded-lg group-hover:bg-slate-100 transition-colors">
                            <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-brand-dark" />
                        </div>
                        <Image
                            src="/Logo.jpg"
                            alt="AI Vanguard Logo"
                            width={28}
                            height={28}
                            className="rounded-md shadow-sm"
                        />
                        <span className="font-bold text-lg tracking-tight text-brand-dark">AI Vanguard</span>
                    </Link>
                </div>
            </header>

            <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="space-y-12"
                >
                    {/* Header Section */}
                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">Terms of Service</h1>
                        <p className="text-slate-500 font-medium flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </motion.div>

                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="p-8 rounded-3xl bg-white border border-brand-border shadow-sm">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                                <Gavel className="w-6 h-6 text-brand-blue" />
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Welcome to AI Vanguard. By using our services, you agree to these terms. Please read them carefully as they contain important information about your rights and responsibilities.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.section variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
                            <div className="flex items-center gap-2 font-bold text-brand-dark">
                                <Globe className="w-5 h-5 text-brand-blue" />
                                <h2>Services Provided</h2>
                            </div>
                            <div className="prose prose-slate prose-sm text-slate-600 leading-relaxed">
                                <p>AI Vanguard provides high-performance landing pages, AI-integrated chatbots, and automated workflows for service-based businesses.</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Landing page hosting and SEO.</li>
                                    <li>AI Chatbot integration and management.</li>
                                    <li>Lead qualification and routing.</li>
                                </ul>
                            </div>
                        </motion.section>

                        <motion.section variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
                            <div className="flex items-center gap-2 font-bold text-brand-dark">
                                <Bot className="w-5 h-5 text-brand-blue" />
                                <h2>AI Usage Disclosure</h2>
                            </div>
                            <div className="prose prose-slate prose-sm text-slate-600 leading-relaxed">
                                <p>Our services leverage artificial intelligence to automate customer interactions. </p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>AI outputs are generated by machine learning models and may contain errors.</li>
                                    <li>Users are responsible for reviewing critical AI-generated content.</li>
                                    <li>We do not guarantee 100% accuracy in AI-driven lead qualification.</li>
                                </ul>
                            </div>
                        </motion.section>

                        <motion.section variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
                            <div className="flex items-center gap-2 font-bold text-brand-dark">
                                <Scale className="w-5 h-5 text-brand-blue" />
                                <h2>Intellectual Property</h2>
                            </div>
                            <div className="prose prose-slate prose-sm text-slate-600 leading-relaxed">
                                <p>We respect intellectual property rights and expect you to do the same.</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>AI Vanguard retains ownership of all platform code and AI infrastructure.</li>
                                    <li>Customers retain rights to their specific business data and lead information.</li>
                                    <li>Usage of our "Vanguard" branding requires prior approval.</li>
                                </ul>
                            </div>
                        </motion.section>

                        <motion.section variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
                            <div className="flex items-center gap-2 font-bold text-brand-dark">
                                <AlertTriangle className="w-5 h-5 text-brand-blue" />
                                <h2>Limitations of Liability</h2>
                            </div>
                            <div className="prose prose-slate prose-sm text-slate-600 leading-relaxed">
                                <p>AI Vanguard is provided "as-is". We are not liable for certain losses:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Lost profits due to AI-related service downtime.</li>
                                    <li>Inaccuracies in lead data captured by AI agents.</li>
                                    <li>Indirect or consequential damages.</li>
                                </ul>
                            </div>
                        </motion.section>
                    </div>

                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="pt-12 border-t border-brand-border">
                        <h2 className="text-xl font-bold text-brand-dark mb-4">Termination</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            AI Vanguard reserves the right to terminate or suspend access to our services for any violation of these terms, including unethical use of our AI integration tools. You may cancel your subscription at any time through our portal.
                        </p>
                    </motion.div>
                </motion.div>
            </main>

            <footer className="py-12 border-t border-brand-border mt-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-sm text-slate-400">© {new Date().getFullYear()} AI Vanguard. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
