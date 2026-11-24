import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Crown,
  FlaskConical,
  Compass,
  Loader2,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { trpc } from '@/providers/trpc';

const AREAS = [
  {
    value: 'agent_engineering',
    label: 'Agent Engineering',
    desc: 'Build, orchestrate, and ship autonomous agent systems.',
    icon: Cpu,
  },
  {
    value: 'agent_leadership',
    label: 'Agent Leadership',
    desc: 'Govern agent fleets, set policy, and own outcomes.',
    icon: Crown,
  },
  {
    value: 'research',
    label: 'Research Track',
    desc: 'Push the frontier of multi-agent theory and safety.',
    icon: FlaskConical,
  },
  {
    value: 'undecided',
    label: 'Undecided',
    desc: 'Explore during orientation, then declare your track.',
    icon: Compass,
  },
] as const;

type AreaValue = (typeof AREAS)[number]['value'];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  areaOfInterest: AreaValue | '';
  motivation: string;
  contactConsent: boolean;
}

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  areaOfInterest: '',
  motivation: '',
  contactConsent: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Apply() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [submittedId, setSubmittedId] = useState<number | null>(null);

  const applyMutation = trpc.admissions.submit.useMutation();

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setError(null);
  };

  const stepValid = useMemo(() => {
    if (step === 0) {
      return (
        form.firstName.trim().length > 0 &&
        form.lastName.trim().length > 0 &&
        EMAIL_RE.test(form.email.trim())
      );
    }
    if (step === 1) return form.areaOfInterest !== '';
    if (step === 2) return form.contactConsent;
    return false;
  }, [step, form]);

  const next = () => {
    if (!stepValid) {
      setError(
        step === 0
          ? 'Please fill in your name and a valid email to continue.'
          : step === 1
            ? 'Please choose an area of interest.'
            : 'We need your consent to contact you about your application.',
      );
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, 2));
  };

  const submit = () => {
    if (!stepValid || form.areaOfInterest === '') return;
    setError(null);
    applyMutation.mutate(
      {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
        areaOfInterest: form.areaOfInterest,
        motivation: form.motivation.trim() || undefined,
        contactConsent: true,
      },
      {
        onSuccess: (res) => setSubmittedId(res.id),
        onError: (e) => setError(e.message),
      },
    );
  };

  const steps = ['About you', 'Your track', 'Review & submit'];

  if (submittedId !== null) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl w-full text-center"
        >
          <CheckCircle2 className="w-16 h-16 text-[#f5b041] mx-auto mb-6" />
          <h6 className="text-sm tracking-[0.3em] uppercase text-[#f5b041] mb-4">
            Application received
          </h6>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Welcome to the gates, {form.firstName}.
          </h1>
          <p className="text-white/70 text-lg mb-3">
            Your application for the <span className="text-[#f5b041]">Spring 2027</span> cohort is
            in the admissions board&apos;s queue.
          </p>
          <p className="text-white/50 text-sm mb-10">
            Reference <span className="font-mono text-[#f5b041]">SAG-2027-{String(submittedId).padStart(4, '0')}</span>
            {' '}· We&apos;ll reach you at {form.email.trim()}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs">
              <Button className="bg-[#f5b041] text-[#080828] hover:bg-[#f5b041]/90 px-8 py-6 font-semibold rounded-lg">
                Explore Programs <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="outline"
                className="border-[#f5b041]/30 text-[#f5b041] hover:bg-[#f5b041]/10 px-8 py-6 font-semibold rounded-lg"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] px-6 pt-32 pb-24">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h6 className="text-sm tracking-[0.3em] uppercase text-[#f5b041] mb-4 text-center">
            Spring 2027 Cohort · 120 seats
          </h6>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
            Apply to S/Agentic University
          </h1>
          <p className="text-white/60 text-center mb-12">
            Three short steps. Decisions are rolling — the earlier you apply, the earlier you hear.
          </p>
        </motion.div>

        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-10">
          {steps.map((label, i) => (
            <div key={label} className="flex-1">
              <div
                className="h-[3px] rounded-full transition-all duration-500 mb-2"
                style={{
                  backgroundColor:
                    i < step ? '#f5b041' : i === step ? '#f5b041' : 'rgba(245,176,65,0.15)',
                  opacity: i <= step ? 1 : 0.5,
                }}
              />
              <p
                className={`text-xs tracking-wide ${i === step ? 'text-[#f5b041]' : 'text-white/40'}`}
              >
                {i + 1}. {label}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#f5b041]/15 bg-[#0d0d38]/60 backdrop-blur p-6 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
            >
              {step === 0 && (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-white/70 mb-2">
                        First name *
                      </label>
                      <Input
                        id="firstName"
                        value={form.firstName}
                        onChange={(e) => set('firstName', e.target.value)}
                        placeholder="Ada"
                        autoComplete="given-name"
                        className="bg-[#080828]/80 border-[#f5b041]/20 text-white placeholder:text-white/25 focus-visible:ring-[#f5b041] h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm text-white/70 mb-2">
                        Last name *
                      </label>
                      <Input
                        id="lastName"
                        value={form.lastName}
                        onChange={(e) => set('lastName', e.target.value)}
                        placeholder="Lovelace"
                        autoComplete="family-name"
                        className="bg-[#080828]/80 border-[#f5b041]/20 text-white placeholder:text-white/25 focus-visible:ring-[#f5b041] h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      placeholder="ada@example.com"
                      autoComplete="email"
                      className="bg-[#080828]/80 border-[#f5b041]/20 text-white placeholder:text-white/25 focus-visible:ring-[#f5b041] h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-white/70 mb-2">
                      Phone <span className="text-white/35">(optional)</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      placeholder="+1 555 000 0000"
                      autoComplete="tel"
                      className="bg-[#080828]/80 border-[#f5b041]/20 text-white placeholder:text-white/25 focus-visible:ring-[#f5b041] h-12"
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <p className="text-sm text-white/70">Which track calls you? *</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {AREAS.map((area) => {
                      const Icon = area.icon;
                      const selected = form.areaOfInterest === area.value;
                      return (
                        <button
                          key={area.value}
                          type="button"
                          onClick={() => set('areaOfInterest', area.value)}
                          aria-pressed={selected}
                          className={`text-left rounded-xl border p-5 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041] ${
                            selected
                              ? 'border-[#f5b041] bg-[#f5b041]/10'
                              : 'border-[#f5b041]/15 bg-[#080828]/60 hover:border-[#f5b041]/40'
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 mb-3 ${selected ? 'text-[#f5b041]' : 'text-white/50'}`}
                          />
                          <p className="font-semibold text-white mb-1">{area.label}</p>
                          <p className="text-sm text-white/55 leading-relaxed">{area.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                  <div>
                    <label htmlFor="motivation" className="block text-sm text-white/70 mb-2">
                      Why agents, why now?{' '}
                      <span className="text-white/35">(optional, 2–3 sentences)</span>
                    </label>
                    <Textarea
                      id="motivation"
                      value={form.motivation}
                      onChange={(e) => set('motivation', e.target.value)}
                      rows={4}
                      maxLength={2000}
                      placeholder="Tell us what you want to build or govern…"
                      className="bg-[#080828]/80 border-[#f5b041]/20 text-white placeholder:text-white/25 focus-visible:ring-[#f5b041]"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="rounded-xl border border-[#f5b041]/15 bg-[#080828]/60 p-5 space-y-3 text-sm">
                    <ReviewRow label="Name" value={`${form.firstName} ${form.lastName}`} />
                    <ReviewRow label="Email" value={form.email} />
                    {form.phone.trim() && <ReviewRow label="Phone" value={form.phone} />}
                    <ReviewRow
                      label="Track"
                      value={AREAS.find((a) => a.value === form.areaOfInterest)?.label ?? ''}
                    />
                    {form.motivation.trim() && (
                      <ReviewRow label="Motivation" value={form.motivation} />
                    )}
                    <ReviewRow label="Cohort" value="Spring 2027" />
                  </div>
                  <label
                    htmlFor="consent"
                    className="flex items-start gap-3 cursor-pointer select-none rounded-xl border border-[#f5b041]/15 bg-[#080828]/60 p-5"
                  >
                    <Checkbox
                      id="consent"
                      checked={form.contactConsent}
                      onCheckedChange={(v) => set('contactConsent', v === true)}
                      className="mt-0.5 border-[#f5b041]/40 data-[state=checked]:bg-[#f5b041] data-[state=checked]:text-[#080828]"
                    />
                    <span className="text-sm text-white/70 leading-relaxed">
                      I agree that S/Agentic University may contact me about my application and the
                      Spring 2027 cohort. *
                    </span>
                  </label>
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <ShieldCheck className="w-4 h-4 text-[#f5b041]/70" />
                    Stored securely in the university admissions registry. No spam, ever.
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {error && (
            <p role="alert" className="mt-6 text-sm text-red-400">
              {error}
            </p>
          )}

          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0 || applyMutation.isPending}
              className="text-white/60 hover:text-white hover:bg-white/5"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Back
            </Button>
            {step < 2 ? (
              <Button
                onClick={next}
                className="bg-[#f5b041] text-[#080828] hover:bg-[#f5b041]/90 px-8 font-semibold rounded-lg"
              >
                Continue <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={submit}
                disabled={!stepValid || applyMutation.isPending}
                className="bg-[#f5b041] text-[#080828] hover:bg-[#f5b041]/90 px-8 font-semibold rounded-lg"
              >
                {applyMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Submitting…
                  </>
                ) : (
                  <>
                    Submit application <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
      <span className="text-white/40 uppercase tracking-wider text-xs w-28 shrink-0">{label}</span>
      <span className="text-white/85 break-words">{value}</span>
    </div>
  );
}
