//canvas
// ==================
// for the background
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//initialized the canvas
var c = canvas.getContext('2d');
// ===================
// below is how we draw a rectangel arguments are (x, y, width , height)
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(300,300, 30,30);
// ===================
// drawing a line 
// c.beginPath();
// c.moveTo(200, 200);
// c.lineTo(200, 400);
// c.lineTo(400, 400);
// c.strokeStyle = 'rgba(0, 255, 0, 0.5)';
// c.stroke();

// =================
// Arc
// // arguments of a arc (x: Int, y: Int, r: Int, startAngle: Float , endAngle: Float, drawCounterClockwise: Bool(false));
// c.beginPath();
// c.arc(500, 500, 300, 0, Math.PI *2, false);
// c.strokeStyle = 'blue';
// c.stroke();
// =================
//Creating circles using for loop 
// var xc = Math.random() * window.innerWidth;
// var yc = Math.random() * window.innerHeight;
// for(var i = 0 ;i < 100 ;i++)
// {
// 	c.beginPath();
// 	c.arc(xc, yc, 50, 0, Math.PI * 2, false);
// 	c.strokeSytle = "black";
// 	c.stroke();
// 	xc = Math.random() * window.innerWidth;
// 	yc = Math.random() * window.innerHeight;
// }
// =================
// How to animate the circles
// var x = 300;
// var y = 400;
// function animate() {
// 	requestAnimationFrame(animate);
// 	c.clearRect(0, 0, window.innerWidth, window.innerHeight);

// 	c.beginPath();
// 	c.arc(x, y, 50, 0, Math.PI * 2, false);
// 	c.strokeSytle = "black";
// 	c.stroke();
// 	x = Math.random() * window.innerWidth;
// 	y = Math.random() * window.innerHeight;

// }
// animate();
// ===================
// making a bouncy ball 
// var x = Math.random()*innerWidth;
// var y = Math.random()*innerHeight;
// var dx = Math.random();
// var dy = Math.random();
// var radius = 50;
// function animate() {
// 	requestAnimationFrame(animate);
// 	c.clearRect(0, 0, window.innerWidth, window.innerHeight);

// 	c.beginPath();
// 	c.arc(x, y, radius, 0, Math.PI * 2, false);
// 	c.strokeSytle = "black";
// 	c.stroke();
// 	if(x + radius > innerWidth || x - radius  < 0){
// 		dx = -dx;
// 	}
// 	if(y + radius > innerHeight || y - radius  < 0){
// 		dy = -dy;
// 	}
// 	x += dx;
// 	y += dy;
// }
// animate();

// Object oriented animation
function Circle(x, y, radius, dx, dy){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	if(this.x < radius) {this.x +=this.radius;}
	if(this.y < radius) {this.y += this.radius;}
	if(this.y+ radius > innerHeight ){this.y -= this.radius;}
	if(this.x + radius > innerWidth) {this.x -= this.radius;}
	this.draw = function(){
		c.beginPath();
		c.arc(this.x , this.y , this.radius, 0, Math.PI *2, false);
		c.strokeSytle = 'blue'
		c.stroke();
	}
	this.update = function(){
		if(this.x +radius > innerWidth || this.x -radius < 0){
			this.dx = -this.dx;
		}
		if(this.y + radius > innerHeight || this.y - radius < 0){
			this.dy = -this.dy;
		}		
		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	}
}
var circleArray = [];
for(var i = 0; i< 100; i++){
	var x = Math.random()*innerWidth;
	var y = Math.random()*innerHeight;
	var dx = Math.random();
	var dy = Math.random();
	circleArray[i] = new Circle(x,y,50, dx,dy);
}

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	for(var i = 0 ; i < 100; i++){
		circleArray[i].update();
	}
}
animate();