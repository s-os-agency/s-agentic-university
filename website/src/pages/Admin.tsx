import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  X,
  Lock,
  Loader2,
  Search,
  Users,
  UserCheck,
  UserX,
  Inbox,
  LogOut,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trpc } from '@/providers/trpc';

type Status = 'interested' | 'accepted' | 'declined';

const AREA_LABELS: Record<string, string> = {
  agent_engineering: 'Agent Engineering',
  agent_leadership: 'Agent Leadership',
  research: 'Research Track',
  undecided: 'Undecided',
};

const STATUS_STYLES: Record<Status, string> = {
  interested: 'bg-[#f5b041]/10 text-[#f5b041] border-[#f5b041]/30',
  accepted: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  declined: 'bg-red-500/10 text-red-400 border-red-500/30',
};

const SESSION_KEY = 'sag_admin_passcode';

export default function Admin() {
  const [passcode, setPasscode] = useState(
    () => sessionStorage.getItem(SESSION_KEY) ?? '',
  );
  const [passcodeInput, setPasscodeInput] = useState('');
  const [gateError, setGateError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all');

  const verifyMutation = trpc.admissions.verifyPasscode.useMutation();
  const listQuery = trpc.admissions.list.useQuery(
    {
      passcode,
      status: statusFilter === 'all' ? undefined : statusFilter,
    },
    { enabled: passcode.length > 0, retry: false },
  );
  const decideMutation = trpc.admissions.decide.useMutation({
    onSuccess: () => listQuery.refetch(),
  });

  const unlock = () => {
    setGateError(null);
    verifyMutation.mutate(
      { passcode: passcodeInput },
      {
        onSuccess: () => {
          sessionStorage.setItem(SESSION_KEY, passcodeInput);
          setPasscode(passcodeInput);
        },
        onError: (e) => setGateError(e.message),
      },
    );
  };

  const lock = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setPasscode('');
    setPasscodeInput('');
  };

  const rows = useMemo(() => {
    const data = listQuery.data?.rows ?? [];
    const q = search.trim().toLowerCase();
    if (!q) return data;
    return data.filter(
      (r) =>
        r.firstName.toLowerCase().includes(q) ||
        r.lastName.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q),
    );
  }, [listQuery.data, search]);

  /* ─── Passcode gate ─── */
  if (!passcode) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md rounded-2xl border border-[#f5b041]/15 bg-[#0d0d38]/60 backdrop-blur p-8 md:p-10"
        >
          <Lock className="w-10 h-10 text-[#f5b041] mb-6" />
          <h1 className="text-3xl font-serif font-bold text-white mb-2">Admissions Board</h1>
          <p className="text-white/55 text-sm mb-8">
            Restricted to the Office of the Chancellor. Enter the board passcode.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (passcodeInput.trim()) unlock();
            }}
            className="space-y-4"
          >
            <Input
              type="password"
              value={passcodeInput}
              onChange={(e) => {
                setPasscodeInput(e.target.value);
                setGateError(null);
              }}
              placeholder="Board passcode"
              autoComplete="current-password"
              className="bg-[#080828]/80 border-[#f5b041]/20 text-white placeholder:text-white/25 focus-visible:ring-[#f5b041] h-12"
            />
            {gateError && (
              <p role="alert" className="text-sm text-red-400">
                {gateError}
              </p>
            )}
            <Button
              type="submit"
              disabled={verifyMutation.isPending || !passcodeInput.trim()}
              className="w-full bg-[#f5b041] text-[#080828] hover:bg-[#f5b041]/90 h-12 font-semibold rounded-lg"
            >
              {verifyMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Verifying…
                </>
              ) : (
                'Enter the boardroom'
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  /* ─── Board ─── */
  const stats = listQuery.data?.stats;

  return (
    <div className="min-h-[100dvh] px-4 md:px-8 pt-28 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h6 className="text-xs tracking-[0.3em] uppercase text-[#f5b041] mb-3">
              Office of the Chancellor
            </h6>
            <h1 className="text-4xl font-serif font-bold text-white">Admissions Board</h1>
            <p className="text-white/50 text-sm mt-2">Spring 2027 cohort · live registry</p>
          </div>
          <Button
            variant="ghost"
            onClick={lock}
            className="text-white/50 hover:text-white hover:bg-white/5 self-start sm:self-auto"
          >
            <LogOut className="mr-2 w-4 h-4" /> Lock board
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Inbox} label="Total applications" value={stats?.total} />
          <StatCard icon={Users} label="Awaiting decision" value={stats?.interested} />
          <StatCard icon={UserCheck} label="Accepted" value={stats?.accepted} />
          <StatCard icon={UserX} label="Declined" value={stats?.declined} />
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name or email…"
              className="pl-10 bg-[#0d0d38]/60 border-[#f5b041]/20 text-white placeholder:text-white/25 focus-visible:ring-[#f5b041] h-11"
            />
          </div>
          <div className="flex gap-2">
            {(['all', 'interested', 'accepted', 'declined'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-4 h-11 rounded-lg text-sm font-medium capitalize transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041] ${
                  statusFilter === s
                    ? 'bg-[#f5b041] text-[#080828]'
                    : 'border border-[#f5b041]/20 text-white/60 hover:text-white hover:border-[#f5b041]/40'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        {listQuery.isLoading ? (
          <div className="flex items-center justify-center py-24 text-white/50">
            <Loader2 className="w-6 h-6 animate-spin mr-3" /> Loading registry…
          </div>
        ) : listQuery.isError ? (
          <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-8 text-center">
            <p className="text-red-400 mb-4">
              {listQuery.error.message.includes('passcode')
                ? 'Your session expired. Please unlock the board again.'
                : 'Could not load the registry.'}
            </p>
            <Button
              onClick={lock}
              variant="outline"
              className="border-[#f5b041]/30 text-[#f5b041] hover:bg-[#f5b041]/10"
            >
              Back to passcode
            </Button>
          </div>
        ) : rows.length === 0 ? (
          <div className="rounded-xl border border-[#f5b041]/15 bg-[#0d0d38]/60 py-24 text-center">
            <Inbox className="w-10 h-10 text-white/25 mx-auto mb-4" />
            <p className="text-white/50">
              {search ? 'No applications match your search.' : 'No applications in this view yet.'}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {rows.map((r) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-[#f5b041]/15 bg-[#0d0d38]/60 p-5 flex flex-col lg:flex-row lg:items-center gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <p className="font-semibold text-white">
                      {r.firstName} {r.lastName}
                    </p>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full border capitalize ${STATUS_STYLES[r.status]}`}
                    >
                      {r.status}
                    </span>
                  </div>
                  <p className="text-sm text-white/55 truncate">{r.email}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-white/40">
                    <span>{AREA_LABELS[r.areaOfInterest] ?? r.areaOfInterest}</span>
                    <span>
                      Applied{' '}
                      {new Date(r.createdAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="font-mono">
                      SAG-2027-{String(Number(r.id)).padStart(4, '0')}
                    </span>
                  </div>
                  {r.motivation && (
                    <p className="text-sm text-white/60 mt-3 leading-relaxed border-l-2 border-[#f5b041]/30 pl-3">
                      {r.motivation}
                    </p>
                  )}
                </div>
                {r.status === 'interested' && (
                  <div className="flex gap-2 shrink-0">
                    <Button
                      onClick={() =>
                        decideMutation.mutate({ passcode, id: Number(r.id), status: 'accepted' })
                      }
                      disabled={decideMutation.isPending}
                      className="bg-emerald-500/90 text-white hover:bg-emerald-500 rounded-lg"
                    >
                      <Check className="mr-1.5 w-4 h-4" /> Accept
                    </Button>
                    <Button
                      onClick={() =>
                        decideMutation.mutate({ passcode, id: Number(r.id), status: 'declined' })
                      }
                      disabled={decideMutation.isPending}
                      variant="outline"
                      className="border-red-500/40 text-red-400 hover:bg-red-500/10 rounded-lg"
                    >
                      <X className="mr-1 w-4 h-4" /> Decline
                    </Button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Inbox;
  label: string;
  value: number | undefined;
}) {
  return (
    <div className="rounded-xl border border-[#f5b041]/15 bg-[#0d0d38]/60 p-5">
      <Icon className="w-5 h-5 text-[#f5b041] mb-3" />
      <p className="text-3xl font-serif font-bold text-white">
        {value === undefined ? '—' : value.toLocaleString()}
      </p>
      <p className="text-xs text-white/45 mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
}
