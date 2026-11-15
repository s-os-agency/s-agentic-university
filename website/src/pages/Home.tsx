import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Users,
  FlaskConical,
  Award,
  Globe,
  Cpu,
  GraduationCap,
  ChevronRight,
  ArrowRight,
  Star,
  Quote,
} from 'lucide-react';
import ParticleNetwork from '@/components/ParticleNetwork';
import CountUp from '@/components/CountUp';

gsap.registerPlugin(ScrollTrigger);

/* ─── Hero Section ─── */
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.hero-h6',
        { y: 25, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
      );
      gsap.fromTo(
        '.hero-h1',
        { y: 30, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out', delay: 0.5 }
      );
      gsap.fromTo(
        '.hero-body',
        { y: 20, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.8 }
      );
      gsap.fromTo(
        '.hero-cta',
        { y: 20, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 1.1 }
      );
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleNetwork className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h6
          className="hero-h6 text-sm tracking-[0.3em] uppercase text-[#f5b041] mb-6"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          S/Agentic University
        </motion.h6>
        <motion.h1
          className="hero-h1 text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Forge the Future of{' '}
          <span className="text-[#f5b041]">Intelligence</span>
        </motion.h1>
        <motion.p
          className="hero-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          The world&apos;s first institution dedicated to the design, governance, and
          deployment of autonomous agent systems.
        </motion.p>
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/programs">
            <Button className="bg-[#f5b041] text-[#080828] hover:bg-[#f5b041]/90 text-base px-8 py-6 font-semibold rounded-lg">
              Explore Programs <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link to="/apply">
            <Button
              variant="outline"
              className="border-[#f5b041]/30 text-[#f5b041] hover:bg-[#f5b041]/10 text-base px-8 py-6 font-semibold rounded-lg"
            >
              Apply for Spring 2027
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Section ─── */
function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll('.stat-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 bg-[#080828]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Programs', value: 6, suffix: '+' },
            { label: 'Faculty', value: 24, suffix: '+' },
            { label: 'Research Labs', value: 8, suffix: '' },
            { label: 'Cohort Size', value: 120, suffix: '' },
          ].map((stat) => (
            <div key={stat.label} className="stat-card text-center p-6 rounded-xl bg-[#0a0a1a]/60 border border-[#f5b041]/10">
              <div className="text-4xl md:text-5xl font-serif font-bold text-[#f5b041] mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/60 text-sm tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Ecosystem Section ─── */
function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll('.eco-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-28 bg-[#080828]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            A Complete <span className="text-[#f5b041]">Ecosystem</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From foundational theory to production deployment, every layer of agentic intelligence is covered.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: 'Rigorous Academics',
              desc: 'Evidence-based curricula grounded in peer-reviewed research and real-world case studies.',
            },
            {
              icon: FlaskConical,
              title: 'Research Labs',
              desc: 'Dedicated laboratories for multi-agent coordination, alignment, and safety research.',
            },
            {
              icon: Users,
              title: 'Industry Partnerships',
              desc: 'Direct pipelines to leading AI labs, consultancies, and enterprise deployment teams.',
            },
            {
              icon: Award,
              title: 'Certification',
              desc: 'Industry-recognized credentials that verify practical agent engineering competence.',
            },
            {
              icon: Globe,
              title: 'Global Cohort',
              desc: 'Diverse, passported learners from 30+ countries building the agentic future together.',
            },
            {
              icon: Cpu,
              title: 'Compute Access',
              desc: 'Subsidized GPU clusters and API credits for every enrolled student.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="eco-card group p-8 rounded-2xl bg-[#0a0a1a]/50 border border-[#f5b041]/10 hover:border-[#f5b041]/30 transition-all duration-300"
            >
              <item.icon className="w-10 h-10 text-[#f5b041] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Programs Section ─── */
function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll('.program-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const programs = [
    {
      code: '01',
      title: 'Agent Architecture',
      desc: 'Design robust, scalable agent systems with memory, planning, and tool-use capabilities.',
    },
    {
      code: '02',
      title: 'Multi-Agent Orchestration',
      desc: 'Build coordinated agent swarms that solve complex problems through emergent collaboration.',
    },
    {
      code: '03',
      title: 'Alignment & Safety',
      desc: 'Ensure agents behave according to human intent through advanced alignment techniques.',
    },
    {
      code: '04',
      title: 'Agentic Infrastructure',
      desc: 'Deploy production-grade agent platforms with monitoring, logging, and fault tolerance.',
    },
    {
      code: '05',
      title: 'Economic Design',
      desc: 'Model incentive structures and token economies for sustainable agent ecosystems.',
    },
    {
      code: '06',
      title: 'Policy & Governance',
      desc: 'Navigate regulatory frameworks and build governance systems for autonomous agents.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-[#080828]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Six Pillars of <span className="text-[#f5b041]">Mastery</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Each program is a deep-dive into a critical domain of agentic systems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.code}
              className="program-card group p-8 rounded-2xl bg-[#0a0a1a]/50 border border-[#f5b041]/10 hover:border-[#f5b041]/30 transition-all duration-300"
            >
              <div className="text-[#f5b041]/40 text-5xl font-serif font-bold mb-4">{p.code}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
              <p className="text-white/60 leading-relaxed mb-6">{p.desc}</p>
              <Link
                to="/programs"
                className="inline-flex items-center text-[#f5b041] text-sm font-medium group-hover:gap-2 transition-all"
              >
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Faculty Section ─── */
function FacultySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll('.faculty-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-28 bg-[#080828]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            World-Class <span className="text-[#f5b041]">Faculty</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Researchers and practitioners who have shaped the field of agentic AI.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Dr. Elena Vasquez', role: 'Dean of Agent Architecture', focus: 'Autonomous system design' },
            { name: 'Prof. Marcus Chen', role: 'Chair of Multi-Agent Systems', focus: 'Swarm intelligence' },
            { name: 'Dr. Aisha Patel', role: 'Director of Alignment Lab', focus: 'AI safety & value alignment' },
            { name: 'Prof. James Okafor', role: 'Head of Infrastructure', focus: 'Production deployments' },
            { name: 'Dr. Sofia Lindberg', role: 'Lead Economist', focus: 'Agent economies' },
            { name: 'Prof. Kenji Tanaka', role: 'Policy Advisor', focus: 'Regulatory frameworks' },
          ].map((f) => (
            <div
              key={f.name}
              className="faculty-card group p-6 rounded-2xl bg-[#0a0a1a]/50 border border-[#f5b041]/10 hover:border-[#f5b041]/30 transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#f5b041]/10 flex items-center justify-center text-2xl font-serif text-[#f5b041]">
                {f.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{f.name}</h3>
              <p className="text-[#f5b041] text-sm mb-2">{f.role}</p>
              <p className="text-white/50 text-sm">{f.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Research Section ─── */
function ResearchSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = sectionRef.current?.querySelectorAll('.research-item');
      if (items) {
        gsap.fromTo(
          items,
          { y: 40, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-28 bg-[#080828]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Frontier <span className="text-[#f5b041]">Research</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Pushing the boundaries of what agentic systems can achieve.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Scalable Agent Coordination',
              desc: 'Novel consensus protocols for 10,000+ agent swarms with Byzantine fault tolerance.',
              metric: '10K+',
              metricLabel: 'Agents tested',
            },
            {
              title: 'Constitutional Alignment',
              desc: 'Self-correcting value frameworks that adapt to cultural contexts without retraining.',
              metric: '98.7%',
              metricLabel: 'Alignment score',
            },
            {
              title: 'Tool-Augmented Reasoning',
              desc: 'Dynamic tool selection and composition for open-ended problem solving.',
              metric: '47%',
              metricLabel: 'Accuracy gain',
            },
            {
              title: 'Agent Memory Architectures',
              desc: 'Long-horizon episodic memory with retrieval-augmented generation.',
              metric: '1M+',
              metricLabel: 'Context tokens',
            },
          ].map((r) => (
            <div
              key={r.title}
              className="research-item p-8 rounded-2xl bg-[#0a0a1a]/50 border border-[#f5b041]/10 hover:border-[#f5b041]/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{r.title}</h3>
                <div className="text-right">
                  <div className="text-2xl font-serif font-bold text-[#f5b041]">{r.metric}</div>
                  <div className="text-white/40 text-xs">{r.metricLabel}</div>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Campus Section ─── */
function CampusSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll('.campus-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-28 bg-[#080828]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            The <span className="text-[#f5b041]">Campus</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A digital-native environment designed for deep focus and collaborative discovery.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Immersive Classrooms',
              desc: 'Spatial audio, shared whiteboards, and real-time code collaboration.',
            },
            {
              title: 'Research Clusters',
              desc: 'Dedicated pods for each lab with 24/7 compute access and experiment tracking.',
            },
            {
              title: 'Agent Playground',
              desc: 'Sandboxed environments to prototype, test, and iterate on agent designs.',
            },
          ].map((c) => (
            <div
              key={c.title}
              className="campus-card p-8 rounded-2xl bg-[#0a0a1a]/50 border border-[#f5b041]/10 hover:border-[#f5b041]/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{c.title}</h3>
              <p className="text-white/60 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Admissions Section ─── */
function AdmissionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const els = sectionRef.current?.querySelectorAll('.admissions-animate');
      if (els) {
        gsap.fromTo(
          els,
          { y: 30, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const steps = [
    { step: '01', title: 'Interest Form', desc: 'Submit your expression of interest with background and goals.' },
    { step: '02', title: 'Portfolio Review', desc: 'Share prior work in AI, systems, or agent-related projects.' },
    { step: '03', title: 'Technical Interview', desc: 'A conversation about your approach to building agentic systems.' },
    { step: '04', title: 'Enrollment', desc: 'Receive your admission decision and secure your seat.' },
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-[#080828]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 admissions-animate">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Admissions <span className="text-[#f5b041]">Journey</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A selective process designed to find builders, not just believers.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="admissions-animate text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f5b041]/10 flex items-center justify-center text-xl font-serif font-bold text-[#f5b041]">
                {s.step}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 admissions-animate">
          <Link to="/apply">
            <Button className="bg-[#f5b041] text-[#080828] hover:bg-[#f5b041]/90 text-base px-8 py-6 font-semibold rounded-lg">
              Start Your Application <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const testimonials = [
    {
      quote:
        'The agent architecture program completely transformed how I think about building autonomous systems. The faculty are world-class.',
      name: 'Sarah K.',
      role: 'Senior ML Engineer, TechCorp',
    },
    {
      quote:
        'I came for the curriculum, stayed for the research community. The multi-agent lab is unlike anything else in academia or industry.',
      name: 'David L.',
      role: 'Research Scientist, AI Lab',
    },
    {
      quote:
        'The alignment and safety track gave me the rigorous foundation I needed to work on production agent systems responsibly.',
      name: 'Maria R.',
      role: 'Agent Safety Lead, ScaleAI',
    },
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-[#080828]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Voices from the <span className="text-[#f5b041]">Cohort</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            What our learners say about the Agentic University experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card p-8 rounded-2xl bg-[#0a0a1a]/50 border border-[#f5b041]/10 hover:border-[#f5b041]/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#f5b041]/30 mb-4" />
              <p className="text-white/70 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5b041]/10 flex items-center justify-center text-sm font-serif text-[#f5b041]">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const els = sectionRef.current?.querySelectorAll('.cta-animate');
      if (els) {
        gsap.fromTo(
          els,
          { y: 30, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-28 bg-[#080828]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="cta-animate p-12 md:p-16 rounded-3xl bg-[#0a0a1a]/80 border border-[#f5b041]/20">
          <GraduationCap className="w-16 h-16 text-[#f5b041] mx-auto mb-6" />
          <h2 className="cta-animate text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Ready to Build the <span className="text-[#f5b041]">Future?</span>
          </h2>
          <p className="cta-animate text-white/60 text-lg max-w-xl mx-auto mb-8">
            Applications for the Spring 2027 cohort are now open. Join the world&apos;s first
            institution dedicated to agentic intelligence.
          </p>
          <div className="cta-animate flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button className="bg-[#f5b041] text-[#080828] hover:bg-[#f5b041]/90 text-base px-8 py-6 font-semibold rounded-lg">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/admissions">
              <Button
                variant="outline"
                className="border-[#f5b041]/30 text-[#f5b041] hover:bg-[#f5b041]/10 text-base px-8 py-6 font-semibold rounded-lg"
              >
                Learn About Admissions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <div className="bg-[#080828] text-[#f9f6f0]">
      <HeroSection />
      <StatsSection />
      <EcosystemSection />
      <ProgramsSection />
      <FacultySection />
      <ResearchSection />
      <CampusSection />
      <AdmissionsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
