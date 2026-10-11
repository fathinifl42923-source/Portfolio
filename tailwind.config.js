/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#09050e",
        darkCard: "#120a20",
        darkCardBorder: "#2a1647",
        purpleMain: "#a855f7",
        purpleLight: "#c084fc",
        purpleDark: "#6b21a8",
        purpleAccent: "#7c3aed",
        lavender: "#e9d5ff",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(168, 85, 247, 0.25)',
        'glow-md': '0 0 25px rgba(168, 85, 247, 0.35)',
        'glow-lg': '0 0 45px rgba(168, 85, 247, 0.45)',
        'glow-card': '0 8px 32px 0 rgba(112, 26, 230, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};