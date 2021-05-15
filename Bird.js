class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.imag1 = loadImage("sprites/smoke.png")
    this.traj=[]

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
if(this.body.speed>5 ){
    this.traj.push([this.body.position.x,this.body.position.y])}
    for(var i =i=0;i<this.traj.length;i=i+1){

   // imageMode(CENTER)
    image(this.imag1,this.traj[i][0],this.traj[i][1])




    }

    super.display();
  }
}
