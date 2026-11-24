import {
  mysqlTable,
  mysqlEnum,
  serial,
  varchar,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/mysql-core";

export const applications = mysqlTable(
  "applications",
  {
    id: serial("id").primaryKey(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    semester: varchar("semester", { length: 32 }).notNull().default("spring_2027"),
    firstName: varchar("first_name", { length: 100 }).notNull(),
    lastName: varchar("last_name", { length: 100 }).notNull(),
    email: varchar("email", { length: 254 }).notNull(),
    phone: varchar("phone", { length: 40 }),
    areaOfInterest: mysqlEnum("area_of_interest", [
      "agent_engineering",
      "agent_leadership",
      "research",
      "undecided",
    ]).notNull(),
    motivation: text("motivation"),
    status: mysqlEnum("status", ["interested", "accepted", "declined"])
      .notNull()
      .default("interested"),
    decidedAt: timestamp("decided_at"),
  },
  (t) => [uniqueIndex("applications_email_semester_unique").on(t.email, t.semester)],
);

export type Application = typeof applications.$inferSelect;
export type InsertApplication = typeof applications.$inferInsert;
