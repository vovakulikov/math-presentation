import React from 'react';
import styled from 'styled-components';
import MathJax from 'react-mathjax';
import { Slide } from "presa";
import { H2 } from "presa/blocks";

export default (props) => (
	<Slide {...props}>
		<MathJax.Provider>
			<Container>
				<H2>Вектор</H2>

				<p>
					Вектором называется направленный отрезок, для которого указано его начало и конец.
					Характеризующаяся численным значением (модулем вектора) и направлением.
				</p>

				<Formula formula={"{\\overrightarrow {AB} \\text { or } \\overrightarrow {a}}\n"}></Formula>
				<Formula formula={"|{\\vec  {a}}|={\\sqrt  {a_{x}^{2}+a_{y}^{2}}}"}></Formula>

				<Image src="./images/vector.png" alt="vector"/>
			</Container>
		</MathJax.Provider>
	</Slide>
);


const Formula = styled(MathJax.Node)`
	display: flex;
	font-size: 19px;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

const Image = styled.img`
	width: 400px;
	position: absolute;
	right: 0;
	bottom: 50px;
`;
