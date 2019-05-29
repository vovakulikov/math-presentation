import React from 'react';
import styled from 'styled-components';
import { Slide } from 'presa';

import Ball from './ball';

export default (props) => {
	const canvasRef = React.useRef();

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const sizes = canvas.getBoundingClientRect();
		const ctx = canvas.getContext('2d');

		canvas.width = sizes.width;
		canvas.height = sizes.height;

		let rafId;

		const colors = [
			'#2185C5',
			'#7ECEFD',
			'#FFF6E5',
			'#FF7F66'
		];

		const gravity = 0.2;
		const friction = 0.98;
		const ballArray = [];

		function init() {
			for (let i = 0; i < 20; i++) {
				const radius = randomIntFromRange(8, 20);
				const x = randomIntFromRange(radius, canvas.width - radius);
				const y = randomIntFromRange(0, canvas.height - radius);
				const dx = randomIntFromRange(-3, 3);
				const dy = randomIntFromRange(-2, 2);

				ballArray.push(new Ball(x, y, dx, dy, radius, randomColor(colors), gravity, friction, ctx, canvas));
			}
		}

		canvas.addEventListener('click', init);

		function draw() {
			rafId = requestAnimationFrame(draw);

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < ballArray.length; i++) {
				ballArray[i].update();
			}

		}

		rafId = requestAnimationFrame(draw);

		return () => {
			canvas.removeEventListener('click', init);
			cancelAnimationFrame(rafId);
		}
	}, []);

	return (
		<Slide {...props} layout={false}>
			<Canvas innerRef={canvasRef}/>
		</Slide>
	);
}

const Canvas = styled.canvas`
	width: 100%;
	height: 100%;
`;



// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}
