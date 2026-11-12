# yAGGe color scheme

The shared color scheme for Guillermo Barreiro's websites and web apps. It comes from the five letter colors of the yAGGe logo, sitting on calm neutral backgrounds. The reference site is [guillermo-barreiro.vercel.app](https://guillermo-barreiro.vercel.app).

This file is written for people and for AI coding assistants. If you are an assistant applying it to a project, follow the rules in "Rules" and copy the code in "Drop-in code" instead of inventing new values.

## The idea in one paragraph

Neutrals do most of the work. Each logo color has one fixed job, so it means the same thing in every app. The full five-color sequence appears only as a signature (logo, a thin stripe, small decorative markers). Every color has a dark-mode and a light-mode value chosen so text stays readable (at least 4.5:1 contrast) on that mode's background.

## Logo colors

Use these exact values only for the logo itself and for decoration (the stripe, dots, diamonds). Never use them for text: none of them is readable on both backgrounds.

| Name   | Hex       |
| ------ | --------- |
| Sky    | `#0078FC` |
| Royal  | `#002AFC` |
| Violet | `#842AFC` |
| Red    | `#FC1800` |
| Orange | `#FC8400` |

Order always follows the logo: sky, royal, violet, red, orange.

## Roles

Use the role tokens in code, never raw hex. Each role has one value for dark mode and one for light mode.

| Token    | Job                                                        | Dark mode | Light mode |
| -------- | ---------------------------------------------------------- | --------- | ---------- |
| `signal` | Main action and highlight: primary buttons, key words, active states, focus, selection | `#FC8400` orange | `#002AFC` royal |
| `ai`     | Anything AI: assistants, chat, generated content           | `#B57BFF` violet | `#6A1FD0` violet |
| `royal`  | Brand blue: links and secondary brand accents              | `#6B7CFF` | `#002AFC` |
| `sky`    | Information: info notes, tags, secondary highlights        | `#4DA3FF` | `#005BC4` |
| `danger` | Errors and destructive actions only                        | `#FF6A55` | `#C41300` |

On the reference site the `ai` role is named `twin`, after its AI digital twin. New projects should use `ai`.

### Neutrals

| Token   | Job                               | Dark mode | Light mode |
| ------- | --------------------------------- | --------- | ---------- |
| `ink`   | Page background                   | `#0A0B0D` | `#F6F5F1` |
| `ink-2` | Raised surface (cards, panels)    | `#111317` | `#EEECE6` |
| `ink-3` | Higher surface (hover, inputs)    | `#181B21` | `#E4E1D9` |
| `line`  | Borders and dividers              | `#23262D` | `#D6D3CA` |
| `bone`  | Main text                         | `#ECEBE6` | `#111216` |
| `mist`  | Secondary text, labels, captions  | `#9A9EA8` | `#55585F` |

Dark mode is the default. Light mode follows the visitor's system setting.

### Text on filled color

When a button or badge is filled with a role color, its text uses `ink` (the page background color). That gives dark text on orange or violet in dark mode and light text on royal or violet in light mode, all above 4.5:1.

## Rules

1. Neutrals cover most of the screen. Color is an accent, not a background. Large areas filled with a logo color are off-brand.
2. One role per job. Main buttons are `signal`, AI features are `ai`, errors are `danger`. Don't use `danger` for decoration or `ai` for things that aren't AI.
3. At most one `signal`-filled button per view. Other buttons are outlined (`signal` border and text over a 10% `signal` tint) or neutral.
4. Use the logo colors only for decoration and the logo. Use role tokens for text, borders and fills.
5. Show the five-color sequence in one place per page at most, for example the brand stripe across the top of the page.
6. Soft glows are allowed: a large blurred circle of `signal` at about 10% opacity behind a hero, or a violet shadow under an AI button. No other gradients except the brand stripe.
7. Text must reach at least 4.5:1 contrast. The values above already do on their own mode's background. If you add a new color, check it.
8. Every color must work in both modes. Define both values; never hardcode a hex in a component.

## Drop-in code

### Tailwind CSS v4

Paste into the project's global CSS file (for example `app/globals.css`), after `@import "tailwindcss";`. This gives utilities such as `bg-ink`, `text-bone`, `text-mist`, `border-line`, `bg-signal`, `text-ai`, `bg-logo-violet` and `bg-signal/10`.

```css
@theme {
  --color-ink: #0a0b0d;
  --color-ink-2: #111317;
  --color-ink-3: #181b21;
  --color-line: #23262d;
  --color-bone: #ecebe6;
  --color-mist: #9a9ea8;

  --color-signal: #fc8400;
  --color-ai: #b57bff;
  --color-royal: #6b7cff;
  --color-sky: #4da3ff;
  --color-danger: #ff6a55;

  --color-logo-sky: #0078fc;
  --color-logo-royal: #002afc;
  --color-logo-violet: #842afc;
  --color-logo-red: #fc1800;
  --color-logo-orange: #fc8400;
}

@media (prefers-color-scheme: light) {
  :root {
    --color-ink: #f6f5f1;
    --color-ink-2: #eeece6;
    --color-ink-3: #e4e1d9;
    --color-line: #d6d3ca;
    --color-bone: #111216;
    --color-mist: #55585f;

    --color-signal: #002afc;
    --color-ai: #6a1fd0;
    --color-royal: #002afc;
    --color-sky: #005bc4;
    --color-danger: #c41300;
  }
}

html {
  color-scheme: light dark;
}

body {
  background: var(--color-ink);
  color: var(--color-bone);
}

::selection {
  background: var(--color-signal);
  color: var(--color-ink);
}

.brand-stripe {
  background: linear-gradient(
    to right,
    var(--color-logo-sky) 0 20%,
    var(--color-logo-royal) 20% 40%,
    var(--color-logo-violet) 40% 60%,
    var(--color-logo-red) 60% 80%,
    var(--color-logo-orange) 80% 100%
  );
}
```

### Plain CSS (no Tailwind)

Use the same block, but replace `@theme {` with `:root {`. Then refer to colors as `var(--color-signal)` and so on.

### Other platforms

For native apps, charts or design tools, use the hex values from the tables above, keeping the dark and light pairs together.

## Common patterns

| Element              | Classes (Tailwind)                                                                 |
| -------------------- | ---------------------------------------------------------------------------------- |
| Primary button       | `bg-signal text-ink hover:opacity-90`                                               |
| Outlined button      | `border border-signal bg-signal/10 text-signal hover:bg-signal/20`                  |
| Neutral button       | `border border-line text-bone hover:border-signal hover:text-signal`                |
| Link                 | `text-bone underline decoration-signal underline-offset-4 hover:text-signal`        |
| Card                 | `border border-line bg-ink-2`                                                       |
| Label or caption     | `text-mist`                                                                         |
| AI button            | `border border-ai bg-ink-2 text-bone shadow-[0_8px_40px_-10px_var(--color-ai)] hover:bg-ai hover:text-ink` |
| Error message        | `text-danger`                                                                       |
| Input focus          | `border border-line focus:border-signal`                                            |
| Brand stripe         | `<div aria-hidden class="brand-stripe h-[3px] w-full"></div>` at the very top of the page |
| Decorative markers   | Cycle `bg-logo-sky`, `bg-logo-royal`, `bg-logo-violet`, `bg-logo-red`, `bg-logo-orange` in that order |

## Checklist for a new project

- [ ] The drop-in code is in the global CSS file.
- [ ] No hex colors in components; everything uses role or neutral tokens.
- [ ] The main action uses `signal`; AI features use `ai`; errors use `danger`.
- [ ] Only one filled `signal` button per view.
- [ ] The brand stripe or logo is the only place the five colors appear together.
- [ ] Checked in both dark and light mode.
