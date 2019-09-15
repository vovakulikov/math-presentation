import React from 'react';
import { Slide } from "presa";
import { Code } from "presa/blocks";

export default (props) => (
	<Slide {...props} centered>
		<Code>
		{`function lerp(t, a, b) { return a + t * (b - a); }

let lastTime = performance.now();
let duration = 2000;

function draw(time) {
let progress = clamp((time - lastTime) / duration, 0, 1);

x = lerp(progress, radius , canvas.width - radius);

ctx.arc(x, y, radius, 0, 2*Math.PI);
  }
`}
		</Code>
	</Slide>
);
