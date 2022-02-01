class Ground{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          'restitution':0.1,
            'friction':0.001,
            'density':0.001
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("tierra.jpg");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y, this.width, this.height);
    }

    mover(x,y){
      Matter.Body.setPosition(this.body,{x:this.body.position.x+x, y:this.body.position.y+y});
    }
    
  }
