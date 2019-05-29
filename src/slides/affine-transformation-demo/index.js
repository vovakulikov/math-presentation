import React from 'react';
import { Slide } from "presa";
import styled from 'styled-components';
import {captureMouse} from "./utils";
import Ball3d from "./ball";

const fl = 250;

function rotateX (ball, angle) {
	const position = [ball.xpos, ball.ypos, ball.zpos],
		sin = Math.sin(angle),
		cos = Math.cos(angle),
		xRotMatrix = [];

	xRotMatrix[0] = [1,    0,   0];
	xRotMatrix[1] = [0,  cos, sin];
	xRotMatrix[2] = [0, -sin, cos];

	const result = matrixMultiply(position, xRotMatrix);

	ball.xpos = result[0];
	ball.ypos = result[1];
	ball.zpos = result[2];
}

function rotateY (ball, angle) {
	const position = [ball.xpos, ball.ypos, ball.zpos],
		sin = Math.sin(angle),
		cos = Math.cos(angle),
		yRotMatrix = [];

	yRotMatrix[0] = [ cos, 0, sin];
	yRotMatrix[1] = [   0, 1,   0];
	yRotMatrix[2] = [-sin, 0, cos];

	const result = matrixMultiply(position, yRotMatrix);
	ball.xpos = result[0];
	ball.ypos = result[1];
	ball.zpos = result[2];
}

function matrixMultiply (matrixA, matrixB) {
	const result = [];
	result[0] = matrixA[0] * matrixB[0][0] +
		matrixA[1] * matrixB[1][0] +
		matrixA[2] * matrixB[2][0];

	result[1] = matrixA[0] * matrixB[0][1] +
		matrixA[1] * matrixB[1][1] +
		matrixA[2] * matrixB[2][1];

	result[2] = matrixA[0] * matrixB[0][2] +
		matrixA[1] * matrixB[1][2] +
		matrixA[2] * matrixB[2][2];
	return result;
}

function setPerspective (ball, vpX, vpY) {
	if (ball.zpos > -fl) {
		const scale = fl / (fl + ball.zpos);

		ball.scaleX = ball.scaleY = scale;
		ball.x = vpX + ball.xpos * scale;
		ball.y = vpY + ball.ypos * scale;
		ball.visible = true;
	} else {
		ball.visible = false;
	}
}

function move (ball,angleX,angleY, vpX, vpY) {
	rotateX(ball, angleX);
	rotateY(ball, angleY);
	setPerspective(ball, vpX, vpY);
}

function zSort (a, b) {
	return (b.zpos - a.zpos);
}

function drawBall (ball, context) {
	if (ball.visible) {
		ball.draw(context);
	}
}

export default (props) => {
	const canvasRef = React.useRef();

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const sizes = canvas.getBoundingClientRect();

		canvas.width = sizes.width;
		canvas.height = sizes.height;

		let mouse = captureMouse(canvas),
			balls = [],
			numBalls = 50,
			fl = 250,
			vpX = canvas.width / 2,
			vpY = canvas.height / 2;

		for (let ball, i = 0; i < numBalls; i++) {
			ball = new Ball3d(15);
			ball.xpos = Math.random() * 200 - 100;
			ball.ypos = Math.random() * 200 - 100;
			ball.zpos = Math.random() * 200 - 100;
			balls.push(ball);
		}

		let rafId;

		function draw() {
			rafId = requestAnimationFrame(draw);

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const mouseVec = [mouse.x - vpX, mouse.y - vpY];

			let angleX = (mouse.y - vpY) * 0.0001;
			let angleY = (mouse.x - vpX) * 0.0001;


			balls.forEach((ball) => move(ball, angleX, angleY, vpX, vpY));
			balls.sort(zSort);
			balls.forEach((ball) => drawBall(ball, ctx));
		}

		rafId = requestAnimationFrame(draw);

		return () => cancelAnimationFrame(rafId);
	}, []);

	return (
		<Slide {...props} layout={false}>
			<Canvas innerRef={canvasRef}></Canvas>
		</Slide>
	);
}

const Canvas = styled.canvas`
	width: 100%;
	height: 100%;
`;
