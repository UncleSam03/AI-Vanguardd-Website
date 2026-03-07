'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    X,
    ChevronRight,
    ChevronLeft,
    Check,
    Rocket,
    Building2,
    Target,
    Mail,
    Sparkles,
    Loader2,
    ArrowRight
} from 'lucide-react';

interface OnboardingWizardProps {
    isOpen: boolean;
    onClose: () => void;
    initialGoal?: string;
}

const INDUSTRIES = ['Plumbing', 'Electrical', 'Landscaping', 'HVAC', 'Home Services', 'Construction', 'Other'];
const GOALS = [
    { id: 'chatbot', title: 'AI Chatbot', desc: '24/7 emergency routing, automated quoting, and lead capture.' },
    { id: 'landing_page', title: 'Landing Page', desc: 'High-converting, professional landing page built for your trade.' },
    { id: 'full_onboarding', title: 'Full AI Onboarding', desc: 'Combined Chatbot and Landing Page setup for maximum growth.' },
];

export default function OnboardingWizard({ isOpen, onClose, initialGoal }: OnboardingWizardProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [strategy, setStrategy] = useState<any>(null);
    const [formData, setFormData] = useState({
        business_name: '',
        industry: 'Plumbing',
        primary_ai_goal: initialGoal || 'chatbot',
        email: '',
    });

    const activeSteps = useMemo(() => {
        const baseSteps = [
            { id: 'welcome', title: 'Welcome', icon: Rocket },
            { id: 'business', title: 'Business', icon: Building2 },
            { id: 'goal', title: 'Strategy', icon: Target },
            { id: 'email', title: 'Quote', icon: Mail },
        ];
        if (initialGoal) {
            return baseSteps.filter(s => s.id !== 'goal');
        }
        return baseSteps;
    }, [initialGoal]);

    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({
                ...prev,
                primary_ai_goal: initialGoal || 'chatbot'
            }));
            setCurrentStep(0);
            setStrategy(null);
            setLoading(false);
        }
    }, [isOpen, initialGoal]);

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, activeSteps.length));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/strategy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                setStrategy(data);
                setCurrentStep(activeSteps.length); // Final "Thank You" step
            }
        } catch (error) {
            console.error('Error generating quote:', error);
        } finally {
            setLoading(false);
        }
    };

    const progress = (currentStep / activeSteps.length) * 100;
    const currentStepId = currentStep < activeSteps.length ? activeSteps[currentStep].id : 'thankyou';

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6 bg-brand-dark/30 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        className="w-full max-w-2xl bg-white rounded-5xl shadow-2xl overflow-hidden border border-brand-border flex flex-col md:flex-row h-[90vh] md:h-auto"
                    >
                        {/* Sidebar / Progress */}
                        <div className="w-full md:w-64 bg-slate-50 p-8 border-b md:border-b-0 md:border-r border-brand-border flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-12">
                                    <div className="w-8 h-8 rounded-lg bg-brand-dark flex items-center justify-center">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-bold text-brand-dark">AI Strategist</span>
                                </div>

                                <div className="space-y-6">
                                    {activeSteps.map((step, idx) => {
                                        const Icon = step.icon;
                                        const isActive = idx === currentStep;
                                        const isCompleted = idx < currentStep;
                                        return (
                                            <div key={step.id} className="flex items-center gap-4 relative">
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? 'bg-brand-dark text-white shadow-lg' :
                                                    isCompleted ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-white text-slate-300 border border-slate-100'
                                                    }`}>
                                                    {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                                                </div>
                                                <span className={`text-sm font-semibold transition-colors ${isActive ? 'text-brand-dark' : 'text-slate-400'
                                                    }`}>{step.title}</span>
                                                {idx < activeSteps.length - 1 && (
                                                    <div className="absolute top-10 left-5 w-px h-6 bg-slate-100" />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="hidden md:block">
                                <div className="p-4 rounded-2xl bg-brand-blue/5 border border-brand-blue/10">
                                    <p className="text-xs font-medium text-brand-blue leading-relaxed">
                                        90% Automated Client Onboarding. Driven by Gemini 3.1.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-8 md:p-12 flex flex-col overflow-y-auto">
                            <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
                                <button onClick={onClose} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-dark transition-colors">
                                    <ChevronLeft className="w-5 h-5" />
                                    Back to Main Page
                                </button>
                                <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-1">
                                <AnimatePresence mode="wait">
                                    {currentStepId === 'welcome' && (
                                        <motion.div
                                            key="step0"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <h2 className="text-3xl font-bold text-brand-dark tracking-tight">Ready to evolve your business?</h2>
                                            <p className="text-slate-600 leading-relaxed">Let's build your AI blueprint. This 2-minute wizard will analyze your business and trigger your project kickoff automatically.</p>
                                            <div className="py-8">
                                                <img
                                                    src="/Logo.jpg"
                                                    alt="AI Vanguard"
                                                    className="w-24 h-24 rounded-2xl shadow-xl mx-auto border-4 border-white"
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStepId === 'business' && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <h2 className="text-2xl font-bold text-brand-dark">The Basics</h2>
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-slate-700">Business Name</label>
                                                    <input
                                                        value={formData.business_name}
                                                        onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-cyan/30 focus:ring-4 focus:ring-brand-cyan/5 transition-all outline-none"
                                                        placeholder="Acme Inc."
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-slate-700">Industry</label>
                                                    <select
                                                        value={formData.industry}
                                                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-cyan/30 transition-all outline-none"
                                                    >
                                                        {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStepId === 'goal' && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <h2 className="text-2xl font-bold text-brand-dark">Primary AI Goal</h2>
                                            <div className="grid grid-cols-1 gap-4">
                                                {GOALS.map((goal) => (
                                                    <button
                                                        key={goal.id}
                                                        onClick={() => setFormData({ ...formData, primary_ai_goal: goal.id })}
                                                        className={`p-6 rounded-3xl text-left border-2 transition-all ${formData.primary_ai_goal === goal.id
                                                            ? 'border-brand-dark bg-slate-50 shadow-md'
                                                            : 'border-slate-100 hover:border-brand-cyan/30'
                                                            }`}
                                                    >
                                                        <h3 className="font-bold text-brand-dark mb-1">{goal.title}</h3>
                                                        <p className="text-sm text-slate-500">{goal.desc}</p>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStepId === 'email' && (
                                        <motion.div
                                            key="step4"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <h2 className="text-2xl font-bold text-brand-dark">Where should we send your quote?</h2>
                                            <p className="text-slate-500 text-sm">We'll instantly generate and email a customized project quotation based on your choices.</p>
                                            <div className="space-y-4">
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-6 py-6 rounded-3xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-brand-dark focus:ring-4 focus:ring-brand-cyan/10 transition-all outline-none text-lg font-medium"
                                                    placeholder="founder@company.com"
                                                    required
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStepId === 'thankyou' && strategy && (
                                        <motion.div
                                            key="thankyou"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="space-y-8"
                                        >
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase tracking-wider">
                                                <Sparkles className="w-3 h-3" /> Quote Generated & Emailed
                                            </div>
                                            <h2 className="text-4xl font-bold text-brand-dark tracking-tight">Your project is mapped out, {formData.business_name}.</h2>
                                            <p className="text-slate-600 italic">"{strategy.summary_text}"</p>

                                            <div className="p-8 rounded-4xl bg-slate-900 text-white space-y-6">
                                                <div className="flex justify-between items-end pb-4 border-b border-slate-800">
                                                    <div>
                                                        <p className="text-brand-cyan text-sm font-bold uppercase tracking-widest mb-1">Estimated Investment</p>
                                                        <p className="text-4xl font-black">{strategy.estimated_cost}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Timeline</p>
                                                        <p className="font-semibold">{strategy.estimated_timeline}</p>
                                                    </div>
                                                </div>

                                                <h3 className="font-bold text-brand-cyan flex items-center gap-2 pt-2">
                                                    <Target className="w-5 h-5" /> What's Included
                                                </h3>
                                                <ul className="space-y-3">
                                                    {strategy.services_included.map((service: string, i: number) => (
                                                        <li key={i} className="flex gap-3 text-sm">
                                                            <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                                                            <span className="text-slate-300">{service}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <button onClick={onClose} className="w-full py-5 rounded-2xl bg-brand-dark text-white font-bold text-lg hover:shadow-2xl transition-all">
                                                Let's Go
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {currentStep < activeSteps.length && (
                                <div className="pt-12 flex items-center justify-between">
                                    <button
                                        onClick={prevStep}
                                        disabled={currentStep === 0}
                                        className="p-4 rounded-2xl text-slate-400 hover:text-brand-dark transition-colors disabled:opacity-0"
                                    >
                                        <ChevronLeft className="w-8 h-8" />
                                    </button>

                                    {currentStep === (activeSteps.length - 1) ? (
                                        <button
                                            onClick={handleSubmit}
                                            disabled={loading || !formData.business_name || !formData.email.includes('@')}
                                            className="px-10 py-5 rounded-2xl bg-brand-dark text-white font-bold shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all flex items-center gap-2 disabled:opacity-50"
                                        >
                                            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Rocket className="w-6 h-6" />}
                                            Generate Quote
                                        </button>
                                    ) : (
                                        <button
                                            onClick={nextStep}
                                            disabled={currentStep === 0 && !formData.business_name && currentStep !== 0}
                                            className="w-16 h-16 rounded-2xl bg-brand-dark text-white shadow-xl hover:shadow-2xl transition-all flex items-center justify-center font-bold"
                                        >
                                            <ChevronRight className="w-8 h-8" />
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
