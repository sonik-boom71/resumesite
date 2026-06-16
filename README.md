<div align="center">

```
███╗   ███╗ █████╗ ██╗  ██╗██╗███╗   ███╗   ██████╗ ███████╗██╗   ██╗
████╗ ████║██╔══██╗╚██╗██╔╝██║████╗ ████║   ██╔══██╗██╔════╝██║   ██║
██╔████╔██║███████║ ╚███╔╝ ██║██╔████╔██║   ██║  ██║█████╗  ██║   ██║
██║╚██╔╝██║██╔══██║ ██╔██╗ ██║██║╚██╔╝██║   ██║  ██║██╔══╝  ╚██╗ ██╔╝
██║ ╚═╝ ██║██║  ██║██╔╝ ██╗██║██║ ╚═╝ ██║██╗██████╔╝███████╗ ╚████╔╝
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚═╝╚═════╝ ╚══════╝  ╚═══╝
```

### the personal site of Maxim Davidiuk · Frontend Developer · Kyiv · 19

**[ → open the site ← ](https://resumesite-weld.vercel.app/)**

`React` · `TypeScript` · `Next.js` · `Node.js` · `Three.js` · `Rust` · `C++`

</div>

---

## what this is

Not a CV. A site.

A single dark page that loads in under a second, drops you into a hero with a Mandalorian standing watch, and then unfolds 15 projects, a 6-year story, a live code playground, and a hidden mode that turns the whole thing into a component documentation tool.

Built by hand, deployed on Vercel, fits in your pocket on mobile.

---

## the things you probably won't notice immediately

🔧 **Engineering Mode** — top-right corner. Flip the switch. The site re-renders as a component library. Each section gets a `<Hero />` tag. Hover the `ℹ` icon and you see real React-style documentation — props, state, dependencies, what renders inside. A live component tree appears on the left. The footer adds a counter. JetBrains Mono everywhere. Toggle back to Presentation Mode and the site looks like nothing happened.

🎮 **Live Code Sandbox** — section "Live Code Sandbox". Three editors (HTML / CSS / JS), an iframe preview, real-time updates. Comes pre-loaded with the Supernatural cast list because of course it does. Try changing the colors. Try breaking it. There's a Reset button.

🕹️ **The Konami Code** works. `↑ ↑ ↓ ↓ ← → ← → B A` — somewhere on the site. Try it.

🎵 **Six GIFs** sprinkled throughout, including a small `<gif-fbi>` carrying a "FBI" badge in the contacts section, because that's the kind of thing that goes in a resume site.

---

## the projects (15)

The big ones:

| Project | What it is | Stack |
|---|---|---|
| **Hunter's Codex** | Full-stack fan encyclopedia for *Supernatural* — 327 episodes, characters, bestiary, forum with accounts | Next.js 14, Prisma, PostgreSQL, NextAuth, Framer Motion, TMDB API |
| **DevMetrics Dashboard** | Personal developer dashboard — GitHub stats, LeetCode tracking, Kanban, Pomodoro, RSS, Vi shortcuts | Next.js 14, TanStack Query, Prisma, Recharts, NextAuth, PWA, Vitest + Playwright |
| **Minecraft Skin Viewer** | 3D skin viewer & editor in the browser — 12 animations, pixel-level editing, GIF/WebM export | Three.js, WebGL, Canvas, PWA |
| **React Phone Catalog** | Apple devices e-commerce — 7 pages, filters, debounced search, 3 languages, dark theme | React 18, TypeScript (70%), Context API, Vite |
| **LinkSnip** | URL shortener and pastebin written in Rust on Vercel serverless | Rust, Axum |
| **GameReviewBot** | Telegram bot that scrapes Steam + OpenCritic and lets AI deliver the verdict | Node.js, Telegraf, Cheerio, Groq/Gemini |

Plus 9 more — Terraria Wiki, Kyiv Flora Atlas, MY SANCTUARY (a personal site styled as eight themed rooms), Velo Assistant, NAMU museum landing, MyBike, 2048, Knopka (a button that runs away from your cursor), and the site you're reading about right now.

Every one of them has a live demo on the site.

---

## the experience behind it

```
2019 ─── 2022    Game Developer @ Diamond Role Play
                 C++. Game engine. Network logic. Combat mechanics.
                 Multiplayer server performance for hundreds of concurrent players.
                 ≈ 3 years.

2024 ─── 2024    Web Developer @ Glovo (Professional Training Program)
                 React + JavaScript on real company tasks. 9 months.

2024 ─── now     Frontend Developer · Freelance
                 React / TypeScript / SCSS / Vercel.

2025 ─── 2027    Mate Academy · Full-Stack Program
                 React, TypeScript, testing, code review.

2026 ─── now     Programming Teacher @ IT-Friends
                 Teaching algorithms to kids (10–11). Construct, Roblox Studio.
```

C++ → Web → Teaching. Three different worlds, one engineer.

---

## stack

```yaml
frontend:
  - React 18, Next.js 14, TypeScript (Advanced)
  - Context API, Hooks, React Router
  - HTML5, CSS3, SCSS (BEM, mobile-first), Tailwind
  - Framer Motion, Three.js, Canvas, Recharts

backend:
  - Node.js (Express, Telegraf)
  - REST APIs, Prisma ORM
  - PostgreSQL, SQLite
  - NextAuth, OAuth, JWT

systems:
  - Rust (Axum)
  - C++ (game engines, real-time systems)

tooling:
  - Git, Vite, Parcel, npm
  - ESLint, Prettier, Stylelint
  - Cypress (E2E), Jest, Vitest, Playwright

infra:
  - Vercel, GitHub Pages, Neon
  - PWA / Service Workers
  - GitHub Actions
```

---

## how this site was built

No framework. No build step. Just `index.html`, `style.css`, `script.js`.

That was a deliberate choice. The whole site — Engineering Mode, the sandbox, the scroll reveals, the Konami easter egg, the floating gradient orbs, the GIF strips — is built on plain HTML, CSS and vanilla JavaScript. It loads instantly, runs on anything, and the entire source is something you can read in one sitting.

The harder projects in the portfolio (Hunter's Codex, DevMetrics, Minecraft Viewer) use the full stack with frameworks. This one stays minimal on purpose.

---

## links

- 🌍 **Live site:** https://resumesite-weld.vercel.app/
- 💼 **LinkedIn:** [maxim-davidiuk-73a38a399](https://www.linkedin.com/in/maxim-davidiuk-73a38a399/)
- 🐙 **GitHub:** [@sonik-boom71](https://github.com/sonik-boom71)
- 📄 **Resume (PDF):** [Google Doc](https://docs.google.com/document/d/1ItrjDyEQx3K_DGnOSRbuFPfwR_nytezEltgsE1dilH0/edit)
- 💬 **Telegram:** [@TeaErlGrey](https://t.me/TeaErlGrey)

---

<div align="center">

```
              ⚙️  open to Frontend / Full-Stack roles  ⚙️
                Junior+ heading toward Middle · Kyiv
                React · TypeScript · Node.js · Rust
                              · ·
                  ready for technical interviews
                              · ·
                       say hi → Telegram
```

</div>
