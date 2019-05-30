import React from 'react';
import { Slide } from 'presa';
import { H2 } from 'presa/blocks';
import styled from 'styled-components';

function clamp(n, min, max) {
	return Math.min(Math.max(n, min), max);
};

export default (props) => {
	const canvasRef = React.useRef();
	const [started, setStarted] = React.useState(false);

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
		let y = 50;

		let rafId;

		function lerp(t, a, b) { return a + t * (b - a); }

		let lastTime = performance.now();
		let duration = 2000;

		function draw(time) {
			let progress = clamp((time - lastTime) / duration, 0, 1);
			rafId = requestAnimationFrame(draw);

			if (started) {
				x = lerp(progress, radius , canvas.width - radius);
			}

			ctx.fillStyle = 'rgba(255,255,255, 0.1)';
			ctx.fillRect(0,0, canvas.width, canvas.height);

			ctx.save();
			ctx.fillStyle = 'rgba(60, 89, 255, 0.9)';
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, 2*Math.PI);
			ctx.fill();
			ctx.restore();
		}

		rafId = requestAnimationFrame(draw);

		return () => cancelAnimationFrame(rafId);
	}, [started]);

	return (
		<Slide {...props}>
			<H2>Линейнай интерполяция</H2>

			<p>Есть начальная точка a и конечная заданая точка b.
				Уравнение преемещение может быть выражена через</p>

			<InlineCode>const lerp = (t, a, b) => a + t * (b - a)</InlineCode>

			<p><InlineCode>t</InlineCode> просто какой то параметр (например 0.01)</p>

			<Container>
				<Canvas onClick={() => setStarted(true)} innerRef={canvasRef}/>
			</Container>
		</Slide>
	);
}

const primaryColor = '#3c59ff';

const Canvas = styled.canvas`
	width: 100%;
	height: 100px;
`;

const Container = styled.div`
	width: 100%;
	position: relative;
	margin-top: 60px;
	padding-top: 40px;
	
	&:before {
		content: "a";
		display: block;
		top: 0;
		left: 0;
		position: absolute;
	}
	
	
	&:after {
		content: "b";
		display: block;
		top: 0;
		right: 0;
		position: absolute;
	}
`;

const InlineCode = styled.code`
  letter-spacing: -0.5px;
  background: rgba(60, 89, 255, 0.07);
  color: ${primaryColor};
  padding: 3px 8px;
  border-radius: 3px;
`;
