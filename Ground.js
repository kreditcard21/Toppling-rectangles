class Ground
{

    constructor(x,y,width,height)
    {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height, options);
        World.add(world,this.body);
    }

    display()
    {
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }


}



// box1 = new Box(2,3,10,10);
//box1.width = 10