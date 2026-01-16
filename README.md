# Athelate Program Frontend

Modern Next.js dashboard experience for athlete program management. The home page focuses on training progress, upcoming tasks, feedback loops, community activity, and leaderboards.

## Home Dashboard Highlights

- **Hero banner**: Program headline with metrics and checkout calendar (`Banner`).
- **Feedback videos**: Draggable, horizontally scrollable cards to resume reviews (`FeedBackVideos`).
- **Task calendar**: Weekly view with status pills, CTA buttons, and mobile-friendly scrolling (`TaskCalender`).
- **Recent activity**: Live feed of coach actions with quick filters (`RecentActivities`).
- **Coach feedback**: Star-rated notes from coaches with quick access (`CoachFeedBack`).
- **Announcements**: Live/RSVP sessions with engagement actions in-line (`Announcements`).
- **Leaderboard**: Top performers with diamond avatars and ordered podium (`LeaderBoardV2`).
- **Persistent chrome**: Responsive navbar with mobile search overlay plus sticky sidebar navigation.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Redux Toolkit + RTK Query (API ready)
- Lucide + React Icons for UI icons

## Getting Started

Prerequisites: Node.js 18.18+ (Next 16 requirement) and npm or bun.

Install dependencies:

```bash
npm install
# or
bun install
```

Run dev server:

```bash
npm run dev
# or
bun run dev
```

Then open http://localhost:3000.

## Environment

Copy the sample env and adjust as needed:

```bash
cp example.env .env.local
```

Update values (API URLs, auth keys, etc.) before running in non-local environments.

## Key Paths

- `src/app/(common)/page.tsx` – home layout wiring all dashboard sections.
- `src/components/ui/others/dashboard/banner/Banner.tsx` – hero banner and calendar.
- `src/components/pages/home/*` – home sections (videos, announcements, activity, feedback, leaderboard).
- `src/components/ui/others/calender/TaskCalender.tsx` – weekly task view.
- `src/components/shared/NavBar/NavBarV2.tsx` and `.../sidebar/Sidebar.tsx` – global navigation.

## Scripts

- `npm run dev` – start dev server.
- `npm run build` – production build.
- `npm run start` – run built app.
- `npm run lint` – lint with ESLint.

## Notes for Contributors

- Prefer TypeScript and keep components client/server-marked as appropriate.
- Tailwind 4 class utilities are in use (utility-first, no `@apply`).
- UI uses responsive flex/grid layouts; test on mobile and desktop when tweaking.

## Deployment

Standard Next.js deployment applies. Build with `npm run build` and serve via `npm run start`, or deploy to Vercel/compatible platforms using your CI of choice.
