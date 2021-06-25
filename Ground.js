class Ground {
    constructor(x,y,width,height){
       var options = {
           'isStatic' :true
       } 
       this.body = Bodies.rectangle(x,y,width,height,options)
       this.x=x;
       this.y=y;
       this.width = width;
       this.height = height;
       //this.image = loadImage("g2.jpg")
       
       World.add(world,this.body)
    }
  
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        //image(this.image,0,0,1500,60)
        pop();
    }
  }