import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sakura:  'hsl(var(--color-sakura) / <alpha-value>)',
        matcha:  'hsl(var(--color-matcha) / <alpha-value>)',
        sora:    'hsl(var(--color-sora) / <alpha-value>)',
        fuji:    'hsl(var(--color-fuji) / <alpha-value>)',
        aki:     'hsl(var(--color-aki) / <alpha-value>)',
        sumi:    'hsl(var(--color-sumi) / <alpha-value>)',
        shiro:   'hsl(var(--color-shiro) / <alpha-value>)',
        kiri:    'hsl(var(--color-kiri) / <alpha-value>)',

        border:      'hsl(var(--border) / <alpha-value>)',
        input:       'hsl(var(--input) / <alpha-value>)',
        ring:        'hsl(var(--ring) / <alpha-value>)',
        background:  'hsl(var(--background) / <alpha-value>)',
        foreground:  'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT:    'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT:    'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
      },

      fontFamily: {
        serif: ['"Shippori Mincho"', 'Georgia', 'serif'],
        sans:  ['Jost', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },

      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm:      'calc(var(--radius) - 2px)',
        md:      'var(--radius)',
        lg:      'calc(var(--radius) + 4px)',
        xl:      'calc(var(--radius) + 8px)',
        '2xl':   'calc(var(--radius) + 16px)',
      },

      keyframes: {
        'komorebi-in': {
          '0%':   { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'komorebi-out': {
          '0%':   { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(6px)' },
        },
        'petal-fall': {
          '0%':   { opacity: '0', transform: 'translateY(-4px) rotate(-3deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-from-top': {
          '0%':   { transform: 'translateY(-8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-from-bottom': {
          '0%':   { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-from-left': {
          '0%':   { transform: 'translateX(-8px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-from-right': {
          '0%':   { transform: 'translateX(8px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },

      animation: {
        'komorebi-in':          'komorebi-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'komorebi-out':         'komorebi-out 0.2s ease-in',
        'petal-fall':           'petal-fall 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'accordion-down':       'accordion-down 0.2s ease-out',
        'accordion-up':         'accordion-up 0.2s ease-out',
        shimmer:                'shimmer 1.8s infinite linear',
        'fade-in':              'fade-in 0.25s ease-out',
        'slide-in-from-top':    'slide-in-from-top 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-from-bottom': 'slide-in-from-bottom 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-from-left':   'slide-in-from-left 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-from-right':  'slide-in-from-right 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
}

export default config
