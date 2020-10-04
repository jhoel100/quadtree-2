let qt;
let count=0;

function setup() {
  //aumente el tamano al doble para ver mejor
  createCanvas(800, 800);
  //lo mismo para la zona de verificacion
  let boundary = new Rectangle(400, 400, 400, 400);
  qt = new QuadTree(boundary, 4);
  console.log(qt);
  
  for (let i = 0; i < 1000; i++) {
    let p = new Point(Math.random()*800,Math.random()*800) ;
    qt.insert(p);
  }
  background(0);
  qt.show();

  stroke(0,255,0);
  rectMode(CENTER);

  let range = new Rectangle ( random(200) ,random(200) ,random(50) ,random(50) )
  rect(range.x,range.y, range.w*2 ,range.h*2) ;
  let points = [];
  qt.query(range , points);
  for (let p of points ){
    strokeWeight(4) ;
    point(p.x, p.y);
  }
  console.log(count);

}

function draw() {
  background(0);
  qt.show();

  stroke(0, 255, 0);

  
}
