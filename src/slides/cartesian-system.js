import React from 'react';
import { Slide } from "presa";
import { H2 } from "presa/blocks";
import styled from 'styled-components';
import MathJax from 'react-mathjax';

const tex = `{\\displaystyle \\mathbf {a} ={\\begin{bmatrix}a_{x}\\\\a_{y}\\\\a_{z}\\\\\\end{bmatrix}}=[a_{x}\\ a_{y}\\ a_{z}].}`;
const tex2 = `{\\displaystyle \\mathbf {a} ={\\begin{bmatrix}a_{x}\\\\a_{y}\\\\\\end{bmatrix}}=[a_{x}\\ a_{y}].}`;
const tex3 = `{\\displaystyle \\mathbf {a} ={\\begin{bmatrix}-4\\\\3\\\\\\end{bmatrix}}=[-4\\ 3].}`;

export default (props) => (
	<Slide {...props}>
		<MathJax.Provider>
			<Content>
				<H2>Декартова система координат</H2>

				<p>
					Прямоугольная система координат — прямолинейная система координат
					с взаимно перпендикулярными осями на плоскости или в пространстве.
				</p>

				<div>
					Математическая запись точки или вектора:

					<Formula formula={tex} />
					<Formula formula={tex2} />
					<Formula formula={tex3} />
				</div>
				<Image src="./images/system-coordinates.png" alt=""/>
			</Content>
		</MathJax.Provider>
	</Slide>
)

const Content = styled.div`
	position: relative;
	height: 100%;
`;

const Formula = styled(MathJax.Node)`
	display: flex;
	font-size: 19px;
`;

const Image = styled.img`
	height: 300px;
	right: 0;
	bottom: 0;
	position: absolute;
`;
