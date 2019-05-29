import React from 'react';
import { Slide } from "presa";
import { H1 } from "presa/blocks";
import styled from 'styled-components';

function generateRose(radius = 200) {
	const points = [];
	const vertex = 360;

	for(let i = 0; i < vertex; i++) {
		const angle = i * 2 * Math.PI / vertex;
		const x = radius * Math.cos(6*angle) * Math.cos(angle);
		const y = radius * Math.cos(6*angle) * Math.sin(angle);

		points[i] = { x: x, y: y };
	}

	return points;
}

function generatePolygone(vertex = 4, r = 100) {
	const points = [];

	for (let i = 0; i < vertex; i++){
		const angle = i * 2 * Math.PI / vertex;
		const x = r * Math.cos(angle);
		const y = r * Math.sin(angle);

		points[i] = { x: x, y: y };
	}

	return points;
}

export default (props) => {
	const canvasRef = React.useRef();

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const sizes = canvas.getBoundingClientRect();

		canvas.width = sizes.width;
		canvas.height = sizes.height;

		const shapes = [
			{
				points: generatePolygone(4, 75),
				color: 'orange',
				offsetX: 150,
				offsetY: canvas.height / 2,
				angleDiff: -Math.PI/180
			},
			{
				points: generatePolygone(3, 75),
				color: 'lightgreen',
				offsetX: canvas.width / 2,
				offsetY: canvas.height / 2,
				angleDiff: Math.PI/90
			},
			{
				points: generateRose(75),
				color: 'lightblue',
				offsetX: canvas.width - 150,
				offsetY: canvas.height / 2,
				angleDiff: -Math.PI/180
			}
		];

		let rafId;

		function draw() {
			rafId = requestAnimationFrame(draw);

			ctx.fillStyle = 'rgba(255,255,255, 0.1)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.save();

			shapes.forEach((shape) => {
				ctx.save();
				ctx.beginPath();
				ctx.fillStyle = shape.color;

				for (let i=0; i < shape.points.length; i++){
					const point = shape.points[i];

					const x = point.x;
					const y = point.y;
					const angle = shape.angleDiff;

					point.x = x * Math.cos(angle) - y * Math.sin(angle);
					point.y = x * Math.sin(angle) + y * Math.cos(angle);

					ctx.lineTo(point.x + shape.offsetX ,point.y + shape.offsetY);
				}

				ctx.fill();
				ctx.closePath();
				ctx.restore();
			});

			ctx.restore();
		}

		rafId = requestAnimationFrame(draw);

		return () => cancelAnimationFrame(rafId);
	}, []);

	return (
		<Slide {...props} centered>
			<H1>Аффинные преобразования</H1>

			<p>Аффинное преобразование— отображение плоскости или пространства в себя,
			при котором параллельные прямые переходят в параллельные прямые</p>

			<p>Все это можно использовать для смещений, поворотов, растяжений, скосов</p>

			<Canvas innerRef={canvasRef}></Canvas>
		</Slide>
	);
}

const Canvas = styled.canvas`
	margin-top: 40px;
	width: 100%;
	height: 350px;
`;
