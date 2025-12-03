"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Process = {
  id: string;
  name: string;
  arrival: number;
  burst: number;
};

type ScheduleItem = Process & {
  start: number;
  finish: number;
  waiting: number;
  turnaround: number;
};

const defaultProcesses: Process[] = [
  { id: "p1", name: "P1", arrival: 0, burst: 3 },
  { id: "p2", name: "P2", arrival: 2, burst: 5 },
  { id: "p3", name: "P3", arrival: 4, burst: 2 },
];

const MotionCard = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="space-y-4 rounded-3xl border-2 border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[oklch(0.99_0.01_60)] to-[oklch(0.97_0.02_55)] p-6 shadow-lg relative overflow-hidden"
  >
    {children}
  </motion.section>
);

export default function FcfsPage() {
  const [processes, setProcesses] = useState<Process[]>(defaultProcesses);
  const [form, setForm] = useState({
    name: "",
    arrival: "",
    burst: "",
  });

  const schedule = useMemo(() => computeSchedule(processes), [processes]);
  const totalTime = schedule.at(-1)?.finish ?? 0;
  const averageWaiting =
    schedule.reduce((acc, item) => acc + item.waiting, 0) /
    (schedule.length || 1);
  const averageTurnaround =
    schedule.reduce((acc, item) => acc + item.turnaround, 0) /
    (schedule.length || 1);

  const handleAddProcess = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const arrival = Number(form.arrival);
    const burst = Number(form.burst);

    if (!form.name.trim() || Number.isNaN(arrival) || Number.isNaN(burst)) {
      return;
    }

    const nextProcess: Process = {
      id: crypto.randomUUID(),
      name: form.name.trim(),
      arrival: Math.max(0, arrival),
      burst: Math.max(1, burst),
    };

    setProcesses((prev) => [...prev, nextProcess]);
    setForm({ name: "", arrival: "", burst: "" });
  };

  const handleRemove = (id: string) => {
    setProcesses((prev) => prev.filter((proc) => proc.id !== id));
  };

  const handleReset = () => {
    setProcesses(defaultProcesses);
    setForm({ name: "", arrival: "", burst: "" });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-10 sm:px-10 lg:px-12">
        <motion.header
          className="flex flex-col gap-4 rounded-3xl border-2 border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[oklch(0.99_0.01_60)] to-[oklch(0.97_0.02_55)] p-6 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[oklch(0.60_0.20_55/0.1)] to-transparent rounded-full blur-3xl pointer-events-none"></div>
          <Link
            href="/"
            className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] transition hover:text-[var(--primary)]"
          >
            ← Back to home
          </Link>
          <div className="space-y-2 relative z-10">
            <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] font-semibold">
              Project · FCFS Simulator
            </p>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[oklch(0.60_0.20_55)] via-[oklch(0.70_0.18_45)] to-[oklch(0.75_0.20_70)] bg-clip-text text-transparent">
              First Come First Serve Visualizer
            </h1>
            <p className="max-w-3xl text-sm text-[var(--muted-foreground)] font-medium">
              Input any set of processes, watch FCFS scheduling compute start
              times, waiting periods, turnaround values, and a responsive Gantt
              chart. Built in Next.js with stateless calculations to keep focus
              on clarity.
            </p>
          </div>
        </motion.header>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionCard delay={0.05}>
            <header className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                  Process input
                </p>
                <h2 className="text-xl font-semibold tracking-tight">
                  Define your queue
                </h2>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] underline-offset-4 hover:underline"
              >
                Reset
              </button>
            </header>

            <form
              className="grid gap-4 rounded-2xl border-2 border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[oklch(0.99_0.01_60)] p-4 shadow-md"
              onSubmit={handleAddProcess}
            >
              <div className="grid gap-2 text-sm">
                <label className="text-[var(--muted-foreground)]">
                  Process name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                  placeholder="e.g. P4"
                  className="rounded-xl border-2 border-[var(--border)] bg-[oklch(0.98_0.01_60)] px-4 py-2 text-[var(--foreground)] outline-none transition-all focus:border-[oklch(0.60_0.20_55)] focus:ring-2 focus:ring-[oklch(0.60_0.20_55/0.3)]"
                />
              </div>
              <div className="grid gap-2 text-sm sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-[var(--muted-foreground)]">
                    Arrival time
                  </label>
                  <input
                    required
                    min={0}
                    type="number"
                    value={form.arrival}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, arrival: event.target.value }))
                    }
                    placeholder="0"
                    className="rounded-xl border-2 border-[var(--border)] bg-[oklch(0.98_0.01_60)] px-4 py-2 text-[var(--foreground)] outline-none transition-all focus:border-[oklch(0.60_0.20_55)] focus:ring-2 focus:ring-[oklch(0.60_0.20_55/0.3)]"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-[var(--muted-foreground)]">
                    Burst time
                  </label>
                  <input
                    required
                    min={1}
                    type="number"
                    value={form.burst}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, burst: event.target.value }))
                    }
                    placeholder="1"
                    className="rounded-xl border-2 border-[var(--border)] bg-[oklch(0.98_0.01_60)] px-4 py-2 text-[var(--foreground)] outline-none transition-all focus:border-[oklch(0.60_0.20_55)] focus:ring-2 focus:ring-[oklch(0.60_0.20_55/0.3)]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[oklch(0.60_0.20_55)] to-[oklch(0.70_0.18_45)] px-4 py-3 text-sm font-medium text-[var(--primary-foreground)] transition-all hover:opacity-90 hover:shadow-xl hover:scale-105"
              >
                Add process
              </button>
            </form>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                Current queue
              </p>
              <div className="flex flex-col gap-2">
                {processes.map((proc) => (
                  <div
                    key={proc.id}
                    className="flex items-center justify-between rounded-2xl border-2 border-dashed border-[var(--border)] bg-gradient-to-r from-[var(--card)] to-[oklch(0.99_0.01_60)] px-4 py-3 text-sm transition-all hover:border-[oklch(0.60_0.20_55)] hover:shadow-md hover:bg-gradient-to-r hover:from-[oklch(0.99_0.02_60)] hover:to-[oklch(0.98_0.03_55)]"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-[var(--muted-foreground)]">
                      <span className="rounded-full bg-[var(--muted)] px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                        {proc.name}
                      </span>
                      <span>Arrival · {proc.arrival}</span>
                      <span>Burst · {proc.burst}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemove(proc.id)}
                      className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] transition hover:text-[var(--destructive)]"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                {!processes.length && (
                  <p className="rounded-2xl border border-dashed border-[var(--border)] px-4 py-3 text-sm text-[var(--muted-foreground)]">
                    Add at least one process to see FCFS order.
                  </p>
                )}
              </div>
            </div>
          </MotionCard>

          <div className="space-y-6">
            <MotionCard delay={0.1}>
              <header>
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                  FCFS results
                </p>
                <h2 className="text-xl font-semibold tracking-tight">
                  Timeline & metrics
                </h2>
              </header>

              <div className="rounded-2xl border-2 border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[oklch(0.99_0.01_60)] p-4 shadow-md">
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                  Gantt chart
                </p>
                <div className="mt-4 flex gap-2 rounded-2xl bg-[var(--muted)] p-3">
                  {schedule.map((item) => (
                    <div
                      key={item.id}
                      className="flex min-w-[48px] flex-1 flex-col items-center justify-center rounded-xl bg-[var(--accent)] px-3 py-4 text-xs font-semibold text-[var(--accent-foreground)]"
                      style={{ flexGrow: item.burst }}
                    >
                      {item.name}
                      <span className="text-[10px] font-normal text-[var(--foreground)]">
                        {item.start}–{item.finish}
                      </span>
                    </div>
                  ))}
                  {!schedule.length && (
                    <div className="w-full rounded-xl border border-dashed border-[var(--border)] px-3 py-4 text-center text-xs text-[var(--muted-foreground)]">
                      Waiting for input
                    </div>
                  )}
                </div>
                {schedule.length ? (
                  <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wide text-[var(--muted-foreground)]">
                    {[0, ...schedule.map((item) => item.finish)].map((marker, idx) => (
                      <span key={`${marker}-${idx}`}>{marker}</span>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <Metric label="Total time" value={`${totalTime} units`} />
                <Metric
                  label="Avg waiting"
                  value={`${averageWaiting.toFixed(1)} units`}
                />
                <Metric
                  label="Avg turnaround"
                  value={`${averageTurnaround.toFixed(1)} units`}
                />
              </div>
            </MotionCard>

            <MotionCard delay={0.15}>
              <header>
                <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                  Detailed table
                </p>
                <h2 className="text-xl font-semibold tracking-tight">Schedule</h2>
              </header>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="uppercase text-[11px] tracking-wide text-[var(--muted-foreground)]">
                    <tr>
                      <th className="pb-3">Process</th>
                      <th className="pb-3">Arrival</th>
                      <th className="pb-3">Burst</th>
                      <th className="pb-3">Start</th>
                      <th className="pb-3">Finish</th>
                      <th className="pb-3">Waiting</th>
                      <th className="pb-3">Turnaround</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)] text-[var(--foreground)]">
                    {schedule.map((item) => (
                      <tr key={item.id}>
                        <td className="py-3 font-semibold">{item.name}</td>
                        <td className="py-3">{item.arrival}</td>
                        <td className="py-3">{item.burst}</td>
                        <td className="py-3">{item.start}</td>
                        <td className="py-3">{item.finish}</td>
                        <td className="py-3">{item.waiting}</td>
                        <td className="py-3">{item.turnaround}</td>
                      </tr>
                    ))}
                    {!schedule.length && (
                      <tr>
                        <td
                          colSpan={7}
                          className="py-4 text-center text-[var(--muted-foreground)]"
                        >
                          Add processes to populate the FCFS table.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </MotionCard>
          </div>
        </div>

        <footer className="pb-8 text-center text-xs text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} Clifford Degamo · FCFS experiments.
        </footer>
      </div>
    </div>
  );
}

function computeSchedule(processes: Process[]): ScheduleItem[] {
  const sorted = [...processes].sort((a, b) => {
    if (a.arrival === b.arrival) return a.name.localeCompare(b.name);
    return a.arrival - b.arrival;
  });

  let clock = 0;

  return sorted.map((proc) => {
    const start = Math.max(proc.arrival, clock);
    const finish = start + proc.burst;
    const waiting = start - proc.arrival;
    const turnaround = finish - proc.arrival;
    clock = finish;

    return { ...proc, start, finish, waiting, turnaround };
  });
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-[var(--border)] p-4 text-sm">
      <p className="text-[10px] uppercase tracking-wide text-[var(--muted-foreground)]">
        {label}
      </p>
      <p className="text-lg font-semibold tracking-tight">{value}</p>
    </div>
  );
}

