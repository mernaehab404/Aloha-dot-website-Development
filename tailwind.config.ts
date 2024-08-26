import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      colors: {
        customBlack: '#1F1F1F',
      },
      inset: {
        '-8': '-2rem', // Adjust the value according to your needs
      },
    }},
  
} satisfies Config;

export default config;
