import React from 'react';
import CodeSlide from '../components/code-slide';

const code = `const WORLD_FRICTION = 0.1;

const update = (p, friction) => {
 let [[px, py], [vx, vy], [ax, ay]] = [p.position, p.velocity, p.accel];

 vx = (vx+ax) * (1 - friction);
 vy = (vy+ay) * (1 - friction);

 let position = [px + vx, py + vy],
  velocity = [vx, vy];

 return { ...p, position, velocity, accel };
};

function draw(time) {
   flames.push(flame(), flame(), flame());

   flames = flames
    .filter(({ position, size }) => ((position[1] > -1 * size) && (size > 1)))
    .map(p => update(p, WORLD_FRICTION))
    .map(p => applyForce(p, p.size*0.16, [random(-4, 4), -2]))
    .map(p => ({...p, size: p.size * 0.99 });


   ctx.clearRect(0, 0, canvas.width, canvas.height);

   flames.forEach(p => {
    const { position, size } = p;
    
    ctx.arc(position[0], position[1], size, 0, 2 * Math.PI);
    ctx.fill();
   });
  }`;

const gen = (from, to) => Array.from(Array(to + 1 - from).keys()).map(v => from + v)

const highlightSettings = {
	0: { lines: gen(15, 32) },
	1: { lines: gen(18, 22) },
	2: { lines: gen(19,19) },
	3: { lines: gen(20,20) },
	4: { lines: gen(3,12) },
	5: { lines: gen(6,7) },
	6: { lines: gen(9,9) },
	7: { lines: gen(21,21) },
  8: { lines: gen(22,22) },
};

export default (props) => {
	return (
		<CodeSlide
			{...props}
			code={code}
			lightMap={highlightSettings}
		/>
	);
};
