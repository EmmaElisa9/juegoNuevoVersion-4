class Arena extends BaseClass {
    constructor(x, y, width, height){
      var options ={
        isStatic:true,
        'restitution':0.001,
        'friction':0.01,
        'density':0.01
      }
      super(x,y,width,height);
      this.image = loadImage("Arena.jpg");
    }
  
  }