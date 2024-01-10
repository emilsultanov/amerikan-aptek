import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center: true
    },
    extend: {
      colors:{
        'white-0/7': "rgba(255, 255, 255, 0.7)"
      },
      boxShadow:{
        '3xl': '0 0 30px rgba(7,51,84,0.17)'
      },
      backgroundImage: {
        'section-0': "radial-gradient(circle at top right,rgba(255,255,255,0) 20%,rgba(1,77,183,0.9) 100%),url('/pharmacy-05.jpg')",
        'section-4': "radial-gradient(circle at top right,rgba(1,77,183,0.5) 0%,rgba(255,255,255,0) 100%),url('/pharmacy-06.jpg')"
      }
    },
  },
  plugins: [],
}
export default config
