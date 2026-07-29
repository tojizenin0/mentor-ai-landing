import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, CheckCircle, Trophy, Flame, Users, MessageSquare, Moon, Sun, Menu, X, Sparkles, Brain, ClipboardList, Upload, Bot, Rocket } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/components/common/ThemeContext";
import { useIsMobile } from "@/hooks/useMobile";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleThemeWithAnimation } = useTheme();
  const isMobile = useIsMobile();
  const themeButtonRef = useRef<HTMLButtonElement>(null);

  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && !isMobile) setMobileMenuOpen(false);
  }, [isMobile, mobileMenuOpen]);

  const handleThemeToggle = (e?: React.MouseEvent) => {
    if (toggleThemeWithAnimation) {
      const target = (e?.currentTarget ?? themeButtonRef.current) as HTMLElement | undefined;
      if (target) {
        const rect = target.getBoundingClientRect();
        toggleThemeWithAnimation({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }
    }
  };

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#mentors", label: "Mentors" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
      <span className="text-xs font-bold text-primary uppercase tracking-widest">{children}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="scroll-progress"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "nav-scrolled" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary tracking-tight">MENTOR<span className="opacity-50">.</span>AI</div>
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm uppercase hover:text-primary transition nav-link smooth-link">{link.label}</a>
            ))}
            <Button variant="ghost" size="icon" onClick={(e) => handleThemeToggle(e)} className="rounded-full" ref={themeButtonRef}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase font-bold btn-press">
              <a href={import.meta.env.VITE_JOIN_NOW_URL}>Join Now</a>
            </Button>
          </div>
          <div className="flex md:hidden gap-2 items-center">
            <Button variant="ghost" size="icon" onClick={(e) => handleThemeToggle(e)} className="rounded-full">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur pb-4">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm uppercase hover:text-primary transition px-4" onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
              ))}
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase font-bold mx-4">
                <a href={import.meta.env.VITE_JOIN_NOW_URL}>Join Now</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 float-blob parallax-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-40 float-blob-2 parallax-blob"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[calc(100vh-120px)]">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 badge-glow hero-enter-up hero-enter-up-delay-1">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-primary tracking-wide">AI-Powered Mentorship</span>
                </div>
                <h1 className="text-[2.5rem] sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight hero-enter-up hero-enter-up-delay-2">
                  Stop <span className="text-gradient">Consuming</span><br />Start <span className="text-gradient">Becoming</span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg font-light hero-enter-up hero-enter-up-delay-3">
                  Real challenges. Proof-based validation. AI accountability. Your personal mentor that doesn't motivate—it disciplines.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2 hero-enter-up hero-enter-up-delay-4">
                <Button asChild className="btn-premium text-primary-foreground uppercase font-bold text-sm sm:text-base lg:text-lg py-5 sm:py-7 px-6 sm:px-8 group rounded-xl btn-press shadow-lg shadow-primary/25">
                  <a href={import.meta.env.VITE_START_JOURNEY_URL}>
                    <span className="flex items-center">Start Your Journey<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" /></span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-2 border-border text-foreground hover:bg-secondary/80 uppercase font-bold text-sm sm:text-base lg:text-lg py-5 sm:py-7 px-6 sm:px-8 rounded-xl btn-press">
                  <a href={import.meta.env.VITE_TRY_DEMO_URL}>Try Demo</a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7 relative hero-enter-right perspective-container">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative h-64 sm:h-[500px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-primary/10 hero-image-3d">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663600664020/7YcsuUqY2fWM69qR8ZaZus/hero-real-mentor-BSQCKNyoQSm76LY7ekrpRA.webp" alt="Mentor AI - Focused Professional" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/5 to-transparent pointer-events-none"></div>
                </div>
                <div className="absolute -bottom-4 left-2 sm:-bottom-8 sm:-left-8 lg:-bottom-10 lg:-left-10 bg-card/95 backdrop-blur-md border border-border/60 rounded-2xl p-3 sm:p-5 w-[180px] sm:w-[280px] lg:w-[320px] card-shine card-3d card-float-entrance" style={{ boxShadow: "0 30px 80px -20px oklch(0.12 0.04 258 / 0.4), 0 10px 20px -5px oklch(0.12 0.04 258 / 0.2)" }}>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></div>
                    </div>
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Live Now</span>
                  </div>
                  <div className="relative">
                    <span className="absolute -top-2 -left-0.5 text-3xl text-primary/15 font-serif leading-none select-none">&ldquo;</span>
                    <p className="text-sm text-foreground/90 font-medium leading-relaxed pl-1">Mentor AI changed how I approach discipline. Real accountability, real results.</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border/40 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-[10px] font-bold text-primary">AC</div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Alex Chen</div>
                      <div className="text-[11px] text-muted-foreground">Software Engineer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-2"><div className="section-gradient-line reveal"></div></div>

      {/* Problem Section */}
      <section className="relative py-16 lg:py-24 bg-secondary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16 reveal">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 reveal-words"><span className="word">You're</span> <span className="word">Stuck</span> <span className="word">in</span> <span className="word">a</span> <span className="word">Loop</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You consume endless content, watch motivational videos, and make promises to yourself. But nothing changes. You lack accountability, discipline, and a system that actually works.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger">
            {[
              { icon: "📚", title: "Endless Consumption", desc: "You scroll, watch, and read but never act. Information without action is just noise.", accent: "border-l-red-500/60" },
              { icon: "😴", title: "Lack of Discipline", desc: "Motivation fades. You need structure, not inspiration. Real growth requires daily habits.", accent: "border-l-amber-500/60" },
              { icon: "👥", title: "No Accountability", desc: "Nobody's watching. You make excuses. You need someone to hold you accountable.", accent: "border-l-blue-500/60" },
              { icon: "📉", title: "No Progress Tracking", desc: "You can't measure what you don't track. Without visibility, growth becomes invisible.", accent: "border-l-purple-500/60" },
            ].map((problem, idx) => (
              <div key={idx} className={`p-6 rounded-xl subtle-border bg-card/50 card-hover reveal border-l-4 ${problem.accent}`}>
                <div className="text-3xl mb-3">{problem.icon}</div>
                <h3 className="text-lg font-bold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-2"><div className="section-gradient-line reveal"></div></div>

      {/* Solution Section */}
      <section className="relative py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16 reveal">
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 reveal-words"><span className="word">Mentor</span> <span className="word">AI</span> <span className="word">Changes</span> <span className="word">the</span> <span className="word">Game</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't motivate you. We challenge you. We don't give advice. We hold you accountable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5 reveal-left">
              {[
                { num: "01", title: "Real Challenges", desc: "Personalized daily tasks designed for your specific goals, not generic motivation." },
                { num: "02", title: "Proof-Based", desc: "Submit video, text, or images as evidence. No excuses. No fake completions." },
                { num: "03", title: "AI Validation", desc: "Our AI asks questions to verify real effort. You can't fool the system." },
                { num: "04", title: "Tracked Growth", desc: "Every action is logged. Watch your consistency, discipline, and progress compound." },
              ].map((solution, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                    <span className="text-sm font-bold text-primary">{solution.num}</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold mb-1.5">{solution.title}</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-64 sm:h-[420px] rounded-2xl overflow-hidden shadow-xl reveal-right reveal-clip">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663600664020/7YcsuUqY2fWM69qR8ZaZus/person-working-deep-focus-FBE2fcaSFCWzjHPDkEdAYd.webp" alt="Deep Focus Work" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-2"><div className="section-gradient-line reveal"></div></div>

      {/* Features Section */}
      <section id="features" className="relative py-16 lg:py-24 bg-secondary/5">
        <div className="container">
          <div className="text-center mb-10 lg:mb-16 reveal">
            <SectionLabel>Features</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-bold reveal-words"><span className="word">Core</span> <span className="word">Features</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {[
              { icon: Users, title: "Multiple Mentors", desc: "Choose from different mentor personalities tailored to your goals." },
              { icon: Target, title: "Daily Challenges", desc: "Tasks tailored to your goals, delivered every morning." },
              { icon: Zap, title: "Proof Submission", desc: "Submit evidence (text/video) to complete tasks." },
              { icon: MessageSquare, title: "AI Verification", desc: "AI asks questions to validate real effort." },
              { icon: Trophy, title: "Progress Tracking", desc: "Visual dashboard of your growth and consistency." },
              { icon: Flame, title: "Levels & Badges", desc: "Earn points and unlock higher levels." },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="p-6 rounded-xl subtle-border bg-card/50 card-hover reveal group card-tilt">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 icon-pulse group-hover:bg-primary/15 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="py-2"><div className="section-gradient-line reveal"></div></div>

      {/* How It Works Section */}
      <section className="relative py-16 lg:py-28 bg-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02]"></div>
        <div className="container relative z-10">
          <div className="text-center mb-10 lg:mb-20 reveal">
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-bold mb-5 reveal-words"><span className="word">How</span> <span className="word">It</span> <span className="word">Works</span></h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">Five steps to transformation. No shortcuts, no excuses—just a system that holds you accountable.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Central vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
              <div className="w-full h-full bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40 section-gradient-line reveal origin-top" style={{ width: '2px' }}></div>
            </div>

            {/* Mobile vertical line */}
            <div className="md:hidden absolute left-[28px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10"></div>

            <div className="space-y-12 md:space-y-0">
              {[
                { step: "01", title: "Choose Your Mentor", desc: "Select from specialized AI mentors—each designed for different goals like discipline, fitness, productivity, or life strategy.", icon: Brain, iconColor: "text-blue-500", color: "from-blue-500/20 to-indigo-500/20", ring: "border-blue-500/30" },
                { step: "02", title: "Get Daily Challenges", desc: "Receive personalized tasks every morning tailored to your specific goals and current progress level.", icon: ClipboardList, iconColor: "text-amber-500", color: "from-amber-500/20 to-orange-500/20", ring: "border-amber-500/30" },
                { step: "03", title: "Complete & Submit Proof", desc: "Finish the challenge and submit video, text, or photo evidence. No shortcuts—real effort only.", icon: Upload, iconColor: "text-emerald-500", color: "from-emerald-500/20 to-green-500/20", ring: "border-emerald-500/30" },
                { step: "04", title: "AI Validates Your Effort", desc: "Our AI asks verification questions to ensure authentic completion. You can't fool the system.", icon: Bot, iconColor: "text-purple-500", color: "from-purple-500/20 to-violet-500/20", ring: "border-purple-500/30" },
                { step: "05", title: "Level Up & Grow", desc: "Earn XP, climb levels, and watch your discipline compound over time. Every action counts.", icon: Rocket, iconColor: "text-rose-500", color: "from-rose-500/20 to-pink-500/20", ring: "border-rose-500/30" },
              ].map((item, idx) => {
                const Icon = item.icon;
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex items-center md:gap-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} reveal`} style={{ transitionDelay: `${idx * 100}ms` }}>
                    {/* Center badge (desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                      <div className={`w-14 h-14 rounded-full bg-background border-2 ${item.ring} flex items-center justify-center shadow-lg`}>
                        <span className="text-xs font-extrabold text-primary tracking-wider">{item.step}</span>
                      </div>
                    </div>

                    {/* Left / Right content card */}
                    <div className={`md:w-[calc(50%-3rem)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`group p-6 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 card-tilt`}>
                        <div className={`flex items-start gap-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                          <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} border ${item.ring} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`w-6 h-6 ${item.iconColor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-[11px] font-extrabold text-primary mb-1.5 tracking-widest uppercase md:hidden`}>Step {item.step}</div>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-[15px] leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>
                  </div>
                );
              })}
            </div>

            {/* Bottom cap */}
            <div className="hidden md:flex justify-center mt-8">
              <div className="px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-bold text-primary">
                Your transformation begins
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-2"><div className="section-gradient-line reveal"></div></div>

      {/* Mentors Showcase */}
      <section id="mentors" className="relative py-16 lg:py-24 bg-secondary/5">
        <div className="container">
            <div className="text-center mb-10 lg:mb-16 reveal">
            <SectionLabel>Mentors</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-bold reveal-words"><span className="word">Choose</span> <span className="word">Your</span> <span className="word">Mentor</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
            {[
              { name: "The Monk", desc: "Focus & Discipline Mentor", traits: ["Mental Clarity", "Emotional Mastery", "Mindfulness"], image: "person-meditating" },
              { name: "Fitness Coach", desc: "Physical Transformation Mentor", traits: ["Strength", "Endurance", "Peak Performance"], image: "person-fitness" },
              { name: "Deep Work Master", desc: "Productivity Mentor", traits: ["Focus", "Deep Work", "Maximum Output"], image: "person-working-deep-focus" },
              { name: "Life Strategist", desc: "Life Design Mentor", traits: ["Strategy", "Decision Making", "Legacy Building"], image: "team-collaboration" },
            ].map((mentor, idx) => (
              <div key={idx} className="group cursor-pointer reveal">
                <div className="relative h-52 lg:h-64 rounded-2xl overflow-hidden mb-4 shadow-md card-hover reveal-clip">
                  <img
                    src={mentor.image === "person-meditating" ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663600664020/7YcsuUqY2fWM69qR8ZaZus/person-meditating-EKzucDKsF65G8pL4A4ZhVc.webp" :
                         mentor.image === "person-fitness" ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663600664020/7YcsuUqY2fWM69qR8ZaZus/person-fitness-LZ4UGFJZXMtyp5YTjB4avT.webp" :
                         mentor.image === "person-working-deep-focus" ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663600664020/7YcsuUqY2fWM69qR8ZaZus/person-working-deep-focus-FBE2fcaSFCWzjHPDkEdAYd.webp" :
                         "https://d2xsxph8kpxj0f.cloudfront.net/310519663600664020/7YcsuUqY2fWM69qR8ZaZus/team-collaboration-nuKYotLiibb6Si4wh49vqW.webp"}
                    alt={mentor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent"></div>
                </div>
                <h3 className="text-lg font-bold mb-1">{mentor.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{mentor.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {mentor.traits.map((trait, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{trait}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-2"><div className="section-gradient-line reveal"></div></div>

      {/* Gamification Section */}
      <section className="relative py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-8 reveal-left">
              <div>
                <SectionLabel>Gamification</SectionLabel>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 reveal-words"><span className="word">Level</span> <span className="word">Up</span> <span className="word">Your</span> <span className="word">Life</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mentor AI uses proven gamification mechanics to keep you engaged and motivated. Every action compounds.
                </p>
              </div>
              <div className="space-y-5 stagger">
                {[
                  { title: "Levels System", desc: "Progress through 100+ levels. Each level requires consistent effort." },
                  { title: "Points & XP", desc: "Earn XP for every completed challenge. Unlock rewards at milestones." },
                  { title: "Badges & Achievements", desc: "Unlock special badges for streaks, milestones, and special challenges." },
                  { title: "Leaderboards", desc: "Compete with friends or the global community. Climb the ranks." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 reveal">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div className="pt-0.5">
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl reveal-right reveal-clip">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663600664020/7YcsuUqY2fWM69qR8ZaZus/team-collaboration-nuKYotLiibb6Si4wh49vqW.webp" alt="Team Growth and Collaboration" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-2"><div className="section-gradient-line reveal"></div></div>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-16 lg:py-24 bg-secondary/5">
        <div className="container">
          <div className="text-center mb-10 lg:mb-16 reveal">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-bold reveal-words"><span className="word">Real</span> <span className="word">Transformations</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger">
            {[
              { name: "Alex Chen", role: "Software Engineer", quote: "Mentor AI turned my scattered goals into a daily system. I've never been more consistent.", avatar: "👨‍💻" },
              { name: "Sarah Johnson", role: "Entrepreneur", quote: "This isn't just another app. It's a personal accountability partner that actually works.", avatar: "👩‍💼" },
              { name: "Marcus Williams", role: "Student", quote: "I went from procrastinating to completing challenges daily. The gamification keeps me hooked.", avatar: "👨‍🎓" },
              { name: "Emma Davis", role: "Fitness Coach", quote: "My clients are using Mentor AI and seeing real results. The proof submission system is genius.", avatar: "👩‍🏫" },
              { name: "James Rodriguez", role: "Freelancer", quote: "Finally, a tool that understands discipline isn't motivation—it's systems and accountability.", avatar: "👨‍💻" },
              { name: "Lisa Park", role: "Product Manager", quote: "The AI validation is incredible. It prevents cheating and ensures real effort.", avatar: "👩‍💼" },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-6 rounded-2xl subtle-border bg-card/50 card-hover relative reveal testimonial-card card-tilt">
                <div className="absolute -top-3 left-6 text-4xl text-primary/15 font-serif leading-none select-none">&ldquo;</div>
                <div className="flex items-center gap-3 mb-4 pt-2">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed text-[15px]">{testimonial.quote}</p>
                <div className="flex gap-0.5 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-sm">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-2"><div className="section-gradient-line reveal"></div></div>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-28 overflow-hidden cta-glow">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5"></div>
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,oklch(0.42_0.18_255/0.06)_1px,transparent_0)] [background-size:32px_32px]"></div>
        <div className="container relative z-10 text-center reveal-scale">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 reveal-words"><span className="word">Start</span> <span className="word">Becoming</span> <span className="word">Your</span> <span className="word">Best</span> <span className="word">Version</span> <span className="word">Today</span></h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop consuming. Start becoming. Join thousands of users who are transforming their lives through discipline, accountability, and real challenges.
          </p>
          <Button asChild className="btn-premium text-primary-foreground uppercase font-bold text-base lg:text-lg py-6 lg:py-8 px-8 lg:px-14 group text-lg lg:text-xl rounded-xl shadow-xl shadow-primary/25 btn-press relative overflow-hidden">
            <a href={import.meta.env.VITE_START_JOURNEY_URL}>
              <span className="flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                Join Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">Start free. No credit card required. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-border bg-card/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-primary mb-4 tracking-tight">MENTOR<span className="opacity-50">.</span>AI</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">Your personal AI mentor for growth, discipline, and transformation.</p>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-primary">AI-Powered</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Target className="w-3.5 h-3.5 text-primary" /> Daily Challenges</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary" /> Proof Submission</li>
                <li className="flex items-center gap-2"><Trophy className="w-3.5 h-3.5 text-primary" /> Progress Tracking</li>
                <li className="flex items-center gap-2"><Flame className="w-3.5 h-3.5 text-primary" /> Levels & Badges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Built For</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-primary" /> Entrepreneurs</li>
                <li className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-primary" /> Software Engineers</li>
                <li className="flex items-center gap-2"><MessageSquare className="w-3.5 h-3.5 text-primary" /> Students</li>
                <li className="flex items-center gap-2"><Brain className="w-3.5 h-3.5 text-primary" /> Creatives</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">The Process</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary font-bold text-xs mt-0.5">01</span> Choose a mentor</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold text-xs mt-0.5">02</span> Complete daily challenges</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold text-xs mt-0.5">03</span> Submit proof of effort</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold text-xs mt-0.5">04</span> Track your growth</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; 2026 Mentor AI. All rights reserved.</p>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">Discipline over motivation. Proof over promises.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
