import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        bgPrimary: "#202234",
        bgSecondary: "#e7e7e7",
        secondary: "#000000",
        textPrimary: "#252525",
        violetPrimary: "#BAB3F0",
        violetAltPrimary: "#5F5EBE",
        violetSecondary: "#D8D7FC",
        violetAltSecondary: "#3C3B6E",
        violetTernary: "#DEDEFA",
        violetAltTernary: "#908EFB",
        violetQuaternary: "#514F93",
        violetQuinary: "#706EFB",
        bgViolet: "#DADAFF",
        darkViolet: "#BAB3F0",
        peachSecondary: "#FEF3F3",
        greenPrimary: "#166A33",
        greenSecondary: "#166b34",
        greySecondary: "#f3f3f3",
        greyPrimary: "#E8E6E6",
        bluePrimary: "#012F7B",
        blueAltPrimary: "#0D121F",
        blueSecondary: "#B3D9FD",
        blueTernary: "#202336",
        blueQuaternary: "#3a3f61",
        redPrimary: "#CD5161",
        redSecondary: "#B22234",
        redTernary: "#C9293D",
        borderPrimary: "#E6E6E6",
        outlinePrimary: "#0D5FB5",
        whitePrimary: "#F4F4F4",
        whiteAltPrimary: "#EEEEFC",
        whiteSecondary: "#F2F2F2",
        blackPrimary: '#636363',
        blackAltPrimary: '#D2D2D2',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
