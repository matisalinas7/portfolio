/** @type {import('tailwindcss').Config} */
// Los colores salen de variables CSS (ver Layout.astro) para que el tema
// claro/oscuro cambie en un solo lugar y no haga falta `dark:` en cada clase.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

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
				bg: token('bg'),
				surface: token('surface'),
				fg: token('fg'),
				muted: token('muted'),
				subtle: token('subtle'),
				line: token('line'),
				accent: token('accent'),
			},
			maxWidth: {
				page: '64rem',
			},
		},
	},
	plugins: [],
}
