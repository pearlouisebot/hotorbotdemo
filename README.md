# HotorBot Demo

Static offline-capable Vite + React + TypeScript + Tailwind prototype for an iPhone-sized video-first dating demo.

## Features

- Compare screen with two stacked autoplaying local clips
- Client-side Elo scoring with localStorage persistence
- Reaction chips every 5th vote
- Winner-strength rating step every 10th vote
- Seeded weekly report screen
- Mock matches and mock three-minute video date screen
- Service worker for offline caching
- Local-only runtime assets under `public/clips` and `public/posters`

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Notes

- Synthetic demo profiles are labeled in the UI.
- Placeholder media is generated locally for offline demo use.
- No backend or network dependency at runtime.
