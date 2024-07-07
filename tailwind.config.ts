import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // {
    //   pattern: /bg-\[url\(.*\)\]/,
    // },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        redish: {
          10: "#400101",
          20: "#700000",
          30: "#FAF5F5",
        },
        greyish: {
          10: "#757575",
          30: "#18181B",
        },
        pinkish: {
          10: "rgba(238, 108, 108, 0.2)",
        },
        orangish: {
          20: "#F22000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
