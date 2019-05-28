import React from 'react';
import styled from 'styled-components';
import { Slide } from 'presa';
import Button from "../components/button";

export default (props) => {
	const canvasRef = React.useRef(null);
	const [type, setType] = React.useState('decart');

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const sizes = canvas.getBoundingClientRect();

		canvas.width = sizes.width;
		canvas.height = sizes.height;

		drawSystemOfCoordinates(canvas, 60);

		return () => {}
	}, []);

	return (
		<Slide {...props}>
			<SlideLayout>

				<ButtonsContainer>
					<Button checked= {type === 'decart' } onClick={() => setType('decart')}>Декартова</Button>
					<Button checked= {type === 'affine' } onClick={() => setType('affine')}>аффинная</Button>
				</ButtonsContainer>

				<Showcase type={type}>
					<Canvas type={type} innerRef={canvasRef}></Canvas>
				</Showcase>
			</SlideLayout>
		</Slide>
	);
}

function drawSystemOfCoordinates(canvas, step = 20) {
	const ctx = canvas.getContext('2d');
	const centerX =  Math.floor((((canvas.width - 4) / step) / 2)) * step;
	const centerY = Math.floor((((canvas.height - 4) / step) / 2)) * step;

	ctx.save();
	ctx.setLineDash([1, 3]);

	// draw horizontal lines
	for(let i = 0; i <= canvas.width; i+= step) {
		ctx.beginPath();

		ctx.moveTo(i, 0);
		ctx.lineTo(i, canvas.height);
		ctx.stroke();
	}

	// draw vertical lines
	for(let i = 0; i <= canvas.height; i+= step) {
		ctx.beginPath();
		ctx.moveTo(0, i);
		ctx.lineTo(canvas.width, i);
		ctx.stroke();
	}

	ctx.restore();


	function canvas_arrow(context, fromx, fromy, tox, toy){
		var headlen = 10;   // length of head in pixels
		var angle = Math.atan2(toy-fromy,tox-fromx);

		ctx.save();
		ctx.beginPath();
		context.moveTo(fromx, fromy);
		context.lineTo(tox, toy);
		context.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
		context.moveTo(tox, toy);
		context.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));

		ctx.stroke();
		ctx.restore();
	}

	canvas_arrow(ctx, centerX, canvas.height, centerX, 0);
	canvas_arrow(ctx,  0, centerY, canvas.width, centerY);

	canvas_arrow(ctx,  centerX, centerY, centerX + step * 3, centerY + step * 3);
	canvas_arrow(ctx,  centerX, centerY, centerX - step * 2, centerY - step * 3);
	canvas_arrow(ctx,  centerX, centerY, centerX + step * 5, step * 2);
}


const ButtonsContainer  = styled.div`
	position: relative;
	z-index: 9999;
`;

const SlideLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Showcase = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  flex: 1;
  width: 100%;
  justify-content: center;
  transition: all 0.3s ease;
 
  background-color: ${props => props.type === 'affine' ? '#3d59ff14' : 'inherit'};
  transform: ${props => props.type === 'affine' ? `rotate3d(2, -1, -1, -0.2turn) translateZ(50px) scale(3,3)` : '' };
`;

const Canvas = styled.canvas`
	transition: all 0.3s ease;
	width: 100%;
	height: 100%;
	transform: ${props => props.type === 'affine' ? `scale(0.3333)` : '' };
`;
