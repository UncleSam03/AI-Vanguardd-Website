import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-antimetal bg-grain selection:bg-cyan-500/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/10 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-mesh-v2 opacity-50" />
      </div>

      {/* Technical Navigation */}
      <nav className="fixed top-0 w-full z-50 px-10 py-8 flex justify-between items-center transition-all duration-500">
        <div className="flex items-center gap-6 group">
          <div className="relative w-10 h-10 rounded-full glass-v2 flex items-center justify-center p-2 border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-700">
            <Image
              src="/logo.jpg"
              alt="AI Vanguard"
              width={24}
              height={24}
              className="rounded-sm grayscale brightness-150"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-black tracking-[0.3em] text-white">AI VANGUARD</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[8px] text-mono text-cyan-400/60 font-medium tracking-[0.4em]">SYSTEM.READY</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-16 glass-v2 px-10 py-3 rounded-full border-white/5">
          {["solutions", "pricing", "autonomous"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-[9px] text-mono text-slate-400 hover:text-white transition-all duration-300 relative group overflow-hidden"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          ))}
        </div>

        <button className="relative group">
          <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-0 group-hover:opacity-20 transition-all" />
          <div className="relative glass-v2 px-8 py-3 rounded-xl border-cyan-500/30 group-hover:border-cyan-500 transition-all">
            <span className="text-[10px] text-mono text-white font-black tracking-widest">DEPLOY.NOW</span>
          </div>
        </button>
      </nav>

      {/* Technical Hero Section */}
      <header className="relative z-10 pt-48 pb-32 px-10 max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="text-left animate-reveal-up">
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <span className="text-[10px] text-mono text-cyan-400 font-bold whitespace-nowrap">01 // AUTOMATE.EVERYTHING</span>
            <div className="h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent w-full animate-line" />
          </div>

          <h1 className="text-hero text-[70px] md:text-[110px] text-white mb-10">
            ELITE <br />
            <span className="text-gradient">AUTONOMY.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-14 font-light leading-relaxed tracking-tight border-l-2 border-cyan-500/20 pl-8 ml-2">
            AI Vanguard builds sovereign digital infrastructure for the manual trades. High-conversion landing pages meets autonomous customer closed-loop systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <button className="bg-white text-slate-950 px-12 py-6 rounded-2xl font-black text-xs text-mono hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
              INITIALIZE_PROJECT
            </button>
            <div className="flex flex-col gap-2 opacity-50 pl-2">
              <span className="text-[9px] text-mono font-bold tracking-[0.2em] text-white">LATENCY: 12ms</span>
              <span className="text-[9px] text-mono font-bold tracking-[0.2em] text-white">REGION: EU_ME</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center py-20 animate-reveal-up" style={{ animationDelay: '0.2s' }}>
          {/* Abstract 3D Central Asset */}
          <div className="relative w-full aspect-square max-w-[500px] group">
            <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-[100px] group-hover:bg-cyan-400/20 transition-all duration-1000" />
            <Image
              src="/orb.png"
              alt="Automation Intelligence"
              fill
              className="object-contain drop-shadow-[0_0_80px_rgba(14,165,233,0.3)] group-hover:scale-110 transition-transform duration-[4000ms] animate-float"
              priority
            />
            {/* Technical Labels around the orb */}
            <div className="absolute top-[10%] right-[-10%] glass-v2 p-4 rounded-xl border-white/5 opacity-60 backdrop-blur-xl group-hover:opacity-100 transition-all">
              <span className="text-[8px] text-mono text-cyan-400 font-black block mb-1">DATA_STREAM</span>
              <div className="flex gap-1">
                {[1, 0, 1, 1, 0].map((b, i) => <span key={i} className={`w-1 h-3 rounded-full ${b ? 'bg-cyan-400' : 'bg-white/10'}`} />)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Antimetal-style Grid Section */}
      <section id="solutions" className="relative z-10 py-48 px-10 max-w-[1440px] mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-32">
          <div className="max-w-2xl">
            <span className="text-[10px] text-mono text-cyan-500 font-bold mb-6 block">02 // ARCHITECTURE</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">COMMAND YOUR <br /> INDUSTRY.</h2>
          </div>
          <p className="text-slate-400 font-mono text-[9px] tracking-widest max-w-xs text-right opacity-40">
            [SCALING_INFRASTRUCTURE_FOR_PLUMBERS_ELECTRICIANS_AND_CONSTRUCTORS]
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Featured Bento Card */}
          <div className="md:col-span-8 glass-card-v2 rounded-[2.5rem] p-16 flex flex-col justify-between min-h-[500px] group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="text-[120px] font-black italic select-none">AI</span>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 glass-v2 rounded-2xl flex items-center justify-center mb-10 border-white/10 text-2xl">🤖</div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Autonomous Support Logic</h3>
              <p className="text-xl text-slate-400 font-light max-w-md leading-relaxed">
                Deeply trained AI agents that handle bookings, qualification, and initial support specialized for trade terminology.
              </p>
            </div>
            <div className="pt-10 border-t border-white/5 flex gap-4">
              <span className="px-5 py-2 glass-v2 rounded-full text-[9px] text-mono text-white italic">QUALIFICATION_MODE: ACTIVE</span>
              <span className="px-5 py-2 glass-v2 rounded-full text-[9px] text-mono text-white italic">LLM_CORE: VANGUARD_X</span>
            </div>
          </div>

          {/* Side Bento Card */}
          <div className="md:col-span-4 glass-card-v2 rounded-[2.5rem] p-12 flex flex-col justify-center text-center group">
            <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-700">⚡</div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase">Speed Dominance</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-10">
              Landing pages built for 100/100 performance scores. Zero friction between click and conversion.
            </p>
            <div className="h-[2px] w-12 bg-cyan-500 mx-auto opacity-40" />
          </div>

          {/* Small Cards */}
          {["Global SEO", "AEO Ready", "Technical CRM", "24/7 Uptime"].map((f, i) => (
            <div key={i} className="md:col-span-3 glass-card-v2 rounded-3xl p-10 group">
              <span className="text-[8px] text-mono text-cyan-400 font-bold mb-6 block">LAYER_{i + 3}</span>
              <h4 className="text-sm font-black text-white uppercase tracking-widest">{f}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Futuristic Pricing Section */}
      <section id="pricing" className="relative z-10 py-64 bg-white/[0.01]">
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="text-center mb-32">
            <span className="text-mono text-[10px] text-cyan-400 font-bold mb-6 block tracking-[0.5em]">03 // TIERS</span>
            <h2 className="text-7xl md:text-9xl font-black text-white italic tracking-tighter opacity-10">INVESTMENT.</h2>
            <p className="text-2xl font-black text-white mt-[-2rem] md:mt-[-4rem]">TRANSPARENT VALUE ENGINE.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Standard", price: "100", icon: "🌐" },
              { title: "Autonomous", price: "50", icon: "🧠" },
              { title: "Vanguard Bundle", price: "150", icon: "💠" }
            ].map((tier, i) => (
              <div key={i} className={`glass-card-v2 rounded-[3.5rem] p-16 border border-white/5 relative overflow-hidden group ${i === 1 ? 'border-cyan-500/30' : ''}`}>
                {i === 1 && (
                  <div className="absolute top-0 right-0 px-8 py-2 bg-cyan-500 text-slate-950 text-[9px] text-mono font-black italic rounded-bl-3xl">PRO_CHOICE</div>
                )}
                <div className="text-4xl mb-12">{tier.icon}</div>
                <h3 className="text-xl font-bold text-slate-500 uppercase tracking-[0.4em] mb-4">{tier.title}</h3>
                <div className="flex items-baseline gap-2 mb-16">
                  <span className="text-7xl font-black tracking-tighter">${tier.price}</span>
                  <span className="text-slate-500 text-mono text-[10px] uppercase">/SET_UP</span>
                </div>
                <ul className="space-y-6 mb-20 text-xs font-medium text-slate-300">
                  <li className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Professional Setup
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Maintenance Plan
                  </li>
                </ul>
                <button className="w-full py-6 rounded-2xl glass-v2 border-white/10 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all font-black text-xs text-mono tracking-widest">
                  INITIALIZE_TIER
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Footer */}
      <footer className="relative z-10 py-32 px-10 max-w-[1440px] mx-auto border-t border-white/5 bg-mesh-v2">
        <div className="grid md:grid-cols-4 gap-20 mb-32 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-10 overflow-hidden">
              <span className="text-[10px] text-mono text-cyan-400 font-bold whitespace-nowrap">VANGUARD_SYSTEMS_OVERVIEW</span>
              <div className="h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent w-full" />
            </div>
            <h4 className="text-2xl font-black text-white mb-6 tracking-widest uppercase">AI VANGUARD</h4>
            <p className="text-xs text-slate-500 font-bold tracking-widest leading-loose uppercase max-w-sm">
              The vanguard of trade business excellence. building technical sovereignty for those who build the physical world.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <h5 className="text-[10px] text-mono text-white font-black tracking-[0.5em] uppercase">Connect</h5>
            <nav className="flex flex-col gap-5 text-[10px] text-mono text-slate-500 font-bold tracking-widest">
              <a href="#" className="hover:text-cyan-400">INSTAGRAM</a>
              <a href="#" className="hover:text-cyan-400">LINKEDIN</a>
              <a href="#" className="hover:text-cyan-400">EMAIL</a>
            </nav>
          </div>

          <div className="flex flex-col gap-10">
            <h5 className="text-[10px] text-mono text-white font-black tracking-[0.5em] uppercase">Region</h5>
            <nav className="flex flex-col gap-5 text-[10px] text-mono text-slate-500 font-bold tracking-widest">
              <span className="text-cyan-500/60">DUBAI, UAE_</span>
              <span className="text-cyan-500/60">LONDON, UK_</span>
              <span className="text-cyan-500/60">BERLIN, DE_</span>
            </nav>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30">
          <span className="text-[9px] text-mono font-black tracking-[0.4em] text-white">© 2025 AI_VANGUARD // ALL_RIGHTS_RESERVED</span>
          <div className="flex items-center gap-8">
            <span className="text-[9px] text-mono font-black tracking-[0.4em] text-white">SYSTEMS:NOMINAL</span>
            <span className="text-[9px] text-mono font-black tracking-[0.4em] text-white">PWRBY:ANTIGRAVITY</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
