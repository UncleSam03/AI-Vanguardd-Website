"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Bot,
  Layout,
  ArrowRight,
  Droplet,
  Zap as Power,
  Trees as Landscaping,
  Thermometer,
  Cpu,
  Globe,
  Clock
} from "lucide-react";

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-antimetal bg-grain selection:bg-primary/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px]" />
        <div className="absolute inset-0 bg-mesh-v2 opacity-50" />
      </div>

      {/* Minimalism Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-center">
        <div className="glass-v2 px-6 py-3 rounded-full flex items-center gap-8 border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-[10px] font-black text-dark">AV</span>
            </div>
            <span className="text-[12px] font-black tracking-widest text-white uppercase">AI Vanguard</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Services", "Pricing", "Demo"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-white/10 hidden md:block" />

          <button className="text-[10px] font-black tracking-widest text-primary uppercase hover:text-white transition-colors">
            Launch Site
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-48 pb-32 px-6 max-w-7xl mx-auto text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em]">Scale Your Service Business</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-hero text-5xl md:text-8xl text-white mb-8 tracking-tighter">
            YOUR SERVICE BUSINESS, <br />
            <span className="text-gradient">ACCELERATED BY AI.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Professional landing pages and AI Agents for local service pros. Get a world-class digital presence while you stay on the job.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="relative group px-10 py-5 bg-white text-dark rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-primary transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
              Launch Your Site
            </button>
            <button className="px-10 py-5 glass-v2 rounded-xl font-black text-[11px] uppercase tracking-widest text-white hover:bg-white/5 transition-all">
              Try the Bot
            </button>
          </div>
        </Reveal>
      </header>

      {/* Bento Grid Service Section */}
      <section id="services" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <Reveal>
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">01 // Industries</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">BUILT FOR PROS.</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Main Industry Card */}
          <div className="md:col-span-2 lg:col-span-3 glass-card-v2 p-10 rounded-3xl flex flex-col justify-between group overflow-hidden relative min-h-[400px]">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:opacity-10 transition-opacity">
              <Droplet size={300} strokeWidth={1} />
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 border border-primary/20">
                <Droplet size={24} />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 uppercase">Plumbing</h3>
              <p className="text-slate-400 font-light leading-relaxed max-w-xs">
                Emergency dispatch templates and AI qualification for high-stress repairs.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-primary tracking-widest uppercase">
              Learn More <ArrowRight size={14} />
            </div>
          </div>

          {/* Electrician Card */}
          <div className="md:col-span-2 lg:col-span-3 glass-card-v2 p-10 rounded-3xl flex flex-col justify-between group min-h-[400px]">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 border border-primary/20">
                <Power size={24} />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 uppercase">Electrical</h3>
              <p className="text-slate-400 font-light leading-relaxed max-w-xs">
                Showcase your master services with high-conversion project grids and instant quoting.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-primary tracking-widest uppercase">
              Learn More <ArrowRight size={14} />
            </div>
          </div>

          {/* Landscaping Card */}
          <div className="md:col-span-2 glass-card-v2 p-8 rounded-3xl group">
            <Landscaping className="text-primary mb-6" size={32} strokeWidth={1.5} />
            <h4 className="text-xl font-black text-white mb-3 uppercase tracking-tight">Landscaping</h4>
            <p className="text-sm text-slate-400 font-light mb-6">Visual galleries that turn browsing into bookings.</p>
            <div className="h-[1px] w-full bg-white/5 group-hover:bg-primary/20 transition-colors" />
          </div>

          {/* HVAC Card */}
          <div className="md:col-span-2 glass-card-v2 p-8 rounded-3xl group">
            <Thermometer className="text-primary mb-6" size={32} strokeWidth={1.5} />
            <h4 className="text-xl font-black text-white mb-3 uppercase tracking-tight">HVAC</h4>
            <p className="text-sm text-slate-400 font-light mb-6">Maintenance plans and emergency AI support agents.</p>
            <div className="h-[1px] w-full bg-white/5 group-hover:bg-primary/20 transition-colors" />
          </div>

          {/* Infrastructure Card */}
          <div className="md:col-span-2 glass-card-v2 p-8 rounded-3xl group flex flex-col justify-center items-center text-center">
            <Cpu className="text-primary mb-6" size={32} strokeWidth={1.5} />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Infrastructure</span>
            <h4 className="text-md font-black text-white uppercase tracking-widest">Built with Antigravity</h4>
          </div>
        </div>
      </section>

      {/* Pricing Bento Section */}
      <section id="pricing" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">02 // Pricing</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic opacity-50">INVESTMENT</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Landing Page Tier */}
          <div className="glass-card-v2 p-12 rounded-3xl flex flex-col justify-between min-h-[500px] border border-white/5">
            <div>
              <div className="text-primary mb-8"><Layout size={32} strokeWidth={1.5} /></div>
              <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-6">Landing Page</h3>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-6xl font-black text-white tracking-tighter">$100</span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">/ flat</span>
              </div>
              <ul className="space-y-4 text-xs font-medium text-slate-400">
                <li className="flex items-center gap-3"><Shield size={14} className="text-primary" /> Premium Design</li>
                <li className="flex items-center gap-3"><Shield size={14} className="text-primary" /> Vercel Hosting</li>
                <li className="flex items-center gap-3"><Shield size={14} className="text-primary" /> Mobile Optimized</li>
              </ul>
            </div>
            <button className="w-full py-5 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/5 transition-colors">
              Initialize Project
            </button>
          </div>

          {/* Vanguard Bundle Tier */}
          <div className="shimmer-border rounded-3xl p-12 flex flex-col justify-between min-h-[500px] bg-white/[0.02] border-primary/30 relative">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary text-dark text-[9px] font-black uppercase tracking-widest rounded-bl-xl">Best Value</div>
            <div>
              <div className="text-primary mb-8 flex gap-2"><Layout size={24} strokeWidth={1.5} /> <span className="opacity-50">+</span> <Bot size={24} strokeWidth={1.5} /></div>
              <h3 className="text-[12px] font-bold text-slate-300 uppercase tracking-[0.4em] mb-6">Vanguard Bundle</h3>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-6xl font-black text-white tracking-tighter text-gradient">$150</span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">/ total</span>
              </div>
              <ul className="space-y-4 text-xs font-medium text-slate-300">
                <li className="flex items-center gap-3"><Zap size={14} className="text-primary" /> Website + AI Agent</li>
                <li className="flex items-center gap-3"><Zap size={14} className="text-primary" /> Lead Auto-Qualification</li>
                <li className="flex items-center gap-3"><Zap size={14} className="text-primary" /> SEO Integration</li>
                <li className="flex items-center gap-3"><Zap size={14} className="text-primary" /> Priority Activation</li>
              </ul>
            </div>
            <button className="w-full py-5 rounded-xl bg-primary text-dark text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors">
              Activate Bundle
            </button>
          </div>

          {/* AI Chatbot Tier */}
          <div className="glass-card-v2 p-12 rounded-3xl flex flex-col justify-between min-h-[500px] border border-white/5">
            <div>
              <div className="text-primary mb-8"><Bot size={32} strokeWidth={1.5} /></div>
              <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-6">AI Chatbot</h3>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-6xl font-black text-white tracking-tighter">$50</span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">/ bot</span>
              </div>
              <ul className="space-y-4 text-xs font-medium text-slate-400">
                <li className="flex items-center gap-3"><Shield size={14} className="text-primary" /> Custom Knowledge Base</li>
                <li className="flex items-center gap-3"><Shield size={14} className="text-primary" /> Lead Capture Logic</li>
                <li className="flex items-center gap-3"><Shield size={14} className="text-primary" /> Easy CRM Integration</li>
              </ul>
            </div>
            <button className="w-full py-5 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/5 transition-colors">
              Deploy Agent
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Stats Footer */}
      <footer className="relative z-10 pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">AI Vanguard</h4>
            <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xs uppercase tracking-tight">
              Scaling service businesses with sovereign digital infrastructure. Built for those who build the world.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-2">Systems</span>
            <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              <Globe size={12} strokeWidth={2} /> Hosted on Vercel
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              <Power size={12} strokeWidth={2} /> Powered by Edge
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-2">Status</span>
            <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> All Systems Online
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              <Clock size={12} strokeWidth={2} /> Global Support 24/7
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em]">© 2026 AI Vanguard // Elite Tech for Industry</span>
          <div className="flex gap-8">
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em]">Privacy</span>
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em]">Terms</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
