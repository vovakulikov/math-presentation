
import React from 'react';
import styled from 'styled-components';
import { Slide } from 'presa';

function random(min, max) {
	return Math.random() * (max - min) + min;
}

const generateRect = (width, height) => ({
	x: random(0, width),
	y: random(0, height),
	width: random(30, 100),
	height: random(30, 100),
	currentScale: random(0, 0.3),
	targetScale: 1,
	vs: 0,
	as: 0,
	spring: random(0.01, 0.03),
	friction: random(0.9, 0.95),
	color: `rgba(${random(100, 255)}, ${random(100, 255)}, ${random(250, 255)}, ${random(0.7, 1)})`,
});

const RectFactory = (props) => {
	const canvasRef = React.useRef();
	const [isActive, setActive] =  React.useState(false);

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const sizes = canvas.getBoundingClientRect();
		const store = [];

		canvas.width = sizes.width;
		canvas.height = sizes.height;

		let rafId;

		function draw(time) {
			rafId = requestAnimationFrame(draw);

			if (store.length < 500) {
				store.push(generateRect(canvas.width, canvas.height)) ;
			}

			ctx.fillStyle = 'rgba(255,255,255, 0.3)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			store.forEach((rect, index) => {
				const dx = rect.targetScale - rect.currentScale;
				const width = rect.width * rect.currentScale;
				const height = rect.height * rect.currentScale;

				rect.as = dx * rect.spring;
				rect.vs += rect.as;
				rect.vs *= rect.friction;
				rect.currentScale += rect.vs;

				ctx.save();
				ctx.fillStyle = rect.color;
				ctx.beginPath();
				ctx.rect(rect.x - width/2, rect.y - height/2, width, height);
				ctx.fill();
				ctx.restore();
			});
		}

		if (isActive) {
				rafId = requestAnimationFrame(draw);
		}

		return () => cancelAnimationFrame(rafId);
	}, [isActive]);

	return (
		<Slide {...props} layout={false}>
			<Container>
				<Canvas innerRef={canvasRef}></Canvas>
				<Controls
					onClick={() => setActive(!isActive)}
				>
					<ClickAnywhere invisible={isActive}>
						Click anywhere on a screen
					</ClickAnywhere>
				</Controls>
			</Container>
		</Slide>
	);
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`

const Canvas = styled.canvas`
	width: 100%;
	height: 100%;
`;

const ClickAnywhere = styled.div`
  font-weight: 600;
  color: #777;
  pointer-events: none;
  user-select: none;
  transition: all 1s ease;

  ${props =>
	props.invisible &&
	`
    opacity: 0;
    transform: scale(1.3, 1.3) translateY(-100px);
  `};
`

const Controls = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`


export default RectFactory;
