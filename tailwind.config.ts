import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        whitePrimary: "#FFFFFF",
        // =========================== ASH COLOR ===============================
        ashPrimary: "#909090",
        ashSecondary: "#626262",
        // =========================== BLACK COLOR ===============================
        blackPrimary: "#000000",
        blackSecondary: "#252525",
        // =========================== VIOLET COLOR ===============================
        violetPrimary: "#DADAFF",
        violetSecondary: "#BAB3F0",
        violetTernary: "#DBD7FC",
        violetQuaternary: "#3C3B6E",
        violetAltSecondary: "#5F5EBE",
        // =========================== BLUE COLOR ===============================
        bluePrimary: "#7A94D2",
        blueAltPrimary: "#DBEBFF",
        blueSecondary: "#ADC5FF",
        blueTernary: "#013668",
        // ========================== RED COLOR ===========================
        redPrimary: "#FE2217",
        // ========================== GREY COLOR ===========================
        greyPrimary: "#F3F3F3",
        // ========================== GREY COLOR ===========================
        greenPrimary: "#166A33",
        // textPrimary: "#252525",
        // violetPrimary: "#BAB3F0",
        // violetAltPrimary: "#5F5EBE",
        // violetSecondary: "#D8D7FC",
        // violetAltSecondary: "#3C3B6E",
        // violetTernary: "#DEDEFA",
        // violetAltTernary: "#908EFB",
        // violetQuaternary: "#514F93",
        // violetQuinary: "#706EFB",
        // bgViolet: "#DADAFF",
        // darkViolet: "#BAB3F0",
        // peachSecondary: "#FEF3F3",
        // greenPrimary: "#166A33",
        // greenSecondary: "#166b34",
        // greySecondary: "#f3f3f3",
        // greyPrimary: "#E8E6E6",
        // bluePrimary: "#012F7B",
        // blueAltPrimary: "#0D121F",
        // blueSecondary: "#B3D9FD",
        // blueTernary: "#202336",
        // blueQuaternary: "#3a3f61",
        // redPrimary: "#CD5161",
        // redSecondary: "#B22234",
        // redTernary: "#C9293D",
        // borderPrimary: "#E6E6E6",
        // outlinePrimary: "#0D5FB5",
        // whitePrimary: "#F4F4F4",
        // whiteAltPrimary: "#EEEEFC",
        // whiteSecondary: "#F2F2F2",
        // blackPrimary: "#636363",
        // blackAltPrimary: "#D2D2D2",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
