class Dustbin
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    var stump = this.body.position;
    
    rectMode(CENTER);
    stroke(255);
    fill("YELLOW");
    rect(stump.x, stump.y, this.w, this.h);
    
  }
}