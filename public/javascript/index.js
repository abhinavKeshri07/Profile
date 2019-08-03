//canvas

// ==================
// for the background
var canvas = document.querySelector('.mycanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//initialized the canvas
var c = canvas.getContext('2d');
//====================
// event listener to resize the canvas
window.addEventListener('resize', function(event){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if( w < 500 ){console.log("Hi there");}
});
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
// ==================
// Adding interaction to our circles
var mouse = {
	x: undefined,
	y: undefined
}
window.addEventListener('mousemove', function(event){
	mouse.x = event.x;
	mouse.y = event.y;
});


// ====================
// Object oriented animation
var colorArray = ["'rgba(44, 62 , 80, 0.3)", 
"rgba(231, 76, 60, 0.3", 
"rgba(200, 45, 241 , 0.3", 
"rgba(52, 152, 219, 0.3", 
"rgba(41, 128, 185, 0.3"];
function Circle(x, y, radius, dx, dy){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
	if(this.x < radius) {this.x +=this.radius;}
	if(this.y < radius) {this.y += this.radius;}
	if(this.y+ radius > innerHeight ){this.y -= this.radius;}
	if(this.x + radius > innerWidth) {this.x -= this.radius;}
	this.draw = function(){
		c.beginPath();
		c.arc(this.x , this.y , this.radius, 0, Math.PI *2, false);
		c.fillStyle = this.color;
		c.fill();
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
		//interactivity
		if(Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50){
			this.radius += 1;
		}
		else{
			this.radius = this.minRadius;
		}

		this.draw();
	}
}
var circleArray = [];
for(var i = 0; i< 75; i++){
	var x = Math.random()*innerWidth;
	var y = Math.random()*innerHeight;
	var dx = Math.random();
	var dy = Math.random();
	var radius = Math.random()*50 + 1;
	circleArray[i] = new Circle(x,y,radius, dx,dy);
}

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	for(var i = 0 ; i < circleArray.length ; i++){
		circleArray[i].update();
	}
}
animate();

