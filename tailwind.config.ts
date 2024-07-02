import type { Config } from "tailwindcss";

const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				"t-reflection": "inset 0px 1.5px 0px 0px rgba(255, 255, 255, 0.6)",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			colors: {
				// Dark theme
				dt0: "#bcee66",
				dt1: "#0f0f0f",
				dt2: "#212121",
				dt3: "#2d2d2d",
				dt4: "#404040",
			},
			fontFamily: {
				VT323: ["VT323", "monospace"],
				primary: ["Oxanium", "monospace"],
				second: ["Jura", "monospace"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [addVariablesForColors],
};

export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
