import React from 'react';
import styled from 'styled-components';
import { Slide } from 'presa';

const looper = fn => {
	let cb = (time) => {
		requestAnimationFrame(cb);
		let diff = ~~(time - (cb.time || 0)),
			seconds_passed = diff/1000;
		fn(seconds_passed);
		cb.time = time
	};
	return cb
};

const random = (min=0, max=400) =>
	Math.random()*(max-min)+min;

const vector = (x=random(),y=random()) => [x,y];

const degToRad = deg => deg * Math.PI / 180;

const radToDeg = rad => rad*180 / Math.PI;

const add = (...vx) =>
	vx.reduce((a, v) =>
		[a[0] + v[0], a[1] + v[1]], [0,0]);

const sub = (...vx) =>
	vx.reduce((a, v) =>
		[a[0] - v[0], a[1] - v[1]]);

const scale = ([x,y],n) =>
	[n * x, n * y];

const div = ([x, y], n) => scale([x, y], 1/n);

const dot = ([x1,y1],[x2,y2]) =>
	x1*x2 + y1*y2;

const rotate = ([x,y],deg) => {
	let r = degToRad(deg),
		[cos, sin] = [Math.cos(r), Math.sin(r)];
	return [cos*x - sin*y, sin*x + cos*y]
};

const normalize = v => scale(v,1/(mag(v) || 1));

const mag = ([x,y]) => Math.sqrt(x*x + y*y);

const dist = ([x1,y1], [x2,y2]) =>
	Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));

const heading = (v) => {
	let angle = angleBetween(v,[0,-1*mag(v)]);
	return v[0] < 0 ? 360-angle : angle
};

const angleBetween = (v1,v2) =>
	radToDeg(Math.acos( dot(v1,v2) / (mag(v1)*mag(v2)) ));

const particle = (
	position = vector(),
	velocity = vector(),
	accel = vector()) => ({ accel, velocity, position });

const flame = (position = vector(), size = random(10, 20), velocity = [0, 0], accel = [0,0] ) => {
	return {
		...particle(position, velocity, accel),
		size
	};
};

const update = (p, friction) => {
	let [[px, py], [vx, vy], [ax, ay]] = [p.position, p.velocity, p.accel];

	vx = (vx+ax) * (1 - friction);
	vy = (vy+ay) * (1 - friction);

	let position = [px + vx, py + vy],
		accel = [0, 0],
		velocity = [vx, vy];

	return { ...p, position, velocity, accel };
};


const applyForce = (p, m, a) => {
	let { accel } = p;

	return { ...p, accel: add(accel, scale(a, m)) };
};


const WORLD_FRICTION = 0.1;


export default (props) => {
	const canvasRef = React.useRef();

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const sizes = canvas.getBoundingClientRect();

		canvas.width = sizes.width;
		canvas.height = sizes.height;

		let flames = [];
		let mouse = [canvas.width/2, canvas.height];

		canvas.addEventListener(
			'mousemove',
			({ clientX, clientY }) => mouse = [clientX + window.pageXOffset, clientY+ window.pageYOffset]
		);

		canvas.addEventListener('mousedown', () => {
			for (let i = 0; i < 200; i++) {
				flames.push(flame(random(10, 20), vector(random(-10, 10), random(-10, 10))));
			}
		});

		let rafId;

		function draw(time) {
			flames.push(flame(mouse), flame(mouse), flame(mouse));

			flames = flames
				.filter(({ position, size }) => ((position[1] > -1 * size) && (size > 1)))
				.map(p => update(p, WORLD_FRICTION))
				.map(p => applyForce(p, p.size*time, [random(-4, 4), -2]))
				.map(p => {
					let { size } = p;
					size *= .99;

					return { ...p, size };
				});


			ctx.clearRect(0, 0, canvas.width, canvas.height);

			flames.forEach(p => {
				const { position, size } = p;
				const color =  `rgba(
						${random(200, 255)},
						${random(0, 60)},
						${Math.round(random(Math.round(size), 2 * Math.round(size)))}, ${1 - 1/Math.pow(size, 2)})`;

				ctx.save();
				ctx.beginPath();
				ctx.arc(position[0], position[1], size, 0, 2 * Math.PI);
				ctx.fillStyle = color;
				ctx.fill();
				ctx.restore();
			});
		}
		looper(draw)();
		// rafId = requestAnimationFrame(draw);

		return () => cancelAnimationFrame(rafId);

	}, []);


	return (
		<Slide {...props} layout={false}>
			<Canvas innerRef={canvasRef}/>
		</Slide>
	);
}

const Canvas = styled.canvas`
	width: 100%;
	height: 100%;
`;






