/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'inputs-color': '#AAAAAA',
				'gray-bg': '#EDEDED',
				'tag-bg': '#A6A6A6',
			},
			fontSize: {
				'headings-h2': '20px',
				'headings-h3': '16px',
				label: '12px',
				tag: '13px',
			},
		},
	},
	plugins: [],
}
