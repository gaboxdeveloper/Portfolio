/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Archivo Variable', 'Archivo', 'system-ui', 'sans-serif'],
			},
			colors: {
				base: '#0b0b0b',
				panel: '#111111',
				ink: '#f2f2f2',
				'ink-secondary': '#b4b4b4',
				silver: '#a8a8a8',
				'silver-muted': '#8a8a8a',
				placeholder: '#5a5a5a',
				ghost: '#454545',
			},
			letterSpacing: {
				tightest2: '-0.05em',
			},
		},
	},
	plugins: [],
};
