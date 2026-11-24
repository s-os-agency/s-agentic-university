import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const columns = [
  {
    title: 'Study',
    links: [
      { label: 'Programs', path: '/programs' },
      { label: 'Faculty', path: '/faculty' },
      { label: 'Research', path: '/research' },
      { label: 'Campus', path: '/campus' },
    ],
  },
  {
    title: 'Join',
    links: [
      { label: 'Admissions', path: '/admissions' },
      { label: 'Apply for Spring 2027', path: '/apply' },
      { label: 'About the University', path: '/about' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#f5b041]/10 bg-[#060620]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-14 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link to="/" className="flex flex-col leading-none mb-5 w-fit">
            <span className="font-sans font-bold text-[#f9f6f0] tracking-[0.1em] text-base">
              AGENTIC
            </span>
            <span className="font-sans font-medium text-[rgba(249,246,240,0.5)] tracking-[0.14em] text-[0.6rem]">
              UNIVERSITY
            </span>
          </Link>
          <p className="text-sm text-[rgba(249,246,240,0.55)] max-w-xs leading-relaxed">
            The world&apos;s first institution dedicated to the design, governance, and
            deployment of autonomous agent systems.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h5 className="text-[#f5b041] mb-4">{col.title}</h5>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.path + link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-[rgba(249,246,240,0.65)] transition-colors duration-300 hover:text-[#f5b041]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="text-[#f5b041] mb-4">Spring 2027 Cohort</h5>
          <p className="text-sm text-[rgba(249,246,240,0.55)] mb-5 leading-relaxed">
            Applications are open. Seats are limited to 120 per cohort.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#f5b041] transition-colors duration-300 hover:text-[#f9f6f0]"
          >
            Start your application <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-[#f5b041]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[rgba(249,246,240,0.4)]">
            © 2026 S/Agentic University. An S/Agency institution.
          </p>
          <p className="text-xs text-[rgba(249,246,240,0.4)]">
            Founded by Seif · Managed by Kimi
          </p>
        </div>
      </div>
    </footer>
  );
}
