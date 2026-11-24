import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const steps = [
  {
    step: '01',
    title: 'Application',
    desc: 'Three short steps — your background, your track, your consent. Two minutes, no essays.',
  },
  {
    step: '02',
    title: 'Board Review',
    desc: 'The admissions board reviews every application personally, in the order it arrives.',
  },
  {
    step: '03',
    title: 'Decision',
    desc: 'Rolling decisions by email, within three weeks of your application.',
  },
  {
    step: '04',
    title: 'Enrollment',
    desc: 'Accept your seat, join orientation week, and meet your cohort.',
  },
];

const timeline = [
  { date: 'Nov 24, 2026', label: 'Applications open', active: true },
  { date: 'Jan 15, 2027', label: 'Priority deadline', active: false },
  { date: 'Feb 28, 2027', label: 'Final deadline', active: false },
  { date: 'Mar 2027', label: 'All decisions released', active: false },
  { date: 'Apr 5, 2027', label: 'Orientation week', active: false },
  { date: 'Apr 12, 2027', label: 'Classes begin', active: false },
];

const requirements = [
  'A genuine obsession with autonomous systems — shown, not told',
  'Basic programming literacy (any language) for the Engineering and Research tracks',
  'A project, artifact, or story that proves you build things',
  'English proficiency — all instruction is in English',
];

const faqs = [
  {
    q: 'Is this an accredited university?',
    a: 'S/Agentic University awards the S/AG Diploma, an industry credential backed by S/Agency. We are intentionally outside the traditional accreditation system — our credential is earned through deployed, verifiable work.',
  },
  {
    q: 'What does it cost?',
    a: 'Tuition for the Spring 2027 founding cohort is waived for accepted applicants. Founding students pay nothing — we are investing in the first generation of agent-native builders.',
  },
  {
    q: 'Is it remote?',
    a: 'Fully remote and asynchronous-first. Live sessions are scheduled across time zones, and all labs and coursework are accessible from anywhere.',
  },
  {
    q: 'How selective is it?',
    a: 'Each cohort is capped at 120 seats across all three tracks. We select for evidence of building and genuine intent — credentials are secondary.',
  },
  {
    q: 'When will I hear back?',
    a: 'Decisions are rolling. Most applicants hear within three weeks; priority-deadline applicants hear by early February 2027.',
  },
];

export default function Admissions() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <motion.h6
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm tracking-[0.3em] uppercase text-[#f5b041] mb-4"
        >
          Admissions · Spring 2027
        </motion.h6>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
        >
          Builders, <span className="text-[#f5b041]">Not Believers</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg max-w-2xl mx-auto"
        >
          A selective, human review process — designed to find the people who will actually
          ship the agentic future.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f5b041]/10 flex items-center justify-center text-xl font-serif font-bold text-[#f5b041]">
                {s.step}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-12">
          Key <span className="text-[#f5b041]">Dates</span>
        </h2>
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#f5b041]/20" />
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.date}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-5 pl-0"
              >
                <div
                  className={`w-[15px] h-[15px] rounded-full border-2 shrink-0 ${
                    t.active
                      ? 'bg-[#f5b041] border-[#f5b041]'
                      : 'bg-[#080828] border-[#f5b041]/40'
                  }`}
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="font-mono text-sm text-[#f5b041]">{t.date}</span>
                  <span className="text-white/75">{t.label}</span>
                  {t.active && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#f5b041]/15 text-[#f5b041] border border-[#f5b041]/30 w-fit">
                      Now
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="rounded-2xl border border-[#f5b041]/15 bg-[#0d0d38]/60 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">
            What we look for
          </h2>
          <ul className="space-y-4">
            {requirements.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#f5b041] mt-0.5 shrink-0" />
                <span className="text-white/70 leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6 mb-24">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-12">
          Questions, <span className="text-[#f5b041]">Answered</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              className="rounded-xl border border-[#f5b041]/15 bg-[#0d0d38]/60 px-6 data-[state=open]:border-[#f5b041]/35"
            >
              <AccordionTrigger className="text-white hover:text-[#f5b041] text-left py-5 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <CalendarDays className="w-8 h-8 text-[#f5b041] mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          Applications are open now
        </h2>
        <p className="text-white/60 mb-8">
          Priority deadline January 15, 2027. Seats are limited to 120.
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
