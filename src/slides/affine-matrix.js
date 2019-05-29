import React from 'react';
import styled from 'styled-components';
import { Slide } from "presa";
import MathJax from "react-mathjax";

export default (props) => (
	<Slide {...props} layout={false}>
		<MathJax.Provider>
			<Container>
				<Block>
					<Formula formula="{\displaystyle {\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}}}" />
					<Images height="250px" src="./images/identical-matrix.png" alt=""/>
				</Block>
				<Block>
					<Formula formula="{\displaystyle {\begin{bmatrix}c_{x}=2&0&0\\0&c_{y}=1&0\\0&0&1\end{bmatrix}}}" />
					<Images height="145px" src="./images/scale-matrix.png" alt=""/>
				</Block>
				<Block>
					<Formula formula="{\displaystyle {\begin{bmatrix}-1&0&0\\0&1&0\\0&0&1\end{bmatrix}}}" />
					<Images height="250px" src="./images/reflextion-matrix.png" alt=""/>
				</Block>
				<Block>
					<Formula formula="{\displaystyle {\begin{bmatrix}\cos(\theta )&\sin(\theta )&0\\-\sin(\theta )&\cos(\theta )&0\\0&0&1\end{bmatrix}}}"/>
					<Images height="215px" src="./images/rotate-matrix.png" alt=""/>
				</Block>
			</Container>
		</MathJax.Provider>
	</Slide>
);

const Formula = styled(MathJax.Node)`
	display: flex;
	font-size: ${props => props.fontSize && props.fontSize}px;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-items: stretch;
	align-items: stretch;
	height: 100%;
`;

const Block = styled.div`
	flex-basis: 50%;
	flex-grow: 0;
	flex-shrink: 0;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Images = styled.img`
	height: ${props => props.height || '120px'};
`;
