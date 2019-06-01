import React from 'react';
import { Slide } from "presa";
import styled from 'styled-components';
import MathJax from 'react-mathjax';

const tex = `{\\displaystyle \\mathbf {a} ={\\begin{bmatrix}a_{x}\\\\a_{y}\\\\a_{z}\\\\\\end{bmatrix}}=[a_{x}\\ a_{y}\\ a_{z}].}`;

export default (props) => (
	<Slide {...props} centered>
		<MathJax.Provider>
			<Formula formula={tex} />
		</MathJax.Provider>
	</Slide>
)

const Formula = styled(MathJax.Node)`
	display: flex;
	font-size: 50px;
`;
