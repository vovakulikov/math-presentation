import React from 'react';
import styled from 'styled-components';
import CodeSurfer from 'code-surfer';
import MathJax from "react-mathjax";

const CustomCode = (props) => {
	const { lines = [] } = props;
	const step = lines.length ? { lines } : {};

	return (
		<CodeWrapper>
			<CodeSurfer
				lang="javascript"
				showNumbers
				code={props.code || ''}
				step={step}
			/>
		</CodeWrapper>
	);
};


const CodeWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 40px 0 20px 0;
`

export default CustomCode;
