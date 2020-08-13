
    class Box
    {
        constructor(x,y)
        {
            this.leftdustbin = Matter.Bodies.rectangle(x - 50,y,10,100,{density:2,friction:2});
            this.rightdustbin = Matter.Bodies.rectangle(x + 50,y,10,100,{density:2,friction:2});
            this.bottomdustbin = Matter.Bodies.rectangle(x,y + 40,100,10,{density:2,friction:2});
            this.width = 10;
            this.height = 100;
            this.image = loadImage("dustbingreen.png");

            World.add (world,this.leftdustbin);
            World.add (world,this.rightdustbin);
            World.add (world,this.bottomdustbin);
        }

        Display()
        {
            push()
            rectMode(CENTER)
            rect(this.leftdustbin.position.x,this.leftdustbin.position.y,this.width,this.height)
            rect(this.rightdustbin.position.x,this.rightdustbin.position.y,this.width,this.height)
            pop()
            var pos =  this.bottomdustbin.position;
            
            push()
            translate(pos.x,pos.y);
            //rectMode(CENTER);
            //rect(pos.x,pos.y,this.width,this.height);
            imageMode(CENTER);
            image(this.image,0,-40,100,this.height);
            pop()
        }

    }



