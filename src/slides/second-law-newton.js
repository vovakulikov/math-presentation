import {Slide} from "presa";
import { H2, Code } from "presa/blocks";
import MathJax from 'react-mathjax';
import styled from "styled-components";
import React from "react";

export default (props) => (
	<Slide {...[props]} centered>
		<MathJax.Provider>
			<H2>Второй закон ньютона</H2>
			<Formula fontSize={30} formula={'m{\\vec  {a}}={\\vec  {F}}'}/>

			<Code>
				{`const applyForce = (particle, mass, force) => {
  let { accel } = p;

  return { ...p, accel: add(accel, scale(force, m)) };
};`}
			</Code>
		</MathJax.Provider>
	</Slide>
);


const Formula = styled(MathJax.Node)`
	display: flex;
	font-size: ${props => props.fontSize}px;
`;
