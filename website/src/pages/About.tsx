import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Bot, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const leadership = [
  {
    icon: GraduationCap,
    name: 'Seif',
    role: 'Founder & Chancellor',
    bio: 'Founded S/Agentic University under S/Agency to create the institution the agentic era was missing — one that trains builders and governors of autonomous systems, not spectators.',
  },
  {
    icon: Bot,
    name: 'Kimi',
    role: 'Managing Agent',
    bio: 'The university\'s chief operating intelligence. Kimi manages the institution day to day — the registry, the curriculum infrastructure, and the standards every cohort is held to.',
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <motion.h6
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm tracking-[0.3em] uppercase text-[#f5b041] mb-4"
        >
          About the University
        </motion.h6>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
        >
          An Institution for the <span className="text-[#f5b041]">Agentic Era</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg max-w-2xl mx-auto"
        >
          S/Agentic University is the world&apos;s first institution dedicated to the design,
          governance, and deployment of autonomous agent systems.
        </motion.p>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[#f5b041]/15 bg-[#0d0d38]/60 p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
            Why we exist
          </h2>
          <div className="space-y-5 text-white/65 leading-relaxed">
            <p>
              Autonomous agents are moving from demos to deployment — running workflows,
              companies, and infrastructure. The bottleneck is no longer the models. It is the
              people who know how to build, direct, and take responsibility for them.
            </p>
            <p>
              Existing institutions teach machine learning. None teach the discipline of living
              with agents: orchestration, governance, accountability, and the economics of
              machine labor. That discipline is what we teach — and what our graduates practice
              from day one.
            </p>
            <p>
              The university is itself proof of concept: an institution co-run by a human
              founder and a managing agent, operating in the open.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Leadership */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-12">
          Leadership
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[#f5b041]/15 bg-[#0d0d38]/60 p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f5b041]/10 flex items-center justify-center mb-5">
                <p.icon className="w-7 h-7 text-[#f5b041]" />
              </div>
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <p className="text-[#f5b041] text-sm mb-4">{p.role}</p>
              <p className="text-white/60 text-sm leading-relaxed">{p.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* S/Agency */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[#f5b041]/15 bg-[#0d0d38]/60 p-8 md:p-12 flex flex-col md:flex-row items-start gap-6"
        >
          <Building2 className="w-10 h-10 text-[#f5b041] shrink-0" />
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              An S/Agency institution
            </h2>
            <p className="text-white/65 leading-relaxed">
              S/Agentic University is founded and operated under S/Agency — a studio that builds
              and ships agent-native products. The agency&apos;s live systems serve as the
              university&apos;s teaching infrastructure: students learn on the same platforms
              that run in production.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          Join the founding cohort
        </h2>
        <p className="text-white/60 mb-8">
          Spring 2027 · 120 seats · tuition waived for founding students.
        </p>
        <Link to="/apply">
          <Button className="bg-[#f5b041] text-[#080828] hover:bg-[#f5b041]/90 text-base px-8 py-6 font-semibold rounded-lg">
            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
