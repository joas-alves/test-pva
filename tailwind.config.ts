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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        'primary-light': "var(--primary-light)",
        secondary: "var(--secondary)",
        info: "var(--info)",
        'dark-blue': "var(--dark-blue)",
        'dark-blue-100': "var(--dark-blue-100)",
        'dark-green': "var(--dark-green)",
        'dark-info': "var(--dark-info)",
        warning: "var(--yellow)",
      },
      boxShadow: {
        paper: '0px -2px 5px 0 #B8B8B815, 0px 13px 13px 0 #B8B8B815'
      },
      backgroundSize: {
        '140%': '140%',
        '57%': '57%',
      },
      backgroundPosition: {
        'center-64%': 'center 64%'
      },
    },
  },
  plugins: [],
};
export default config;
