import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "show": {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        mainVideoZoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        zoomOut: {
          '100%': { opacity: '0', transform: 'scale(0)' },
          '0%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      colors: {
        navy: '#2B3B4A',
        red: '#BA2129',
        eggCream: '#E0CC9E',
        sand: '#E0DED4',
        teal: '#3BABA3',
        clay: '#BEBDB2',
        orangesicle: '#F28F66',
        marigold: '#F2C724',
        canalRoyale: '#006182',
        lavenderLake: '#C27D9E',
        white: '#FFFFFF',
        green: '#146B5E',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "show": 'show 0.2s forwards',
        "zoomIn": 'zoomIn 2s ease-out forwards',
        "mainVideoZoomIn": 'zoomIn 2s ease-out forwards',
        "zoomOut": 'zoomOut 2s ease-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config