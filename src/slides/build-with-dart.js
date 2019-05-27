import React from 'react';
import styled from 'styled-components';
import { Slide } from 'presa';
import { H2, H4 } from 'presa/blocks';

const Dartlang = (props) => (
	<Slide { ...props } centered>
		<H2>Build with Dart and ❤️🎉🎊</H2>
		<DartLogo src="./images/dart-logo.svg" alt="Dartlang icon"/>
		<H4>Как и все в Wrike (ну почти)</H4>
	</Slide>
);

const DartLogo = styled.img`
	height: 200px; 
	margin-top: 40px;
	margin-bottom: 40px;
`;

const InlineContent	= styled.div`
	display: flex;
	align-items: center;
`;

const EmojiIcon = styled.span`
	font-size: 150px;
	margin-left: 40px;
`;

export default Dartlang;
