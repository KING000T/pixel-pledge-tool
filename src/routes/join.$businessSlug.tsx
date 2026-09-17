import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, QrCode, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/join/$businessSlug")({
  head: () => ({
    meta: [
      { title: "Join Bluebird Coffee on Repeato" },
      { name: "description", content: "Join a local loyalty program and start earning points with Repeato." },
      { property: "og:title", content: "Join Bluebird Coffee on Repeato" },
      { property: "og:description", content: "Start earning points on every visit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinBusiness,
});

function JoinBusiness() {
  const [joined, setJoined] = useState(false);
  return <main className="flex min-h-screen items-center justify-center bg-surface px-5 py-10 text-foreground"><div className="w-full max-w-md"><a href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground"><ArrowLeft size={16} /> Back to Repeato</a><div className="join-modal mx-auto"><div className="flex items-center justify-between"><span className="brand-mark"><span /></span><span className="eyebrow eyebrow-small"><span className="eyebrow-dot" /> Repeato</span></div>{joined ? <div className="py-10 text-center"><span className="success-burst mx-auto"><Check size={22} /></span><h1 className="mt-7 font-display text-4xl font-semibold tracking-[-0.06em]">You're in.</h1><p className="mt-4 text-sm leading-6 text-muted-foreground">Welcome to Bluebird Coffee. Your loyalty wallet is ready for your next visit.</p><a className="accent-button accent-button-lg mt-8" href="/">Explore your wallet <ArrowRight size={16} /></a></div> : <><div className="join-logo mt-12"><QrCode size={22} /></div><p className="eyebrow eyebrow-small mt-8"><span className="eyebrow-dot" /> Bluebird Coffee</p><h1 className="mt-5 font-display text-4xl font-semibold leading-[.98] tracking-[-0.06em]">Join the inner circle.</h1><p className="mt-4 text-sm leading-6 text-muted-foreground">Earn points from every visit, unlock rewards, and make your next coffee a little more rewarding.</p><label className="mt-8 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground" htmlFor="join-email-page">Your email</label><input id="join-email-page" className="text-input mt-2" placeholder="you@example.com" type="email" /><button className="accent-button accent-button-lg mt-4 w-full justify-center" onClick={() => setJoined(true)}>Join for free <ArrowRight size={16} /></button><div className="mt-7 grid gap-3 text-xs text-muted-foreground"><span className="flex items-center gap-2"><ShieldCheck size={15} className="text-accent" /> Your information stays secure</span><span className="flex items-center gap-2"><Sparkles size={15} className="text-accent" /> No app download required</span></div></>}</div><p className="mt-6 text-center text-xs text-muted-foreground">Powered by <span className="font-semibold text-foreground">Repeato</span></p></div></main>;
}