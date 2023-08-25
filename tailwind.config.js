/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			background: 'hsl(var(--border))',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			transitionDelay: {
				'2000': '2000ms'
			},
			screens: {
				'300p': '340px',
				'500p': '520px',
				'768p': '820px',
				'1024p': '1120px',
				'1080p': '1640px',
				'4k': '2250px'
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				},
				'appearance-kf': {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				'top-appearance-moving-kf': {
					from: { translate: '0 -50px', opacity: 0 },
					to: { translate: '0 0', opacity: 1 }
				},
				'blur-effect-kf': {
					from: { filter: 'blur(15px)', opacity: 0.4 },
					to: { filter: 'blur(0)', opacity: 1 }
				},
				'sunshine-effect-kf': {
					from: { scale: '1', opacity: 0.6 },
					to: { scale: '1.6', opacity: 0 }
				},
				'left-cloud-effect-kf': {
					'0%': { translate: '-10px' },
					'50%': { translate: '0' },
					'100%': { translate: '-10px' }
				},
				'right-cloud-effect-kf': {
					'0%': { translate: '10px' },
					'50%': { translate: '0' },
					'100%': { translate: '10px' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'text-appearance': 'appearance-kf 1.5s ease-out',
				'top-appearance-moving': 'top-appearance-moving-kf 1s ease-out',
				'blur-animation': 'blur-effect-kf 0.8s ease-out',
				'sunshine-effect': 'sunshine-effect-kf 2s infinite',
				'left-cloud-effect': 'left-cloud-effect-kf 6s infinite',
				'right-cloud-effect': 'right-cloud-effect-kf 10s infinite'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
}