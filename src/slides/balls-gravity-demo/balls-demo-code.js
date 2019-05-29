import React from 'react';
import CodeSlide from '../../components/code-slide';

const code = `const balls = []
const ball = () => ({
	radius: randomIntFromRange(8, 20);
	position: [
		randomIntFromRange(radius, canvas.width - radius),
		randomIntFromRange(0, canvas.height - radius),
	]
	v: vector(randomIntFromRange(-3, 3),  randomIntFromRange(-2, 2))
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
	 const { position, radius } = ball;
	 const [x, y] = position;
	 
	 if (y + radius + this.dy> this.canvas.height) {
		 ball.v = scale(mult(ball.v, vector(1, -1)), friction)
	 } else {
		 ball.v = addVector(ball.v, gravity);
	 }
	 
	 if (this.x + this.radius >= this.canvas.width || this.x - this.radius <= 0) {
		ball.v = scale(mult(ball.v, [-1, -1]), friction);
	 }

	 ball.position = add(this.ball.position, ball.v)

	 draw(ball);
 }
}`;


const gen = (from, to) => Array.from(Array(to + 1 - from).keys()).map(v => from + v)

const highlightSettings = {
	0: { lines: [1] },
	1: { lines: gen(2, 9)},
	2: { lines: gen(10, 16) },
	3: { lines: gen(21, 45) },
	4: { lines: gen(27,27) },
	5: { lines: gen(28, 30) },
	6: { lines: gen(31, 36) },
	7: { lines: gen(33, 33) },
	8: { lines: gen(35, 35) },
	9: { lines: gen(39, 39) },
	10: { lines: gen(42, 42) },
	11: { lines: gen(44, 44) },
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
