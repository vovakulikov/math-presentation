import React from 'react';
import { Slide } from "presa";
import { Code } from 'presa/blocks';

export default (props) => (
	<Slide {...props}>
		<Code fontSize={24}>{`
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const tick = ts => {
  requestAnimationFrame(tick)

  // Вот тут сейчас будем рисовать 🥴
}

requestAnimationFrame(tick)
`}
		</Code>
	</Slide>
);
