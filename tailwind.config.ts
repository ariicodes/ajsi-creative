import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gunmetal: "#113744",
        cordovan: "#843D3B",
        "brown-sugar": "#A65D32",
        "cambridge-blue": "#88A19B",
        almond: "#F1DECE",
      },
      fontFamily: {
        "serif: ['var(--font-frank-ruhl-libre)', 'serif']": [],
        "sans: ['var(--font-quicksand)', 'sans-serif']": [],
      },
    },
  },
  plugins: [],
};
export default config;
