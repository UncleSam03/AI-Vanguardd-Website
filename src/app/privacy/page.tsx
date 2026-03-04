'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, ArrowLeft, Globe, Bot, Shield, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 20 } },
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-brand-light text-brand-dark overflow-x-hidden selection:bg-brand-cyan/30 relative">
            {/* Background Glow */}
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
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">Privacy Policy</h1>
                        <p className="text-slate-500 font-medium flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </motion.div>

                    {/* Intro Card */}
                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="p-8 rounded-3xl bg-white border border-brand-border shadow-sm">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-6 h-6 text-brand-blue" />
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                At AI Vanguard, we are committed to protecting your privacy and your clients' data. This policy explains how we collect, use, and safeguard personal information when you use our AI-powered landing pages and automated services.
                            </p>
                        </div>
                    </motion.div>

                    {/* Content sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.section variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
                            <div className="flex items-center gap-2 font-bold text-brand-dark">
                                <Globe className="w-5 h-5 text-brand-blue" />
                                <h2>Data Collection</h2>
                            </div>
                            <div className="prose prose-slate prose-sm text-slate-600 leading-relaxed">
                                <p>We collect information you provide directly to us when you sign up for our services or when your clients interact with your AI-powered landing pages. This includes:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Business contact information.</li>
                                    <li>Lead data (names, emails, project details).</li>
                                    <li>Usage metadata to improve our AI models.</li>
                                </ul>
                            </div>
                        </motion.section>

                        <motion.section variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
                            <div className="flex items-center gap-2 font-bold text-brand-dark">
                                <Bot className="w-5 h-5 text-brand-blue" />
                                <h2>AI Processing</h2>
                            </div>
                            <div className="prose prose-slate prose-sm text-slate-600 leading-relaxed">
                                <p>To provide high-quality services, we process data using advanced AI technologies. </p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Data is used for lead qualification and automated responses.</li>
                                    <li>We use trusted third-party AI providers (e.g., Google Gemini, OpenAI).</li>
                                    <li>Inquiries are anonymized where possible before processing.</li>
                                </ul>
                            </div>
                        </motion.section>

                        <motion.section variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
                            <div className="flex items-center gap-2 font-bold text-brand-dark">
                                <Shield className="w-5 h-5 text-brand-blue" />
                                <h2>Security</h2>
                            </div>
                            <div className="prose prose-slate prose-sm text-slate-600 leading-relaxed">
                                <p>Your security is our priority. We implement robust measures to protect your data:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Encryption of data in transit and at rest.</li>
                                    <li>Regular security audits of our AI infrastructure.</li>
                                    <li>Strict access controls for our support and development teams.</li>
                                </ul>
                            </div>
                        </motion.section>

                        <motion.section variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
                            <div className="flex items-center gap-2 font-bold text-brand-dark">
                                <Globe className="w-5 h-5 text-brand-blue" />
                                <h2>Your Rights</h2>
                            </div>
                            <div className="prose prose-slate prose-sm text-slate-600 leading-relaxed">
                                <p>You and your clients have the right to control your personal information.</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Request access to the data we hold.</li>
                                    <li>Request deletion or correction of your data.</li>
                                    <li>Opt-out of data usage for AI training purposes.</li>
                                </ul>
                            </div>
                        </motion.section>
                    </div>

                    {/* Contact Section */}
                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="pt-12 border-t border-brand-border">
                        <h2 className="text-xl font-bold text-brand-dark mb-4">Contact Us</h2>
                        <p className="text-slate-600 mb-6">If you have any questions about this Privacy Policy or our data practices, please reach out to us:</p>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-8">
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                                <p className="text-brand-dark font-medium">privacy@aivanguardd.com</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</p>
                                <p className="text-brand-dark font-medium">+267 759 11908</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </main>

            {/* Basic Footer for Legal Pages */}
            <footer className="py-12 border-t border-brand-border mt-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-sm text-slate-400">© {new Date().getFullYear()} AI Vanguard. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
