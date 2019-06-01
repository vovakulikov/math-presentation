import React from 'react';
import { Slide } from 'presa';
import { H2, Code } from 'presa/blocks';
import styled, { keyframes } from 'styled-components';

function clamp(n, min, max) {
	return Math.min(Math.max(n, min), max);
};

export default (props) => {
	const canvasRef = React.useRef();
	const [started, setStarted] = React.useState(false);
	const [Vprogress, setProgress] = React.useState(0);

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const sizes = canvas.getBoundingClientRect();

		canvas.width = sizes.width;
		canvas.height = sizes.height
	}, []);

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const radius = 40;
		let x = radius;
		let y = canvas.height/2;

		let rafId;

		const vx = 10;

		function draw(time) {
			requestAnimationFrame(draw);

			if (x >= (canvas.width + radius)) {
				x = radius;
			}

			x += vx;

			ctx.clearRect(0,0, canvas.width, canvas.height);

			ctx.save();
			ctx.fillStyle = 'rgba(60, 89, 255, 0.9)';
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, 2*Math.PI);
			ctx.fill();
			ctx.restore();
		}

		rafId = requestAnimationFrame(draw);

		return () => cancelAnimationFrame(rafId);
	});

	return (
		<Slide {...props} layout={false}>
			<Canvas onClick={() => setStarted(true)} innerRef={canvasRef}/>
		</Slide>
	);
}

const Canvas = styled.canvas`
	width: 100%;
	height: 100%;
`;

