import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Wifi, Coffee, Dumbbell } from 'lucide-react';
import ParticleNetwork from '@/components/ParticleNetwork';

gsap.registerPlugin(ScrollTrigger);

export default function Campus() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      /* header */
      gsap.fromTo(
        '.campus-header-h6',
        { y: 20, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
      );
      gsap.fromTo(
        '.campus-header-h1',
        { y: 30, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out', delay: 0.4 }
      );
      gsap.fromTo(
        '.campus-header-body',
        { y: 20, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.6 }
      );

      /* stats */
      const stats = containerRef.current?.querySelectorAll('.stat-card');
      if (stats) {
        gsap.fromTo(
          stats,
          { y: 40, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.stats-section',
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      /* facilities */
      const facilities = containerRef.current?.querySelectorAll('.facility-card');
      if (facilities) {
        gsap.fromTo(
          facilities,
          { y: 50, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.facilities-section',
              start: 'top 75%',
              once: true,
            },
          }
        );
      }

      /* student life */
      const life = containerRef.current?.querySelectorAll('.life-card');
      if (life) {
        gsap.fromTo(
          life,
          { y: 40, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.student-life-section',
              start: 'top 75%',
              once: true,
            },
          }
        );
      }

      /* events */
      const events = containerRef.current?.querySelectorAll('.event-card');
      if (events) {
        gsap.fromTo(
          events,
          { y: 30, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.student-life-section',
              start: 'top 70%',
              once: true,
            },
          }
        );
      }

      /* visit CTA */
      const visit = containerRef.current?.querySelectorAll('.visit-animate');
      if (visit) {
        gsap.fromTo(
          visit,
          { y: 30, opacity: 0.3 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.visit-section',
              start: 'top 75%',
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-[#080828] text-[#f9f6f0]">
      {/* Hero */}
      <section ref={headerRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <ParticleNetwork className="absolute inset-0 z-0 opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h6 className="campus-header-h6 text-sm tracking-[0.3em] uppercase text-[#f5b041] mb-6">
            Campus
          </h6>
          <h1 className="campus-header-h1 text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            A Digital Campus for the <span className="text-[#f5b041]">Agentic Age</span>
          </h1>
          <p className="campus-header-body text-lg text-white/70 max-w-2xl mx-auto">
            Purpose-built spaces for learning, research, and collaboration in a fully digital environment.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Classrooms', value: '24' },
              { label: 'Research Labs', value: '8' },
              { label: 'Study Pods', value: '120' },
              { label: 'Server Capacity', value: '10K+' },
            ].map((s) => (
              <div key={s.label} className="stat-card text-center p-6 rounded-xl bg-[#0a0a1a]/60 border border-[#f5b041]/10">
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#f5b041] mb-2">{s.value}</div>
                <div className="text-white/60 text-sm tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="facilities-section py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Campus <span className="text-[#f5b041]">Facilities</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Every space is designed for deep work and meaningful collaboration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Spatial Classrooms', desc: 'Immersive audio and shared whiteboards for interactive lectures.' },
              { icon: Wifi, title: 'Research Clusters', desc: 'Dedicated pods with 24/7 compute access and experiment tracking.' },
              { icon: Coffee, title: 'Collaboration Lounges', desc: 'Informal spaces for brainstorming and peer learning.' },
              { icon: Dumbbell, title: 'Agent Playground', desc: 'Sandboxed environments for prototyping and testing agent designs.' },
              { icon: MapPin, title: 'Conference Halls', desc: 'Full-featured venues for seminars, hackathons, and symposia.' },
              { icon: Wifi, title: 'Compute Farms', desc: 'Subsidized GPU clusters with priority scheduling for research projects.' },
            ].map((f) => (
              <div
                key={f.title}
                className="facility-card p-8 rounded-2xl bg-[#0a0a1a]/50 border border-[#f5b041]/10 hover:border-[#f5b041]/30 transition-all duration-300"
              >
                <f.icon className="w-10 h-10 text-[#f5b041] mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-white/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="student-life-section py-28 bg-[#0a0a1a]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Student <span className="text-[#f5b041]">Life</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A vibrant community of builders, researchers, and thinkers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Agent Hackathons', desc: 'Monthly 48-hour builds with real-world challenges and prizes.' },
              { title: 'Research Seminars', desc: 'Weekly talks from faculty and visiting researchers.' },
              { title: 'Peer Study Groups', desc: 'Self-organized cohorts for deep dives into specific topics.' },
            ].map((item) => (
              <div
                key={item.title}
                className="life-card p-8 rounded-2xl bg-[#0a0a1a]/50 border border-[#f5b041]/10 hover:border-[#f5b041]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Spring Symposium', date: 'March 2027', desc: 'Annual gathering of the agentic research community.' },
              { title: 'Summer Internship Fair', date: 'June 2027', desc: 'Connect with labs and companies hiring agent engineers.' },
            ].map((e) => (
              <div
                key={e.title}
                className="event-card p-6 rounded-xl bg-[#0a0a1a]/50 border border-[#f5b041]/10"
              >
                <div className="text-[#f5b041] text-sm font-medium mb-2">{e.date}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{e.title}</h3>
                <p className="text-white/60 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="visit-section py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="visit-animate p-12 md:p-16 rounded-3xl bg-[#0a0a1a]/80 border border-[#f5b041]/20">
            <MapPin className="visit-animate w-16 h-16 text-[#f5b041] mx-auto mb-6" />
            <h2 className="visit-animate text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Experience the <span className="text-[#f5b041]">Campus</span>
            </h2>
            <p className="visit-animate text-white/60 text-lg max-w-xl mx-auto mb-8">
              Schedule a virtual tour and see what makes our digital campus unique.
            </p>
            <div className="visit-animate flex flex-col sm:flex-row gap-4 justify-center">
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
                  Admissions Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
