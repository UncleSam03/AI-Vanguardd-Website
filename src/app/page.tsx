'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Zap, 
  Leaf, 
  Thermometer, 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Globe, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    interface Particle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      angle: number;
      radius: number;
    }

    const particles: Particle[] = [];
    const numParticles = 700;

    const isInsideLogo = (x: number, y: number) => {
        const thickness = 14;
        
        // V shape
        const distLeft = Math.abs(x - y + 80) / Math.SQRT2;
        const distRight = Math.abs(x + y - 80) / Math.SQRT2;
        
        const inLeftArm = distLeft < thickness && x > -110 && x < 0 && y > -30 && y < 90;
        const inRightArm = distRight < thickness && x > 0 && x < 110 && y > -30 && y < 90;
        
        // Towers
        const inCenterTower = x > -12 && x < 12 && y > -100 && y < 50;
        const inLeftTower = x > -28 && x < -12 && y > -50 && y < 30;
        const inRightTower = x > 12 && x < 28 && y > -70 && y < 40;
        const inFarRightTower = x > 28 && x < 42 && y > -30 && y < 20;
        const inFarLeftTower = x > -42 && x < -28 && y > -10 && y < 10;

        return inLeftArm || inRightArm || inCenterTower || inLeftTower || inRightTower || inFarRightTower || inFarLeftTower;
    };

    for (let i = 0; i < numParticles; i++) {
       let tx = 0, ty = 0;
       while(true) {
          tx = (Math.random() - 0.5) * 240;
          ty = (Math.random() - 0.5) * 240;
          if (isInsideLogo(tx, ty)) break;
       }
       
       particles.push({
         x: Math.random() * width,
         y: Math.random() * height,
         targetX: tx,
         targetY: ty,
         angle: Math.random() * Math.PI * 2,
         radius: 1 + Math.random() * 1.5
       });
    }

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = '#0891B2'; // Cyan

      const centerX = width / 2;
      const centerY = height / 2 - 50; 
      const scale = Math.min(width, height) / 500; 

      particles.forEach(p => {
         const screenTargetX = centerX + p.targetX * scale;
         const screenTargetY = centerY + p.targetY * scale;

         const floatX = Math.sin(time + p.angle) * 15;
         const floatY = Math.cos(time + p.angle) * 15;

         const finalTargetX = screenTargetX + floatX;
         const finalTargetY = screenTargetY + floatY;

         p.x += (finalTargetX - p.x) * 0.04;
         p.y += (finalTargetY - p.y) * 0.04;

         ctx.beginPath();
         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
         ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
    />
  );
};

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 20 } },
};

const STAGGER_CHILDREN_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark overflow-hidden selection:bg-brand-cyan/30 relative">
      <ParticleBackground />
      
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/Logo.jpg" 
              alt="AI Vanguard Logo" 
              width={32} 
              height={32} 
              className="rounded-lg shadow-sm"
            />
            <span className="font-bold text-xl tracking-tight text-brand-dark">AI Vanguard</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#services" className="hover:text-brand-blue transition-colors">Services</Link>
            <Link href="#pricing" className="hover:text-brand-blue transition-colors">Pricing</Link>
            <Link href="#faq" className="hover:text-brand-blue transition-colors">FAQ</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg bg-brand-dark text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 relative z-10">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-32 relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
          
          <motion.div
            initial="hidden"
            animate="show"
            variants={STAGGER_CHILDREN_VARIANTS}
            className="space-y-8"
          >
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-white shadow-sm text-sm text-brand-blue mb-4">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span className="font-medium">Premium for Everyone</span>
            </motion.div>
            
            <motion.h1 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-brand-dark"
            >
              Your Service Business,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">
                Accelerated by AI.
              </span>
            </motion.h1>
            
            <motion.p 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Professional landing pages and AI Agents for local service pros. Get a world-class digital presence while you stay on the job.
            </motion.p>
            
            <motion.div 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex items-center justify-center pt-4"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse" />
                <button className="relative px-10 py-4 rounded-xl bg-brand-dark text-white font-semibold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-md overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  How it Works
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex items-center justify-center gap-6 pt-12 text-sm text-slate-500 font-medium"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-400" />
                <span>Hosted on Vercel</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-slate-400" />
                <span>Built with Antigravity</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Service Grid (Bento Box) */}
        <section id="services" className="max-w-7xl mx-auto mb-32">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CHILDREN_VARIANTS}
            className="space-y-12"
          >
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">Built for the Trades</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We understand your business. Our AI models are trained specifically for home service professionals to capture leads and book jobs.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Wrench, title: "Plumbing", desc: "Emergency call routing & leak assessment bots." },
                { icon: Zap, title: "Electrical", desc: "Quote generation & safety compliance checks." },
                { icon: Leaf, title: "Landscaping", desc: "Seasonal service scheduling & visual portfolios." },
                { icon: Thermometer, title: "HVAC", desc: "Maintenance reminders & diagnostic intake." }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm hover:shadow-md hover:border-brand-cyan/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-brand-dark">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Pricing (Bento Box) */}
        <section id="pricing" className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CHILDREN_VARIANTS}
            className="space-y-12"
          >
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">Simple, Transparent Pricing</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">No hidden fees. No complex tiers. Just the tools you need to grow.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Landing Page */}
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="p-8 rounded-3xl bg-white border border-brand-border shadow-sm flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-brand-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">Landing Page</h3>
                <p className="text-slate-500 text-sm mb-6">High-converting, mobile-optimized site.</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-brand-dark">$100</span>
                  <span className="text-slate-400 font-medium">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {['Custom Domain', 'SEO Optimization', 'Lead Capture Forms', 'Fast Hosting'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-brand-dark font-semibold transition-colors">
                  Get Started
                </button>
              </motion.div>

              {/* Vanguard Bundle (Highlighted) */}
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative group">
                {/* Badge moved here, outside overflow-hidden */}
                <div className="absolute top-0 right-8 transform -translate-y-1/2 z-20">
                  <span className="bg-gradient-to-r from-brand-cyan to-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Most Popular
                  </span>
                </div>

                <div className="relative p-[1px] rounded-3xl overflow-hidden shadow-lg h-full">
                  {/* Shimmer Border Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#06B6D4_50%,transparent_100%)] bg-[length:200%_100%] animate-shimmer" />
                  
                  <div className="relative p-8 rounded-[23px] bg-white flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-6">
                      <Sparkles className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-brand-dark">Vanguard Bundle</h3>
                    <p className="text-slate-500 text-sm mb-6">The complete digital presence package.</p>
                    <div className="mb-8">
                      <span className="text-4xl font-bold text-brand-dark">$150</span>
                      <span className="text-slate-400 font-medium">/mo</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {['Everything in Landing Page', 'Everything in AI Chatbot', 'Priority Support', 'Monthly Performance Report'].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-brand-dark text-white font-semibold hover:bg-slate-800 transition-colors shadow-sm">
                      Get the Bundle
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* AI Chatbot */}
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="p-8 rounded-3xl bg-white border border-brand-border shadow-sm flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-brand-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">AI Chatbot</h3>
                <p className="text-slate-500 text-sm mb-6">24/7 automated customer service.</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-brand-dark">$50</span>
                  <span className="text-slate-400 font-medium">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {['24/7 Lead Qualification', 'Automated Scheduling', 'Custom Knowledge Base', 'SMS Integration'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-brand-dark font-semibold transition-colors">
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-border py-12 px-6 relative z-10 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-blue" />
            <span className="font-bold tracking-tight text-brand-dark">AI Vanguard</span>
          </div>
          <p className="text-sm text-slate-500 font-medium">© {new Date().getFullYear()} AI Vanguard. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
            <Link href="#" className="hover:text-brand-blue transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-brand-blue transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-brand-blue transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
