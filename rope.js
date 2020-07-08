class Rope{
    constructor(bodyA,pointB){
         var options={
            bodyA:bodyA,
            pointB: pointB,
            stiffness:0.1,
            length:200,
            
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);
        
    }
    display(){
    var pointA= this.rope.bodyA.position;
    var pointB= this.rope.pointB;

    strokeWeight(2);

    var Anchor1X= pointA.x
    var Anchor1Y= pointA.y

    var Anchor2X= pointB.x
    var Anchor2Y= pointB.y

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);



    }
}