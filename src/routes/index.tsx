import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Rocket, MessageCircle, Play, Users, GraduationCap, Sparkles, Star,
  Check, X, Menu, Send, Youtube, Facebook, ChevronDown, Bot, Zap,
  Brain, Workflow, Mail, FileText, TrendingUp, Share2, Newspaper,
  Award, Code2, Cpu, Globe, Wallet, Copy, CreditCard, BookOpen, Info, Github,
} from "lucide-react";
import mentorAsset from "@/assets/mentor.jpeg.asset.json";
import course1Asset from "@/assets/ai-automation-1.jpeg.asset.json";
import course2Asset from "@/assets/ai-automation-2.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WHATSAPP_MENTOR = "https://wa.me/8801971099290";
const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/G1aInBnGgVd9Xw34H9pjIC?s=sh&p=a&ilr=0";
const TELEGRAM = "https://t.me/freeaiautomation";
const YOUTUBE = "https://youtube.com/@codeversebyminhaz?si=zyTQc1xUPFhLu-5y";
const FACEBOOK = "https://www.facebook.com/share/18zEBnRBDv/";
const GITHUB = "https://github.com/Minhaz889/Minhaz889";
const EMAIL = "minhazu889@gmail.com";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Free Class", href: "#free-class" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Community", href: "#community" },
  { label: "Mentor", href: "#mentor" },
  { label: "Contact", href: "#contact" },
];

const TOOL_LOGOS = ["ChatGPT", "Gemini", "Claude", "n8n", "Zapier", "Perplexity", "NotebookLM", "Make.com"];

function Landing() {
  return (
    <div id="home" className="min-h-screen text-foreground overflow-x-hidden">
      <BackgroundFX />
      <Navbar />
      <Hero />
      <Mentor />
      <Courses />
      <FreeClasses />
      <Projects />
      <Testimonials />
      <Community />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

/* ---------------- Background ---------------- */
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.55 0.22 250 / 0.35), transparent 70%)" }} />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-3xl animate-float"
           style={{ background: "radial-gradient(circle, oklch(0.7 0.2 200 / 0.28), transparent 70%)" }} />
      <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 blur-3xl"
           style={{ background: "radial-gradient(ellipse, oklch(0.5 0.2 280 / 0.25), transparent 70%)" }} />
      {/* particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span key={i} className="absolute rounded-full animate-float"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
            width: `${3 + (i % 4)}px`,
            height: `${3 + (i % 4)}px`,
            background: "oklch(0.85 0.17 210)",
            boxShadow: "0 0 12px oklch(0.85 0.17 210 / 0.8)",
            animationDelay: `${(i * 0.4) % 5}s`,
            animationDuration: `${6 + (i % 5)}s`,
            opacity: 0.5,
          }} />
      ))}
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={`glass-strong flex items-center justify-between rounded-2xl px-4 py-3 md:px-6 transition-all ${scrolled ? "shadow-[0_10px_40px_-10px_oklch(0.05_0.02_260/0.8)]" : ""}`}>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--glow-blue)" }}>
              <Cpu className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-sm font-bold tracking-tight sm:text-base">
              CODE VERSE <span className="text-gradient">BY MINHAZ</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(n => (
              <a key={n.href} href={n.href}
                 className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#courses"
               className="hidden sm:inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground animate-pulse-glow"
               style={{ background: "var(--gradient-cta)" }}>
              <Rocket className="h-4 w-4" /> Enroll Now
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden grid h-10 w-10 place-items-center rounded-lg glass">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open && (
          <div className="glass-strong mt-2 rounded-2xl p-3 lg:hidden animate-fade-up">
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                 className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Bangladesh's Premium AI Automation Course
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="inline-block">🤖</span>{" "}
            <span className="text-gradient">Learn AI Automation</span>
            <br />
            <span className="text-foreground/95">& Build Your Future</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Master AI Automation, AI Agents, n8n, Zapier and build real-world AI products
            with hands-on projects, live mentorship and lifetime community access.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#courses"
               className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground animate-pulse-glow"
               style={{ background: "var(--gradient-cta)" }}>
              <Rocket className="h-4 w-4" /> Enroll Now
            </a>
            <a href={WHATSAPP_COMMUNITY} target="_blank" rel="noreferrer"
               className="glass-strong inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
              <MessageCircle className="h-4 w-4 text-accent" /> Join Community
            </a>
            <a href={YOUTUBE} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-foreground/90 hover:text-foreground">
              <Play className="h-4 w-4 text-accent" /> Watch Demo Class
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { icon: Users, label: "2000+ Learners", sub: "Community strength" },
              { icon: GraduationCap, label: "171+ Students", sub: "Already enrolled" },
              { icon: Rocket, label: "Real AI Projects", sub: "Hands-on builds" },
              { icon: Star, label: "Premium Support", sub: "24/7 community" },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl p-4 text-left">
                <s.icon className="h-5 w-5 text-accent" />
                <div className="mt-3 text-base font-bold sm:text-lg">{s.label}</div>
                <div className="text-xs text-muted-foreground">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Tool logos marquee */}
          <div className="mt-16 w-full">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tools you'll master</p>
            <div className="mt-5 overflow-hidden">
              <div className="flex w-max animate-marquee gap-4">
                {[...TOOL_LOGOS, ...TOOL_LOGOS].map((t, i) => (
                  <div key={i} className="glass flex items-center gap-2 rounded-xl px-5 py-3">
                    <span className="grid h-7 w-7 place-items-center rounded-md"
                          style={{ background: "var(--gradient-primary)" }}>
                      <Brain className="h-4 w-4 text-primary-foreground" />
                    </span>
                    <span className="whitespace-nowrap text-sm font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Mentor ---------------- */
function Mentor() {
  return (
    <section id="mentor" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Instructor" title="Meet Your Mentor"
          subtitle="Learn from a passionate educator building real AI automation products." />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-10 neon-border">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
                 style={{ background: "oklch(0.6 0.22 240 / 0.3)" }} />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="relative shrink-0">
                <div className="h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-3xl ring-2 ring-primary/40"
                     style={{ boxShadow: "var(--glow-blue)" }}>
                  <img src={mentorAsset.url} alt="Mohammad Minhaz Uddin - AI Automation Mentor"
                       className="h-full w-full object-cover" loading="lazy" />
                </div>
                <span className="absolute -bottom-2 -right-2 grid h-9 w-9 place-items-center rounded-full glass-strong">
                  <Award className="h-4 w-4 text-accent" />
                </span>
              </div>
              <div className="min-w-0">
                <div className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs text-accent">
                  <Sparkles className="h-3 w-3" /> Founder & Lead Mentor
                </div>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Mohammad Minhaz Uddin</h3>
                <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {["CSE Student", "Python Programmer", "AI Automation Educator", "Prompt Engineer", "Enthusiastic Software Engineer"].map(x => (
                    <li key={x} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent shrink-0" /> {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={WHATSAPP_MENTOR} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                     style={{ background: "var(--gradient-cta)", boxShadow: "var(--glow-blue)" }}>
                    <MessageCircle className="h-4 w-4" /> Contact with Mentor
                  </a>
                  <a href={YOUTUBE} target="_blank" rel="noreferrer"
                     className="glass inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold">
                    <Youtube className="h-4 w-4 text-accent" /> YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: GraduationCap, k: "171+", v: "Students Taught" },
              { icon: Workflow, k: "50+", v: "Automations Built" },
              { icon: Code2, k: "10+", v: "Live Batches" },
              { icon: Globe, k: "2000+", v: "Community Members" },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl p-5">
                <s.icon className="h-5 w-5 text-accent" />
                <div className="mt-3 text-2xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Courses ---------------- */
const PAYMENT_NUMBER = "01971099290";

const COURSE_DETAILS = {
  overview:
    "AI Automation 2.0 হলো একটি Complete Advanced AI Automation Program যেখানে আপনি Beginner থেকে Advanced Level পর্যন্ত Real-World AI Projects তৈরি করতে শিখবেন। এই কোর্সে No-Code এবং Low-Code Tools ব্যবহার করে Professional AI Systems, AI Agents এবং Business Automation তৈরি করা শেখানো হবে।",
  includes: [
    "25+ Live Classes",
    "সকল ক্লাসের Recorded Access",
    "YouTube Private Class Links",
    "Lifetime Access",
    "Premium Community Support",
    "Real-World Projects",
    "Weekly Assignments",
    "Certificate of Completion",
    "Project Source Codes",
    "Future Updates Free",
  ],
  aiTools: ["ChatGPT", "Gemini", "Claude", "Perplexity", "NotebookLM"],
  automationTools: [
    "n8n Mastery",
    "Zapier Mastery",
    "GoHighLevel (GHL)",
    "APIs & Webhooks",
    "Google Sheets Automation",
    "Gmail Automation",
    "Telegram Automation",
    "WhatsApp Automation",
    "CRM Automation",
    "Lead Generation Systems",
  ],
  projects: [
    "Personal AI Assistant (ChatGPT Like)",
    "AI Chatbot",
    "WhatsApp AI Bot",
    "Telegram AI Bot",
    "PDF Analyzer",
    "AI Content Generator",
    "AI Receptionist",
    "Social Media Automation System",
    "Lead Generation Agent",
    "Email Automation System",
    "AI News Automation",
    "Appointment Booking System",
  ],
  freelancing: [
    "Fiverr Account Setup",
    "Upwork Profile Optimization",
    "Gig Creation Strategy",
    "Client Hunting Methods",
    "Proposal Writing",
    "Portfolio Building",
    "First Client পাওয়ার Strategy",
    "AI Automation Service Selling",
  ],
  forWhom: [
    "Students",
    "Freelancers",
    "Developers",
    "Business Owners",
    "Content Creators",
    "Job Seekers",
    "যারা Future-Proof Skill শিখতে চান",
    "যারা AI দিয়ে Income শুরু করতে চান",
  ],
  outcomes: [
    "Professional AI Automation Workflows তৈরি করা",
    "নিজের AI Assistant Build করা",
    "Business Automation তৈরি করা",
    "AI Agents Develop করা",
    "Client Projects Handle করা",
    "Freelancing শুরু করা",
    "নিজের AI-Based Business তৈরি করা",
    "High-Income Skills অর্জন করা",
  ],
  income: [
    { level: "Beginner", range: "$100 – $500+/Month" },
    { level: "Intermediate", range: "$500 – $2,000+/Month" },
    { level: "Advanced", range: "$2,000 – $10,000+/Month" },
  ],
};

const DEMO_CLASSES = [
  { id: "x9g4orWxAbo", title: "AI Automation 2.0 Demo Class 1" },
  { id: "fukh6Gr3b40", title: "AI Automation 2.0 Demo Class 2" },
  { id: "SkmJ1fIucJE", title: "AI Automation 2.0 Demo Class 3" },
];

function Courses() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [payOpen, setPayOpen] = useState(false);

  return (
    <section id="courses" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Courses" title="Choose Your AI Journey"
          subtitle="From absolute beginner to advanced AI automation professional." />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Course 1 */}
          <div className="glass-strong relative overflow-hidden rounded-3xl p-6 md:p-8">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl opacity-40"
                 style={{ background: "oklch(0.6 0.15 260)" }} />
            <div className="relative -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-5 aspect-[16/9] overflow-hidden rounded-t-3xl">
              <img src={course1Asset.url} alt="AI Automation 1.0 Course" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/15 px-3 py-1 text-xs font-semibold text-orange-300 border border-orange-400/30">
                🔥 Previous Batch
              </span>
              <span className="rounded-lg glass px-3 py-1 text-xs text-muted-foreground">Beginner</span>
            </div>
            <h3 className="mt-5 text-2xl font-bold sm:text-3xl">🤖 AI Automation 1.0</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-gradient">৳99</span>
              <span className="text-sm text-muted-foreground">one-time</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="glass rounded-xl p-3">
                <div className="text-lg font-bold">171+</div>
                <div className="text-[11px] text-muted-foreground">Students Enrolled</div>
              </div>
              <div className="glass rounded-xl p-3">
                <div className="text-lg font-bold">10+</div>
                <div className="text-[11px] text-muted-foreground">Live Classes Done</div>
              </div>
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              {["Beginner Friendly", "Recorded Classes", "Community Support", "Real Projects",
                "ChatGPT Basics", "n8n Basics", "Google Sheets Automation", "Telegram Automation", "Lifetime Access"].map(f => (
                <li key={f} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-accent shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-destructive/40 bg-destructive/10 p-4">
              <div className="flex items-center gap-2">
                <X className="h-5 w-5 text-destructive" />
                <span className="text-sm font-semibold text-destructive-foreground/90">Enrollment Closed</span>
              </div>
              <span className="rounded-lg bg-destructive px-3 py-1 text-xs font-bold text-destructive-foreground tracking-wider">
                ENROLLMENT OFF
              </span>
            </div>
            <button disabled
              className="mt-4 w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-muted-foreground">
              Enrollment Unavailable
            </button>
          </div>

          {/* Course 2 - Featured */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setDetailsOpen(true)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setDetailsOpen(true); } }}
            className="relative overflow-hidden rounded-3xl p-[1.5px] cursor-pointer transition hover:-translate-y-1"
            style={{ background: "linear-gradient(135deg, oklch(0.75 0.2 240), oklch(0.85 0.17 200), oklch(0.65 0.22 300))" }}>
            <div className="relative rounded-[calc(1.5rem-1.5px)] p-6 md:p-8"
                 style={{ background: "linear-gradient(155deg, oklch(0.18 0.04 260), oklch(0.13 0.03 260))" }}>
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full blur-3xl"
                   style={{ background: "oklch(0.7 0.22 220 / 0.4)" }} />

              <div className="relative -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-5 aspect-[16/9] overflow-hidden rounded-t-[calc(1.5rem-1.5px)]">
                <img src={course2Asset.url} alt="AI Automation 2.0 Advanced Mastery Program" className="h-full w-full object-cover" loading="lazy" />
              </div>

              <div className="relative flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-primary-foreground"
                      style={{ background: "var(--gradient-cta)", boxShadow: "var(--glow-cyan)" }}>
                  🔥 NOW OPEN
                </span>
                <span className="rounded-lg bg-red-500/90 px-3 py-1 text-xs font-bold text-white tracking-wider animate-pulse">
                  90% OFF
                </span>
              </div>

              <h3 className="relative mt-5 text-2xl font-bold sm:text-3xl">🤖 AI Automation 2.0</h3>
              <p className="relative mt-1 text-sm text-accent font-medium">⚡ Advanced AI Automation Mastery Program</p>

              <div className="relative mt-4 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-gradient">৳499</span>
                <span className="text-lg text-muted-foreground line-through">৳4999</span>
                <span className="rounded-md bg-red-500/20 px-2 py-0.5 text-xs font-bold text-red-300">Save 90%</span>
              </div>
              <p className="text-xs text-muted-foreground">🔥 Limited-time launch price</p>

              <ul className="relative mt-5 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                {["25+ Live Classes", "Recorded Classes", "Lifetime Access", "Premium Community",
                  "Certificate", "Weekly Assignments", "Real Client Projects", "Portfolio Building", "Freelancing Guideline"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-foreground/90">
                    <span className="grid h-4 w-4 place-items-center rounded-full"
                          style={{ background: "var(--gradient-cta)" }}>
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="relative mt-6">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Tools Covered</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["ChatGPT","Gemini","Claude","Perplexity","NotebookLM","n8n","Zapier","Make.com","GoHighLevel","API Integration","Webhooks","WhatsApp Automation","Telegram Automation","Email Automation","Lead Generation","AI Agents"].map(t => (
                    <span key={t} className="glass rounded-full px-2.5 py-1 text-[11px] font-medium text-foreground/85">{t}</span>
                  ))}
                </div>
              </div>

              <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={(e) => { e.stopPropagation(); setPayOpen(true); }}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground animate-pulse-glow"
                  style={{ background: "var(--gradient-cta)" }}>
                  <Wallet className="h-4 w-4" /> Enroll via bKash / Nagad
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setDetailsOpen(true); }}
                  className="glass-strong inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold hover:bg-white/10">
                  <BookOpen className="h-4 w-4 text-accent" /> View Course Details
                </button>
              </div>
              <p className="relative mt-3 text-center text-[11px] text-muted-foreground">
                <Info className="inline h-3 w-3 -mt-0.5 mr-1 text-accent" />
                Click anywhere on the card to view full course details
              </p>
            </div>
          </div>
        </div>
      </div>

      {detailsOpen && <CourseDetailsModal onClose={() => setDetailsOpen(false)} onEnroll={() => { setDetailsOpen(false); setPayOpen(true); }} />}
      {payOpen && <PaymentModal onClose={() => setPayOpen(false)} />}
    </section>
  );
}

/* ---------------- Course Details Modal ---------------- */
function CourseDetailsModal({ onClose, onEnroll }: { onClose: () => void; onEnroll: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-up" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-strong relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl neon-border"
        style={{ background: "linear-gradient(155deg, oklch(0.15 0.04 260), oklch(0.1 0.03 260))" }}>
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-white/10 bg-background/60 px-6 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-cta)" }}>🔥 NOW OPEN</span>
            <span className="text-sm font-semibold">🤖 AI Automation 2.0</span>
          </div>
          <button onClick={onClose} className="glass grid h-9 w-9 place-items-center rounded-lg hover:bg-white/10">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 py-8 md:px-10">
          <h2 className="text-2xl font-bold sm:text-3xl">🤖 AI Automation 2.0 – Advanced Mastery Program</h2>
          <div className="mt-3 flex flex-wrap items-baseline gap-3">
            <span className="text-4xl font-bold text-gradient">৳499</span>
            <span className="text-lg text-muted-foreground line-through">৳4999</span>
            <span className="rounded-md bg-red-500/20 px-2 py-0.5 text-xs font-bold text-red-300">Save 90%</span>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/10" style={{ boxShadow: "var(--glow-blue)" }}>
            <img
              src={course2Asset.url}
              alt="AI Automation 2.0 Course Banner"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold text-gradient">🚀 কোর্স সম্পর্কে</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{COURSE_DETAILS.overview}</p>
          </div>

          <DetailBlock title="📚 কোর্সে যা যা থাকছে" items={COURSE_DETAILS.includes} />

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gradient">🛠️ Tools & Technologies</h3>
            <div className="mt-3">
              <div className="text-xs uppercase tracking-[0.18em] text-accent">🤖 AI Tools</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {COURSE_DETAILS.aiTools.map(t => (
                  <span key={t} className="glass rounded-full px-3 py-1 text-xs font-medium">{t}</span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="text-xs uppercase tracking-[0.18em] text-accent">⚙️ Automation Tools</div>
              <ul className="mt-2 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                {COURSE_DETAILS.automationTools.map(t => (
                  <li key={t} className="flex items-center gap-2 text-foreground/85">
                    <Check className="h-4 w-4 text-accent shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <DetailBlock title="🚀 Real Projects You Will Build" items={COURSE_DETAILS.projects} />
          <DetailBlock title="💼 Freelancing Section" items={COURSE_DETAILS.freelancing}
            intro="এই কোর্সে শুধু Project Build নয়, Freelancing সম্পর্কেও সম্পূর্ণ Guideline দেওয়া হবে।" />
          <DetailBlock title="🎯 এই কোর্সটি যাদের জন্য" items={COURSE_DETAILS.forWhom} />
          <DetailBlock title="🎓 কোর্স শেষে আপনি যা যা শিখতে পারবেন" items={COURSE_DETAILS.outcomes} />

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gradient">📈 Future Opportunity</h3>
            <p className="mt-2 text-sm text-foreground/85">AI Automation বর্তমানে বিশ্বের অন্যতম High-Demand Skill।</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {COURSE_DETAILS.income.map(i => (
                <div key={i.level} className="glass rounded-2xl p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-accent">💰 {i.level}</div>
                  <div className="mt-2 text-base font-bold text-gradient">{i.range}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 glass rounded-2xl p-5">
            <h3 className="text-base font-bold">🔥 কেন এই কোর্সটি Special?</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              {["Beginner Friendly", "Real Projects Based Learning", "Lifetime Access", "Premium Community",
                "Freelancing Guideline", "Future-Proof Skill Development", "One of the Most Practical AI Programs"].map(x => (
                <li key={x} className="flex items-center gap-2 text-foreground/85">
                  <Sparkles className="h-4 w-4 text-accent shrink-0" /> {x}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-center text-sm font-semibold text-gradient">
              🚀 আজই AI Automation শিখুন এবং ভবিষ্যতের High-Income Skill অর্জন করুন!
            </p>
            <p className="mt-1 text-center text-xs text-muted-foreground">Code Verse by Minhaz 💙</p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gradient">🎬 Free Demo Classes</h3>
            <p className="mt-2 text-sm text-foreground/85">Enroll করার আগে নিচের free demo classes গুলো দেখে নিন।</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DEMO_CLASSES.map((c, i) => (
                <a key={i} href={`https://youtu.be/${c.id}`} target="_blank" rel="noreferrer"
                   className="glass group relative overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:neon-border">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${c.id}/maxresdefault.jpg`}
                      alt={c.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${c.id}/hqdefault.jpg`; }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/20">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30 transition group-hover:scale-110"
                            style={{ boxShadow: "var(--glow-blue)" }}>
                        <Play className="h-5 w-5 fill-current text-white" />
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold text-primary-foreground"
                            style={{ background: "var(--gradient-cta)" }}>
                        <Play className="h-2.5 w-2.5" /> Demo
                      </span>
                      <Youtube className="h-4 w-4 text-red-400" />
                    </div>
                    <h4 className="mt-2 text-sm font-bold leading-snug">{c.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={onEnroll}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-primary-foreground animate-pulse-glow"
              style={{ background: "var(--gradient-cta)" }}>
              <Wallet className="h-4 w-4" /> Enroll Now via bKash / Nagad
            </button>
            <button onClick={onClose}
              className="glass inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailBlock({ title, items, intro }: { title: string; items: string[]; intro?: string }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-gradient">{title}</h3>
      {intro && <p className="mt-2 text-sm text-foreground/85">{intro}</p>}
      <ul className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        {items.map(i => (
          <li key={i} className="flex items-start gap-2 text-foreground/85">
            <Check className="mt-0.5 h-4 w-4 text-accent shrink-0" /> {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Payment Modal ---------------- */
function PaymentModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState<string | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 1500);
    } catch { /* noop */ }
  };

  const methods = [
    { name: "bKash", tag: "Personal", color: "from-pink-500 to-rose-600", emoji: "💗" },
    { name: "Nagad", tag: "Personal", color: "from-orange-500 to-red-600", emoji: "🧡" },
  ];

  const waMsg = encodeURIComponent(
    `Assalamu Alaikum. আমি AI Automation 2.0 কোর্সে enroll করতে চাই।\n\nPayment Method: bKash / Nagad\nAmount: ৳499\nSender Number: (আপনার নম্বর)\nTransaction ID: (TrxID)\n\nদয়া করে আমাকে course-এ add করুন।`
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-up" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-strong relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl neon-border"
        style={{ background: "linear-gradient(155deg, oklch(0.15 0.04 260), oklch(0.1 0.03 260))" }}>
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold">Enroll via bKash / Nagad</span>
          </div>
          <button onClick={onClose} className="glass grid h-9 w-9 place-items-center rounded-lg hover:bg-white/10">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 py-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gradient">৳499</span>
            <span className="text-sm text-muted-foreground line-through">৳4999</span>
            <span className="rounded-md bg-red-500/20 px-2 py-0.5 text-[11px] font-bold text-red-300">90% OFF</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">AI Automation 2.0 — One-time payment • Lifetime access</p>

          <div className="mt-5 space-y-3">
            {methods.map(m => (
              <div key={m.name} className={`rounded-2xl p-[1.5px] bg-gradient-to-r ${m.color}`}>
                <div className="rounded-[calc(1rem-1.5px)] bg-background/70 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${m.color} text-lg`}>
                        {m.emoji}
                      </div>
                      <div>
                        <div className="text-sm font-bold">{m.name}</div>
                        <div className="text-[11px] text-muted-foreground">{m.tag} • Send Money</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-base font-bold tracking-wide">{PAYMENT_NUMBER}</div>
                      <button
                        onClick={() => copy(m.name, PAYMENT_NUMBER)}
                        className="mt-1 inline-flex items-center gap-1 text-[11px] text-accent hover:underline">
                        <Copy className="h-3 w-3" />
                        {copied === m.name ? "Copied!" : "Copy number"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 glass rounded-2xl p-4">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">📋 How to Enroll</div>
            <ol className="mt-3 space-y-2 text-sm text-foreground/85">
              <li><span className="font-semibold text-foreground">1.</span> bKash অথবা Nagad এ <span className="font-mono font-bold">{PAYMENT_NUMBER}</span> নম্বরে <span className="font-bold">৳499</span> Send Money করুন।</li>
              <li><span className="font-semibold text-foreground">2.</span> Payment এর <span className="font-semibold">Transaction ID (TrxID)</span> কপি করুন।</li>
              <li><span className="font-semibold text-foreground">3.</span> নিচের WhatsApp বাটনে ক্লিক করে TrxID + আপনার নম্বর পাঠিয়ে দিন।</li>
              <li><span className="font-semibold text-foreground">4.</span> Verify হওয়ার পরই কোর্সে access পেয়ে যাবেন। 🎉</li>
            </ol>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={`${WHATSAPP_MENTOR}?text=${waMsg}`} target="_blank" rel="noreferrer"
               className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-primary-foreground animate-pulse-glow"
               style={{ background: "var(--gradient-cta)" }}>
              <MessageCircle className="h-4 w-4" /> Send TrxID on WhatsApp
            </a>
            <button onClick={onClose}
              className="glass inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold">
              Close
            </button>
          </div>

          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            🔒 Secure enrollment • Verified by mentor personally
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Free Classes ---------------- */
const FREE_CLASSES = [
  { id: "8YD5QZnWRIs", title: "Claude Code Master Class", duration: "Free Class" },
  { id: "tXSzTJLWvOA", title: "Prompt Engineering Master Class", duration: "Free Class" },
  { id: "dVEepKFxtLk", title: "No-Code AI Workflow", duration: "Free Class" },
  { id: "6FBJcNZ0UYY", title: "Build Your First AI Agent", duration: "Free Class" },
];

function FreeClasses() {
  return (
    <section id="free-class" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Free Class" title="Watch Free AI Classes"
          subtitle="Start learning AI Automation today — no payment required." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FREE_CLASSES.map((c, i) => (
            <a key={i} href={`https://youtu.be/${c.id}`} target="_blank" rel="noreferrer"
               className="glass group relative overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:neon-border">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${c.id}/maxresdefault.jpg`}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${c.id}/hqdefault.jpg`; }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/20">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30 transition group-hover:scale-110"
                        style={{ boxShadow: "var(--glow-blue)" }}>
                    <Play className="h-6 w-6 fill-current text-white" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold text-primary-foreground"
                        style={{ background: "var(--gradient-cta)" }}>
                    <Play className="h-3 w-3" /> {c.duration}
                  </span>
                  <Youtube className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Click to watch the full class on YouTube.</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
const PROJECTS = [
  { icon: Bot, title: "Personal AI Assistant", desc: "Voice + text assistant that manages your day." },
  { icon: Brain, title: "AI Chatbot", desc: "Custom-trained chatbot for websites & business." },
  { icon: MessageCircle, title: "WhatsApp AI Agent", desc: "Auto-reply, leads, orders on WhatsApp." },
  { icon: Send, title: "Telegram AI Bot", desc: "Smart Telegram bot for automation workflows." },
  { icon: FileText, title: "PDF Analyzer", desc: "Summarize & query PDFs with LLMs." },
  { icon: TrendingUp, title: "Lead Generator", desc: "Automated lead scraping & enrichment." },
  { icon: Share2, title: "Social Media Automation", desc: "Auto-post and schedule across platforms." },
  { icon: Newspaper, title: "AI News Automation", desc: "Curated AI news pipelines delivered daily." },
];

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Projects" title="Real-World AI Builds"
          subtitle="You will ship these premium projects — not just watch them." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p, i) => (
            <div key={i} className="glass group relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:neon-border">
              <div className="absolute inset-x-0 top-0 h-px opacity-60"
                   style={{ background: "linear-gradient(90deg, transparent, oklch(0.85 0.17 200 / 0.7), transparent)" }} />
              <div className="grid h-11 w-11 place-items-center rounded-xl"
                   style={{ background: "var(--gradient-primary)", boxShadow: "var(--glow-blue)" }}>
                <p.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.18em] text-accent">🚀 Project</div>
              <h4 className="mt-1 text-base font-semibold">{p.title}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const TESTIMONIALS = [
  { name: "Rakib Hasan", role: "Freelancer, Dhaka", text: "The n8n + WhatsApp automation module alone paid back my course fee in a week. Minhaz bhai teaches deeply and clearly.", rating: 5 },
  { name: "Nusrat Jahan", role: "CSE Student", text: "I built my first AI chatbot in week 2. The community support is unbelievable — you never get stuck.", rating: 5 },
  { name: "Tanvir Ahmed", role: "Digital Marketer", text: "Lead generation automation changed how I run my agency. Real client-ready projects, not toy demos.", rating: 5 },
  { name: "Sadia Islam", role: "Aspiring AI Engineer", text: "Best AI automation course in Bangla. Premium quality, honest pricing, lifetime access. Highly recommended.", rating: 5 },
  { name: "Fahim Rahman", role: "Startup Founder", text: "I automated my entire lead pipeline using what I learned. This isn't just a course — it's an unfair advantage.", rating: 5 },
  { name: "Mahiya Chowdhury", role: "Content Creator", text: "The social media & AI news automations save me 15 hours every week. Mentor is genuinely supportive.", rating: 5 },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Testimonials" title="Loved by Learners"
          subtitle="Real students. Real results. Real transformations." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-1 text-yellow-300">
                {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full font-semibold text-primary-foreground"
                     style={{ background: "var(--gradient-primary)" }}>
                  {t.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{t.name}</div>
                  <div className="truncate text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Community ---------------- */
function Community() {
  const items = [
    { icon: MessageCircle, name: "WhatsApp Community", desc: "Daily discussions, help & networking.", href: WHATSAPP_COMMUNITY, cta: "Join WhatsApp" },
    { icon: Send, name: "Telegram Community", desc: "Free AI resources & announcements.", href: TELEGRAM, cta: "Join Telegram" },
    { icon: Youtube, name: "YouTube Channel", desc: "Free tutorials, demos & class previews.", href: YOUTUBE, cta: "Subscribe" },
    { icon: Facebook, name: "Facebook Page", desc: "Community stories, updates & wins.", href: FACEBOOK, cta: "Follow" },
  ];
  return (
    <section id="community" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Community" title="Join The AI Movement"
          subtitle="2000+ learners already building the future together." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => (
            <a key={i} href={c.href} target="_blank" rel="noreferrer"
               className="glass group flex flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:neon-border">
              <div className="grid h-12 w-12 place-items-center rounded-2xl"
                   style={{ background: "var(--gradient-primary)", boxShadow: "var(--glow-blue)" }}>
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="mt-4 text-base font-semibold">{c.name}</div>
              <div className="mt-1 flex-1 text-sm text-muted-foreground">{c.desc}</div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                {c.cta} <Zap className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-14 text-center neon-border">
          <div className="absolute inset-0 opacity-40 grid-bg" />
          <div className="absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 blur-3xl"
               style={{ background: "oklch(0.7 0.22 230 / 0.4)" }} />
          <div className="relative">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-accent">
              <MessageCircle className="h-3.5 w-3.5" /> Direct Line to Mentor
            </div>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">
              Have questions? <span className="text-gradient">Talk to Minhaz.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Reach out on WhatsApp for course guidance, enrollment help, or freelancing advice.
              We usually reply within a few hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_MENTOR} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground animate-pulse-glow"
                 style={{ background: "var(--gradient-cta)" }}>
                <MessageCircle className="h-4 w-4" /> Contact with Mentor
              </a>
              <a href={WHATSAPP_COMMUNITY} target="_blank" rel="noreferrer"
                 className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold">
                <Users className="h-4 w-4 text-accent" /> Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "Is this beginner friendly?", a: "Absolutely. We start from zero — no prior coding experience needed. Every concept is explained with real examples and hands-on projects." },
  { q: "Will I get recordings?", a: "Yes. Every live class is recorded and added to your dashboard. You get lifetime access, so you can revisit anytime." },
  { q: "Can I do freelancing after this course?", a: "Yes. AI Automation 2.0 includes a dedicated freelancing guideline, portfolio building, and real client-ready projects." },
  { q: "How can I enroll?", a: "Click 'Enroll via WhatsApp' on the AI Automation 2.0 card, or message the mentor directly on WhatsApp. We'll guide you through payment and onboarding." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked" subtitle="Everything you need to know before enrolling." />
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="glass rounded-2xl">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="text-sm font-semibold sm:text-base">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-accent transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-up">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const socials = [
    { icon: MessageCircle, href: WHATSAPP_COMMUNITY, label: "WhatsApp" },
    { icon: Send, href: TELEGRAM, label: "Telegram" },
    { icon: Youtube, href: YOUTUBE, label: "YouTube" },
    { icon: Facebook, href: FACEBOOK, label: "Facebook" },
    { icon: Github, href: GITHUB, label: "GitHub" },
    { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
  ];
  return (
    <footer className="border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl"
                    style={{ background: "var(--gradient-primary)", boxShadow: "var(--glow-blue)" }}>
                <Cpu className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display font-bold">
                CODE VERSE <span className="text-gradient">BY MINHAZ</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Bangladesh's premium AI Automation course platform. Learn, build, and monetize
              real AI products with lifetime mentorship.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                   className="glass grid h-10 w-10 place-items-center rounded-xl hover:neon-border transition">
                  <s.icon className="h-4 w-4 text-accent" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV.map(n => <li key={n.href}><a href={n.href} className="hover:text-foreground">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Get Started</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href={WHATSAPP_MENTOR} target="_blank" rel="noreferrer" className="hover:text-foreground">Contact Mentor</a></li>
              <li><a href={WHATSAPP_COMMUNITY} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp Community</a></li>
              <li><a href={TELEGRAM} target="_blank" rel="noreferrer" className="hover:text-foreground">Telegram Channel</a></li>
              <li><a href={YOUTUBE} target="_blank" rel="noreferrer" className="hover:text-foreground">YouTube Channel</a></li>
              <li><a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub Profile</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-foreground">{EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Code Verse by Minhaz. All rights reserved.</div>
          <div>Built with 💙 for AI builders in Bangladesh.</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */
function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-accent">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-sm text-muted-foreground sm:text-base">{subtitle}</p>}
    </div>
  );
}
