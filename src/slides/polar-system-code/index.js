import React from 'react';
import CodeSlide from '../../components/code-slide';
import MathJax from "react-mathjax";
import styled from "styled-components";

const code = `function generateHeart() {
 const result = [];
 
 for(let i = 0; i < 360; i++) {
 	const angle = i * 2 * Math.PI/vertex;
 	const radius = 200 * 
 		Math.asin(0.5 + 0.5 * Math.cos(8 * angle)) *
 		(0.5 - 0.5 * Math.cos(angle));
 
 	const x = radius * Math.sin(angle);
 	const y = radius * Math.cos(angle);
 
 	result.push({ x: x, y: y });
 }
 
 return result;
}`;


const Formula = styled(MathJax.Node)`
	display: flex;
	font-size: ${props => props.fontSize && props.fontSize}px;
`;

const highlightSettings = {
	0: { lines: [2,2], subTitle:  () =>'Объявляем переменные, хранилище всех точек фигуры'},
	1: { lines: [4,4], subTitle:  () =>'Обходим все точки'},
	2: { lines: [5,5], subTitle:  () =>'Получаем значение угла для конкретной точки'},
	3: { lines: [6, 8, 8], subTitle: () => (
		<MathDesc>
			<span style={{ marginRight: '20px' }}>Формула ❤️</span>
			<MathJax.Provider>
				<Formula fontSize={20} formula={'r = \\frac{\\sin t \\sqrt{|\\cos t|}}{\\sin t + \\frac75} - 2\\sin t + 2'}/>
			</MathJax.Provider>
		</MathDesc>
		)},
	4: { lines: [10,11], subTitle:  () =>'Переводим из полярной системы координат в декартову'},
	5: { lines: [13], subTitle:  () =>'Сохраняем точку в сторе'},
};

const CodeDemo = (props) => {
	return (
		<MathJax.Provider>
			<CodeSlide
				{...props}
				title="Как нарисовать ❤️?"
				code={code}
				lightMap={highlightSettings}
			/>
		</MathJax.Provider>
	);
};

const MathDesc= styled.div`
	display: flex;
	align-items: center;
`;

export default CodeDemo;
