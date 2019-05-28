import React from 'react';
import { Slide } from "presa";
import { H2 } from "presa/blocks";
import styled from 'styled-components';
import MathJax from 'react-mathjax';

const tex = `(r,\\;\\varphi ) \\quad or \\quad  (r,\\;\\varphi \\pm n\\times 360^{\\circ })`;

export default (props) => (
	<Slide {...props}>
		<MathJax.Provider>
			<Content>
				<H2>Полярная система координат</H2>

				<p>
					Полярная система координат — двухмерная система координат,
					в которой каждая точка на плоскости однозначно определяется двумя числами — полярным углом и полярным радиусом.
				</p>

				<div>
					Математическая запись точки или вектора:

					<Formula formula={tex} />
					<Formula formula={'{\\displaystyle r(\\varphi )=1 - \\cos \\left(k\\varphi +\\gamma _{0}\\right)}'}/>
					<Formula formula={'r = \\frac{\\sin t \\sqrt{|\\cos t|}}{\\sin t + \\frac75} - 2\\sin t + 2'}/>
				</div>

				{/*<ImageContainer>*/}
				{/*	<Image src="./images/polar-system.png" alt=""/>*/}
				{/*	<Image src="./images/polar-to-cartesian.png" alt=""/>*/}
				{/*</ImageContainer>*/}
			</Content>
		</MathJax.Provider>
	</Slide>
)

const Content = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const Formula = styled(MathJax.Node)`
	display: flex;
	font-size: 19px;
`;

const ImageContainer = styled.div`
	display: flex;
	align-items: stretch;
	flex: 1;
	justify-content: flex-end;
`;

const Image = styled.img`
	height: 100%;
	margin-left: 40px;
`;
