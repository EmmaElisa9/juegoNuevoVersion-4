class Platano extends BaseClass {
    constructor(x, y){
      var options ={
        isStatic:true,
        'restitution':0.001,
        'friction':0.01,
        'density':0.01
      }
        super(x,y,40,40);
        this.image = loadImage("banana0.png");
    }
  
  }