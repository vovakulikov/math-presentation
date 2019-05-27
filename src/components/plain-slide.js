import React from 'react';
import styled from 'styled-components';
import { Slide } from 'presa';

const PlainSlide = (props) => (
	<Slide
		{...props}
		layout={PlainLayout}
	>
		{props.children}
	</Slide>
);

const PlainLayout = (children) => (
	<CentredContent>
		{children}
	</CentredContent>
);

export const CentredContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export default PlainSlide;
