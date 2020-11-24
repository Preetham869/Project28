class stone{
	constructor(x,y,r)
	{
		var options={
			restitution :0,
            friction :1,
            density: 1
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}