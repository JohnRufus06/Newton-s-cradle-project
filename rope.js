class rope{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsety}
        
        }
        //console.log(Options);
        this.rope=constraint.create(options)
        World.add(world,this.rope)

    }
    display()
    {
        var pointB=this.rope.bodyA.position;
        var pointA=this.rope.bodyB.position;

        stokeweight(2);

        var Anchor1x=pointA.x
        var Anchor1y=pointA.y

        var Anchor2x=pointB.x=this.offsetX
        var Anchor2y=pointB.y=this.offsetY

        SVGPathSegLinetoAbs(anchor1X,anchor1Y,anchor2X,anchor2Y)
    }

}