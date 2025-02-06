import type { Config } from "tailwindcss";
import daisyui from "daisyui"
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
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
  plugins: [daisyui,
    flowbite.plugin(),
  ],
  daisyui: {
    themes: ["light"],
  }
} satisfies Config;
