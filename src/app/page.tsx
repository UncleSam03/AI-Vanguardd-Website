"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Bot, 
  Smartphone,
  Globe,
  ArrowRight,
  Layers
} from "lucide-react";
import { ParticleCanvas } from "./components/ParticleCanvas";

/* ─────────────────── COMPONENTS ─────────────────── */

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, desc, delay = 0 }: { icon: React.ElementType; title: string; desc: string; delay?: number }) => (
  <Reveal delay={delay} className="bento-card rounded-2xl p-8 flex flex-col gap-4">
    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 tracking-tight">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </div>
  </Reveal>
);

const PricingCard = ({ title, price, features, isFeatured = false }: { title: string; price: string; features: string[]; isFeatured?: boolean }) => (
  <Reveal className={`bento-card rounded-3xl p-8 flex flex-col h-full ${isFeatured ? 'shimmer-border' : ''}`}>
    <div className={isFeatured ? 'shimmer-content' : ''}>
      <h3 className="text-lg font-semibold text-white/70 mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-white/40 text-sm">/one-time</span>
      </div>
      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-white/60">
            <Zap size={14} className="text-primary" />
            {f}
          </li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded-xl font-bold transition-all ${isFeatured ? 'bg-primary text-white btn-glow' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
        Get Started
      </button>
    </div>
  </Reveal>
);

/* ─────────────────── MAIN PAGE ─────────────────── */

export default function Home() {
  return (
    <main className="relative min-h-screen bg-midnight text-white selection:bg-primary/30">
      
      {/* BACKGROUND PARTICLE SYSTEM */}
      <ParticleCanvas />

      {/* ─────────────────── NAV ─────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] glass-dark border-b border-white/5 px-6 md:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm uppercase">AV</span>
          </div>
          <span className="text-sm font-bold tracking-widest uppercase">AI Vanguard</span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {["Services", "Impact", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[12px] font-medium text-white/50 hover:text-white transition-colors tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-white/5 border border-white/10 px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">
          Log In
        </button>
      </nav>

      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="hero-glow" />
        
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Elite Trade Automation
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-hero text-6xl md:text-[120px] max-w-5xl tracking-tighter leading-none mb-8">
            Your Service Business, <br/>
            <span className="text-gradient">Accelerated by AI.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            Professional landing pages and AI Agents for local service pros. <br className="hidden md:block"/>
            Get a world-class digital presence while you stay on the job.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="flex flex-col sm:flex-row gap-4">
          <button className="btn-glow bg-primary px-10 py-5 rounded-2xl text-[15px] font-bold">
            Launch Your Site
          </button>
          <button className="bg-white/5 backdrop-blur-md border border-white/10 px-10 py-5 rounded-2xl text-[15px] font-bold hover:bg-white/10 transition-all">
            Try the Bot
          </button>
        </Reveal>

        <Reveal delay={0.4} className="mt-24 opacity-40">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Powered by Elite Tech</p>
          <div className="flex gap-10 items-center justify-center grayscale">
            <span className="font-bold text-sm tracking-tight">Hosted on Vercel</span>
            <span className="font-bold text-sm tracking-tight">Built with Antigravity</span>
          </div>
        </Reveal>
      </section>

      {/* ─────────────────── SERVICE BENTO ─────────────────── */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Precision-engineered for pros</h2>
            <p className="text-white/40 max-w-xl mx-auto">We don&apos;t just build websites. We build conversion engines tailored for high-performing trade businesses.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
              icon={Smartphone} 
              title="Mobile First" 
              desc="Optimized for homeowners browsing on their phone between tasks. Fast, clean, and high-converting."
            />
            <ServiceCard 
              icon={Bot} 
              title="AI Response" 
              desc="Handle enquiries at 2am. Our custom AI bots answer questions and capture lead details instantly."
            />
            <ServiceCard 
              icon={Globe} 
              title="Local SEO" 
              desc="Dominate your service area. Every page is built with local search patterns baked into the code."
            />
            <ServiceCard 
              icon={Zap} 
              title="Ultra Fast" 
              desc="Deploying on edge networks means your site loads in under 1s. No more bounced leads."
            />
          </div>
          
          <Reveal delay={0.2} className="md:col-span-4 bento-card rounded-2xl p-10 flex flex-col justify-end group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 text-primary/20 group-hover:text-primary transition-colors">
              <Layers size={80} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready for anything</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">Whether you&apos;re a one-man show or a growing fleet, our infrastructure scales with your bookings.</p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────── PRICING BENTO ─────────────────── */}
      <section id="pricing" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Simple, transparent, trade-friendly</h2>
            <p className="text-white/40 max-w-xl mx-auto">No recurring agency fees. Just world-class tools to grow your business.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard 
            title="Landing Pages" 
            price="100" 
            features={["Custom Mobile Design", "local SEO Optimization", "Lead Capture Form", "Domain Connection"]}
          />
          <PricingCard 
            title="Vanguard Bundle" 
            price="150" 
            isFeatured={true}
            features={["Everything in Landing", "Custom AI Chatbot", "Priority Support", "Performance Dashboard"]}
          />
          <PricingCard 
            title="AI Chatbots" 
            price="50" 
            features={["Custom Training", "24/7 Response", "Lead Qualification", "Email Notifications"]}
          />
        </div>
      </section>

      {/* ─────────────────── FOOTER ─────────────────── */}
      <footer className="py-20 px-6 border-t border-white/5 glass-dark overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xs uppercase">AV</span>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">AI Vanguard</span>
          </div>
          
          <div className="flex gap-10 text-[11px] font-bold tracking-widest text-white/40 uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>

          <p className="text-[11px] text-white/30 tracking-widest uppercase">
            &copy; 2026 AI Vanguard. Precision Built.
          </p>
        </div>
      </footer>
    </main>
  );
}
