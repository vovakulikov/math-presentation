import React from 'react';
import styled from 'styled-components';

const NumberedNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 6px;
  font-size: 26px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  color: ${props => props.color};
  border: 3px solid ${props => props.color};
  text-shadow: none;
`;

const NumberedCont = styled.div`
  display: flex;
  flex-flow: column;
  align-items: ${props => (props.centered ? 'center' : 'flex-start')};
  text-align: ${props => (props.centered ? 'center' : 'left')};

  padding-bottom: 100px;

  ${props =>
	props.inverse &&
	`
    color: white;
    text-shadow: 1px 2px rgba(0,0,0,0.6);`};
`;

const Numbered = props => (
	<NumberedCont centered={props.centered} inverse={props.inverse}>
		<NumberedNumber color={props.inverse ? 'white' : props.primaryColor}>
			{props.number}
		</NumberedNumber>
		{props.children}
	</NumberedCont>
);

export default Numbered;
