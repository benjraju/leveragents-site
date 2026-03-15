"use client";

import { useState } from "react";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-1">
          <span className="font-serif text-2xl text-text-primary">Lever</span>
          <span className="text-lg font-medium text-text-primary">agents</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#skills" className="text-sm text-text-muted transition-colors duration-200 hover:text-text-primary">
            Skills
          </a>
          <a href="#consulting" className="text-sm text-text-muted transition-colors duration-200 hover:text-text-primary">
            Consulting
          </a>
          <a href="#newsletter" className="text-sm text-text-muted transition-colors duration-200 hover:text-text-primary">
            Newsletter
          </a>
          <a
            href="#waitlist"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-accent-hover"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-medium text-text-muted">Now accepting early access applications</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-[5rem]">
          Your ecommerce brand,{" "}
          <span className="text-accent">AI-native</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
          Leveragents builds the AI agents, skills, and systems that make ecommerce brands
          operate at 10x speed. From ad creative to customer ops to inventory intelligence.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#waitlist"
            className="flex h-12 items-center justify-center rounded-lg bg-accent px-8 text-sm font-medium text-black transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
          >
            Join the Waitlist
          </a>
          <a
            href="#skills"
            className="flex h-12 items-center justify-center rounded-lg border border-surface-border px-8 text-sm font-medium text-text-primary transition-colors duration-200 hover:border-text-muted hover:bg-surface"
          >
            Browse Free Skills
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-8 w-5 rounded-full border border-surface-border p-1">
          <div className="h-2 w-1 rounded-full bg-text-muted mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function LogoBar() {
  const labels = ["Amazon Sellers", "DTC Brands", "Ecom Agencies", "Shopify Stores", "TikTok Shop"];
  return (
    <section className="border-y border-surface-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-text-muted">
          Built for operators running
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {labels.map((label) => (
            <span key={label} className="text-lg font-medium text-text-muted/50 transition-colors duration-200 hover:text-text-muted">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueProp() {
  const items = [
    {
      icon: "⚡",
      title: "AI Skills Marketplace",
      description:
        "Download Claude Code skills that automate your ecommerce operations. Drop a markdown file into your workspace — instantly gain a new capability.",
      stat: "14+ skills",
      statLabel: "for ecommerce",
    },
    {
      icon: "🛡️",
      title: "Chief Claude Officer",
      description:
        "We audit your workflows, build custom AI systems, and train your team. Like having a dedicated AI operations lead — without the $300K salary.",
      stat: "93%",
      statLabel: "time saved on ops",
    },
    {
      icon: "📡",
      title: "The Leverage Report",
      description:
        "Weekly intelligence on AI tools, techniques, and wins for ecommerce operators. Curated by humans, enhanced by agents, delivered to your inbox.",
      stat: "Weekly",
      statLabel: "actionable intel",
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">The ecosystem</p>
          <h2 className="mt-4 font-serif text-4xl text-text-primary sm:text-5xl">
            Everything your ecom brand needs to go AI-native
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Skills you download. Systems we build. Intelligence we deliver.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-xl border border-surface-border bg-surface p-8 transition-all duration-300 hover:border-text-muted/20"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 font-serif text-2xl text-text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.description}</p>
              <div className="mt-6 border-t border-surface-border pt-4">
                <span className="text-2xl font-semibold text-accent">{item.stat}</span>
                <span className="ml-2 text-sm text-text-muted">{item.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsPreview() {
  const skills = [
    { name: "Ad Creative Generator", category: "Ad Creative", price: "Free", downloads: "—", status: "Available" },
    { name: "Amazon Listing Optimizer", category: "Listing", price: "Free", downloads: "—", status: "Available" },
    { name: "Customer Review Analyzer", category: "Customer Ops", price: "$39", downloads: "—", status: "Coming Soon" },
    { name: "Email Sequence Builder", category: "Email", price: "$39", downloads: "—", status: "Coming Soon" },
    { name: "Meta Ad Copy Generator", category: "Ad Creative", price: "$49", downloads: "—", status: "Coming Soon" },
    { name: "Competitor Price Monitor", category: "Intel", price: "$49", downloads: "—", status: "Coming Soon" },
  ];

  return (
    <section className="border-t border-surface-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent">Skills Marketplace</p>
            <h2 className="mt-4 font-serif text-4xl text-text-primary sm:text-5xl">
              Download. Drop in. Automate.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-text-secondary">
              Each skill is a markdown file. Drop it into your Claude Code workspace and instantly automate a part of your business.
            </p>
          </div>
        </div>

        {/* Skills table */}
        <div className="mt-12 overflow-hidden rounded-xl border border-surface-border">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 border-b border-surface-border bg-surface px-6 py-3 text-xs font-medium uppercase tracking-wider text-text-muted">
            <span>Skill</span>
            <span className="hidden sm:block">Category</span>
            <span>Price</span>
            <span>Status</span>
          </div>
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 px-6 py-4 transition-colors duration-200 hover:bg-surface ${
                i !== skills.length - 1 ? "border-b border-surface-border" : ""
              }`}
            >
              <div>
                <span className="text-sm font-medium text-text-primary">{skill.name}</span>
              </div>
              <span className="hidden text-sm text-text-muted sm:block">{skill.category}</span>
              <span className={`text-sm font-medium ${skill.price === "Free" ? "text-success" : "text-text-primary"}`}>
                {skill.price}
              </span>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                  skill.status === "Available"
                    ? "bg-success/10 text-success"
                    : "bg-accent-secondary/10 text-accent-secondary"
                }`}
              >
                {skill.status}
              </span>
            </div>
          ))}
        </div>

        {/* Code preview */}
        <div className="mt-8 rounded-xl border border-surface-border bg-surface p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-3 w-3 rounded-full bg-error/60" />
            <div className="h-3 w-3 rounded-full bg-warning/60" />
            <div className="h-3 w-3 rounded-full bg-success/60" />
            <span className="ml-2 text-xs text-text-muted font-mono">ad-creative-generator/SKILL.md</span>
          </div>
          <pre className="overflow-x-auto font-mono text-sm leading-relaxed">
            <code>
              <span className="text-text-muted">---</span>{"\n"}
              <span className="text-accent">name</span><span className="text-text-muted">:</span>{" "}
              <span className="text-accent-secondary">&quot;Ad Creative Generator&quot;</span>{"\n"}
              <span className="text-accent">version</span><span className="text-text-muted">:</span>{" "}
              <span className="text-accent-secondary">&quot;2.0.0&quot;</span>{"\n"}
              <span className="text-accent">author</span><span className="text-text-muted">:</span>{" "}
              <span className="text-accent-secondary">&quot;Leveragents&quot;</span>{"\n"}
              <span className="text-accent">category</span><span className="text-text-muted">:</span>{" "}
              <span className="text-accent-secondary">&quot;ad-creative&quot;</span>{"\n"}
              <span className="text-accent">price</span><span className="text-text-muted">:</span>{" "}
              <span className="text-accent-secondary">&quot;free&quot;</span>{"\n"}
              <span className="text-text-muted">---</span>{"\n\n"}
              <span className="text-success"># Generate 40 ad creatives from a single product URL.</span>{"\n"}
              <span className="text-success"># Uses Gemini API for photorealistic imagery.</span>{"\n"}
              <span className="text-success"># Drop this file into .claude/skills/ and run.</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function ConsultingSection() {
  return (
    <section id="consulting" className="border-t border-surface-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent">High-ticket consulting</p>
            <h2 className="mt-4 font-serif text-4xl text-text-primary sm:text-5xl">
              Your outsourced Chief Claude Officer
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Every company needs someone who makes them AI-native. We audit your workflows,
              build custom AI systems, train your team, and keep optimizing month after month.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { step: "01", title: "Audit", desc: "Map every workflow. Find the highest-leverage automation opportunities." },
                { step: "02", title: "Build", desc: "Custom Claude Code skills + CLAUDE.md tailored to how your company thinks." },
                { step: "03", title: "Train", desc: "Onboard your team. Find champions. Solve the adoption problem." },
                { step: "04", title: "Optimize", desc: "Monthly retainer. New skills, better prompts, continuous improvement." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 rounded-lg border border-surface-border bg-surface p-5 transition-colors duration-200 hover:border-text-muted/20">
                  <span className="font-mono text-sm text-accent">{item.step}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">{item.title}</h4>
                    <p className="mt-1 text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing cards */}
          <div className="space-y-4">
            {[
              {
                name: "AI Audit",
                price: "$2,500",
                period: "one-time",
                features: ["Granular task mapping", "Top 10 automation opportunities", "Prioritized roadmap", "5-day delivery"],
                cta: "Book a Call",
                featured: false,
              },
              {
                name: "Chief Claude Officer",
                price: "$7,500",
                period: "/month",
                features: [
                  "Everything in AI Audit",
                  "Custom skill development",
                  "Team training & adoption",
                  "Weekly check-ins",
                  "Unlimited async support",
                  "Monthly optimization report",
                ],
                cta: "Book a Call",
                featured: true,
              },
              {
                name: "Done-For-You Build",
                price: "$3,500",
                period: "per project",
                features: ["Custom automation system", "Full documentation", "Training session", "30 days support"],
                cta: "Book a Call",
                featured: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-6 transition-all duration-200 ${
                  tier.featured
                    ? "border-accent/30 bg-accent/5"
                    : "border-surface-border bg-surface hover:border-text-muted/20"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">{tier.name}</h4>
                    {tier.featured && (
                      <span className="mt-1 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-semibold text-text-primary">{tier.price}</span>
                    <span className="ml-1 text-sm text-text-muted">{tier.period}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="text-success">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`mt-5 flex h-10 items-center justify-center rounded-lg text-sm font-medium transition-colors duration-200 ${
                    tier.featured
                      ? "bg-accent text-black hover:bg-accent-hover"
                      : "border border-surface-border text-text-primary hover:bg-surface hover:border-text-muted"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="border-t border-surface-border py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <blockquote className="font-serif text-3xl leading-snug text-text-primary sm:text-4xl">
          &ldquo;Every company will have a Chief Claude Officer that onboards new employees and keeps everyone trained. It&rsquo;s the only way and it&rsquo;s that important.&rdquo;
        </blockquote>
        <p className="mt-6 text-sm text-text-muted">
          — Todd Saunders, founder of Broadlume (9-figure exit)
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="border-t border-surface-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">How it works</p>
          <h2 className="mt-4 font-serif text-4xl text-text-primary sm:text-5xl">
            One command. Instant AI superpowers.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Add the marketplace",
              code: "/plugin marketplace add benjraju/leveragents-skills",
              desc: "One command in Claude Code connects you to the entire Leveragents skill library.",
            },
            {
              step: "2",
              title: "Install a skill",
              code: "/plugin install ad-creative-generator@leveragents",
              desc: "Pick what you need. Each skill is purpose-built for ecommerce operations.",
            },
            {
              step: "3",
              title: "Run it",
              code: "/ad-creative-generator https://amazon.com/dp/B09...",
              desc: "Claude now knows how to execute that task like a specialist. 40 ad creatives, optimized listings, email sequences — done.",
            },
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/5 font-mono text-sm font-semibold text-accent">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
              <div className="mt-3 rounded-lg border border-surface-border bg-surface px-4 py-3">
                <code className="font-mono text-xs text-accent">{item.code}</code>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What is a Claude Code skill?",
      a: "A skill is a markdown file that teaches Claude Code how to do a specific task. When you install a skill, Claude instantly knows how to execute complex workflows — like generating 40 ad creatives or optimizing an Amazon listing. No coding required.",
    },
    {
      q: "Do I need to be technical to use these?",
      a: "No. If you can type a command, you can use our skills. Install is one line, running a skill is one line. Claude handles everything else. We built these for operators, not developers.",
    },
    {
      q: "What is a 'Chief Claude Officer'?",
      a: "It's the person (or team) responsible for making your company AI-native. We audit your workflows, build custom AI systems, train your team, and keep optimizing. Think of it as an outsourced AI operations lead — without the $300K salary.",
    },
    {
      q: "How is this different from ChatGPT or other AI tools?",
      a: "Claude Code runs on your machine, accesses your files, and executes multi-step workflows. It's not a chatbot — it's an operator. Our skills turn it into a specialist for your specific ecommerce tasks.",
    },
    {
      q: "Are the skills free?",
      a: "We have free skills (like the Ad Creative Generator) and premium skills. The free ones are fully functional — no catch. Premium skills tackle more complex workflows and include bundled agents and automations.",
    },
    {
      q: "What ecommerce platforms do you support?",
      a: "Amazon, Shopify, TikTok Shop, and any DTC brand. Our skills work with product data from any platform. The consulting packages are platform-agnostic — we optimize your operations regardless of where you sell.",
    },
  ];

  return (
    <section className="border-t border-surface-border py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">FAQ</p>
          <h2 className="mt-4 font-serif text-4xl text-text-primary sm:text-5xl">
            Common questions
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-surface-border bg-surface p-6">
              <h3 className="text-sm font-semibold text-text-primary">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="border-t border-surface-border py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">Newsletter</p>
        <h2 id="newsletter" className="mt-4 font-serif text-4xl text-text-primary sm:text-5xl">
          The Leverage Report
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Weekly AI intelligence for ecommerce operators. Tools, techniques, and wins — curated by humans, enhanced by agents.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-xl border border-success/30 bg-success/5 p-8">
            <p className="text-lg font-medium text-success">You&apos;re on the list.</p>
            <p className="mt-2 text-sm text-text-secondary">
              We&apos;ll send you the first edition of The Leverage Report + a free Ad Creative Generator skill.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="you@ecomstore.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-lg border border-surface-border bg-surface px-4 text-sm text-text-primary placeholder-text-muted outline-none transition-colors duration-200 focus:border-accent sm:w-80"
            />
            <button
              type="submit"
              disabled={loading}
              className="h-12 rounded-lg bg-accent px-8 text-sm font-medium text-black transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] disabled:opacity-50"
            >
              {loading ? "Subscribing..." : "Get Early Access"}
            </button>
          </form>
        )}

        {error && (
          <p className="mt-3 text-sm text-error">{error}</p>
        )}

        <p className="mt-4 text-xs text-text-muted">
          Free forever. Unsubscribe anytime. First 100 subscribers get the Ad Creative Generator skill free.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-surface-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-1">
          <span className="font-serif text-xl text-text-primary">Lever</span>
          <span className="text-sm font-medium text-text-primary">agents</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#skills" className="text-sm text-text-muted transition-colors duration-200 hover:text-text-primary">
            Skills
          </a>
          <a href="#consulting" className="text-sm text-text-muted transition-colors duration-200 hover:text-text-primary">
            Consulting
          </a>
          <a href="#newsletter" className="text-sm text-text-muted transition-colors duration-200 hover:text-text-primary">
            Newsletter
          </a>
        </div>
        <p className="text-xs text-text-muted">© 2026 Leveragents. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <Hero />
      <LogoBar />
      <ValueProp />
      <SkillsPreview />
      <QuoteSection />
      <ConsultingSection />
      <HowItWorks />
      <FAQ />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
