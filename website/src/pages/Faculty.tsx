import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import ParticleNetwork from '@/components/ParticleNetwork';

gsap.registerPlugin(ScrollTrigger);

export default function Faculty() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const fellowsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      /* ---- Hero entrance ---- */
      const heroEls = heroRef.current?.querySelectorAll('.hero-animate');
      if (heroEls) {
        gsap.fromTo(
          heroEls,
          { y: 25, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            delay: 0.3,
          }
        );
      }

      /* ---- Faculty cards ---- */
      const cards = gridRef.current?.querySelectorAll('.faculty-card');
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
              trigger: gridRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      /* ---- Fellows cards ---- */
      const fellows = fellowsRef.current?.querySelectorAll('.fellow-card');
      if (fellows) {
        gsap.fromTo(
          fellows,
          { y: 40, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: fellowsRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      /* ---- CTA ---- */
      const ctaEls = ctaRef.current?.querySelectorAll('.cta-animate');
      if (ctaEls) {
        gsap.fromTo(
          ctaEls,
          { y: 30, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    },
    { scope: pageRef }
  );

  const faculty = [
    {
      name: 'Dr. Elena Vasquez',
      role: 'Dean of Agent Architecture',
      focus: 'Autonomous system design',
      bio: 'Former Principal Researcher at DeepMind. Led the team that developed the first general-purpose agent coordination protocol.',
      courses: ['AGN-101', 'AGN-401'],
    },
    {
      name: 'Prof. Marcus Chen',
      role: 'Chair of Multi-Agent Systems',
      focus: 'Swarm intelligence',
      bio: 'Pioneered consensus algorithms for large-scale agent networks. Published 40+ papers on emergent coordination.',
      courses: ['MAS-201', 'MAS-401'],
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Director of Alignment Lab',
      focus: 'AI safety & value alignment',
      bio: 'Developed the Constitutional Self-Correction framework. Advisor to three national AI safety boards.',
      courses: ['ALN-301', 'ALN-501'],
    },
    {
      name: 'Prof. James Okafor',
      role: 'Head of Infrastructure',
      focus: 'Production deployments',
      bio: 'Built agent platforms serving 50M+ users. Expert in fault-tolerant distributed systems.',
      courses: ['INF-201', 'INF-401'],
    },
    {
      name: 'Dr. Sofia Lindberg',
      role: 'Lead Economist',
      focus: 'Agent economies',
      bio: 'Designed incentive mechanisms for decentralized AI marketplaces. Former Chief Economist at AgentX.',
      courses: ['ECO-301', 'ECO-501'],
    },
    {
      name: 'Prof. Kenji Tanaka',
      role: 'Policy Advisor',
      focus: 'Regulatory frameworks',
      bio: 'Advised the EU AI Act drafting committee. Expert in liability and accountability for autonomous systems.',
      courses: ['POL-301', 'POL-501'],
    },
  ];

  const fellows = [
    { name: 'Dr. Priya Sharma', focus: 'Tool use & reasoning' },
    { name: 'Dr. Lucas Mueller', focus: 'Memory architectures' },
    { name: 'Dr. Yuki Nakamura', focus: 'Human-agent interaction' },
    { name: 'Dr. Amara Osei', focus: 'Agent evaluation' },
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-[#080828] text-[#f9f6f0]">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <ParticleNetwork className="absolute inset-0 z-0 opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h6 className="hero-animate text-sm tracking-[0.3em] uppercase text-[#f5b041] mb-6">
            Faculty & Research
          </h6>
          <h1 className="hero-animate text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Minds Shaping the <span className="text-[#f5b041]">Agentic Revolution</span>
          </h1>
          <p className="hero-animate text-lg text-white/70 max-w-2xl mx-auto">
            World-renowned researchers and practitioners dedicated to advancing the science and engineering of autonomous agents.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Core <span className="text-[#f5b041]">Faculty</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Leading researchers who define the frontier of agentic systems.
            </p>
          </div>
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((f) => (
              <div
                key={f.name}
                className="faculty-card group p-8 rounded-2xl bg-[#0a0a1a] border border-[#f5b041]/10 hover:border-[#f5b041]/30 transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-[#f5b041]/10 flex items-center justify-center text-xl font-serif text-[#f5b041]">
                  {f.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{f.name}</h3>
                <p className="text-[#f5b041] text-sm mb-3">{f.role}</p>
                <p className="text-white/50 text-sm mb-4">{f.focus}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{f.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {f.courses.map((c) => (
                    <span key={c} className="px-3 py-1 text-xs rounded-full bg-[#f5b041]/10 text-[#f5b041]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Fellows */}
      <section className="py-28 bg-[#0a0a1a]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Research <span className="text-[#f5b041]">Fellows</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Emerging leaders advancing specialized areas of agentic research.
            </p>
          </div>
          <div ref={fellowsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fellows.map((f) => (
              <div
                key={f.name}
                className="fellow-card p-6 rounded-xl bg-[#0a0a1a] border border-[#f5b041]/10 hover:border-[#f5b041]/30 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#f5b041]/10 flex items-center justify-center text-lg font-serif text-[#f5b041]">
                  {f.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{f.name}</h3>
                <p className="text-white/50 text-sm">{f.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="cta-animate p-12 md:p-16 rounded-3xl bg-[#0a0a1a]/80 border border-[#f5b041]/20">
            <BookOpen className="cta-animate w-16 h-16 text-[#f5b041] mx-auto mb-6" />
            <h2 className="cta-animate text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Learn from the <span className="text-[#f5b041]">Best</span>
            </h2>
            <p className="cta-animate text-white/60 text-lg max-w-xl mx-auto mb-8">
              Apply to study under faculty who are actively shaping the future of agentic intelligence.
            </p>
            <div className="cta-animate flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button className="bg-[#f5b041] text-[#080828] hover:bg-[#f5b041]/90 text-base px-8 py-6 font-semibold rounded-lg">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button
                  variant="outline"
                  className="border-[#f5b041]/30 text-[#f5b041] hover:bg-[#f5b041]/10 text-base px-8 py-6 font-semibold rounded-lg"
                >
                  Browse Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
