import { createGlobalStyle } from "styled-components";
import { calcAdaptiveValue } from "./helpers";
import { resetCss } from "./reset.styled";
import { fontSizes, screenWidth, spacing } from "./styles";

export const GloabalStyle = createGlobalStyle`
${resetCss}

body {
	${calcAdaptiveValue('font-size', fontSizes.secondary, fontSizes.base, screenWidth.min, screenWidth.max )}
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
