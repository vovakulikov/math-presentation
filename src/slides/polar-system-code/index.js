import React from 'react';
import { H3 } from 'presa/blocks';
import CodeSlide from '../../components/code-slide';
import MathJax from "react-mathjax";
import styled from "styled-components";

const code = `function generateCannabisPoints(r = 200, vertex = 360) {
 const a = 0.5;
 const result = [];
 const translateY = 150;
 
 for(let i = 0; i < vertex; i++) {
 	const angle = i * 2 * Math.PI/vertex;
 	const radius = r * 
 		Math.asin(a + a * Math.cos(8 * angle)) *
 		(a - a * Math.cos(angle));
 
 	const x = radius * Math.sin(angle);
 	const y = radius * Math.cos(angle) + translateY;
 
 	result.push({ x: x, y: y});
 }
 
 return result;
}`;


const Formula = styled(MathJax.Node)`
	display: flex;
	font-size: ${props => props.fontSize && props.fontSize}px;
`;

const highlightSettings = {
	0: { lines: [1,2], subTitle:  () => (<H3>Вес код в 10 строк :)</H3>) },
	1: { lines: [3,4], subTitle:  () =>'Объявляем переменные'},
	2: { lines: [8, 9, 10], subTitle: () => (
			<MathJax.Provider>
				<Formula fontSize={20} formula={'r = \\frac{\\sin t \\sqrt{|\\cos t|}}{\\sin t + \\frac75} - 2\\sin t + 2'}/>
			</MathJax.Provider>
		)},
};

const CodeDemo = (props) => {
	return (
		<MathJax.Provider>
			<CodeSlide
				{...props}
				title="Как нарисовать траву?"
				code={code}
				lightMap={highlightSettings}
			/>
		</MathJax.Provider>
	);
};


export default CodeDemo;
