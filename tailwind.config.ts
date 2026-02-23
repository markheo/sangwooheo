import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:             '#ffffff',
        ink:            '#0a0a0a',
        muted:          '#6b7280',
        subtle:         '#9ca3af',
        faint:          '#d1d5db',
        border:         '#e5e7eb',
        'border-light': '#f3f4f6',
        accent:         '#2563eb',
      },
      fontFamily: {
        sans:  ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        content: '680px',
      },
    },
  },
  plugins: [],
}

export default config
