import React from 'react';
import { Slide } from "presa";
import { Code, H1 } from "presa/blocks";
import styled from 'styled-components';

const Description = styled.p`
  margin: 40px 0;
  text-align: left;
  line-height: 1.5;
`;

export default (props) => (
    <Slide {...props}>
        <H1>Canvas API</H1>
        <Code>
            {`context.lineTo(x, y);
context.moveTo(x, y);
context.rect(x, y, width, height);
context.arc(x, y, radius, 0, Math.PI);
`}
        </Code>

        <Description>
            Это все важные методы, которые понадобятся нам дальше
        </Description>

    </Slide>
);
