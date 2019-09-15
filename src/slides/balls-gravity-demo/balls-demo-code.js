import React from 'react';
import CodeSlide from '../../components/code-slide';

const code = `const balls = []
const ball = () => ({
	radius: random(8, 20);
	position: [
		random(0, 500),
		random(0, 500),
	]
	v: vector(random(-3, 3),  random(-2, 2))
});

function init() {
 for (let i = 0; i < 20; i++) {
    balls.push(ball());
  }
 }
}
 
canvas.addEventListener('click', init);

const gravity = vector(0, 2);

function draw() {
 requestAnimationFrame(draw);

 ctx.clearRect(0, 0, canvas.width, canvas.height);

 for (let i = 0; i < balls.length; i++) {
	 const ball = balls[i];
	 const { position, radius, vel } = ball;
	 const [x, y] = position;
	 
	 if (y + radius > canvas.height) {
		 ball.v = scale(rotate(vel, Math.PI), friction)
	 } else {
		 ball.v = add(vel, gravity);
	 }
	 
	 if (this.x + radius >= canvas.width || x - radius <= 0) {
		ball.v = scale(rotate(vel, Math.PI), friction);
	 }

	 ball.position = add(position, ball.v)

	 draw(ball);
 }
}`;


const gen = (from, to) => Array.from(Array(to + 1 - from).keys()).map(v => from + v)

const highlightSettings = {
	0: { lines: [1] },
	1: { lines: gen(2, 9)},
	2: { lines: gen(10, 16) },
	3: { lines: gen(20, 20) },
	4: { lines: gen(21, 45) },
	5: { lines: gen(27,27) },
	6: { lines: gen(28, 30) },
	7: { lines: gen(31, 36) },
	8: { lines: gen(33, 33) },
	9: { lines: gen(35, 35) },
	10: { lines: gen(39, 39) },
	11: { lines: gen(42, 42) },
	12: { lines: gen(44, 44) },
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
