import React from 'react';
import styled from 'styled-components';
import { Slide } from 'presa';
import MathJax from 'react-mathjax';

import Button from '../components/button';

const TYPES = {
	rose: 1,
	heart: 2,
	almostHeart: 3,
	cannabis: 4,
	circle: 5,
};

function generateRosePoints(r = 200, vertex = 360) {
	const k = 6;
	const result = [];

	for(let i = 0; i < vertex; i++) {
		const angle = i*2*Math.PI/vertex;
		const radius = r * Math.cos(k * angle);

		const x = radius * Math.sin(angle);
		const y = radius * Math.cos(angle);

		result.push({ x: x, y: y});
	}

	return result;
}

function generateCannabisPoints(r = 200, vertex = 360) {
	const a = 0.5;
	const result = [];
	const translateY = 150;

	for(let i = 0; i < vertex; i++) {
		const angle = i * 2 * Math.PI/vertex;
		const radius = r * Math.asin(a + a * Math.cos(8 * angle)) * (a - a * Math.cos(angle));
		const x = radius * Math.sin(angle);
		const y = radius * Math.cos(angle) + translateY;

		result.push({ x: x, y: y});
	}

	return result;
}

function generateCirclesPoints(radius = 150, vertex = 360) {
	const result = [];

	for(let i = 0; i < vertex; i++) {
		const angle = i * 2 * Math.PI/vertex;
		const x = radius * Math.sin(angle);
		const y = radius * Math.cos(angle);

		result.push({ x: x, y: y});
	}

	return result;
}

function generateAlmostHeartPoints(r = 250, vertex = 360,) {
	const points = [];
	const a = 0.5;
	const translateY = 125;

	for(let i = 0; i < vertex; i++) {
		const angle = i*2*Math.PI/vertex;
		const radius = r * (a - a * Math.cos(angle));
		const x = radius * Math.sin(angle);
		const y = radius * Math.cos(angle) + translateY;

		points.push({ x: x, y: y});
	}

	return points;
}

function generateHeartPoints(r = 75, vertex = 360,) {
	const points = [];
	const translateY = -100;
	const rotateAngle = Math.PI/2; // 90 deg

	for (let i = 0; i < vertex; i++) {
		let angle = i * 2 * Math.PI/vertex;
		// More perfect here has more difficult shape
		// 2 - 2 * Math.sin(angle) + Math.sin(angle) * (Math.sqrt(Math.abs(Math.cos(angle))) / (Math.sin(angle) + 1.4));
		const radius = r * (3 - 2*Math.sin(angle) + Math.cos(2*angle) - 2 * Math.abs(Math.cos(angle)));
		const x = radius * Math.sin(angle - rotateAngle);
		const y = translateY - radius * Math.cos(angle - rotateAngle);

		points.push({ x: x, y: y});
	}

	return points;
}

function random(min, max) {
	return Math.random() * (max - min) + min;
}

const GENERATORS = {
	[TYPES.rose]: generateRosePoints,
	[TYPES.almostHeart]: generateAlmostHeartPoints,
	[TYPES.heart]: generateHeartPoints,
	[TYPES.cannabis]: generateCannabisPoints,
	[TYPES.circle]: generateCirclesPoints
};

const initialState = {
	type: TYPES.circle,
	targetShape: GENERATORS[TYPES.circle](),
	currentShape: GENERATORS[TYPES.circle]()
};

const formulaRose = `{\\displaystyle \\mathbf {a} ={\\begin{bmatrix}-4\\\\3\\\\\\end{bmatrix}}=[-4\\ 3].}`;
const MathMorph = (props) => {
	const canvasRef = React.useRef();
	const [state, setState] = React.useState(() => initialState);

	const setShape = (nextType) => {
		const generator = GENERATORS[nextType];

		setState({ ...state, type: nextType, targetShape: generator() });
	};

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const sizes = canvas.getBoundingClientRect();

		canvas.width = sizes.height;
		canvas.height = sizes.height;
	});

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');

		let rafId;

		function draw() {
			rafId = requestAnimationFrame(draw);

			ctx.fillStyle = 'rgba(255, 255, 255, 1)';
			ctx.fillRect(0,0,canvas.width, canvas.height);

			ctx.save();
			ctx.fillStyle = 'black';
			ctx.lineWidth = 4;
			ctx.translate(canvas.width/2, canvas.height/2);
			ctx.beginPath();


			for (let i = 0; i < state.currentShape.length; i++) {
				const currentPoint = state.currentShape[i];
				const targetPoint = state.targetShape[i];

				const diffX = targetPoint.x - currentPoint.x;
				const diffY = targetPoint.y - currentPoint.y;

				currentPoint.x += diffX * random(0.03, 0.05);
				currentPoint.y += diffY * random(0.03, 0.05);

				ctx.lineTo(currentPoint.x, currentPoint.y);
			}

			ctx.closePath();
			ctx.fill();
			ctx.restore()
		}

		rafId = requestAnimationFrame(draw);

		return () => cancelAnimationFrame(rafId);
	}, [state]);

	const { type: currentType } = state;

	return (
		<Slide {...props}>
			<MathJax.Provider>
				<Content>

					<Controls>
						<Button checked={currentType === TYPES.heart} icon="❤️" onClick={() => setShape(TYPES.heart)}>Heart</Button>
						<Button checked={currentType === TYPES.circle} icon="🔴️" onClick={() => setShape(TYPES.circle)}>Circle</Button>
						<Button checked={currentType === TYPES.almostHeart} icon="💔" onClick={() => setShape(TYPES.almostHeart)}>Butt</Button>
						<Button checked={currentType === TYPES.cannabis} icon="🌵" onClick={() => setShape(TYPES.cannabis)}>Cannabis</Button>
						<Button checked={currentType === TYPES.rose} icon="🌹" onClick={() => setShape(TYPES.rose)}>Rose</Button>
					</Controls>

					<CanvasContainer>
						<FormulaContainer>
							{currentType === TYPES.circle && <Formula fontSize={50} formula={'{\\displaystyle r(\\varphi )=a}'}/>}
							{currentType === TYPES.cannabis && <Formula fontSize={20} formula={'{\\displaystyle r(\\varphi )=(1+0.9 cos(8 θ)) (1+sin(θ))}'}/>}
							{currentType === TYPES.almostHeart && <Formula fontSize={25} formula={'{\\displaystyle r(\\varphi )=1 - \\cos \\left(k\\varphi +\\gamma _{0}\\right)}'}/>}
							{currentType === TYPES.rose && <Formula fontSize={25} formula={'{\\displaystyle r(\\varphi )=a\\cos \\left(k\\varphi +\\gamma _{0}\\right)}'}/>}
							{currentType === TYPES.heart && <Formula fontSize={20} formula={'r = \\frac{\\sin t \\sqrt{|\\cos t|}}{\\sin t + \\frac75} - 2\\sin t + 2'}/>}
						</FormulaContainer>
						<Canvas innerRef={canvasRef} />
					</CanvasContainer>
				</Content>
			</MathJax.Provider>
		</Slide>
	);
};

const Controls = styled.div`
	display: flex;
	align-items: center;
`;

const CanvasContainer = styled.div`
	flex: 1;
	position: relative;
	display: flex;
`;

const Formula = styled(MathJax.Node)`
	display: flex;
	font-size: ${props => props.fontSize && props.fontSize}px;
`;

const FormulaContainer = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const Canvas = styled.canvas`
	flex: 1;
	height: 100%;
`;

export default MathMorph;
