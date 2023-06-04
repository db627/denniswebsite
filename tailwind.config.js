/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Here you can add your dark theme configurations
      mytheme: {
        colors: {
          primary: "#F4F5F7", // Off-white to give a softer look
          secondary: "#A4AAB3", // Slightly brighter gray to make the secondary elements pop
          accent: "#E0B1FC", // A softer purple to give a more modern look
          neutral: "#1F2235", // Slightly brighter to soften the dark background and make it more inviting
          "base-100": "#F4F5F7", // Off-white as the base color to keep the design light
          info: "#59C0F9", // A softer blue to not draw too much attention
          success: "#48C788", // A more earthy green for a modern, minimal look
          warning: "#FCC040", // A less harsh yellow for warnings
          error: "#F87373", // A softer red to not be too alarming
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["mytheme"],
  },
};
