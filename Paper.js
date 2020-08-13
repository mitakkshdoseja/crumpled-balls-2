class Paper
    {
        constructor(x,y,radius)
        {
            this.dustbin = Matter.Bodies.circle(x,y,radius,{density:0.4});
            this.radius = radius;
            this.image = loadImage("paper.png")
            World.add (world,this.dustbin);
        }

        Display()
        {
            var pos =  this.dustbin.position;
            
            push()
            //ellipseMode(RADIUS);
            //ellipse(pos.x,pos.y,this.radius,this.radius);
            imageMode(RADIUS);
            image(this.image,pos.x,pos.y,55,55);
            pop()
        }

    }
