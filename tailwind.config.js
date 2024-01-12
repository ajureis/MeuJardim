/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"main-green": "#587a3a",
				"secondary-green": "#7E9B5C",
				"main-light-grey": "#F7F7F7",
			},
		},
	},
	plugins: [],
};
