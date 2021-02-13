class Paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.2,
          'friction':1.3,
          'density':1.85,
          isStatic:false
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = 2*r;
      this.image = loadImage("images/paper.png");
      
      World.add(world, this.body);
    }
    display(){
    //   var pos =this.body.position;
       var pos =this.body.position;
      
       var angle = this.body.angle;
      
       translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      
      image(this.image,0,0, this.r,this.r);
      
    }
  }
  