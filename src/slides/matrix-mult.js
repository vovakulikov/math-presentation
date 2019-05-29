import React from 'react';
import { Slide } from "presa";
import { H3 } from "presa/blocks";
import styled from 'styled-components';
import MathJax from "react-mathjax";

export default (props) => (
	<Slide {...props} centered>
		<MathJax.Provider>
			<H3>Умножение матриц</H3>

			<Formula formula={"{\\overset {3\\times 4{\\text{ matrix}}}{\\begin{bmatrix}\\cdot &\\cdot &\\cdot &\\cdot \\\\\\cdot &\\cdot &\\cdot &\\cdot \\\\\\color {Blue}1&\\color {Blue}2&\\color {Blue}3&\\color {Blue}4\\\\\\end{bmatrix}}}{\\overset {4\\times 5{\\text{ matrix}}}{\\begin{bmatrix}\\cdot &\\cdot &\\cdot &\\color {Red}a&\\cdot \\\\\\cdot &\\cdot &\\cdot &\\color {Red}b&\\cdot \\\\\\cdot &\\cdot &\\cdot &\\color {Red}c&\\cdot \\\\\\cdot &\\cdot &\\cdot &\\color {Red}d&\\cdot \\\\\\end{bmatrix}}}={\\overset {3\\times 5{\\text{ matrix}}}{\\begin{bmatrix}\\cdot &\\cdot &\\cdot &\\cdot &\\cdot \\\\\\cdot &\\cdot &\\cdot &\\cdot &\\cdot \\\\\\cdot &\\cdot &\\cdot &x_{3,4}&\\cdot \\\\\\end{bmatrix}}}"}></Formula>
			<Formula formula={"x_{3,4}=({\\color {Blue}1},{\\color {Blue}2},{\\color {Blue}3},{\\color {Blue}4})\\cdot ({\\color {Red}a},{\\color {Red}b},{\\color {Red}c},{\\color {Red}d})={\\color {Blue}1}\\cdot {\\color {Red}a}+{\\color {Blue}2}\\cdot {\\color {Red}b}+{\\color {Blue}3}\\cdot {\\color {Red}c}+{\\color {Blue}4}\\cdot {\\color {Red}d}"}/>
		</MathJax.Provider>
	</Slide>
);

const Formula = styled(MathJax.Node)`
	display: flex;
	font-size: ${props => props.fontSize}px;
	margin-top: ${props => props.marginTop}px;
`;
