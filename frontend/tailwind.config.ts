import type { Config } from 'tailwindcss'

export default {
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

