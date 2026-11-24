import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  ShieldCheck,
  Network,
  Scale,
  BrainCircuit,
  GaugeCircle,
  Landmark,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const labs = [
  {
    icon: Bot,
    name: 'Autonomy Lab',
    focus: 'Memory, planning, and self-correction in long-horizon agents.',
  },
  {
    icon: Network,
    name: 'Swarm Systems Lab',
    focus: 'Emergent collaboration and division of labor in multi-agent swarms.',
  },
  {
    icon: ShieldCheck,
    name: 'Alignment Lab',
    focus: 'Keeping autonomous systems faithful to human intent under pressure.',
  },
  {
    icon: Scale,
    name: 'Governance Lab',
    focus: 'Accountability, audit trails, and law for agent-run organizations.',
  },
  {
    icon: BrainCircuit,
    name: 'Cognition Lab',
    focus: 'Reasoning architectures, tool invention, and self-improvement.',
  },
  {
    icon: GaugeCircle,
    name: 'Evaluation Lab',
    focus: 'Benchmarks and red-team methods that actually predict deployment behavior.',
  },
  {
    icon: Landmark,
    name: 'Agent Economics Lab',
    focus: 'Incentive design, pricing agent labor, and sustainable agent economies.',
  },
  {
    icon: Sparkles,
    name: 'Interfaces Lab',
    focus: 'How humans supervise, interrupt, and trust autonomous systems.',
  },
];

export default function Research() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <motion.h6
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm tracking-[0.3em] uppercase text-[#f5b041] mb-4"
        >
          Research
        </motion.h6>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
        >
          Eight Labs at the <span className="text-[#f5b041]">Frontier</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg max-w-2xl mx-auto"
        >
          Research at S/Agentic University is inseparable from deployment. Every lab ships —
          papers, systems, and working prototypes.
        </motion.p>
      </div>

      {/* Labs grid */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {labs.map((lab, i) => (
            <motion.div
              key={lab.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.07 }}
              className="group rounded-2xl border border-[#f5b041]/10 bg-[#0d0d38]/60 p-6 hover:border-[#f5b041]/30 transition-all duration-300"
            >
              <lab.icon className="w-7 h-7 text-[#f5b041] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{lab.name}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{lab.focus}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Research model */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="rounded-2xl border border-[#f5b041]/15 bg-[#0d0d38]/60 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
            The S/ Research Model
          </h2>
          <div className="space-y-5 text-white/65 leading-relaxed">
            <p>
              <span className="text-[#f5b041] font-semibold">Open by default.</span> Foundational
              results are published; deployment-critical safety work is shared with the community
              before it ships.
            </p>
            <p>
              <span className="text-[#f5b041] font-semibold">Embedded students.</span> Research
              Track students join a lab from week one and co-author real work — no shadowing, no
              busywork.
            </p>
            <p>
              <span className="text-[#f5b041] font-semibold">Production pressure.</span> Every lab
              maintains at least one system in live operation, so theory answers to reality.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          Research with us
        </h2>
        <p className="text-white/60 mb-8">
          The Research Track admits 20 students per cohort, embedded directly in the labs.
        </p>
        <Link to="/apply">
          <Button className="bg-[#f5b041] text-[#080828] hover:bg-[#f5b041]/90 text-base px-8 py-6 font-semibold rounded-lg">
            Apply for the Research Track <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
