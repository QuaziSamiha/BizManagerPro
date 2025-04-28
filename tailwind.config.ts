import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; // ✅ Import it properly

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
        silver: "#F1F1F1",
        blueActual: "#002868",
        blueHover: "#032e73",
        redActual: "#bf0a30",
        navyBlue: "#0A3161",
        buttonRed: "#B31942",
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
        violetTernary2: "#7A94D2",
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
        blackPrimary: "#636363",
        blackAltPrimary: "#D2D2D2",
        blueAltSecondary: "#353C54",
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
  plugins: [tailwindcssAnimate],
  // plugins: [require("tailwindcss-animate")],
} satisfies Config;

// import type { Config } from "tailwindcss";

// export default {
//   darkMode: ["class"],
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: "1rem",
//       screens: {
//         sm: "640px",
//         md: "768px",
//         lg: "1024px",
//         xl: "1280px",
//         "2xl": "1536px",
//       },
//     },
//     extend: {
//       colors: {
//         whitePrimary: "#FFFFFF",
//         // =========================== ASH COLOR ===============================
//         ashPrimary: "#909090",
//         ashSecondary: "#626262",
//         // =========================== BLACK COLOR ===============================
//         blackPrimary: "#000000",
//         blackSecondary: "#252525", // text primary
//         // =========================== VIOLET COLOR ===============================
//         violetPrimary: "#DADAFF",
//         violetSecondary: "#BAB3F0", // violetPrimary
//         violetTernary: "#DBD7FC", // violetSecondary
//         violetQuaternary: "#3C3B6E", // violetAltSecondary
//         violetAltSecondary: "#5F5EBE", // violetAltSecondary
//         violetTernary2: "#DEDEFA", // // violetTernary: "#DEDEFA",
//         violetAltTernary: "#908EFB",
//         // =========================== BLUE COLOR ===============================
//         bluePrimary: "#7A94D2",
//         blueAltPrimary: "#DBEBFF",
//         blueSecondary: "#ADC5FF",
//         blueAltSecondary: '#353C54',
//         blueTernary: "#013668",
//         blueDark: '#202234',
//         // ========================== RED COLOR ===========================
//         redPrimary: "#FE2217",
//         // ========================== GREY COLOR ===========================
//         greyPrimary: "#F3F3F3",
//         greySecondary: '#7A7A7A',
//         // ========================== GREEn COLOR ===========================
//         greenPrimary: "#166A33",

//         // violetQuaternary: "#514F93",
//         violetQuinary: "#706EFB",

//         bgViolet: "#DADAFF",
//         darkViolet: "#BAB3F0",
//         peachSecondary: "#FEF3F3",
//         // greenPrimary: "#166A33",
//         greenSecondary: "#166b34",
//         // greySecondary: "#f3f3f3",
//         // greyPrimary: "#E8E6E6",
//         // bluePrimary: "#012F7B",
//         // blueAltPrimary: "#0D121F",
//         // blueSecondary: "#B3D9FD",
//         // blueTernary: "#202336",
//         blueQuaternary: "#3a3f61",
//         // redPrimary: "#CD5161",
//         redSecondary: "#B22234",
//         redTernary: "#C9293D",
//         borderPrimary: "#E6E6E6",
//         outlinePrimary: "#0D5FB5",
//         // whitePrimary: "#F4F4F4",
//         whiteAltPrimary: "#EEEEFC",
//         whiteSecondary: "#F2F2F2",
//         // blackPrimary: "#636363",
//         blackAltPrimary: "#D2D2D2",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;
