
let n = 1; // number of petals

let d = 1; // connecting lines
    
let multiplier;
function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight,windowHeight);
  }
  else{
    createCanvas(windowWidth,windowWidth);
  }
  
  frameRate(25);
  multiplier = width/2.5
  angleMode(DEGREES);
  textSize(30);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  stroke(0,255,0, 200);
  noFill();
  beginShape();
  for (let i =0; i<361; i++){  // 361 closes 
    
    let k = i * d  // makes a special angle
    let r = sin(n*k) * multiplier; //  mulitplier makes fit the canvas
    
    let  x = r * cos(k);  // uses k as angle
    let y = r * sin(k);
    vertex(x,y);
    
  }
  endShape();
  
  
  stroke(255,100,0);
  beginShape();
  for (let i =0; i<361; i++){  // 361 closes 
    
    let k = i  // makes a special angle
    let r = sin(n*k) * multiplier; //  mulitplier makes fit the canvas
    
    let  x = r * cos(k);  // uses k as angle
    let y = r * sin(k);
    vertex(x,y);
    
  }
  endShape()
  text(`petals ${n} (if even * 2)`, 50-width/2,50-height/2);
   text(`angle of lines ${d.toFixed(2)}`, 50-width/2,80-height/2);
  //n=n+0.2;
  d=d+0.2;   // lines connecting the points
  if(d > 70){
  	d=1;
  	n=n+1; // you can make this go up by 0.5 but it will 1.5 will draw three red but six sets of lines
  }
}
