# Komorebi

A Japanese-inspired pastel component library.

[![npm](https://img.shields.io/npm/v/@stiaan/komorebi.svg)](https://www.npmjs.com/package/@stiaan/komorebi)
[![license](https://img.shields.io/npm/l/@stiaan/komorebi.svg)](./LICENSE)
[![types](https://img.shields.io/npm/types/@stiaan/komorebi.svg)](#)

> *木漏れ日 (komorebi)* — sunlight filtering through leaves.

Built on Radix UI primitives with a hand-crafted design token system: greyed wisteria primary, blush sakura accents, Shippori Mincho serif headings, and Jost sans body text. Accessible by default — WCAG 2.1 AA contrast, keyboard navigation, and reduced-motion support.

---

## Installation

```bash
npm install @stiaan/komorebi
```

`react` and `react-dom` (v18) are peer dependencies — you almost certainly already have them. Everything else (Radix, icons, etc.) is installed automatically.

---

## Setup

Komorebi ships a single, self-contained stylesheet — no Tailwind setup required on your side. Import it once at the root of your app:

```ts
import '@stiaan/komorebi/styles'
```

Then use any component:

```tsx
import { Button, Input, Select } from '@stiaan/komorebi'

export function MyForm() {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Your name" />
      <Select
        placeholder="Pick a colour…"
        options={[
          { value: 'sakura', label: 'Sakura' },
          { value: 'matcha', label: 'Matcha' },
        ]}
      />
      <Button>Submit</Button>
    </div>
  )
}
```

The stylesheet bundles the design tokens, base styles, component styles, and the web-font imports (no global CSS reset is applied, so it won't clobber your own styles).

### Prop-driven by design

Every component is a **single import configured entirely through props** — there are no compound sub-parts to assemble. Data-driven components take arrays (`Select`/`RadioGroup` take `options`, `Tabs` takes `tabs`, `Table` takes `columns`+`data`, menus take `items`); overlay components take a `trigger` plus structural props (`title`, `description`, `footer`) with your body as `children`.

```tsx
import { Dialog, Button } from '@stiaan/komorebi'

<Dialog
  trigger={<Button>Edit profile</Button>}
  title="Edit profile"
  description="Update your details, then save."
  footer={<Button>Save</Button>}
>
  {/* your form fields */}
</Dialog>
```

---

## Components

### Primitives
| Component | Description |
|---|---|
| `Button` | Solid, outline, ghost, link, destructive variants |
| `Input` | Text input with consistent focus ring |
| `Textarea` | Multi-line input |
| `Label` | Accessible form label |
| `Select` | Dropdown select — pass `options` |
| `Checkbox` | Accessible checkbox with checked/indeterminate states |
| `RadioGroup` | Radio button group — pass `options` |
| `Switch` | Toggle switch |
| `Slider` | Range slider with grab cursor |
| `Toggle` | Single toggle button |
| `ToggleGroup` | Grouped toggles — pass `options` |
| `Avatar` | Image avatar with `src` and `fallback` initials |

### Feedback
| Component | Description |
|---|---|
| `Badge` | Status and category labels |
| `Alert` | Inline feedback banners (default, destructive) |
| `Progress` | Linear progress bar |
| `Skeleton` | Loading placeholder with shimmer |
| `Toaster` | Toast notification system (via Sonner) |

### Layout
| Component | Description |
|---|---|
| `Card` | Elevated content container |
| `Separator` | Horizontal/vertical divider |
| `ScrollArea` | Styled scrollable region |
| `Tabs` | Tabbed content panels |
| `Accordion` | Expandable disclosure sections |

### Overlays
| Component | Description |
|---|---|
| `Dialog` | Modal dialog — `trigger` + `title`/`footer` + children |
| `Sheet` | Side-drawer (top/right/bottom/left) |
| `Popover` | Floating panel — `trigger` + children |
| `Tooltip` | Hover tooltip — wraps children, pass `content` |
| `DropdownMenu` | Dropdown menu — `trigger` + `items` |
| `ContextMenu` | Right-click menu — wraps children, pass `items` |
| `Command` | Command palette — pass `groups` |

### Data
| Component | Description |
|---|---|
| `Table` | Data table — pass `columns` and `data` |
| `Calendar` | Date picker calendar (supports single, range, multi) |

### Typography
| Component | Description |
|---|---|
| `Heading` | h1–h6 with size, weight, and align props |
| `Text` | Paragraph text with size, variant (lead, muted, etc.) |
| `Code` / `CodeBlock` | Inline and block monospace code |

### Navigation
| Component | Description |
|---|---|
| `Link` | Styled anchor — auto external `target`/`rel` + ↗ icon |
| `Breadcrumb` | Breadcrumb trail — pass `items` |
| `Pagination` | Page navigation — pass `page` and `pageCount` |

### Composite
| Component | Description |
|---|---|
| `DatePicker` | Popover date picker built on Calendar |
| `ConfirmDialog` | Two-action confirmation modal |
| `SearchInput` | Input with search icon and clear button |

---

## Design System

### Colour palette

| Token | Light | Dark | Description |
|---|---|---|---|
| `--primary` | `261 14% 49%` | `261 16% 65%` | Greyed wisteria |
| `--secondary` | `261 10% 90%` | `261 8% 22%` | Pale wisteria |
| `--accent` | `349 18% 92%` | `349 12% 22%` | Blush sakura |
| `--background` | `60 11% 97%` | `0 0% 11%` | Warm off-white / near-black |
| `--muted` | `60 4% 90%` | `0 0% 20%` | Subtle surface |
| `--destructive` | `0 65% 52%` | `0 55% 50%` | Error red |

Raw palette names (available as Tailwind colour utilities):

| Name | Value | Description |
|---|---|---|
| `sakura` | `349 68% 88%` | Cherry blossom pink |
| `matcha` | `101 30% 79%` | Green tea |
| `sora` | `205 44% 81%` | Sky blue |
| `fuji` | `261 28% 83%` | Wisteria |
| `aki` | `35 71% 81%` | Autumn amber |
| `sumi` | `0 0% 17%` | Ink black |
| `shiro` | `60 11% 97%` | Paper white |
| `kiri` | `60 4% 90%` | Mist grey |

### Typography

| Role | Font |
|---|---|
| Headings | Shippori Mincho (serif) |
| Body | Jost (sans-serif) |
| Code | JetBrains Mono (monospace) |

The fonts are imported automatically by the stylesheet (from Google Fonts). To self-host or preconnect for performance, add the standard `<link rel="preconnect">` tags for `fonts.googleapis.com` and `fonts.gstatic.com`.

### Theming

All tokens are CSS custom properties, so you can re-skin Komorebi by overriding them — no build step required:

```css
:root {
  --primary: 210 40% 50%;   /* your brand colour, as HSL channels */
  --radius:  0.75rem;
}
```

---

## Dark mode

Dark mode is driven by a `.dark` class on a parent element (typically `<html>`) — any class toggler works. A common choice is [`next-themes`](https://github.com/pacocoursey/next-themes):

```tsx
import { ThemeProvider } from 'next-themes'

export function App({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
```

Adding the `.dark` class activates the dark palette automatically.

---

## Accessibility

- **Contrast** — all colour tokens meet WCAG 2.1 AA: 4.5:1 for text, 3:1 for interactive control borders and focus rings.
- **Keyboard & ARIA** — interaction, focus management, and roles are handled by the underlying Radix primitives.
- **Reduced motion** — animations and transitions collapse automatically when the user enables *prefers-reduced-motion*.

---

## Development

```bash
# Install dependencies
npm install

# Start Storybook (component explorer)
npm run storybook

# Build the library
npm run build

# Type check
npm run typecheck
```

Storybook runs at `http://localhost:6006`.

The build outputs an ES module (`dist/index.mjs`), CommonJS (`dist/index.cjs`), TypeScript declarations (`dist/index.d.ts`), and the stylesheet (`dist/komorebi.css`). Runtime dependencies are externalized, so the JavaScript bundle stays small.

---

## License

MIT
