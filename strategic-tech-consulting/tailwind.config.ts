import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        border: "var(--border)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        accent2: "var(--accent-2)",
      },
      boxShadow: {
        glow: "0 0 80px rgba(59, 130, 246, 0.18)",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 35%), radial-gradient(circle at 80% 20%, rgba(99,102,241,0.15), transparent 30%)",
      },
    },
  },
  plugins: [],
};

export default config;
