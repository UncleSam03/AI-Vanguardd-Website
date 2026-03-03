"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Bot, 
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Construction,
  Wrench,
  Zap as ElectricianIcon,
  Sprout
} from "lucide-react";
import { ParticleCanvas } from "./components/ParticleCanvas";

/* ─────────────────── COMPONENTS ─────────────────── */

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const IndustryCard = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => (
  <Reveal className="bento-card-light rounded-3xl p-8 group">
    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-cyan-50 group-hover:text-cyan-600">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-dark mb-2 tracking-tight">{title}</h3>
    <p className="text-muted text-sm leading-relaxed">{desc}</p>
  </Reveal>
);

const PricingCard = ({ title, price, features, isFeatured = false }: { title: string; price: string; features: string[]; isFeatured?: boolean }) => (
  <Reveal className={`bento-card-light rounded-[2.5rem] p-10 flex flex-col h-full bg-white relative ${isFeatured ? 'border-trace' : ''}`}>
    <div className="relative z-20">
      <h3 className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-10">
        <span className="text-5xl font-extrabold text-dark tracking-tighter">${price}</span>
        <span className="text-slate-400 text-sm font-medium">/one-time</span>
      </div>
      <ul className="space-y-5 mb-12 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-[15px] text-slate-600 font-medium">
            <CheckCircle2 size={18} className="text-cyan-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <button className={`w-full py-5 rounded-2xl font-bold text-[15px] transition-all transform active:scale-95 ${isFeatured ? 'btn-primary-light shadow-xl shadow-cyan-500/20' : 'bg-slate-50 text-dark border border-slate-200 hover:bg-slate-100'}`}>
        Choose {title.split(' ')[0]}
      </button>
    </div>
  </Reveal>
);

/* ─────────────────── MAIN PAGE ─────────────────── */

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg text-dark selection:bg-cyan-100">
      
      {/* HIGH-DEF PARTICLE SYSTEM */}
      <ParticleCanvas />

      {/* ─────────────────── NAV ─────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] nav-blur-light px-6 md:px-16 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-600/20">
            <span className="text-white font-black text-lg">V</span>
          </div>
          <span className="text-sm font-extrabold text-dark tracking-tighter uppercase">AI Vanguard</span>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          {["Solutions", "Process", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] font-bold text-slate-500 hover:text-dark transition-colors tracking-tight"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="text-[13px] font-bold text-dark border-b-2 border-cyan-500 pb-0.5 hover:border-cyan-600 transition-all">
          Launch Console
        </button>
      </nav>

      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden">
        <div className="hero-glow-light" />
        
        <Reveal>
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur shadow-sm text-cyan-700 text-[11px] font-bold tracking-widest uppercase mb-10">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            System Status: Active
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-hero text-6xl md:text-[110px] max-w-[1200px] tracking-tighter leading-[0.9] text-dark mb-10">
            Your Service Business, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Accelerated by AI.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-slate-500 text-lg md:text-2xl max-w-2xl leading-relaxed mb-16 font-medium">
            Professional landing pages and AI Agents for local service pros. <br className="hidden md:block"/>
            Get a world-class digital presence while you stay on the job.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="flex flex-col sm:flex-row gap-5 items-center">
          <button className="btn-primary-light px-12 py-5 rounded-2xl text-[17px] font-bold shadow-2xl shadow-cyan-600/30">
            Launch Your Site
          </button>
          <button className="bg-white px-12 py-5 rounded-2xl text-[17px] font-bold border border-slate-200 shadow-sm hover:bg-slate-50 transition-all active:scale-95">
            Try the Bot
          </button>
        </Reveal>

        <Reveal delay={0.4} className="mt-32">
          <p className="text-[11px] font-bold text-slate-400 tracking-[0.4em] uppercase mb-6">Proven Technology Infrastructure</p>
          <div className="flex flex-wrap gap-12 items-center justify-center opacity-40">
            <span className="font-extrabold text-[15px] tracking-tighter">Hosted on Vercel</span>
            <span className="font-extrabold text-[15px] tracking-tighter">Powered by Next.js 15</span>
            <span className="font-extrabold text-[15px] tracking-tighter">Built with Antigravity</span>
          </div>
        </Reveal>
      </section>

      {/* ─────────────────── SERVICE GRID ─────────────────── */}
      <section id="solutions" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-xl">
            <p className="text-cyan-600 font-bold text-xs tracking-widest uppercase mb-4">Core Solutions</p>
            <Reveal>
              <h2 className="text-5xl font-extrabold text-dark tracking-tighter leading-none mb-6">Elite websites for the <br/>skilled trades.</h2>
            </Reveal>
            <p className="text-slate-500 text-xl font-medium">Industry-specific engineering to ensure your customers find you first, every time.</p>
          </div>
          <button className="flex items-center gap-2 text-cyan-600 font-bold text-sm tracking-tight hover:gap-3 transition-all">
            See all industries <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <IndustryCard icon={Wrench} title="Plumbing" desc="Leak detection, heating installs, and emergency response pipelines." />
          <IndustryCard icon={ElectricianIcon} title="Electrical" desc="Full rewires, smart home setups, and recurring safety checks." />
          <IndustryCard icon={Sprout} title="Landscaping" desc="Garden architecture and maintenance scheduling automation." />
          <IndustryCard icon={Construction} title="HVAC" desc="Climate control systems and preventative maintenance tracking." />
        </div>
      </section>

      {/* ─────────────────── FEATURES BENTO ─────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal className="bento-card-light rounded-[3rem] p-12 bg-white flex flex-col justify-between group overflow-hidden relative min-h-[500px]">
             <div className="absolute top-0 right-0 p-12 text-slate-50 transform rotate-12 -translate-y-4 translate-x-4">
                <Smartphone size={240} />
             </div>
             <div className="relative z-10 max-w-sm">
                <Smartphone className="text-cyan-600 mb-8" size={40} />
                <h3 className="text-4xl font-extrabold text-dark mb-6 tracking-tighter">Mobile-first <br/>conversion.</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">92% of local trade searches happen on mobile. We build for the palm of their hand first.</p>
             </div>
             <div className="relative z-10 pt-10">
                <div className="inline-flex gap-1.5 px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-slate-500">
                  <Zap size={14} fill="currentColor" /> Ultra Fast CDN
                </div>
             </div>
          </Reveal>

          <Reveal delay={0.1} className="bento-card-light rounded-[3rem] p-12 bg-slate-900 flex flex-col justify-between group overflow-hidden relative min-h-[500px]">
             <div className="absolute top-0 right-0 p-12 text-white/5 transform -rotate-12 translate-x-12">
                <Bot size={280} />
             </div>
             <div className="relative z-10 max-w-sm">
                <Bot className="text-cyan-400 mb-8" size={40} />
                <h3 className="text-4xl font-extrabold text-white mb-6 tracking-tighter">AI-powered <br/>lead capture.</h3>
                <p className="text-white/40 text-lg leading-relaxed font-medium">Our custom support bots qualify leads at 3am so you wake up to booked jobs, not just emails.</p>
             </div>
             <button className="relative z-10 bg-white/10 hover:bg-white/20 text-white font-bold p-5 rounded-2xl transition-all flex items-center justify-between group-hover:px-7">
                View Agent Showcase <ArrowRight size={20} />
             </button>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────── PRICING ─────────────────── */}
      <section id="pricing" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-28">
           <Reveal>
              <h2 className="text-5xl md:text-6xl font-extrabold text-dark tracking-tighter leading-none mb-8">Transparent Engineering.</h2>
              <p className="text-slate-500 text-2xl font-medium max-w-2xl mx-auto">No recurring management fees. Pay for elite tools once, keep them forever.</p>
           </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <PricingCard 
            title="Landing Pages" 
            price="100" 
            features={["Custom Design System", "Local SEO Infrastructure", "Contact Form Engine", "SSL & Hosting included"]}
          />
          <PricingCard 
            title="Vanguard Bundle" 
            price="150" 
            isFeatured={true}
            features={["Pro Landing Page", "Custom AI Chatbot", "24/7 Automated Booking", "Priority Technical Support", "Vercel Enterprise Edge"]}
          />
          <PricingCard 
            title="AI Chatbots" 
            price="50" 
            features={["Custom Knowledge Base", "24/7 Lead Qualification", "SMS/Email Notifications", "Easy Website Embed"]}
          />
        </div>
      </section>

      {/* ─────────────────── FOOTER ─────────────────── */}
      <footer className="py-24 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-dark rounded-xl flex items-center justify-center">
                <span className="text-white font-black">V</span>
              </div>
              <span className="text-sm font-black text-dark tracking-tighter uppercase">AI Vanguard</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              World-class digital presence for the individuals who build and maintain the world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-black text-slate-300 uppercase tracking-widest">Platform</h4>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors">Infrastructure</a>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors">Security</a>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors">API Docs</a>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-black text-slate-300 uppercase tracking-widest">Company</h4>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors">About AI Vanguard</a>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors">Case Studies</a>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors">Terms</a>
            </div>
            <div className="hidden md:flex flex-col gap-5">
              <h4 className="text-[11px] font-black text-slate-300 uppercase tracking-widest">Connect</h4>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors">X (Twitter)</a>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors">Registry</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">© 2026 AI Vanguard. PRO-GRADE AUTOMATION.</p>
           <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">All Core Systems Operational</span>
           </div>
        </div>
      </footer>
    </main>
  );
}
