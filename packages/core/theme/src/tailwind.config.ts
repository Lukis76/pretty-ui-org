import type { Config } from 'tailwindcss'
import { withOptions } from 'tailwindcss/plugin'
import { padding, rounded } from './style'

export const config: Config = {
  content: [
    './node_modules/@pretty-ui-org/theme/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@pretty-ui-org/button/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        solid: '#17c964',
        bordered: '#f31260',
        light: '#006FEE',
        flat: '#ffb8eb',
        faded: '#f5a524',
        shadow: '#71717a',
        ghost: '#7828c8',
      },
      padding: padding,
      borderRadius: rounded,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
