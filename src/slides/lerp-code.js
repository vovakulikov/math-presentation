import React from 'react';
import { Slide } from "presa";
import { Code } from "presa/blocks";

export default (props) => (
	<Slide {...props} centered>
		<Code>
		{`function lerp(t, a, b) { return a + t * (b - a); }

function draw() {
  rafId = requestAnimationFrame(draw);
  
  x = lerp(0.01, x , canvas.width - radius);
  
  ctx.clearRect(0,0, canvas.width, canvas.height);
  
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2*Math.PI);
  ctx.fill();
}
`}
		</Code>
	</Slide>
);
