class bob{
    constructor(x,y,radius){
        var options={
            "isStatic":true,
            "restitution":0.8,
            "density":1,
            "friction":0.8
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(this.body.position.x,this.body.position.y,35,35);
    }
}