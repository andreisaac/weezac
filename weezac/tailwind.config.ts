import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    daisyui: {
      themes: ["light", "dark", "dracula"],
    },
    extend: {
      colors: {
        darkerBlue: "#0C0624",
        darkBlue: "#0A0033",
        grayBlue: "#1B1E32",
        emerald: "#31D292",
        cyan: "#41A2F6",
        purple: "#843DFF",
        grey: "#BDBDBD",
        lightGradient: "linear-gradient(180deg, rgba(132,61,255,1) 0%, rgba(67,161,246,1) 100%)",
        darkGradient: "linear-gradient(180deg, rgba(97,101,215,1) 0%, rgba(170,128,249,1) 100%)"
      },
      backgroundImage: {
        "bg": "linear-gradient(90deg, rgba(65,162,246,0.3) -10%, rgba(12,6,36,1) 15%, rgba(132, 61, 255, 0.2) 50%, rgba(12,6,36,1) 85%, rgba(49,210,146,0.3) 110%)",
        "light-gradient": "linear-gradient(180deg, rgba(132,61,255,0.5) 0%, rgba(67,161,246,0.5) 100%)",
        "dark-gradient": "linear-gradient(180deg, rgba(97,101,215,0.3) 0%, rgba(170,128,249,0.3) 100%)",
      },
      boxShadow: {
        "contact": "4px 6px 1px 1px #31D292",
        "contact-active": "2px 4px 1px 1px #31D292",
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
