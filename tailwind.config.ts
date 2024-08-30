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
        n950: "#060214",
        n900: "#0D0627",
        n800: "#171035",
        n700: "#282244",
        n600: "#6B648B",
        n500: "#9F99BA",
        n400: "#C9C4E2",
        n300: "#EEEBFF",
        purple900: "#843DFF",
        purple800: "#B083FF",
        purple700: "#DAC5FF",
        emerald900: "#31D292",
        emerald800: "#80E9BF",
        emerald700: "#C2FFE7",
        cyan900: "#41A2F6",
        cyan800: "#7DC3FF",
        cyan700: "#D3EBFF",
        darkerBlue: "#0C0624",
        darkBlue: "#0A0033",
        grayBlue: "#1B1E32",
        emerald: "#31D292",
        cyan: "#41A2F6",
        cyanOpac: "rgba(65,162,246,.5)",
        purple: "#843DFF",
        grey: "#BDBDBD",
        lightGradient: "linear-gradient(180deg, rgba(132,61,255,1) 0%, rgba(67,161,246,1) 100%)",
        darkGradient: "linear-gradient(180deg, rgba(97,101,215,1) 0%, rgba(170,128,249,1) 100%)"
      },
      backgroundImage: {
        "bg": "linear-gradient(90deg, rgba(65,162,246,0.3) -10%, rgba(12,6,36,1) 15%, rgba(132, 61, 255, 0.2) 50%, rgba(12,6,36,1) 85%, rgba(49,210,146,0.3) 110%)",
        "light-gradient": "linear-gradient(360deg, rgba(65,162,246,.5) 0%, rgba(132,61,255,.5) 100%)",
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
