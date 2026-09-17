import { createFileRoute } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleCheck,
  Gift,
  LayoutDashboard,
  Menu,
  MousePointer2,
  QrCode,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Store,
  TicketCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Repeato — Turn first-time customers into regulars" },
      {
        name: "description",
        content:
          "Repeato helps local businesses build lasting loyalty through simple QR journeys, rewards, and repeat visits.",
      },
      {
        property: "og:title",
        content: "Repeato — Turn first-time customers into regulars",
      },
      {
        property: "og:description",
        content:
          "A premium loyalty platform for cafés, restaurants, and local businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  {
    number: "01",
    title: "Scan",
    copy: "A customer scans the QR at the counter and lands in your world instantly.",
    icon: ScanLine,
  },
  {
    number: "02",
    title: "Earn",
    copy: "Award points from verified visits and purchases without the paper punch card.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Redeem",
    copy: "Turn progress into a reward with a secure, one-time redemption code.",
    icon: TicketCheck,
  },
  {
    number: "04",
    title: "Return",
    copy: "Give people a clear reason to come back, then learn what keeps them coming.",
    icon: CircleCheck,
  },
];

const businessFeatures = [
  ["Digital loyalty programs", "Launch a polished program customers actually want to use.", Gift],
  ["Customer insights", "See visits, points, and repeat behavior in one calm workspace.", BarChart3],
  ["QR check-ins", "A fast, familiar entry point for every location and campaign.", QrCode],
  ["Reward management", "Create offers, set thresholds, and keep redemption under control.", TicketCheck],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState<"customer" | "business">("customer");
  const [showJoinDemo, setShowJoinDemo] = useState(false);
  const [joinUrl, setJoinUrl] = useState("/join/bluebird-coffee");

  useEffect(() => {
    setJoinUrl(`${window.location.origin}/join/bluebird-coffee`);
  }, []);

  const demoLabel = useMemo(
    () => (previewMode === "customer" ? "Customer wallet" : "Business overview"),
    [previewMode],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="page-shell flex h-[76px] items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Repeato home">
            <span className="brand-mark"><span /></span>
            <span className="font-display text-xl font-semibold tracking-[-0.03em]">Repeato</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex" aria-label="Main navigation">
            <a className="nav-link" href="#how-it-works">How it works</a>
            <a className="nav-link" href="#for-businesses">For businesses</a>
            <a className="nav-link" href="#for-customers">For customers</a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a href="#for-customers" className="quiet-button">Log in</a>
            <a href="#for-businesses" className="accent-button">Get started <ArrowRight size={16} /></a>
          </div>

          <button
            className="icon-button sm:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background px-5 py-4 sm:hidden">
            <div className="page-shell flex flex-col gap-4 text-sm">
              <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
              <a href="#for-businesses" onClick={() => setMenuOpen(false)}>For businesses</a>
              <a href="#for-customers" onClick={() => setMenuOpen(false)}>For customers</a>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative border-b border-border/70">
        <div className="page-shell grid min-h-[680px] items-center gap-16 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
          <div className="relative z-10 max-w-xl">
            <div className="eyebrow"><span className="eyebrow-dot" /> Built for local businesses</div>
            <h1 className="mt-7 font-display text-[clamp(3.35rem,7vw,6.85rem)] font-semibold leading-[0.92] tracking-[-0.075em] text-foreground">
              Turn first-time customers into <em>regulars.</em>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-muted-foreground">
              Repeato makes loyalty feel effortless — from the first scan to the next visit, every interaction gives people a reason to come back.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#qr-experience" className="accent-button accent-button-lg">Explore the journey <ArrowRight size={17} /></a>
              <a href="#how-it-works" className="text-link">See how it works <ChevronDown size={16} /></a>
            </div>
            <div className="mt-12 flex items-center gap-7 border-t border-border pt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-accent" /> Secure by design</span>
              <span className="flex items-center gap-2"><Sparkles size={16} className="text-accent" /> No app download</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[660px] lg:ml-auto">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="wallet-window relative z-10">
              <div className="wallet-topbar">
                <span className="flex items-center gap-2"><span className="brand-mark brand-mark-sm"><span /></span> Repeato</span>
                <span className="wallet-status"><span /> Live wallet</span>
              </div>
              <div className="wallet-content">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Good morning, Bhisham</p>
                    <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em]">Your loyalty, in one place.</h2>
                  </div>
                  <div className="avatar">B</div>
                </div>
                <div className="points-panel mt-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-accent-foreground/70">Total points</p>
                      <p className="mt-1 font-display text-5xl font-semibold tracking-[-0.06em] text-accent-foreground">650</p>
                    </div>
                    <div className="mini-pill"><Zap size={14} /> +195 this month</div>
                  </div>
                  <div className="mt-7 flex items-center justify-between text-xs text-accent-foreground/70"><span>Free coffee</span><span>650 / 1,000</span></div>
                  <div className="mt-2 h-2 rounded-full bg-accent-foreground/15"><div className="h-full w-[65%] rounded-full bg-accent-foreground" /></div>
                  <p className="mt-3 text-xs text-accent-foreground/70">350 more points to unlock</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="wallet-tile"><span className="tile-icon"><Store size={16} /></span><div><p className="text-xs text-muted-foreground">Businesses</p><p className="mt-1 font-semibold">3 joined</p></div></div>
                  <div className="wallet-tile"><span className="tile-icon"><Gift size={16} /></span><div><p className="text-xs text-muted-foreground">Rewards</p><p className="mt-1 font-semibold">2 available</p></div></div>
                </div>
                <div className="mt-8 flex items-center justify-between"><p className="text-sm font-semibold">Recent activity</p><span className="text-xs text-muted-foreground">View all</span></div>
                <div className="mt-3 space-y-2">
                  <ActivityRow icon={<Store size={15} />} label="Bluebird Coffee" meta="Today, 9:41 AM" amount="+120" positive />
                  <ActivityRow icon={<Gift size={15} />} label="Free pastry redeemed" meta="Yesterday, 2:18 PM" amount="−500" />
                  <ActivityRow icon={<Store size={15} />} label="Bluebird Coffee" meta="Mar 18, 10:04 AM" amount="+75" positive />
                </div>
              </div>
            </div>
            <div className="floating-note floating-note-left"><span className="floating-icon"><QrCode size={15} /></span><div><strong>Scan to join</strong><span>One simple first step</span></div></div>
            <div className="floating-note floating-note-right"><span className="floating-icon floating-icon-warm"><CircleCheck size={15} /></span><div><strong>Reward unlocked</strong><span>Free coffee is ready</span></div></div>
          </div>
        </div>
        <div className="page-shell flex items-center justify-between border-t border-border/70 py-5 text-xs uppercase tracking-[0.15em] text-muted-foreground/80">
          <span>One platform. Every repeat visit.</span>
          <span className="hidden sm:block">Cafés · Restaurants · Studios · Local favourites</span>
        </div>
      </section>

      <section id="qr-experience" className="section-band bg-surface">
        <div className="page-shell grid items-center gap-14 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> The Repeato loop</div>
            <h2 className="section-title">One scan.<br /><em>Your loyalty journey starts.</em></h2>
            <p className="section-copy">Forget another app to download. A familiar QR code takes customers straight to a beautifully simple web experience built around your business.</p>
            <div className="mt-9 flex items-center gap-3 text-sm text-muted-foreground"><span className="step-line" /><span>From first visit to favourite place</span></div>
          </div>
          <div className="qr-stage">
            <div className="qr-card">
              <div className="flex items-center justify-between"><span className="eyebrow eyebrow-small"><span className="eyebrow-dot" /> Bluebird Coffee</span><span className="qr-live">Active</span></div>
              <div className="mt-9 flex flex-col items-center text-center">
                <div className="qr-frame"><QRCodeSVG value={joinUrl} size={190} bgColor="transparent" fgColor="var(--foreground)" includeMargin /></div>
                <p className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em]">Scan to join Repeato</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">Join Bluebird Coffee's loyalty program and start earning on every visit.</p>
                <button className="accent-button mt-7" onClick={() => setShowJoinDemo(true)}>Open join flow <ArrowRight size={16} /></button>
              </div>
            </div>
            <div className="qr-route-note"><QrCode size={18} /><div><span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Your unique link</span><strong>/join/bluebird-coffee</strong></div></div>
          </div>
        </div>
        <div className="page-shell mt-20 grid grid-cols-2 gap-y-6 md:grid-cols-5">
          {["Scan", "Sign in", "Join", "Earn", "Redeem"].map((label, index) => <div key={label} className="journey-step"><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong>{index < 4 && <ArrowRight size={15} className="hidden md:block" />}</div>)}
        </div>
      </section>

      <section id="how-it-works" className="section-band">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><div className="eyebrow"><span className="eyebrow-dot" /> Made for momentum</div><h2 className="section-title max-w-2xl">The simplest loyalty program is the one people <em>actually use.</em></h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">Every part of Repeato is designed to keep the next visit top of mind.</p></div>
          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4">{steps.map(({ number, title, copy, icon: Icon }) => <div className="step-card bg-background" key={number}><span className="text-xs font-semibold tracking-[0.16em] text-accent">{number}</span><span className="step-card-icon"><Icon size={19} /></span><h3 className="mt-10 font-display text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p><ArrowRight className="mt-10 text-muted-foreground" size={17} /></div>)}</div>
        </div>
      </section>

      <section id="for-businesses" className="section-band bg-ink text-ink-foreground">
        <div className="page-shell grid items-start gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32"><div className="eyebrow eyebrow-on-dark"><span className="eyebrow-dot" /> For businesses</div><h2 className="section-title text-ink-foreground">Everything you need to build <em>customer loyalty.</em></h2><p className="section-copy text-ink-muted">One quiet command centre for the details that matter: who visits, what brings them back, and what they love next.</p><a href="#demo" className="accent-button accent-button-lg mt-9">See the workspace <ArrowRight size={17} /></a></div>
          <div className="grid gap-3 sm:grid-cols-2">{businessFeatures.map(([title, copy, Icon]) => { const FeatureIcon = Icon as typeof Gift; return <div className="dark-feature" key={title as string}><span className="dark-feature-icon"><FeatureIcon size={18} /></span><h3 className="mt-8 font-display text-xl font-semibold tracking-[-0.03em]">{title as string}</h3><p className="mt-3 text-sm leading-6 text-ink-muted">{copy as string}</p><ArrowRight className="mt-8 text-accent" size={16} /></div>; })}</div>
        </div>
      </section>

      <section id="demo" className="section-band bg-surface">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><div className="eyebrow"><span className="eyebrow-dot" /> One platform, two perspectives</div><h2 className="section-title">A better experience for <em>everyone.</em></h2></div><div className="mode-switch" role="tablist" aria-label="Preview mode"><button className={previewMode === "customer" ? "mode-button mode-button-active" : "mode-button"} onClick={() => setPreviewMode("customer")} role="tab">Customer view</button><button className={previewMode === "business" ? "mode-button mode-button-active" : "mode-button"} onClick={() => setPreviewMode("business")} role="tab">Business view</button></div></div>
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center"><div className="max-w-md"><p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">{demoLabel}</p><h3 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.055em]">{previewMode === "customer" ? "Make every visit feel like progress." : "Know what makes customers come back."}</h3><p className="mt-5 text-base leading-7 text-muted-foreground">{previewMode === "customer" ? "A personal wallet that keeps points, rewards, and favourite places close at hand." : "A clear pulse on your loyalty program, without drowning in spreadsheets or noise."}</p><ul className="mt-8 space-y-4 text-sm text-muted-foreground">{(previewMode === "customer" ? ["One wallet across every favourite business", "Instant reward progress", "Secure one-time redemption"] : ["Live repeat visit rate", "Clear customer and reward trends", "Simple tools for the counter team"]).map((item) => <li className="flex items-center gap-3" key={item}><span className="check-icon"><Check size={13} /></span>{item}</li>)}</ul></div><DemoPanel mode={previewMode} /></div>
        </div>
      </section>

      <section id="for-customers" className="section-band">
        <div className="page-shell grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center"><div><div className="eyebrow"><span className="eyebrow-dot" /> For your regulars</div><h2 className="section-title">Give people a reason to make you their <em>usual.</em></h2><p className="section-copy">No forgotten punch cards. No clunky app. Just a lightweight experience that makes the next visit feel closer.</p><a href="#qr-experience" className="text-link mt-8">See the customer journey <ArrowRight size={16} /></a></div><div className="quote-block"><span className="quote-mark">“</span><p className="font-display text-2xl leading-snug tracking-[-0.03em]">The best loyalty programs don't feel like programs. They feel like being known.</p><div className="mt-8 flex items-center gap-3"><div className="avatar avatar-small">A</div><div><p className="text-sm font-semibold">Aisha Khan</p><p className="text-xs text-muted-foreground">Bluebird Coffee regular</p></div></div></div></div>
      </section>

      <section className="cta-band"><div className="page-shell flex flex-col items-start justify-between gap-10 md:flex-row md:items-end"><div><div className="eyebrow eyebrow-on-dark"><span className="eyebrow-dot" /> Start the loop</div><h2 className="mt-6 max-w-2xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-ink-foreground sm:text-6xl">Make the next visit the <em>easy</em> choice.</h2></div><a href="#for-businesses" className="accent-button accent-button-lg">Get started with Repeato <ArrowRight size={17} /></a></div></section>

      <footer className="border-t border-border bg-background"><div className="page-shell flex flex-col justify-between gap-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center"><a href="#top" className="flex items-center gap-3 text-foreground"><span className="brand-mark brand-mark-sm"><span /></span><span className="font-display text-lg font-semibold">Repeato</span></a><p>Customer loyalty for the places people love.</p><div className="flex gap-5"><a href="#how-it-works">How it works</a><a href="#for-businesses">Businesses</a><a href="#for-customers">Customers</a></div></div></footer>

      {showJoinDemo && <JoinModal onClose={() => setShowJoinDemo(false)} />}
    </main>
  );
}

function ActivityRow({ icon, label, meta, amount, positive = false }: { icon: React.ReactNode; label: string; meta: string; amount: string; positive?: boolean }) {
  return <div className="activity-row"><span className="activity-icon">{icon}</span><div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold">{label}</p><p className="mt-1 text-[11px] text-muted-foreground">{meta}</p></div><span className={positive ? "amount-positive" : "amount-negative"}>{amount}</span></div>;
}

function DemoPanel({ mode }: { mode: "customer" | "business" }) {
  if (mode === "business") return <div className="dashboard-window"><div className="dashboard-header"><div className="flex items-center gap-3"><span className="brand-mark brand-mark-sm"><span /></span><span className="text-sm font-semibold">Bluebird Coffee</span></div><span className="dashboard-avatar">BC</span></div><div className="dashboard-body"><div className="flex items-end justify-between"><div><p className="text-xs text-muted-foreground">Tuesday, March 24</p><h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em]">Good morning, Alex.</h3></div><span className="mini-pill mini-pill-muted"><Sparkles size={13} /> This week</span></div><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">{[["1,284", "Total customers"], ["68%", "Repeat rate"], ["9,420", "Points issued"], ["146", "Rewards claimed"]].map(([value, label]) => <div className="metric" key={label}><p className="font-display text-2xl font-semibold tracking-[-0.04em]">{value}</p><p className="mt-2 text-[11px] leading-4 text-muted-foreground">{label}</p></div>)}</div><div className="mt-7 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]"><div className="chart-card"><div className="flex justify-between"><span className="text-xs font-semibold">Repeat visits</span><span className="text-xs text-accent">+12.8%</span></div><div className="chart-bars">{[35, 44, 38, 59, 52, 72, 65, 82, 78, 91, 86, 100].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}</div><div className="mt-3 flex justify-between text-[10px] text-muted-foreground"><span>Mar 12</span><span>Mar 24</span></div></div><div className="chart-card"><div className="flex justify-between"><span className="text-xs font-semibold">Top rewards</span><Gift size={14} className="text-accent" /></div><div className="mt-5 space-y-4">{[["Free coffee", "42 claimed"], ["Pastry pair", "28 claimed"], ["£5 off", "19 claimed"]].map(([name, count]) => <div className="flex items-center justify-between gap-2" key={name}><span className="truncate text-xs text-muted-foreground">{name}</span><span className="text-xs font-semibold">{count}</span></div>)}</div></div></div></div></div>;
  return <div className="customer-window"><div className="customer-topbar"><span className="text-xs font-semibold">9:41</span><div className="flex items-center gap-1"><span className="signal signal-one" /><span className="signal signal-two" /><span className="signal signal-three" /></div></div><div className="customer-body"><div className="flex items-center justify-between"><span className="brand-mark brand-mark-sm"><span /></span><span className="avatar avatar-small">B</span></div><p className="mt-9 text-xs text-muted-foreground">Good morning, Bhisham</p><h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em]">Your wallet</h3><div className="customer-points mt-6"><p className="text-xs text-accent-foreground/70">Available points</p><p className="mt-1 font-display text-5xl font-semibold tracking-[-0.06em] text-accent-foreground">650</p><div className="mt-6 flex justify-between text-[11px] text-accent-foreground/70"><span>Free coffee</span><span>65%</span></div><div className="mt-2 h-1.5 rounded-full bg-accent-foreground/15"><div className="h-full w-[65%] rounded-full bg-accent-foreground" /></div></div><div className="mt-8 flex items-center justify-between"><span className="text-sm font-semibold">Your businesses</span><span className="text-xs text-accent">See all</span></div><div className="mt-3 space-y-2"><div className="customer-business"><span className="business-avatar">B</span><div className="flex-1"><p className="text-xs font-semibold">Bluebird Coffee</p><p className="mt-1 text-[11px] text-muted-foreground">650 points</p></div><ArrowRight size={15} className="text-muted-foreground" /></div><div className="customer-business"><span className="business-avatar business-avatar-warm">F</span><div className="flex-1"><p className="text-xs font-semibold">FitZone Studio</p><p className="mt-1 text-[11px] text-muted-foreground">280 points</p></div><ArrowRight size={15} className="text-muted-foreground" /></div></div></div><div className="customer-nav"><span className="customer-nav-active"><LayoutDashboard size={16} />Home</span><span><Gift size={16} />Rewards</span><span><Users size={16} />Profile</span></div></div>;
}

function JoinModal({ onClose }: { onClose: () => void }) {
  const [joined, setJoined] = useState(false);
  return <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Join Bluebird Coffee"><div className="join-modal"><button className="icon-button modal-close" aria-label="Close join flow" onClick={onClose}><X size={18} /></button><div className="join-logo"><QrCode size={22} /></div>{joined ? <div className="text-center"><span className="success-burst"><Check size={22} /></span><h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.05em]">You're in.</h2><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Welcome to Bluebird Coffee. Your loyalty journey starts with 0 points.</p><button className="accent-button mt-8" onClick={onClose}>View my wallet <ArrowRight size={16} /></button></div> : <><p className="eyebrow eyebrow-small"><span className="eyebrow-dot" /> Bluebird Coffee</p><h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.06em]">Join the inner circle.</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">Earn points on every visit and unlock little extras along the way.</p><label className="mt-8 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground" htmlFor="join-email">Your email</label><input id="join-email" className="text-input mt-2" placeholder="you@example.com" type="email" /><button className="accent-button accent-button-lg mt-4 w-full justify-center" onClick={() => setJoined(true)}>Join for free <ArrowRight size={16} /></button><p className="mt-4 text-center text-xs text-muted-foreground">Already a member? <span className="font-semibold text-foreground">Log in</span></p></>}</div></div>;
}