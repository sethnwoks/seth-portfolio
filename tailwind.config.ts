import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        accent: "#5eead4",
        soft: "#94a3b8",
        bright: "#e2e8f0",
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.16em",
      },
    },
  },
  plugins: [],
} satisfies Config;
