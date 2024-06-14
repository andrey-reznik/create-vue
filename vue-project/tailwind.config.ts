import exposeColors from '@tailwind-plugin/expose-colors'
import type { Config } from 'tailwindcss'
import breakpointsInspector from 'tailwindcss-breakpoints-inspector'
import defaultTheme from 'tailwindcss/defaultTheme'

const colors = {
  brand: {
    pine: '#2B2A29',
    orange: {
      DEFAULT: '#FE8500',
      100: '#F7A900',
      300: '#Fc9629',
      500: '#FE8500',
      700: '#D16D02',
      900: '#9E5506'
    },
    blue: {
      DEFAULT: '#2B89C4',
      100: '#43AEF0',
      300: '#379CDB',
      500: '#2B89C4',
      700: '#2E4873',
      900: '#0F3D66'
    },
    red: {
      DEFAULT: '#FF3E34',
      100: '#FF7A5C',
      500: '#FF3E34',
      600: '#C42018',
      900: '#780000'
    },
    green: {
      DEFAULT: '#139460',
      100: '#33BD86',
      500: '#139460',
      600: '#107D51',
      900: '#055434'
    },
    pink: {
      DEFAULT: '#CE4792',
      100: '#F56AB6',
      500: '#CE4792',
      600: '#C73A87',
      900: '#AD2972'
    }
  },
  surface: {
    DEFAULT: '#71717A',
    0: '#FFFFFF',
    50: '#F7F7F8',
    100: '#EAEAEB',
    200: '#D5D5D8',
    300: '#BABABF',
    400: '#9A9AA2',
    500: '#71717A',
    600: '#65656D',
    700: '#58585F',
    800: '#4A4A4F',
    900: '#313135',
    950: '#27272A'
  }
}

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        ...colors,
        primary: colors.brand[process.env.PRIMARY_COLOR || 'orange'],
        'primary-inverse': 'rgb(var(--primary-inverse))',
        'primary-hover': 'rgb(var(--primary-hover))',
        'primary-active-color': 'rgb(var(--primary-active-color))',

        'primary-highlight': 'rgb(var(--primary)/var(--primary-highlight-opacity))',
        'primary-highlight-inverse': 'rgb(var(--primary-highlight-inverse))',
        'primary-highlight-hover': 'rgba(var(--primary),var(--primary-highlight-hover-opacity))'
      }
    },
    breakpointsInspector: {
      position: ['bottom', 'right']
    }
  },
  plugins: [
    exposeColors({
      prefix: '-',
      mode: 'rgb',
      extract: ['primary', 'surface', 'brand']
    }),
    breakpointsInspector
  ]
} satisfies Config
