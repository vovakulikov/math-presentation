import React from 'react';
import styled from 'styled-components';
import { Slide, ControlledFragment } from 'presa';
import { H3 } from 'presa/blocks';
import CustomCode from "./surf-code";

const CodeSlide = (props) => {
	const { lightMap = {} } = props;

	return (
		<Slide {...props} layout={false}>
			<ControlledFragment numberOfSteps={Object.keys(lightMap).length}>
				{(currentIndex) => {
					const lines = lightMap[currentIndex]
						? lightMap[currentIndex].lines
						: [];

					const SubTitle = lightMap[currentIndex]
						? lightMap[currentIndex].subTitle
						: EmptySubTitle;

					return (
						<CodeSlideContent>
							{props.title && <H3>{props.title || ''}</H3>}

							<CustomCode
								code={props.code}
								lines={lines}/>

							<SubTitle/>
							{/*{ subTitle && <p>{ <SubTitle/> }</p>}*/}
						</CodeSlideContent>
					)
				}}
			</ControlledFragment>
		</Slide>
	);
};


const EmptySubTitle = styled.p`
	display: none;
`;

const CodeSlideContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 64px;
  will-change: all;
`;

export default CodeSlide;
