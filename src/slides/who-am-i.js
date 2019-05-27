import React from 'react';
import styled from 'styled-components';
import { Slide } from 'presa';
import { H2, H3 } from 'presa/blocks';

const Image = styled.img`
	height: 250px;
	border-radius: 50%;
	margin-bottom: 40px;
`;

export default (props) => (
	<Slide {...props} centered>
		<Image src="./images/me.jpg" />
		<H2>Вова Куликов 🐣</H2>
		<H3>Занимаюсь front-end разработкой в Wrike.  Dart, Angular ❤️ 🎤</H3>
	</Slide>
);
