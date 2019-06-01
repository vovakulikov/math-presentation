import React from 'react';
import { Slide } from "presa";
import styled from "styled-components";

export default (props) => (
	<Slide {...props}>
		<p><InlineCode>add()</InlineCode> - add vectors</p>
		<p><InlineCode>sub()</InlineCode> - subtract vectors</p>
		<p><InlineCode>mult()</InlineCode> - scale the vector with multiplication</p>
		<p><InlineCode>div()</InlineCode> - scale the vector with division</p>
		<p><InlineCode>mag()</InlineCode> - calculate the magnitude of a vector</p>
		<p><InlineCode>setMag()</InlineCode> - set the magnitude of a vector</p>
		<p><InlineCode>normalize()</InlineCode> - normalize the vector to a unit length of 1</p>
		<p><InlineCode>limit()</InlineCode> - limit the magnitude of a vector</p>
		<p><InlineCode>rotate()()</InlineCode> - rotate a 2D vector by an angle</p>
		<p><InlineCode>lerp()()</InlineCode> - linear interpolate to another vector</p>
	</Slide>
);

const primaryColor = '#3c59ff';

const InlineCode = styled.code`
  letter-spacing: -0.5px;
  background: rgba(60, 89, 255, 0.07);
  color: ${primaryColor};
  padding: 3px 8px;
  border-radius: 3px;
`;
