const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine;

var alien1,alienIMG;
var piso,piso2,piso3,plataforma1,plataforma2,plataforma3, plataforma4,IMG,IMG2;
var obstaculo,obstaculo2,obstaculo3,boton1;
var elevador1, elevador2, elevador3;
var araña,araña2,araña3,araña4,araña5;
var arena,arena2,arena3,arena4,arena5;
var platano,platano2,platano3,platano4;
var score,i=0;
var piezas;
var Nivel1;
var gameState = Nivel1;

var pieza1,pieza2,pieza3,pieza4,pieza5,pieza6;

function preload(){
  //cargar animaciones
  alienIMG = loadAnimation("sprite_0.png","sprite_1.png");

  IMG = loadImage("tierra.jpg");
  IMG2 = loadImage("tierra2.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  alien1 = new Alien(700,50,50,70);


  piso = new Ground(width/2,height-2,width,30);
  piso2 = new Ground(width-1400,height/2,30,height);
  piso3 = new Ground(width+20,height/2,30,height);

  plataforma1 = new Ground(width/2-230,height-500,width-700,20);
  
  plataforma2 = new Ground(width/2+10,height-340,width-230,20);

  plataforma3 = new Ground(width/2+10,447,width-230,20);

  elevador1 = new Ground(width-1310,135,100,20);
  elevador2 = new Ground(width-1310,448,100,20);
  elevador3 = new Ground(width-45,height-340,100,20);


  obstaculo = new Box(810,123,40,320);

  obstaculo2 = new Box(width/2-350,270,50,50);
  obstaculo3 = new Box(950,270,50,50);
  obstaculo4 = new Box(950,210,50,50);

  araña = new Araña(365,460);
  araña2 = new Araña(525,460);
  araña3 = new Araña(665,460);
  araña4 = new Araña(805,460);
  araña5 = new Araña(955,460);

  arena = new Arena(1100,420,65,32);
  arena2 = new Arena(950,420,65,32);
  arena3 = new Arena(800,420,65,32);
  arena4 = new Arena(650,420,65,32);
  arena5 = new Arena(500,420,65,32);

  platano = new Platano(574,110);
  platano2 = new Platano(450,110);
  platano3 = new Platano(330,110);
  platano4 = new Platano(210,110);

  boton1 = new Boton(558,275,40,23);


  pieza1 = new Piezas(width/2-350,height-470, 20, 20);

  pieza2 = new Piezas(width/2+265,height-520, 20, 20);

  pieza3 = new Piezas(350,height-20, 20, 20);

  pieza4 = new Piezas(400,height-20, 20, 20);

  pieza5 = new Piezas(450,height-20, 20, 20);

  pieza6 = new Piezas(450,height-20, 20, 20);


  score=0;
}

function draw(){
  background(IMG2);

  Engine.update(engine);

  //nivel 1
  if(gameState===Nivel1){
    nivel1();
    console.log(1);
  }
  else{
    console.log(2);
  }

  
  //nivel 2
  //nivel 3
  //nivel 4
  //nivel 5


  drawSprites();

  console.log(mouseY);
  console.log(mouseX);
}

function nivel1(){

  alien1.display();

  piso.display();
  piso2.display();
  piso3.display();
  obstaculo2.display();
  obstaculo.display();
  obstaculo3.display();
  obstaculo4.display();
  Matter.Body.setStatic(obstaculo.body,true);
  Matter.Body.setStatic(obstaculo3.body,true);
  Matter.Body.setStatic(obstaculo4.body,true);

  araña.display();
  araña2.display();
  araña3.display();
  araña4.display();
  araña5.display();

  platano.display();
  Matter.Body.setStatic(platano.body,true);
  platano2.display();
  Matter.Body.setStatic(platano2.body,true);
  platano3.display();
  Matter.Body.setStatic(platano3.body,true);
  platano4.display();
  Matter.Body.setStatic(platano4.body,true);

  arena.display();
  Matter.Body.setStatic(arena.body,true);
  arena2.display();
  Matter.Body.setStatic(arena2.body,true);
  arena3.display();
  Matter.Body.setStatic(arena3.body,true);
  arena4.display();
  Matter.Body.setStatic(arena4.body,true);
  arena5.display();
  Matter.Body.setStatic(arena5.body,true);

  boton1.display();
  Matter.Body.setStatic(boton1.body,true);


  plataforma1.display();
  plataforma2.display();
  plataforma3.display();

  elevador1.display();
  elevador2.display();
  elevador3.display();

  pieza1.display(1);
  pieza2.display(2);
  pieza3.display(3);
  pieza4.display(4);
  pieza5.display(5);
  pieza6.display(6);

  alien1.move(0,0);

  if(keyDown("UP_ARROW")){
    alien1.move(0,-10);
  }
  if(keyDown("RIGHT_ARROW")){
    alien1.move(2,0);
  }
  if(keyDown("LEFT_ARROW")){
    alien1.move(-2,0);
  }

  if(alien1.body.position.x<width-1300&&elevador1.body.position.y<295){
    elevador1.mover(0,2);
  }
  if(alien1.body.position.x<width-1300&&alien1.body.position.y>400&&elevador2.body.position.y<605){
    elevador2.mover(0,2);
  }
  if(alien1.body.position.x>1305&&elevador3.body.position.y<442){
    elevador3.mover(0,2);
  }

  chocar();


    /*for(a=1;a<7;a++){
      piezas="pieza"+a;
      console.log(piezas);
      if(piezas&&alien1.collide(piezas)){
        score++;
        //piezas.remove();
        i++;
      }
      i=0;
    }
  
  if(Tocando(alien1,pieza1)){
    score++;
  }
  else{
    score=score;
  }*/

  //fill("blue");
  textSize(30);
  text("piezas: "+score,200,30);

}

function chocar(){
  var chocar1=Matter.SAT.collides(boton1.body,alien1.body);
  if(chocar1.collided&&obstaculo.body.position.y>0){
    Matter.Body.setPosition(obstaculo.body,{x:obstaculo.body.position.x,y:obstaculo.body.position.y-0.5})
  }

  var choque= [Matter.SAT.collides(arena.body,alien1.body),Matter.SAT.collides(arena2.body,alien1.body),Matter.SAT.collides(arena3.body,alien1.body),Matter.SAT.collides(arena4.body,alien1.body),Matter.SAT.collides(arena5.body,alien1.body),Matter.SAT.collides(araña.body,alien1.body),Matter.SAT.collides(araña2.body,alien1.body),Matter.SAT.collides(araña3.body,alien1.body),Matter.SAT.collides(araña4.body,alien1.body),Matter.SAT.collides(araña5.body,alien1.body)];
  /*if(choque[0].collided||choque[1].collided||choque[2].collided||choque[3].collided||choque[4].collided||choque[5].collided||choque[6].collided||choque[7].collided||choque[8].collided||choque[9].collided,choque[10].collided||choque[11].collided||choque[12].collided||choque[13].collided){
    console.log("End"); ,Matter.SAT.collides(platano.body,alien1.body),Matter.SAT.collides(platano2.body,alien1.body),Matter.SAT.collides(platano3.body,alien1.body),Matter.SAT.collides(platano4.body,alien1.body)
  }*/

}