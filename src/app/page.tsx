import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Premium Background Mesh & Hero Image */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <Image
          src="/hero-hq.png"
          alt="AI Vanguard Abstract Automation"
          fill
          className="object-cover opacity-20 brightness-[0.4] scale-110 blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] glow-orb" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] glow-orb" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass px-8 py-5 flex justify-between items-center border-b border-white/5 mx-auto">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <Image
              src="/logo.jpg"
              alt="AI Vanguard Logo"
              fill
              className="object-cover scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-[0.2em] text-white leading-none">AI VANGUARD</span>
            <span className="text-[10px] font-bold text-cyan-400/80 tracking-widest uppercase mt-1">Trade Intelligence</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          <a href="#solutions" className="hover:text-cyan-400 transition-all duration-300 relative group">
            Solutions
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#pricing" className="hover:text-cyan-400 transition-all duration-300 relative group">
            Pricing
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-cyan-400 transition-all duration-300 relative group">
            Enterprise
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
        </div>
        <button className="bg-white text-slate-950 px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all shadow-xl">
          Book Audit
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 text-center pt-32">
        <div className="animate-reveal max-w-6xl">
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-10 glass rounded-full border border-cyan-500/20 shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.4em] text-cyan-300 uppercase">
              Leading Trade Automation 2025
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
            THE FORCE MULTIPLIER <br />
            <span className="text-gradient drop-shadow-2xl">FOR TRADESMEN.</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 font-light leading-relaxed tracking-wide">
            Elite digital infrastructure and autonomous AI agents designed specifically for the plumbing, electrical, and construction sectors.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a href="#solutions" className="group relative bg-[#0ea5e9] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(14,165,233,0.3)]">
              <span className="relative z-10">Deploy Vanguard</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <button className="glass text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all border border-white/10">
              Show Intelligence
            </button>
          </div>
        </div>

        {/* Floating Mockup with Perspective */}
        <div className="mt-32 w-full max-w-6xl animate-reveal delay-2 px-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass p-6 rounded-[3rem] shadow-2xl overflow-hidden animate-float">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-slate-900/50">
                <Image
                  src="/agent-mockup.png"
                  alt="AI Agent Intelligence"
                  fill
                  className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-[3000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10 text-left">
                  <div className="glass p-6 rounded-2xl max-w-xs border-cyan-500/30">
                    <p className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">Autonomous Logic</p>
                    <p className="text-[10px] text-slate-300 font-medium italic">"Scheduling high-value electrical inspections in Dubai. Real-time qualification complete."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid Solutions Section */}
      <section id="solutions" className="relative z-10 py-48 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-[10px] font-black tracking-[0.5em] text-cyan-400 uppercase mb-6">Master Your Operation</h2>
          <p className="text-5xl md:text-7xl font-black text-white tracking-tighter">BEYOND SOFTWARE.</p>
        </div>

        <div className="bento-grid">
          {/* Large Card: AI Support */}
          <div className="col-span-1 md:col-span-2 row-span-2 glass-card rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/30">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Autonomous AI Agents</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                24/7 client qualification and instant booking. Our agents don't just chat; they close. Trained on technical trade data for flawless accuracy.
              </p>
            </div>
          </div>

          {/* Medium Card: Analytics */}
          <div className="col-span-1 md:col-span-2 glass-card rounded-3xl p-10 flex items-center gap-8 group">
            <div className="shrink-0 w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">⚡</div>
            <div>
              <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide">Instant Infrastructure</h3>
              <p className="text-sm text-slate-400 font-light">Deploy sub-second loading landing pages that dominate local search results.</p>
            </div>
          </div>

          {/* Small Card: Conversion */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group">
            <div className="text-3xl">📈</div>
            <div>
              <h3 className="text-lg font-black text-white mb-2">High Conversion</h3>
              <p className="text-xs text-slate-400">Psychology-backed designs that turn browsers into booked jobs.</p>
            </div>
          </div>

          {/* Small Card: Security */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between group">
            <div className="text-3xl">🛡️</div>
            <div>
              <h3 className="text-lg font-black text-white mb-2">Elite Security</h3>
              <p className="text-xs text-slate-400">Enterprise-grade protection for your client data and operations.</p>
            </div>
          </div>

          {/* Wide Feature: Global Reach */}
          <div className="col-span-1 md:col-span-4 glass-card rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 group">
            <div className="max-w-md">
              <h3 className="text-3xl font-black text-white mb-4 uppercase">EUROPE & MIDDLE EAST</h3>
              <p className="text-slate-400 font-light italic">"Standardized for multi-regional regulatory compliance and localized AI behavior."</p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-2 glass rounded-full text-[10px] font-black text-cyan-300">DUBAI, UAE</div>
              <div className="px-6 py-2 glass rounded-full text-[10px] font-black text-cyan-300">LONDON, UK</div>
              <div className="px-6 py-2 glass rounded-full text-[10px] font-black text-cyan-300">BERLIN, DE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Hyper-Minimalist) */}
      <section id="pricing" className="relative z-10 py-48 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 text-left">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none italic">ZERO FRICTION PRICING.</h2>
              <p className="text-slate-400 text-xl font-light">Predictable investment for explosive operational growth. No hidden fees.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Minimalist Pricing Card */}
            {[
              { name: "The Baseline", price: "100", features: ["Ultra-Fast LP", "SEO Optimized", "Mobile First"], accent: "border-white/10" },
              { name: "The Intelligence", price: "50", features: ["Autonomous Agent", "Dynamic Booking", "24/7 Training"], accent: "border-cyan-500/50 bg-cyan-500/5 shadow-[0_0_50px_rgba(14,165,233,0.1)]" },
              { name: "The Vanguard", price: "150", features: ["Full Stack Suite", "Custom Domain", "Priority Logic"], accent: "border-white bg-white/5" }
            ].map((pkg, i) => (
              <div key={i} className={`p-12 rounded-[2.5rem] border ${pkg.accent} flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500`}>
                <div>
                  <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-10">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-12">
                    <span className="text-6xl font-black tracking-tighter">${pkg.price}</span>
                    <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">USD / Setup</span>
                  </div>
                  <ul className="space-y-6 mb-16">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-4 text-sm font-medium text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] transition-all ${i === 1 ? 'bg-cyan-500 text-slate-950' : 'bg-white/5 border border-white/10 text-white hover:bg-white hover:text-slate-950'}`}>
                  Select Logic
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Architectural) */}
      <footer className="relative z-10 pt-32 pb-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-16 mb-32">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden grayscale contrast-125 opacity-40">
                <Image src="/logo.jpg" alt="AI Vanguard" fill className="object-cover" />
              </div>
              <span className="text-xl font-bold tracking-[0.3em] opacity-40">AI VANGUARD</span>
            </div>
            <p className="max-w-xs text-slate-500 text-xs font-medium leading-loose tracking-wider uppercase">
              The digital frontline for tradesmen in the modern era. Building the future of trade automation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] font-black text-white tracking-[0.4em] uppercase">Vanguard</h4>
              <nav className="flex flex-col gap-4 text-xs font-bold text-slate-500 tracking-wider">
                <a href="#" className="hover:text-cyan-400">Intelligence</a>
                <a href="#" className="hover:text-cyan-400">Solutions</a>
                <a href="#" className="hover:text-cyan-400">Infrastructure</a>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] font-black text-white tracking-[0.4em] uppercase">Connect</h4>
              <nav className="flex flex-col gap-4 text-xs font-bold text-slate-500 tracking-wider">
                <a href="#" className="hover:text-cyan-400">Twitter</a>
                <a href="#" className="hover:text-cyan-400">LinkedIn</a>
                <a href="#" className="hover:text-cyan-400">Contact</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 opacity-20">
          <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.5em]">
            © 2025 AI VANGUARD EU & ME | ALL RIGHTS RESERVED
          </p>
          <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.5em]">
            POWERED BY ANTIGRAVITY
          </p>
        </div>
      </footer>
    </main>
  );
}
