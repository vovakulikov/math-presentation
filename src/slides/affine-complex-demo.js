import React from 'react';
import styled from 'styled-components';
import { Slide } from "presa";
import MathJax from "react-mathjax";

import Button from '../components/button';
import Layout, { Buttons } from '../components/complex-demo-layout'

function generateRose(radius = 200) {
	const points = [];
	const vertex = 360;

	for(let i = 0; i < vertex; i++) {
		const angle = i * 2 * Math.PI / vertex;
		const x = radius * Math.cos(2*angle) * Math.cos(angle);
		const y = radius * Math.cos(2*angle) * Math.sin(angle);

		points[i] = { x: x, y: y };
	}

	return points;
}

export default (props) => {
	const canvasRef = React.useRef();
	const [state, setState] = React.useState({
		points: [],
		color: 'hotpink',
		offsetX: 0,
		offsetY: 0,
		angleDiff: -Math.PI/90,
		isSideBySide: false,
	});

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const sizes = canvas.getBoundingClientRect();

		canvas.width = sizes.width;
		canvas.height = sizes.height;

		setState({
			points: generateRose(canvas.width / 3),
			color: 'hotpink',
			offsetX: canvas.width / 2,
			offsetY: canvas.height / 2,
			angleDiff: -Math.PI/90,
			isSideBySide: false,
		})
	}, []);

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');

		let rafId;
		let globalAngle = 0;

		function draw() {
			rafId = requestAnimationFrame(draw);

			ctx.fillStyle = 'rgba(240,240,220, 0.05)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.save();

			ctx.beginPath();
			ctx.fillStyle = state.color;

			globalAngle += state.angleDiff;

			for (let i = 0; i < state.points.length;i++) {
				const point = state.points[i];

				const x = point.x;
				const y = point.y;
				const angle = state.isSideBySide
					? state.angleDiff * Math.cos(globalAngle)
					: state.angleDiff;

				point.x = x * Math.cos(angle) - y * Math.sin(angle);
				point.y = x * Math.sin(angle) + y * Math.cos(angle);

				ctx.lineTo(point.x + state.offsetX ,point.y + state.offsetY);
			}

			ctx.fill();
			ctx.closePath();
			ctx.restore();

			ctx.restore();
		}

		rafId = requestAnimationFrame(draw);

		return () => cancelAnimationFrame(rafId);
	}, [state]);

	return (
		<Slide {...props} layout={false}>
			<MathJax.Provider>
				<Layout width="60%" demoWidth="40%" canvas={<Canvas innerRef={canvasRef}></Canvas>}>
					<Buttons>
						<Button icon={"🏃‍♂️"} onClick={() => setState({...state, angleDiff: 2 * state.angleDiff })}>Прибавь газу</Button>
						<Button icon={"🛑"} onClick={() => setState({...state, angleDiff: state.angleDiff / 2 })}>Воу воу сбавь обороты</Button>
						<Button icon={state.isSideBySide ? "☕️" : "🍺"} onClick={() => setState({...state, isSideBySide: !state.isSideBySide})}>
							{ state.isSideBySide && <span>Протрезветь</span> }
							{ !state.isSideBySide && <span>Ты пьян</span> }
						</Button>
					</Buttons>

					<p>
						Умножение на одну из матриц преобразований просто переводит точку в новое положение.
					</p>


					<Formula fontSize={17} formula="{\displaystyle {\begin{bmatrix}x'\\y'\end{bmatrix}}={\begin{bmatrix}\cos \theta &\sin \theta \\-\sin \theta &\cos \theta \end{bmatrix}}{\begin{bmatrix}x\\y\end{bmatrix}}}" />

					<p>
						Координаты (x′,y′) в результате поворота точки (x, y) имеют вид:
					</p>

					<Formula fontSize={17} formula="{\displaystyle x'=x\cos \theta \mp y\sin \theta ,}" />
					<Formula margintop={-25} fontSize={17} formula="{\displaystyle y'=\pm x\sin \theta +y\cos \theta }" />
				</Layout>
			</MathJax.Provider>
		</Slide>
	);
}

const Canvas = styled.canvas`
	width: 100%;
	height: 100%;
`;

const Formula = styled(MathJax.Node)`
	display: flex;
	font-size: ${props => props.fontSize}px;
	margin-top: ${props => props.marginTop}px;
`;
