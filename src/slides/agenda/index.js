import React from 'react';
import styled from 'styled-components';
import { Slide } from 'presa';
import { H4, H3 } from 'presa/blocks';

const Agenda = (props) => {
	const canvasRef = React.useRef(null);

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const sizes = canvas.getBoundingClientRect();

		const radius = 40;
		let x = radius;
		let y = sizes.height / 2;
		let vx = 0;
		let ax;
		const spring = 0.003;
		const targetX = sizes.width / 2;

		canvas.width = sizes.width;
		canvas.height = sizes.height;

		var rafId = requestAnimationFrame(draw);

		function draw (time) {
			rafId = requestAnimationFrame(draw);

			ctx.fillStyle = 'rgba(255,255,255, 0.3)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			const dx = targetX - x;

			ax = dx * spring;
			vx += ax;
			x += vx;

			ctx.save();
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, 2*Math.PI, true);
			ctx.fill();
			ctx.restore();
		}

		return () => cancelAnimationFrame(rafId);
	}, []);

	return (
		<Slide {...props}>
			<H4>talk&apos;s topic</H4>
			<H3>Школьная математика вокруг нас</H3>

			<Canvas innerRef={canvasRef}></Canvas>
		</Slide>
	);
};

const Canvas = styled.canvas`
	width: 100%;
	height: 100px;
	max-width: 600px;
	margin-top: 40px;
`;

export default Agenda;
