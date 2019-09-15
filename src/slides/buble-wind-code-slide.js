import React from 'react';
import CodeSlide from '../components/code-slide';

const code = `const flame = () => { position: vector(), velocity: vector(), accel: vector(), size: 100 };

const update = (p, friction) => {
 let [pos, vel, accel] = [p.position, p.velocity, p.accel];
 
 vel = scale(add(vel, accel), friction);
 pos = add(pos, vel);

 return { ...p, position: position, velocity: vel, accel };
};

const applyForce = (p, force) => {
  return { ...p, accel: add(p.accel, force) };
};

function draw(time) {
   flames.push(flame(), flame(), flame());

   flames = flames
    .map(p => update(p))
    .map(p => applyForce(p, [random(-4, 4), -2]))
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
	1: { lines: gen(19, 23) },
	2: { lines: gen(19,19) },
	3: { lines: gen(20,20) },
	4: { lines: gen(3,10) },
	5: { lines: gen(6,7) },
	6: { lines: gen(9,9) },
	7: { lines: gen(21,21) },
	8: { lines: gen(12,14) },
  9: { lines: gen(22,22) },
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
