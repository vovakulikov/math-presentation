import React from 'react';
import { Slide } from "presa";
import { Code } from "presa/blocks";

export default (props) => (
	<Slide {...props} centered>
		<Code>
		{`
let lastTime = performance.now();
let duration = 2000;

function draw(time) {
  let progress = (time - lastTime) / duration;;

  x = lerp(progress, 0, 500);

  ctx.arc(x, y, radius, 0, 2*Math.PI);
}
`}
		</Code>
	</Slide>
);
