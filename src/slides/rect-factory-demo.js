var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

var generateRect = () => ({
	x: random(0, canvas.width),
	y: random(0, canvas.height),
	width: random(30, 100),
	height: random(30, 100),
	currentScale: random(0, 0.3),
	targetScale: 1,
	vs: 0,
	as: 0,
	spring: random(0.01, 0.03),
	friction: random(0.9, 0.95),
	color: `rgba(${random(0, 100)}, ${random(200, 255)}, ${random(250, 255)}, 1)`,
});

var store = [];

function random(min, max) {
	return Math.random() * (max - min) + min;
}

function draw(time) {
	if (store.length < 500) {
		store.push(generateRect()) ;
	}



	requestAnimationFrame(draw);

	console.log(canvas.width, canvas.height)
	ctx.fillStyle = 'rgba(255,255,255, 0.3)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
//  ctx.clearRect(0, 0, canvas.width, canvas.height);

	console.log(store.length)
	store.forEach((rect, index) => {
		var dx = rect.targetScale - rect.currentScale;

		rect.as = dx * rect.spring;
		rect.vs += rect.as;
		rect.vs *= rect.friction;
		rect.currentScale += rect.vs;

		var width = rect.width * rect.currentScale;
		var height = rect.height * rect.currentScale;


		ctx.save();
		ctx.fillStyle = rect.color;
		ctx.beginPath()
		ctx.rect(rect.x - width/2, rect.y - height/2, width, height);
		ctx.fill();
		ctx.restore();

	});

}

requestAnimationFrame(draw);
