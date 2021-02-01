class bob 
{
    constructor(x,y,r)
    {
        var option={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8,

        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=bodies.circle(this.x,this.y,(this.r)/2,options)
        world.add(world,this.body);


        }
        dispaly(){
           var paperpos=this.this.body.position;
           push()
        Translate(paperPos.x,paperpos.y);
        rectMode(CENTER)
        //strokeweight(4);
        fill(255,0,255)
        //imageMode(CENTER)
        //image(this.image,0,0,this.r,this.r);
        pop()
        }
    }
