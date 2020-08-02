let DrawArea = document.getElementById('drawCanvas');
let ctx = DrawArea.getContext('2d');

//functions
let curx = 0;
let cury = 0;

function coordinate(event) { 
  
    curx = event.clientX;
    cury = event.clientY;
	
} 

//drawign classes
class Draw{
	
	ctx;
	constructor(ctx){
		this.ctx = ctx;
	}
	
	rectangle(x, y, width, height, otcolor = "white", bgcolor = "black"){
		this.ctx.beginPath();
		this.ctx.rect(x, y, width, height);
		ctx.fillStyle = bgcolor;
		this.ctx.fill();
		ctx.strokeStyle = otcolor;
		this.ctx.stroke();
		this.ctx.closePath();
	}
	
}


//variables and objects
let draw = new Draw(ctx);
let x = 0;
let drawable = 0; //can be 0 or 1
// 0 for not drawable and 1 for drawable


//Event listners
DrawArea.addEventListener('click',()=>{
	drawable = 1;
});


//continuous iterations
setInterval(()=>{
	

	
}, 100);