import { createTheme } from "@mui/material/styles";
export const themeSettings = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#C19A6B",
		},
		secondary: {
			main: "#00367b",
		},
	},
	typography: {
		fontFamily: ["Rubik", "sans-serif"].join(","),
		fontSize: 12,
		h1: {
			fontFamily: ["Rubik", "sans-serif"].join(","),
			fontSize: 40,
		},
		h2: {
			fontFamily: ["Rubik", "sans-serif"].join(","),
			fontSize: 32,
		},
		h3: {
			fontFamily: ["Rubik", "sans-serif"].join(","),
			fontSize: 24,
		},
		h4: {
			fontFamily: ["Rubik", "sans-serif"].join(","),
			fontSize: 20,
		},
		h5: {
			fontFamily: ["Rubik", "sans-serif"].join(","),
			fontSize: 16,
		},
		h6: {
			fontFamily: ["Rubik", "sans-serif"].join(","),
			fontSize: 14,
		},
	},
});
