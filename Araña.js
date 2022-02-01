class Araña{
    constructor(pointA,pointB){

        this.pointB = pointB;
        this.pointA = pointA;

        this.body = Bodies.circle(this.pointA,this.pointB+50,50,70);
        this.image = loadImage("spider0.png");

        World.add(world, this.body);
    }

    display(){
            push();
                imageMode(CENTER);
                image(this.image,this.pointA,this.pointB+50,50,70);
                strokeWeight(4);
                stroke("white");
                line(this.pointA,this.pointB,this.pointA,this.pointB+40);
            pop();
    }
    
}