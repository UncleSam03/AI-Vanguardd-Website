import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background with Overlays */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Trade Automation Background"
          fill
          className="object-cover opacity-60 brightness-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-[#0f172a]/80 to-[#0f172a]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10">
            <Image
              src="/logo.jpg"
              alt="AI Vanguard Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-widest text-white uppercase">AI Vanguard</span>
        </div>
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-slate-300">
          <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
        </div>
        <button className="bg-cyan-500 text-slate-900 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-cyan-400 transition glow-cyan">
          Start Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 text-center pt-20">
        <div className="animate-reveal max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] font-black tracking-[0.2em] text-cyan-400 uppercase">
              Serving Europe & Middle East
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none tracking-tighter">
            YOUR TRADE BUSINESS, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500">AUTOMATED.</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Elite landing pages and AI Agents for high-performing tradesmen.
            Don&apos;t just work harder. Work smarter with $100 websites and $50 AI bots.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#pricing" className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-cyan-400 transition-all transform hover:scale-105 active:scale-95">
              View Pricing
            </a>
            <button className="glass text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm border border-white/10 hover:bg-white/5 transition-all">
              Live Demo
            </button>
          </div>
        </div>

        {/* High Motion Mockup */}
        <div className="mt-24 w-full max-w-6xl animate-reveal delay-2 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sky-500/10 rounded-full blur-[120px]"></div>

          <div className="glass p-4 rounded-[40px] border border-white/10 shadow-2xl floating">
            <div className="bg-slate-900 rounded-[32px] overflow-hidden aspect-video relative group">
              <Image
                src="/bg.png"
                alt="Tech Background"
                fill
                className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-left">
                <div className="w-full max-w-md glass p-8 rounded-3xl border-cyan-500/20 translate-y-10 group-hover:translate-y-0 transition-transform duration-1000">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <h4 className="text-cyan-400 font-bold mb-2">A-1 Electric Dubai</h4>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-white/5 rounded"></div>
                    <div className="h-2 w-3/4 bg-white/5 rounded"></div>
                    <div className="h-8 w-32 bg-cyan-500/20 rounded-lg mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6">UNBEATABLE VALUE.</h2>
              <p className="text-slate-400 text-lg">Premium results at entry-level prices. No monthly fees, just pure growth for your trade.</p>
            </div>
            <div className="glass px-6 py-3 rounded-2xl border-white/5">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Prices start from $50</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* LP */}
            <div className="glass p-10 rounded-[32px] hover:border-cyan-500/50 transition-all duration-500 group">
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 block">Basic Package</span>
              <h3 className="text-2xl font-bold mb-4">Landing Page</h3>
              <div className="text-5xl font-black mb-10">$100</div>
              <ul className="space-y-4 mb-10 text-slate-400 text-sm font-medium">
                <li className="flex items-center gap-3"><span className="text-cyan-400">⚡</span> High Conversion Design</li>
                <li className="flex items-center gap-3"><span className="text-cyan-400">⚡</span> Fully Responsive</li>
                <li className="flex items-center gap-3"><span className="text-cyan-400">⚡</span> Vercel Hosting Ready</li>
              </ul>
              <button className="w-full py-4 rounded-2xl border border-white/10 font-bold uppercase tracking-widest text-xs group-hover:bg-white group-hover:text-slate-950 transition-all">Select</button>
            </div>

            {/* Bot */}
            <div className="glass p-10 rounded-[32px] border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500 transition-all duration-500 group">
              <span className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-4 block">New Service</span>
              <h3 className="text-2xl font-bold mb-4">AI Agent</h3>
              <div className="text-5xl font-black mb-10">$50</div>
              <ul className="space-y-4 mb-10 text-slate-300 text-sm font-medium">
                <li className="flex items-center gap-3"><span className="text-cyan-400">⚡</span> 24/7 Customer Support</li>
                <li className="flex items-center gap-3"><span className="text-cyan-400">⚡</span> Booking & Qualification</li>
                <li className="flex items-center gap-3"><span className="text-cyan-400">⚡</span> Embed Anywhere</li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-cyan-500 text-slate-950 font-black uppercase tracking-widest text-xs hover:bg-cyan-400 transition-all">Add Agent</button>
            </div>

            {/* Bundle */}
            <div className="glass p-10 rounded-[32px] border-white/20 bg-gradient-to-br from-white/5 to-transparent hover:border-white transition-all duration-500 group">
              <span className="text-xs font-black text-sky-400 uppercase tracking-widest mb-4 block">The Elite Choice</span>
              <h3 className="text-2xl font-bold mb-4">Vanguard Bundle</h3>
              <div className="text-5xl font-black mb-10">$150</div>
              <ul className="space-y-4 mb-10 text-slate-400 text-sm font-medium">
                <li className="flex items-center gap-3"><span className="text-white">⚡</span> Full Website + AI Bot</li>
                <li className="flex items-center gap-3"><span className="text-white">⚡</span> Custom Domain Setup</li>
                <li className="flex items-center gap-3"><span className="text-white">⚡</span> Priority Maintenance</li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-white text-slate-950 font-black uppercase tracking-widest text-xs hover:bg-cyan-400 transition-all">The Full Stack</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-20 px-6 border-t border-white/5 text-center bg-[#0f172a]/50 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden grayscale opacity-60">
            <Image
              src="/logo.jpg"
              alt="AI Vanguard Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-black tracking-widest opacity-40 uppercase">AI VANGUARD</span>
        </div>
        <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">
          &copy; 2025 AI Vanguard Europe & ME | Powered by Antigravity & Vercel
        </p>
      </footer>
    </main>
  );
}
