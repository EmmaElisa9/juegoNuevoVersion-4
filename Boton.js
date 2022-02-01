class Boton extends BaseClass {
    constructor(x, y, width, height){
      var options ={
            isStatic:true,
            'restitution':0.1,
              'friction':0.001,
              'density':0.001
      }
      super(x,y,width,height);
      this.image = loadImage("boton.png");
    }
  }