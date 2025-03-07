/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
	  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  container: {
		center: true,
		padding: {
		  DEFAULT: '1rem',
		  sm: '2rem',
		  lg: '4rem',
		  xl: '5rem',
		  '2xl': '6rem'
		},
		screens: {
		  '2xl': '1400px'
		}
	  },
	  extend: {
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  'card-foreground': 'hsl(var(--card-foreground))',
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  'popover-foreground': 'hsl(var(--popover-foreground))',
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
			50: 'hsl(var(--primary-50))',
			100: 'hsl(var(--primary-100))',
			200: 'hsl(var(--primary-200))',
			300: 'hsl(var(--primary-300))',
			400: 'hsl(var(--primary-400))',
			500: 'hsl(var(--primary-500))',
			600: 'hsl(var(--primary-600))',
			700: 'hsl(var(--primary-700))',
			800: 'hsl(var(--primary-800))',
			900: 'hsl(var(--primary-900))',
			950: 'hsl(var(--primary-950))'
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
			50: 'hsl(var(--secondary-50))',
			100: 'hsl(var(--secondary-100))',
			200: 'hsl(var(--secondary-200))',
			300: 'hsl(var(--secondary-300))',
			400: 'hsl(var(--secondary-400))',
			500: 'hsl(var(--secondary-500))',
			600: 'hsl(var(--secondary-600))',
			700: 'hsl(var(--secondary-700))',
			800: 'hsl(var(--secondary-800))',
			900: 'hsl(var(--secondary-900))',
			950: 'hsl(var(--secondary-950))'
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
			50: 'hsl(var(--accent-50))',
			100: 'hsl(var(--accent-100))',
			200: 'hsl(var(--accent-200))',
			300: 'hsl(var(--accent-300))',
			400: 'hsl(var(--accent-400))',
			500: 'hsl(var(--accent-500))',
			600: 'hsl(var(--accent-600))',
			700: 'hsl(var(--accent-700))',
			800: 'hsl(var(--accent-800))',
			900: 'hsl(var(--accent-900))',
			950: 'hsl(var(--accent-950))'
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
			50: 'hsl(var(--destructive-50))',
			100: 'hsl(var(--destructive-100))',
			200: 'hsl(var(--destructive-200))',
			300: 'hsl(var(--destructive-300))',
			400: 'hsl(var(--destructive-400))',
			500: 'hsl(var(--destructive-500))',
			600: 'hsl(var(--destructive-600))',
			700: 'hsl(var(--destructive-700))',
			800: 'hsl(var(--destructive-800))',
			900: 'hsl(var(--destructive-900))',
			950: 'hsl(var(--destructive-950))'
		  },
		  success: {
			DEFAULT: 'hsl(var(--success))',
			foreground: 'hsl(var(--success-foreground))',
			50: 'hsl(var(--success-50))',
			100: 'hsl(var(--success-100))',
			200: 'hsl(var(--success-200))',
			300: 'hsl(var(--success-300))',
			400: 'hsl(var(--success-400))',
			500: 'hsl(var(--success-500))',
			600: 'hsl(var(--success-600))',
			700: 'hsl(var(--success-700))',
			800: 'hsl(var(--success-800))',
			900: 'hsl(var(--success-900))',
			950: 'hsl(var(--success-950))'
		  },
		  warning: {
			DEFAULT: 'hsl(var(--warning))',
			foreground: 'hsl(var(--warning-foreground))',
			50: 'hsl(var(--warning-50))',
			100: 'hsl(var(--warning-100))',
			200: 'hsl(var(--warning-200))',
			300: 'hsl(var(--warning-300))',
			400: 'hsl(var(--warning-400))',
			500: 'hsl(var(--warning-500))',
			600: 'hsl(var(--warning-600))',
			700: 'hsl(var(--warning-700))',
			800: 'hsl(var(--warning-800))',
			900: 'hsl(var(--warning-900))',
			950: 'hsl(var(--warning-950))'
		  },
		  info: {
			DEFAULT: 'hsl(var(--info))',
			foreground: 'hsl(var(--info-foreground))',
			50: 'hsl(var(--info-50))',
			100: 'hsl(var(--info-100))',
			200: 'hsl(var(--info-200))',
			300: 'hsl(var(--info-300))',
			400: 'hsl(var(--info-400))',
			500: 'hsl(var(--info-500))',
			600: 'hsl(var(--info-600))',
			700: 'hsl(var(--info-700))',
			800: 'hsl(var(--info-800))',
			900: 'hsl(var(--info-900))',
			950: 'hsl(var(--info-950))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
			'6': 'hsl(var(--chart-6))',
			'7': 'hsl(var(--chart-7))',
			'8': 'hsl(var(--chart-8))',
			'9': 'hsl(var(--chart-9))',
			'10': 'hsl(var(--chart-10))'
		  }
		},
		spacing: {
		  container: '2rem',
		  'container-lg': '4rem',
		  section: '5rem',
		  xs: '0.25rem',
		  sm: '0.5rem',
		  md: '1rem',
		  lg: '1.5rem',
		  xl: '2rem',
		  '2xl': '3rem'
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		keyframes: {
		  'accordion-down': {
			from: {
			  height: '0'
			},
			to: {
			  height: 'var(--radix-accordion-content-height)'
			}
		  },
		  'accordion-up': {
			from: {
			  height: 'var(--radix-accordion-content-height)'
			},
			to: {
			  height: '0'
			}
		  }
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out'
		}
	  }
	},
	plugins: [require("tailwindcss-animate")],
  }