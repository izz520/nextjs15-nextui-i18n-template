import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bold: 'var(--text-bold)',
        main: 'var(--text-main)',
        tips: 'var(--text-tips)',
        white: 'var(--text-white)',
        primary: 'var(--primary-color)',
        cardBg: 'var(--card-bg)',
        error: 'var(--error)',
        success: 'var(--success)',
        black40: 'var(--text-black40)',
      },
      padding: {
        18: '18px',
      },
      boxShadow: {
        footer: '0px -1px 0px 0px #0000000D',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        radius: {
          medium: '8px', // rounded-medium
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#FF922D',
              foreground: '#ffffff',
            },
            focus: '#FF922D',
          },
        },
      },
    }),
  ],
}
export default config
