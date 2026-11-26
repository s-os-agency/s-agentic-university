import { getDb } from "./connection";
import { applications } from "@db/schema";
import { desc, eq, sql } from "drizzle-orm";

export async function createApplication(
  data: Omit<
    typeof applications.$inferInsert,
    "id" | "createdAt" | "status" | "decidedAt"
  >,
) {
  const db = getDb();
  const [inserted] = await db.insert(applications).values(data).$returningId();
  if (!inserted) {
    throw new Error("Application insert did not return a saved record ID.");
  }
  const [row] = await db
    .select()
    .from(applications)
    .where(eq(applications.id, inserted.id))
    .limit(1);
  if (!row) {
    throw new Error("Saved application could not be retrieved.");
  }
  return row;
}

export async function listApplications(status?: "interested" | "accepted" | "declined") {
  const db = getDb();
  if (status) {
    return db
      .select()
      .from(applications)
      .where(eq(applications.status, status))
      .orderBy(desc(applications.createdAt));
  }
  return db.select().from(applications).orderBy(desc(applications.createdAt));
}

export async function decideApplication(id: number, status: "accepted" | "declined") {
  const db = getDb();
  await db
    .update(applications)
    .set({ status, decidedAt: new Date() })
    .where(eq(applications.id, id));
  const [row] = await db.select().from(applications).where(eq(applications.id, id));
  return row;
}

export async function applicationStats() {
  const db = getDb();
  const [row] = await db
    .select({
      total: sql<number>`count(*)`,
      interested: sql<number>`sum(case when status = 'interested' then 1 else 0 end)`,
      accepted: sql<number>`sum(case when status = 'accepted' then 1 else 0 end)`,
      declined: sql<number>`sum(case when status = 'declined' then 1 else 0 end)`,
    })
    .from(applications);
  return {
    total: Number(row?.total ?? 0),
    interested: Number(row?.interested ?? 0),
    accepted: Number(row?.accepted ?? 0),
    declined: Number(row?.declined ?? 0),
  };
}
