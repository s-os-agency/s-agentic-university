# Agentic University — plain-language README

## What this is
Software for teaching and testing AI helpers ("agents"), like a school with courses, exams and certificates. This repo also holds a website prototype and a sign-up page for people interested in a possible Spring 2027 intake.

## Who it's for
- People who build AI helpers and want them trained and checked against clear standards.
- Seif's team, who maintain the course generator and the website.

## What it does today
- **Course generator.** Builds a full course package for a helper, in nine parts:
  1. a list of approved sources and facts
  2. a skills plan
  3. study notes
  4. a decision exercise
  5. a practice lab
  6. a test and a marking guide
  7. extra practice for weak spots
  8. a final project with an oral exam
  9. a quality check listing all the evidence used
- **Web addresses (API) other programs can call:**
  - `GET /health`: is it running?
  - `POST /api/capability-blueprints/generate`: make a skills plan
  - `POST /api/course-releases/generate`: make a full course package
  - `POST /api/evidence/decide`: judge whether a piece of evidence is good enough
  - `GET /mcp/sse` and `POST /mcp/messages`: the same three abilities, offered as tools AI assistants can use directly
- The old "make a course from just a topic name" address (`POST /api/courses/generate`) is switched off on purpose, because it couldn't link lessons to real sources.
- **Website prototype** (`website/`): the source of a preview site hosted on Kimi. It is not published automatically from here.
- **Interest sign-up page** (`intake/index.html`): collects expressions of interest only. It does not enroll anyone or promise dates. Sign-ups are saved to a Supabase database, and visitors can't read other people's entries.
- **Experimental Cloudflare helper** (`integrations/cloudflare-agent/`): kept for reference. It does not check passports and is not used for real access control.

## How to run it
```bash
npm install   # install dependencies
npm run ci    # type-check, run tests and build
```
The command to start the server locally is not yet confirmed; check `package.json`.

## Current status and known gaps
- The course generator works and is tested.
- **Not built yet:**
  - permanent storage
  - real passport checks (making sure an enrolling helper has a valid ID from the s-agent-passport project)
  - logged-in source uploads
  - live hosting
- Some claims on the imported website pages are unverified and must be corrected before the full site goes public.
- This repo replaces the older `saifsoub/sagentic-university`. New work should happen here only.

## Where things live
| Folder / file | What's in it |
|---|---|
| `src/` | Course generator and API code (folder name not yet confirmed) |
| `website/` | Website prototype |
| `intake/` | Interest sign-up page |
| `integrations/cloudflare-agent/` | Experimental Cloudflare helper |
| `docs/` | Notes, including history of the merge from the old repo |
| `UNIVERSITY_RUNTIME_CYCLE.md` | How courses, tests and certificates fit together |
| `.cursor-plugin/`, `agents/`, `commands/` | An add-on for the Cursor code editor |
