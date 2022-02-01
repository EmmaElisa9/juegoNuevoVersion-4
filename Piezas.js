class Piezas{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image1 = loadImage("pieza1.png");
        this.image2 =  loadImage("pieza2.png");
        this.image3 =  loadImage("pieza3.png");
        this.image4 =  loadImage("pieza4.png");
        this.image5 = loadImage("pieza5.png");
        this.image6 =  loadImage("pieza6.png");
        this.images= [pieza1,pieza2,pieza3,pieza4,pieza5,pieza6];
 

        World.add(world, this.body);
      }
      display(color){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        switch(color){
            case 1: image(this.image1, 0, 0, this.width, this.height);
            break;
            case 2: image(this.image2, 0, 0, this.width, this.height);
            break;
            case 3: image(this.image3, 0, 0, this.width, this.height);
            break;
            case 4: image(this.image4, 0, 0, this.width, this.height);
            break;
            case 5: image(this.image5, 0, 0, this.width, this.height);
            break;
            case 6: image(this.image6, 0, 0, this.width, this.height);
            break;
        }
        pop();
      }
}