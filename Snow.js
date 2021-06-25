class Snow{
    constructor(x,y,r){

        var options = {
            isStatic:false,
            
        }

        this.body = Bodies.circle(x,y,r,options)
        this.x = x;
        this.y = y;
        this.r = r;  
        this.image = loadImage("snow4.webp")  

        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position;
        push()
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50)
        pop()
    }
    

}