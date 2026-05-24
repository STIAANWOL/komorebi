import type { Config } from 'tailwindcss'
import base from './tailwind.config'

// Build-only Tailwind config for the distributable stylesheet.
// Preflight is disabled so the shipped CSS doesn't clobber a consumer's own
// global reset — only komorebi's tokens, base layer, and the utility classes
// actually used by components are emitted.
export default {
  ...base,
  content: ['./src/**/*.{ts,tsx}'],
  corePlugins: { preflight: false },
} satisfies Config
