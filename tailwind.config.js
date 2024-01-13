/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"light-cyan": "hsl(193, 38%, 86%)",
				"neon-green": "hsl(150, 100%, 66%)",
				"grayish-blue": "hsl(217, 19%, 38%)",
				"dark-grayish-blue": "hsl(217, 19%, 24%)",
				"dark-blue": "hsl(218, 23%, 16%)"
			},
			fontFamily: {
				"manrope": "Manrope"
			},
			boxShadow: {
				"custom" : "0 0 5px 5px hsla(150, 100%, 66%,0.1), 0 0 15px 15px hsla(150, 100%, 66%,0.3)"
			}
		},
	},
	plugins: [],
}