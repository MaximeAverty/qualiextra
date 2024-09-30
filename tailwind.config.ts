import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(121, 140, 115, 1)',
        primaryLight: 'rgba(232, 241, 230, 1)',
        border: 'rgba(214, 214, 217, 1)',
        subText: 'rgba(100, 97, 111, 1)',
        grayLight: "rgba(240, 240, 241, 1)",
        textShape: "rgba(147, 144, 154, 1)",
        textPrimary: "rgba(16, 0, 48, 1)"
      },
      fontFamily: {
        base: ["BaseCircle", "sans-serif"]
      }
    },
    screens: {
      '2xl': '2240px',  // Écran très large
      'xl': '1440px',   // Écran large
      'lg': '1279px',   // Écran laptop
      'md': '832px',    // Tablette large
      'sm': '831px',    // Tablette petite
      'xs': '320px'     // Mobile
    },
  },
  plugins: [],
}
export default config
