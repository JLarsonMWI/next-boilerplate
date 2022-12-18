/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // true, false, media, class
	theme: {
		extend: {
			colors: {
				'th-nav': 'var(--nav)',
				'th-background-primary': 'var(--background-primary)',
				'th-background-secondary': 'var(--background-secondary)',
				'th-text-primary': 'var(--text-primary)',
				'th-text-secondary': 'var(--text-secondary)',
				'th-text-link': 'var(--text-link)',
				theme: {
					light: '#FBFEF9',
					dark: '#191923',
					// green: 'colors.green.500',
					// grey: 'colors.zinc.500',
					// orange: 'colors.orange.500',
					// rose: 'colors.rose.500',
					// blue: 'colors.blue.500',
					// red: 'colors.red.500',
					// emerald: 'colors.emerald.500',
					// teal: 'colors.teal.500',
					// sky: 'colors.sky.500',
					// cyan: 'colors.cyan.500',
					// fuchsia: 'colors.fuchsia.500',
					// violet: 'colors.violet.500',
					// indigo: 'colors.indigo.500',
					// pink: 'colors.pink.500',
					// purple: 'colors.purple.500',
					// amber: 'colors.amber.500',
				},
			},
		},
	},
	plugins: [],
};
