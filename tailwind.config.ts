import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bai: ['var(--font-bai-jamjuree)', 'bai-jamjuree'],
        ibm: ['var(--font-ibm-plex-sans-thai)', 'ibm-plex-sans-thai']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui,],
  daisyui: {
    themes: ["light"],
  }
} satisfies Config;
