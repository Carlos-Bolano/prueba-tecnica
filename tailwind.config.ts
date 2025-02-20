import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          navyBlue: "hsl(213, 96%, 18%)",
          purpleBlue: "hsl(243, 100%, 62%)",
          pastelBlue: "hsl(228, 100%, 84%)",
          lightBlue: "hsl(206, 94%, 87%)",
          strawberryRed: "hsl(354, 84%, 57%)",
        },
        neutral: {
          coolGray: "hsl(231, 11%, 63%)",
          lightGray: "hsl(229, 24%, 87%)",
          magnoliaWhite: "hsl(217, 100%, 97%)",
          alabasterWhite: "hsl(231, 100%, 99%)",
          pureWhite: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        ubuntu: "var(--font-ubuntu), sans-serif",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "blur-shadow": "0px 0px 62px -12px rgba(192, 196, 198, 1)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
