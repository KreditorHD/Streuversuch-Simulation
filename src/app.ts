import GA from "./GoldAtom"
//import * as p5 from 'p5';
import AT from "./AlphaTeilchen"


//var at: AT = new AT(630,710);
//var at1: AT = new AT(700,710);
//var at2: AT = new AT(720,710);
//var at3: AT = new AT(610,710);
//var at4: AT = new AT(590,710);
var alphaTeilchenArray = [];
var goldAtomArray = [];
var ga = new GA();

  const sketch = (s) => {

      s.preload = () => {

      }

      s.setup = () => {
        s.createCanvas(1280, 720);
        newAT(100);

      };

      s.draw = () => {
        s.background(255);
        s.drawGold();

        simplifyDraw(alphaTeilchenArray);
      //  console.table([{DistanceX: at.getDistanceToNearestGoldAtomx(), DistanceY: at.getDistanceToNearestGoldAtomy(), ForceX: at.forcex, ForceY: at.forcey}])

      };

      s.drawGold = () => {
        s.fill(255,0,0);
        s.ellipse(ga.getCorX(), ga.getCorY(),10, 10);
      };

      s.drawAplha = (atp: AT) => {
        s.fill(0,255,0);
        s.ellipse(atp.getCorX(), atp.getCorY(), 5, 5);
        var speedy = atp.getVelocityY() + atp.beschleunigungy;
        if(!(atp.getCorX() == ga.getCorX())){
          if(atp.getCorX() > ga.getCorX()){
          var speedx = atp.getVelocityX() + atp.beschleunigungx;
            atp.setCorX(atp.getCorX() + speedx);
          }else {
             speedx = atp.getVelocityX() - atp.beschleunigungx;
              atp.setCorX(atp.getCorX() + speedx);
        }
        }

        atp.setCorY(atp.getCorY() + speedy);

        atp.setVelocityY(speedy);
        atp.setVelocityX(speedx);
        console.log(speedx);
      };

      s.calcMinDistance = (atp: AT) => {
        //var d = (ga.getCorY() - atp.getCorY())**2 + (ga.getCorX() - atp.getCorX())**2;
        var d = (ga.getCorY() - atp.getCorY())**2 + (ga.getCorX()- atp.getCorX())**2;
        console.log(d);
        d = Math.sqrt(d);
        if(d < 0){d= d*-1}
        atp.setDistanceToNearestGoldAtomy(d*10**-4);
        atp.setDistanceToNearestGoldAtomx(d*10**-4);
        console.log("Distance: " + atp.getDistanceToNearestGoldAtomx());
        console.log("Distance: " + atp.getDistanceToNearestGoldAtomy());
      };


      s.calcForce = (atp) =>{
        var a = 1/(4*Math.PI*(8.85419*10**-12))
        var by = (4.05581*(10)**-36) / (atp.DistanceToNearestGoldAtomy)**2;
        var bx = (4.05581*(10)**-36) / (atp.DistanceToNearestGoldAtomx)**2;
        //console.log(a + "," + b);
        atp.forcey = a * by;
        atp.forcex = a* bx;
        atp.forcey = atp.forcey*10**-7;
        atp.forcex = atp.forcex*10**-7;
        atp.beschleunigungy = atp.round(atp.forcey/atp.masse,2);
        atp.beschleunigungx = atp.round(atp.forcex/atp.masse,2);



      }








      function Particle(atp: AT) {
  this.x = atp.getCorX;
  this.y = atp.getCorY;

  this.history = [];

  this.update = function() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-2, 2);
      this.history[i].y += random(-2, 2);
    }

    var v = createVector(this.x, this.y);
    this.history.push(v);
    if (this.history.length > 100) {
      this.history.splice(0, 1);
    }
  }

  this.show = function() {
    stroke(0);
    fill(0, 150);
    ellipse(this.x, this.y, 24, 24);

    noFill();
    s.beginShape();
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      //fill(random(255));
      //ellipse(pos.x, pos.y, i, i);
      vertex(pos.x, pos.y);
    }
    s.endShape();


  }

}

function newAT(n:number){
  for(var i=0;i<n;i++){
    alphaTeilchenArray.push(new AT(Math.random()*1280,710+Math.random()*300))
  }
}

function simplifyDraw(p){
  for(var i = 0;i<p.length;i++){
    s.drawAplha(p[i]);
    s.calcMinDistance(p[i]);
    s.calcForce(p[i]);
  }
}

}

    let canvas = new p5(sketch);
