import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Crown, FlaskConical, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tracks = [
  {
    icon: Cpu,
    code: 'AE',
    title: 'Agent Engineering',
    duration: '12 months',
    format: 'Full-time, project-based',
    desc: 'The builder\'s track. You will design, orchestrate, and ship production agent systems — from memory and planning architectures to tool-use, evaluation, and deployment at scale.',
    pillars: ['Agent Architecture', 'Multi-Agent Orchestration', 'Agentic Infrastructure'],
    outcome: 'Graduate with a deployed agent platform and a public engineering portfolio.',
  },
  {
    icon: Crown,
    title: 'Agent Leadership',
    code: 'AL',
    duration: '9 months',
    format: 'Part-time, case-based',
    desc: 'The commander\'s track. Learn to govern fleets of autonomous agents — accountability frameworks, escalation gates, audit trails, and the economics of agent labor.',
    pillars: ['Policy & Governance', 'Economic Design', 'Alignment & Safety'],
    outcome: 'Graduate ready to run an agent-native organization end to end.',
  },
  {
    icon: FlaskConical,
    title: 'Research Track',
    code: 'RT',
    duration: '18 months',
    format: 'Full-time, lab-embedded',
    desc: 'The frontier track. Work inside one of our eight labs on open problems in multi-agent theory, emergent collaboration, and alignment of autonomous systems.',
    pillars: ['Alignment & Safety', 'Multi-Agent Orchestration', 'Agent Architecture'],
    outcome: 'Graduate with publishable work and a lab placement offer.',
  },
];

const facts = [
  { icon: Clock, label: 'Rolling decisions', value: 'Within 3 weeks' },
  { icon: Users, label: 'Cohort size', value: '120 seats' },
  { icon: Award, label: 'Credential', value: 'S/AG Diploma' },
];

export default function Programs() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <motion.h6
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm tracking-[0.3em] uppercase text-[#f5b041] mb-4"
        >
          Academic Programs
        </motion.h6>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
        >
          Three Tracks. <span className="text-[#f5b041]">One Discipline.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg max-w-2xl mx-auto"
        >
          Every track is built on the six pillars of agentic mastery — and ends with real,
          deployed work, not a paper exercise.
        </motion.p>
      </div>

      {/* Facts bar */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-[#f5b041]/15 bg-[#0d0d38]/60 p-6 text-center"
            >
              <f.icon className="w-5 h-5 text-[#f5b041] mx-auto mb-3" />
              <p className="text-white font-semibold">{f.value}</p>
              <p className="text-white/45 text-xs uppercase tracking-wider mt-1">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tracks */}
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {tracks.map((t, i) => (
          <motion.div
            key={t.code}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
            className="rounded-2xl border border-[#f5b041]/15 bg-[#0d0d38]/60 p-8 md:p-12 grid lg:grid-cols-[auto_1fr_auto] gap-8 items-start"
          >
            <div className="flex lg:flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#f5b041]/10 flex items-center justify-center">
                <t.icon className="w-8 h-8 text-[#f5b041]" />
              </div>
              <span className="font-mono text-[#f5b041]/50 text-sm">{t.code}</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">
                {t.title}
              </h2>
              <p className="text-[#f5b041]/80 text-sm mb-4">
                {t.duration} · {t.format}
              </p>
              <p className="text-white/65 leading-relaxed mb-6 max-w-2xl">{t.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {t.pillars.map((p) => (
                  <span
                    key={p}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#f5b041]/25 text-[#f5b041]/90"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <p className="text-white/50 text-sm italic">{t.outcome}</p>
            </div>
            <Link to="/apply" className="lg:self-center">
              <Button className="bg-[#f5b041] text-[#080828] hover:bg-[#f5b041]/90 px-6 py-5 font-semibold rounded-lg whitespace-nowrap">
                Apply <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-24 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          Not sure which track fits?
        </h2>
        <p className="text-white/60 mb-8">
          Apply as &ldquo;Undecided&rdquo; — orientation week is designed to place you where
          you&apos;ll do your best work.
        </p>
        <Link to="/apply">
          <Button className="bg-[#f5b041] text-[#080828] hover:bg-[#f5b041]/90 text-base px-8 py-6 font-semibold rounded-lg">
            Start Your Application <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
