import React from 'react';
import styled from 'styled-components';

const demoBg = '#dfe5f3';

export default (props) => (
	<Layout>
		<Side width={props.width}>
			{ props.children }
		</Side>
		<Demo width={props.demoWidth}>
			{ props.canvas }
		</Demo>
	</Layout>
);

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 28px;
  flex-wrap: wrap;
`;

const Demo = styled.div`
  width: ${props => props.width || '50%'};
  background: ${props => props.demoBg || demoBg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Side = styled.div`
  width: ${props => props.width || '50%'};
  padding: 2em 2.5em;
  
  display: flex;
  flex-direction: column;
`;
