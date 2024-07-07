import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "#323232",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#808080",
          "primary-content": "#ccc",
          "primary-focus": "#fff",
          secondary: "#fff",
          "secondary-content": "#007acc",
          "secondary-focus": "#3a3d41",
          accent: "#007acc",
          "accent-content": "#fff",
          "accent-focus": "#D4D4D8",
          neutral: "#fff",
          "neutral-content": "#000",
          "neutral-focus": "#3a3d41",
          "base-100": "#1e1e1e",
          "base-200": "#212121",
          "base-300": "#181818",
          "base-content": "#ccc",
          info: "#0284c7",
          success: "#53c22b",
          warning: "#e6c029",
          error: "#ff5a52",
        },
      },
    ],
  },
};
export default config;
