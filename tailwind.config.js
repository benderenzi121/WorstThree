/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"wotlk-blue": "#2f3f54",
				"wotlk-light-blue": "#e7eefd",
			},
		},
	},
	plugins: [],
}
