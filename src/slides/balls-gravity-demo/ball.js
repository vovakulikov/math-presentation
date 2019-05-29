// Objects
function Ball(x, y, dx, dy, radius, color, gravity, friction, c, canvas) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;
	this.gravity = gravity;
	this.friction = friction;
	this.c = c;
	this.canvas = canvas;

	this.update = function() {
		if (this.y + this.radius + this.dy> this.canvas.height) {
			this.dy = -this.dy;
			this.dy = this.dy * friction;
			this.dx = this.dx * friction;
		} else {
			this.dy += this.gravity;
		}

		if (this.x + this.radius >= this.canvas.width || this.x - this.radius <= 0) {
			this.dx = -this.dx * this.friction;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	};

	this.draw = function() {
		this.c.beginPath();
		this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		this.c.fillStyle = this.color;
		this.c.fill();
		this.c.stroke();
		this.c.closePath();
	};
}

export default Ball;
