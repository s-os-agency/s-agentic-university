import { useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { TRPCClientError } from '@trpc/client';
import { trpc } from '@/providers/trpc';


export default function Apply() {
  const submitInterest = trpc.admissions.submit.useMutation();
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', phone: '', area_of_interest: 'undecided', contact_consent: false, website: '' });
  const [state, setState] = useState<'idle' | 'sending' | 'received'>('idle');
  const [error, setError] = useState('');
  const inFlight = useRef(false);
  const [received, setReceived] = useState<{ first_name: string; email: string; id: number } | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current || form.website) return;
    setError('');
    const payload = {
      semester: 'spring_2027',
      first_name: form.first_name.trim(), last_name: form.last_name.trim(),
      email: form.email.trim().toLowerCase(), phone: form.phone.trim() || null,
      area_of_interest: form.area_of_interest, contact_consent: form.contact_consent,
    };
    if (!payload.first_name || !payload.last_name || !payload.contact_consent ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setError('Enter your name and email, and agree to be contacted before submitting.');
      return;
    }
    inFlight.current = true;
    setState('sending');
    let timeout: number | undefined;
    try {
      const response = await Promise.race([
        submitInterest.mutateAsync({
          firstName: payload.first_name,
          lastName: payload.last_name,
          email: payload.email,
          phone: payload.phone ?? undefined,
          areaOfInterest: payload.area_of_interest as 'agent_engineering' | 'agent_leadership' | 'research' | 'undecided',
          contactConsent: true,
        }),
        new Promise<never>((_, reject) => {
          timeout = window.setTimeout(() => reject(new Error('Receipt not confirmed in time.')), 20_000);
        }),
      ]);
      setReceived({ first_name: payload.first_name, email: payload.email, id: response.id });
      setState('received');
    } catch (error) {
      if (error instanceof TRPCClientError && error.data?.code === 'CONFLICT') {
        setError('This email is already on the interest list for this cohort. This submission did not change the existing registration.');
      } else {
        setError('We could not confirm receipt of your details. Your entries are still here. The request may still be received; a retry may report that the email is already registered.');
      }
      setState('idle');
    } finally {
      if (timeout !== undefined) window.clearTimeout(timeout);
      inFlight.current = false;
    }
  }

  const input = 'w-full rounded-lg border border-white/20 bg-[#121250] px-4 py-3 text-white placeholder:text-white/40 focus:border-[#f5b041] focus:outline-none';
  const label = 'block text-sm text-white/80 mb-2';
  return (
    <main className="min-h-screen bg-[#080828] px-6 py-28 text-[#f9f6f0]">
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="text-sm text-[#f5b041]">← Back to Agentic University</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5b041]">Planning for Spring 2027</p>
        <h1 className="mt-3 text-4xl font-semibold md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Register your interest</h1>
        <p className="mt-5 leading-7 text-white/70">We are planning a first cohort for the next semester. Leave your details and we can contact you when the schedule, learning tracks, and admissions process are confirmed. This is an expression of interest, not an application or an offer of admission.</p>
        {state === 'received' && received ? (
          <div role="status" className="mt-10 rounded-xl border border-[#f5b041]/40 bg-[#121250] p-8">
            <h2 className="text-2xl text-[#f5b041]">Your interest has been received.</h2>
            <p className="mt-3 text-sm text-white/60">Reference {received.id}</p>
            <p className="mt-3 leading-7 text-white/70">Thank you, {received.first_name}. We will contact you at {received.email} when we have confirmed details for the planned Spring 2027 cohort.</p>
          </div>
        ) : (
          <form onSubmit={submit} aria-busy={state === 'sending'} className="mt-10 space-y-5 rounded-xl border border-white/10 bg-[#121250]/40 p-6 md:p-10">
            <fieldset disabled={state === 'sending'} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="first_name" className={label}>First name *</label><input id="first_name" className={input} required maxLength={100} autoComplete="given-name" value={form.first_name} onChange={e => setForm({ ...form, first_name: e.target.value })} /></div>
              <div><label htmlFor="last_name" className={label}>Last name *</label><input id="last_name" className={input} required maxLength={100} autoComplete="family-name" value={form.last_name} onChange={e => setForm({ ...form, last_name: e.target.value })} /></div>
            </div>
            <div><label htmlFor="email" className={label}>Email *</label><input id="email" className={input} type="email" required maxLength={254} autoComplete="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
            <div><label htmlFor="phone" className={label}>Phone (optional)</label><input id="phone" className={input} type="tel" maxLength={40} autoComplete="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
            <div><label htmlFor="area" className={label}>Area of interest *</label><select id="area" className={input} value={form.area_of_interest} onChange={e => setForm({ ...form, area_of_interest: e.target.value })}><option value="undecided">Still exploring</option><option value="agent_engineering">AI agent engineering</option><option value="agent_leadership">Agent leadership</option><option value="research">Research</option></select></div>
            <div className="absolute left-[-9999px]" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} /></div>
            <label className="flex items-start gap-3 text-sm leading-6 text-white/70"><input type="checkbox" className="mt-1" required checked={form.contact_consent} onChange={e => setForm({ ...form, contact_consent: e.target.checked })} /> I agree to be contacted about the planned Agentic University cohort. *</label>
            {error && <p role="alert" className="text-[#ffb6a8]">{error}</p>}
            <button type="submit" disabled={state === 'sending'} className="rounded bg-[#f5b041] px-7 py-3 font-semibold text-[#080828] disabled:opacity-50">{state === 'sending' ? 'Sending…' : 'Register interest'}</button>
            <p className="text-xs leading-5 text-white/50">Your details are stored for this interest list. The semester and programs are subject to confirmation.</p>
            </fieldset>
          </form>
        )}
      </div>
    </main>
  );
}
