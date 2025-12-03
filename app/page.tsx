"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const skills = [
  { label: "HTML", icon: "⌘" },
  { label: "CSS", icon: "〰" },
  { label: "JavaScript", icon: "{}" },
  { label: "React", icon: "⚛︎" },
  { label: "Next.js", icon: "▢" },
  { label: "Figma", icon: "✏︎" },
];

const fcfsTimeline = [
  { id: "P1", duration: 3, color: "bg-[oklch(0.60_0.20_55)]" },
  { id: "P2", duration: 5, color: "bg-[oklch(0.70_0.18_45)]" },
  { id: "P3", duration: 2, color: "bg-[oklch(0.75_0.20_70)]" },
  { id: "P4", duration: 4, color: "bg-[oklch(0.65_0.19_35)]" },
];

const contactLinks = [
  {
    label: "Email",
    value: "Clifforddegamo07@gmail.com",
    href: "mailto:Clifforddegamo07@gmail.com",
    icon: MailIcon,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/fordyx",
    href: "https://github.com/fordyx",
    icon: GithubIcon,
    external: true,
  },
];

const MotionSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, amount: 0.4 }}
    className="space-y-6"
  >
    {children}
  </motion.section>
);

export default function Home() {
  const fcfsTotal = fcfsTimeline.reduce((acc, slot) => acc + slot.duration, 0);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-10 sm:px-10 lg:px-12">
        <motion.header
          className="fixed top-4 left-0 right-0 z-[50] mx-auto max-w-6xl rounded-2xl border-2 border-[var(--border)] bg-gradient-to-r from-[var(--card)]/95 via-[oklch(0.99_0.01_60/0.95)] to-[var(--card)]/95 backdrop-blur-md shadow-xl"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="flex flex-col items-start justify-between gap-4 p-5 text-sm font-medium uppercase tracking-wide text-[var(--muted-foreground)] md:flex-row md:items-center">
            <div className="flex items-center gap-2 text-[var(--foreground)]">
              <SparkIcon />
              <span>Clifford Degamo</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-all hover:text-[oklch(0.60_0.20_55)] hover:font-semibold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </motion.header>

        <main className="space-y-24">
          <MotionSection delay={0.1}>
            <section
              id="hero"
              className="grid gap-6 rounded-3xl border-2 border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[oklch(0.98_0.02_60)] to-[oklch(0.96_0.03_55)] p-8 shadow-xl lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[1.2fr_1.8fr] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.60_0.20_55/0.05)] to-transparent pointer-events-none"></div>
              <div className="space-y-4 relative z-10 lg:order-2">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-2xl border-2 border-[oklch(0.60_0.20_55)] shadow-xl ring-2 ring-[oklch(0.60_0.20_55/0.3)] sm:h-28 sm:w-28">
                    <Image
                      src="/profile.jpg"
                      alt="Clifford Degamo"
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    <p className="text-xs uppercase tracking-wide">Clifford</p>
                    <p>Degamo · BSIT 3rd Year Student</p>
                  </div>
                </div>
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] font-medium">
                  BS Information Technology · 3rd Year
                </p>
                <h1 className="text-4xl font-bold leading-tight tracking-tight bg-gradient-to-r from-[oklch(0.60_0.20_55)] via-[oklch(0.70_0.18_45)] to-[oklch(0.75_0.20_70)] bg-clip-text text-transparent sm:text-5xl">
                  Crafting modern, elegant experiences with reliable code.
                </h1>
                <p className="max-w-2xl text-base text-[var(--muted-foreground)]">
                  I'm Clifford Degamo, a BSIT student focused on front-end
                  engineering and thoughtful product systems. I enjoy crafting
                  fluid interfaces with Next.js, React, and clean design tokens.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.60_0.20_55)] to-[oklch(0.70_0.18_45)] px-6 py-3 text-[var(--primary-foreground)] transition-all hover:opacity-90 hover:shadow-xl hover:scale-105 font-semibold"
                  >
                    View Projects
                    <ArrowIcon />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[oklch(0.60_0.20_55/0.4)] bg-gradient-to-r from-[oklch(0.60_0.20_55/0.08)] to-[oklch(0.70_0.18_45/0.05)] px-6 py-3 text-[var(--foreground)] transition-all hover:border-[oklch(0.60_0.20_55)] hover:bg-gradient-to-r hover:from-[oklch(0.60_0.20_55/0.15)] hover:to-[oklch(0.70_0.18_45/0.1)] hover:scale-105 font-semibold"
                  >
                    Connect
                    <DotIcon />
                  </Link>
                  <Link
                    href="/projects/fcfs"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-[oklch(0.60_0.20_55/0.3)] bg-[oklch(0.99_0.01_60)] px-6 py-3 text-[var(--foreground)] transition-all hover:border-[oklch(0.60_0.20_55)] hover:bg-gradient-to-r hover:from-[oklch(0.99_0.02_60)] hover:to-[oklch(0.98_0.03_55)] hover:scale-105 font-semibold"
                  >
                    FCFS Simulator
                    <ArrowIcon />
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        "/resume.pdf",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--border)] bg-[oklch(0.99_0.01_60)] px-6 py-3 text-[var(--foreground)] transition-all hover:border-[oklch(0.60_0.20_55)] hover:bg-gradient-to-r hover:from-[oklch(0.99_0.02_60)] hover:to-[oklch(0.98_0.03_55)] hover:scale-105 font-semibold"
                  >
                    View Résumé
                    <ArrowIcon />
                  </button>
                </div>
              </div>
              <div className="grid gap-3 rounded-2xl border-2 border-dashed border-[var(--primary)]/40 bg-gradient-to-br from-[oklch(0.60_0.20_55/0.08)] via-[oklch(0.70_0.18_45/0.05)] to-transparent p-6 text-sm text-[var(--muted-foreground)] relative z-10 shadow-md lg:order-1">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide font-semibold">
                    Current focus
                  </p>
                  <p className="text-base text-[var(--foreground)] font-medium">
                    Minimal portfolio systems & FCFS visualizations
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide font-semibold">
                    Stack
                  </p>
                  <p className="font-medium">
                    React · Next.js · Tailwind · Framer Motion · Figma
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide font-semibold">
                    Availability
                  </p>
                  <p className="font-medium">
                    Open for collaboration · First come, first served
                  </p>
                </div>
              </div>
            </section>
          </MotionSection>

          <MotionSection delay={0.15}>
            <section
              id="about"
              className="grid gap-6 rounded-3xl border-2 border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[oklch(0.99_0.01_60)] to-[oklch(0.97_0.02_55)] p-8 shadow-lg md:grid-cols-3 lg:grid-cols-[1fr_1.5fr_1fr] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[oklch(0.60_0.20_55/0.1)] to-transparent rounded-full blur-3xl pointer-events-none"></div>
              <div className="space-y-3 relative z-10 md:col-span-3 lg:col-span-1">
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] font-semibold">
                  About me
                </p>
                <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[oklch(0.60_0.20_55)] via-[oklch(0.70_0.18_45)] to-[oklch(0.75_0.20_70)] bg-clip-text text-transparent">
                  Building interfaces with intent
                </h2>
              </div>
              <div className="space-y-4 text-sm text-[var(--muted-foreground)] relative z-10 md:col-span-3 lg:col-span-2">
                <p className="font-medium text-base">
                  Modern UI, thoughtful design, and scalable systems guide my
                  work. I focus on clean code, reusable components, and
                  intuitive user experiences.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <p className="font-medium">
                    As a 3rd year BSIT student, I explore how modern design and
                    system thinking can create better user experiences. My tools
                    of choice are React, Next.js, Tailwind CSS, and Figma for
                    building innovative solutions.
                  </p>
                  <p className="font-medium">
                    I'm currently working on CPU scheduling visualizers and web
                    applications that prioritize performance, accessibility, and
                    beautiful design.
                  </p>
                </div>
              </div>
            </section>
          </MotionSection>

          <MotionSection delay={0.2}>
            <section
              id="skills"
              className="space-y-6 rounded-3xl border-2 border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[oklch(0.99_0.01_60)] to-[oklch(0.97_0.02_55)] p-8 shadow-lg relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[oklch(0.75_0.20_70/0.1)] to-transparent rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex flex-col gap-2 relative z-10">
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] font-semibold">
                  Skill set
                </p>
                <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[oklch(0.60_0.20_55)] via-[oklch(0.70_0.18_45)] to-[oklch(0.75_0.20_70)] bg-clip-text text-transparent">
                  Modern, powerful toolkit
                </h2>
              </div>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 relative z-10">
                {skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-[var(--border)] bg-[var(--card)] px-4 py-5 text-sm transition-all hover:border-[oklch(0.60_0.20_55)] hover:shadow-lg hover:scale-105 hover:bg-gradient-to-br hover:from-[oklch(0.99_0.01_60)] hover:to-[oklch(0.98_0.02_55)]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.60_0.20_55)] via-[oklch(0.70_0.18_45)] to-[oklch(0.75_0.20_70)] text-lg font-semibold text-[var(--primary-foreground)] shadow-md">
                      {skill.icon}
                    </span>
                    <span className="font-semibold text-center">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </MotionSection>

          <MotionSection delay={0.25}>
            <section
              id="projects"
              className="space-y-6 rounded-3xl border-2 border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[oklch(0.99_0.01_60)] to-[oklch(0.97_0.02_55)] p-8 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[oklch(0.65_0.19_35/0.1)] to-transparent rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex flex-col gap-2 relative z-10">
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] font-semibold">
                  Projects
                </p>
                <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[oklch(0.60_0.20_55)] via-[oklch(0.70_0.18_45)] to-[oklch(0.75_0.20_70)] bg-clip-text text-transparent">
                  First Come First Serve CPU Scheduling
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr] relative z-10">
                <div className="space-y-4 order-2 lg:order-1">
                  <div className="space-y-3">
                    <p className="text-sm text-[var(--muted-foreground)] font-medium">
                      A scheduling visualizer that highlights FCFS execution
                      with a responsive Gantt chart. Built in Next.js with React
                      state, emphasizing readable timelines and zero-noise
                      interactions.
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)] font-medium">
                      Each process bar scales according to burst time, giving a
                      quick scan of completion order while staying minimal.
                    </p>
                  </div>
                  <Link
                    href="/projects/fcfs"
                    className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[oklch(0.60_0.20_55/0.4)] bg-gradient-to-r from-[oklch(0.60_0.20_55/0.08)] to-[oklch(0.70_0.18_45/0.05)] px-5 py-2 text-xs font-semibold uppercase tracking-tight text-[var(--foreground)] transition-all hover:border-[oklch(0.60_0.20_55)] hover:bg-gradient-to-r hover:from-[oklch(0.60_0.20_55/0.15)] hover:to-[oklch(0.70_0.18_45/0.1)] hover:scale-105"
                  >
                    Open interactive page
                    <ArrowIcon />
                  </Link>
                </div>
                <div className="rounded-2xl border-2 border-dashed border-[oklch(0.60_0.20_55/0.3)] bg-gradient-to-br from-[oklch(0.99_0.01_60)] to-[oklch(0.98_0.02_55)] p-5 shadow-md order-1 lg:order-2">
                  <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] font-semibold mb-4">
                    Gantt chart
                  </p>
                  <div className="flex flex-col gap-3 text-xs font-mono text-[var(--muted-foreground)]">
                    <div className="flex items-center gap-2 text-[var(--foreground)] font-semibold">
                      <LayersIcon />
                      <span>FCFS order · First come, first served</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2 rounded-full bg-[var(--muted)] p-2">
                        {fcfsTimeline.map((slot) => (
                          <div
                            key={slot.id}
                            className={`flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold text-[var(--foreground)] ${slot.color}`}
                            style={{
                              flex: slot.duration,
                            }}
                          >
                            {slot.id}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-[var(--muted-foreground)] font-medium">
                        <span>0</span>
                        <span>{fcfsTotal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </MotionSection>

          <MotionSection delay={0.3}>
            <section
              id="contact"
              className="space-y-6 rounded-3xl border-2 border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[oklch(0.99_0.01_60)] to-[oklch(0.97_0.02_55)] p-8 shadow-lg relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[oklch(0.60_0.20_55/0.1)] to-transparent rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex flex-col gap-2 relative z-10">
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] font-semibold">
                  Contact
                </p>
                <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[oklch(0.60_0.20_55)] via-[oklch(0.70_0.18_45)] to-[oklch(0.75_0.20_70)] bg-clip-text text-transparent">
                  Let's build something amazing
                </h2>
              </div>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="group flex flex-col gap-3 rounded-2xl border-2 border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[oklch(0.99_0.01_60)] p-5 transition-all hover:border-[oklch(0.60_0.20_55)] hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-[oklch(0.99_0.02_60)] hover:to-[oklch(0.98_0.03_55)]"
                  >
                    <div className="flex items-center gap-2 text-sm uppercase tracking-tight text-[var(--muted-foreground)] font-semibold">
                      <item.icon />
                      {item.label}
                    </div>
                    <p className="text-[14px] font-semibold text-[var(--foreground)] group-hover:bg-gradient-to-r group-hover:from-[oklch(0.60_0.20_55)] group-hover:to-[oklch(0.70_0.18_45)] group-hover:bg-clip-text group-hover:text-transparent">
                      {item.value}
                    </p>
                  </a>
                ))}
                <div className="group flex flex-col gap-3 rounded-2xl border-2 border-dashed border-[oklch(0.60_0.20_55/0.3)] bg-gradient-to-br from-[oklch(0.99_0.01_60)] to-[oklch(0.98_0.02_55)] p-5 transition-all hover:border-[oklch(0.60_0.20_55)] hover:shadow-lg hover:scale-105 sm:col-span-2 lg:col-span-2">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-tight text-[var(--muted-foreground)] font-semibold">
                    <SparkIcon />
                    Status
                  </div>
                  <p className="text-base font-semibold text-[var(--foreground)]">
                    Available for new projects
                  </p>
                </div>
              </div>
            </section>
          </MotionSection>
        </main>

        <footer className="pb-8 text-center text-xs text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} Clifford Degamo · Minimal systems, clear
          stories.
        </footer>
      </div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.6c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.53c0 5.42 3.3 6.61 6.44 7a3.38 3.38 0 0 0-.95 2.61V22" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg
      aria-hidden="true"
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16.5 9.4 12 12 7.5 9.4" />
      <path d="M3 9l9-5 9 5-9 5-9-5z" />
      <path d="M3 15l9 5 9-5" />
    </svg>
  );
}
