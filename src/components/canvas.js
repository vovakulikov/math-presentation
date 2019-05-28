import React from 'react';
import styled from 'styled-components';

const CanvasTemplate = (props) => {
	const canvasRef = React.useRef();

	React.useEffect(() => {
		const canvas =  canvasRef.current;
		const ctx =  canvas.getContext('2d');
		const sizes = canvas.getBoundingClientRect();

		canvas.width = sizes.width;
		canvas.height = sizes.height;

		const drawFromProps = props.getDrawCallback(ctx, canvas, sizes);

		let rafId = requestAnimationFrame(draw);

		function draw(time) {
			requestAnimationFrame(draw);
			drawFromProps();
		}

		return () => cancelAnimationFrame(rafId);
	}, []);

	return (
		<Canvas innerRef={canvasRef}></Canvas>
	);
};

const Canvas = styled.canvas`
	width: 100%;
	height: 100%;
`;
