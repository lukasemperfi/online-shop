import { createGlobalStyle } from "styled-components";
import { resetCss } from "./reset.styled";

export const GloabalStyle = createGlobalStyle`
${resetCss}

body {
	font-size: 16px;
	font-family: -apple-system, BlinkMacSystemFont, 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen',
	'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
	sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#root {
	min-height: 100%; 
	overflow: hidden;
}

`
