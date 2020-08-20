class DUSTBIN{
      constructor(x,y){
             this.x=x
             this.y=y
             this.dustbinWidth=200;
		     this.dustbinHeight=100;
		     this.wallThickness=20;
             this.angle=0;
             
             this.bottombody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
             this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
             Matter.Body.setAngle(this.leftWallBody, this.angle);

             this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true}) 
             Matter.Body.setAngle(this.leftWallBody,-1*this.angle) 
             World.add(world,this.bottombody)  
             World.add(world,this.leftWallBody)  
             World.add(world,this.rightWallBody)  

      }
 display(){
    var posBottom=this.bottomBody.position;
    var posLeft=this.leftWallBody.position;
    var posRight=this.rightWallBody.position;


    push()
    traslate(posLeft.x,posLeft.x);
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(255)
    stroke(255)
    rotate(this.angle)
    react(0,0,this.wallThickness,this.dustbinHeight)
    pop()


    push()
    traslate(posRight.x,posRight.x);
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(255)
    stroke(255)
    rotate(-1*this.angle)
    react(0,0,this.wallThickness,this.dustbinHeight)
    pop()


    push()
    traslate(posBottom.x,posBottom.x);
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(255)
    stroke(255)
    react(0,0,this.wallThickness,this.dustbinHeight)
    pop()





 }





}