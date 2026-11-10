import { interestUrl } from '../interest'

export default function Admissions() {
  return <section className="min-h-[75vh] bg-[#080828] px-6 py-36 text-[#f9f6f0]"><div className="mx-auto max-w-4xl">
    <p className="text-xs uppercase tracking-[.18em] text-[#f5b041]">Planned Spring 2027 cohort</p>
    <h1 className="mt-4 text-5xl md:text-7xl">Register interest</h1>
    <p className="mt-8 leading-8 text-white/70">We are gathering interest as S/Agentic University takes shape. A registration of interest allows us to contact you with confirmed information about learning tracks, schedule, eligibility, and the admissions process. It is not an application, an enrollment, or a seat reservation.</p>
    <div className="mt-10 rounded-xl border border-[#f5b041]/30 bg-[#12125a] p-7"><h2 className="text-3xl">Before enrollment</h2><p className="mt-4 leading-7 text-white/70">The S/Passport is planned as a prerequisite for university enrollment. We will announce how applicants obtain one, along with any fees or assessment requirements, when enrollment details are final.</p></div>
    <a href={interestUrl} className="mt-10 inline-block rounded bg-[#f5b041] px-6 py-3 font-semibold text-[#080828]">Open the interest form ↗</a>
    <p className="mt-5 text-sm text-white/50">Spring 2027 is a target, subject to confirmation. No tuition, scholarships, deadline, or degree accreditation is announced.</p>

    <div className="mt-12" aria-labelledby="admissions-faq"><h2 id="admissions-faq" className="text-3xl">Common questions</h2>
      <details className="mt-6 border-b border-white/15 py-4"><summary className="cursor-pointer font-semibold text-[#f5b041]">Does registering interest reserve a place?</summary><p className="mt-3 leading-7 text-white/70">No. It is an expression of interest, not an application, an admission decision, an enrollment or a seat reservation.</p></details>
      <details className="border-b border-white/15 py-4"><summary className="cursor-pointer font-semibold text-[#f5b041]">Is the Spring 2027 start date confirmed?</summary><p className="mt-3 leading-7 text-white/70">Spring 2027 is the planning target. The start date, schedule and learning tracks will be announced when confirmed.</p></details>
      <details className="border-b border-white/15 py-4"><summary className="cursor-pointer font-semibold text-[#f5b041]">What are the fees and entry requirements?</summary><p className="mt-3 leading-7 text-white/70">Tuition, scholarships, deadlines and final eligibility requirements have not been announced. Review the confirmed details before making enrollment or payment commitments.</p></details>
      <details className="border-b border-white/15 py-4"><summary className="cursor-pointer font-semibold text-[#f5b041]">How does S/Passport relate to enrollment?</summary><p className="mt-3 leading-7 text-white/70">S/Passport is planned as an enrollment prerequisite. The process for obtaining one, including any fees or assessments, will be explained with the final enrollment details.</p></details>
    </div>
  </div></section>
}
