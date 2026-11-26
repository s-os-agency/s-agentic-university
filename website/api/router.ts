import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createRouter, publicQuery } from "./middleware";
import {
  createApplication,
  decideApplication,
  listApplications,
  applicationStats,
} from "./queries/applications";

const AREA_VALUES = [
  "agent_engineering",
  "agent_leadership",
  "research",
  "undecided",
] as const;

const applyInput = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional(),
  areaOfInterest: z.enum(AREA_VALUES),
  motivation: z.string().trim().max(2000).optional(),
  contactConsent: z.literal(true, {
    error: "Consent to be contacted is required to apply.",
  }),
});

function assertAdmin(passcode: string) {
  const expected = process.env.ADMIN_PASSCODE;
  if (!expected || passcode !== expected) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Invalid admissions board passcode.",
    });
  }
}

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),

  admissions: createRouter({
    submit: publicQuery.input(applyInput).mutation(async ({ input }) => {
      try {
        const row = await createApplication({
          ...input,
          contactConsentAt: new Date(),
          semester: "spring_2027",
        });
        return { ok: true as const, id: Number(row.id) };
      } catch (err) {
        const chain =
          err instanceof Error
            ? `${err.message} ${String((err as { cause?: unknown }).cause ?? "")}`
            : String(err);
        if (/duplicate entry|er_dup_entry/i.test(chain)) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "This email is already registered for the Spring 2027 cohort.",
          });
        }
        throw err;
      }
    }),

    publicStats: publicQuery.query(async () => {
      const stats = await applicationStats();
      return { total: stats.total };
    }),

    verifyPasscode: publicQuery
      .input(z.object({ passcode: z.string().min(1) }))
      .mutation(({ input }) => {
        assertAdmin(input.passcode);
        return { ok: true as const };
      }),

    list: publicQuery
      .input(
        z.object({
          passcode: z.string().min(1),
          status: z.enum(["interested", "accepted", "declined"]).optional(),
        }),
      )
      .query(async ({ input }) => {
        assertAdmin(input.passcode);
        const rows = await listApplications(input.status);
        const stats = await applicationStats();
        return { rows, stats };
      }),

    decide: publicQuery
      .input(
        z.object({
          passcode: z.string().min(1),
          id: z.number().int().positive(),
          status: z.enum(["accepted", "declined"]),
        }),
      )
      .mutation(async ({ input }) => {
        assertAdmin(input.passcode);
        const row = await decideApplication(input.id, input.status);
        if (!row) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Application not found." });
        }
        return { ok: true as const, row };
      }),
  }),
});

export type AppRouter = typeof appRouter;
