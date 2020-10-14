class Box
{

    constructor(x,y,width,height)
    {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        var options = {
            restitution: 2,
            friction:0.5,
            density:1

        }

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height, options);
        World.add(world,this.body);
    }

    display()
    {
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
    
        pop();
        //console.log(this.body.angle);
    }


}



// box1 = new Box(2,3,10,10);
//box1.width = 10