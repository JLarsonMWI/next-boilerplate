/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				theme: {
					light: '#FBFEF9',
					dark: '#191923',
					green: '#63A46C',
					grey: '#898980',
					orange: '#FE654F',
				},
			},
		},
	},
	plugins: [],
};
