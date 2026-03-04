'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Loader2, CheckCircle2 } from 'lucide-react';

interface IntakeFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function IntakeForm({ isOpen, onClose }: IntakeFormProps) {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/intake', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-6 bg-brand-dark/20 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-border"
                    >
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-brand-dark">Get Started</h2>
                                <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {submitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-8 h-8 text-brand-cyan" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-dark">Automation Triggered!</h3>
                                    <p className="text-slate-600">We've received your request. Your Slack channel and Payoneer invoice are being generated as we speak.</p>
                                    <button onClick={onClose} className="w-full py-4 mt-8 rounded-xl bg-brand-dark text-white font-semibold">
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Project Description</label>
                                        <textarea
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all resize-none"
                                            placeholder="Tell us about your business goals..."
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        />
                                    </div>
                                    <button
                                        disabled={loading}
                                        type="submit"
                                        className="w-full py-4 rounded-xl bg-brand-dark text-white font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors disabled:opacity-50"
                                    >
                                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                                        {loading ? 'Processing...' : 'Submit Request'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
