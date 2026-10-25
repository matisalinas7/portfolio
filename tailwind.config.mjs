/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Onest Variable"', 'system-ui', '-apple-system', 'sans-serif'],
				mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
			},
			colors: {
				accent: {
					light: '#4f46e5',
					DEFAULT: '#6366f1',
					dark: '#818cf8',
				},
				surface: {
					light: '#ffffff',
					'light-subtle': '#f7f7f9',
					'light-muted': '#f0f0f3',
					dark: '#121215',
					'dark-subtle': '#18181d',
					'dark-muted': '#22222a',
				},
			},
			boxShadow: {
				'subtle-light': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
				'card-light': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
				'card-dark': '0 8px 30px -4px rgba(0, 0, 0, 0.6)',
				'glow-accent': '0 0 24px -4px rgba(99, 102, 241, 0.25)',
			},
			animation: {
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'fade-in': 'fadeIn 0.5s ease-out forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
}