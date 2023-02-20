/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{svelte,html}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
	daisyui: {
		themes: [
			{
				dark: {
					primary: "#004787",
					"primary-focus": "#0062b8",
					"primary-content": "#D5E3FF",

					secondary: "#553F5D",
					"secondary-focus": "#72557c",
					"secondary-content": "#F7D8FE",

					accent: "#428bff",
					"accent-focus": "#75aaff",
					"accent-content": "#00315F",

					neutral: "#3D4758",
					"neutral-focus": "#525f75",
					"neutral-content": "#D9E3F8",

					"base-100": "#141415",
					"base-200": "#0f0f10",
					"base-300": "#0a0a0b",
					"base-content": "#f0f3f4",

					info: "#1e7ab3",
					success: "#1eb337",
					warning: "#b3a61e",
					error: "#B3261E",

					"--rounded-box": "1rem",
					"--rounded-btn": "2rem",
					"--rounded-badge": "2rem",

					"--animation-btn": "0",
					"--animation-input": "0.2s",

					"--btn-text-case": "capitalize",
					"--navbar-padding": "0.75rem",
					"--border-btn": "2px",
				},
			},
			{
				light: {
					primary: "#004787",
					"primary-focus": "#0062b8",
					"primary-content": "#D5E3FF",

					secondary: "#553F5D",
					"secondary-focus": "#72557c",
					"secondary-content": "#F7D8FE",

					accent: "#428bff",
					"accent-focus": "#75aaff",
					"accent-content": "#00315F",

					neutral: "#3D4758",
					"neutral-focus": "#525f75",
					"neutral-content": "#D9E3F8",

					"base-100": "#f0f3f4",
					"base-200": "#c4d0d4",
					"base-300": "#a6b9bf",
					"base-content": "#141415",

					info: "#1e7ab3",
					success: "#1eb337",
					warning: "#b3a61e",
					error: "#B3261E",

					"--rounded-box": "1rem",
					"--rounded-btn": "2rem",
					"--rounded-badge": "2rem",

					"--animation-btn": "0",
					"--animation-input": "0.2s",

					"--btn-text-case": "capitalize",
					"--navbar-padding": "0.75rem",
					"--border-btn": "2px",
				},
			},
		],
	},
};
