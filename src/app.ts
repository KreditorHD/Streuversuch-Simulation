import GA from "./GoldAtom"
//import * as p5 from 'p5';
import AT from "./AlphaTeilchen"

  var at = new AT();
  var ga = new GA();
  var forcey: number = 0;
  var forcex: number = 0;
  var beschleunigungy = 0;
  var beschleunigungx = 0;
  const sketch = (s) => {

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        s.createCanvas(1280, 720);
        s.background(255);
      };

      s.draw = () => {

        s.drawGold();
        s.drawAplha();
        s.calcMinDistance();
        s.calcForce();
        console.table([{DistanceX: at.getDistanceToNearestGoldAtomx(), DistanceY: at.getDistanceToNearestGoldAtomy(), ForceX: forcex, ForceY: forcey}])

      };

          s.mousePressed = () =>{
          rect(10,10,10,10);
      }

      s.drawGold = () => {
        s.fill(255,0,0);
        s.ellipse(ga.getCorX(), ga.getCorY(),10, 10);
      };

      s.drawAplha = () => {
        s.fill(0,255,0);
        s.ellipse(at.getCorX(), at.getCorY(), 5, 5);
        var speedy = at.getVelocityY() + beschleunigungy;
        if(!(at.getCorX() == ga.getCorX())){
          if(at.getCorX() > ga.getCorX()){
          var speedx = at.getVelocityX() + beschleunigungx;
            at.setCorX(at.getCorX() + speedx);
          }
        }else {
          var speedx = at.getVelocityX() - beschleunigungx;
            at.setCorX(at.getCorX() + speedx);
        }

        at.setCorY(at.getCorY() + speedy);

        at.setVelocityY(speedy);
        at.setVelocityX(speedx);
        console.log(speedx);
      };

      s.calcMinDistance = () => {
        var d = (ga.getCorY() - at.getCorY())**2 + (ga.getCorX() - at.getCorX())**2;
        d = Math.sqrt(d);
        if(d < 0){d= d*-1}
        at.setDistanceToNearestGoldAtomy(d*10**-4);
        at.setDistanceToNearestGoldAtomx(d*10**-4);
        console.log("Distance: " + at.getDistanceToNearestGoldAtomx());
        console.log("Distance: " + at.getDistanceToNearestGoldAtomy());
      };



      s.calcForce = () => {
        var a = 1/(4*Math.PI*(8.85419*10**-12))
        var by = (4.05581*(10)**-36) / (at.getDistanceToNearestGoldAtomy())**2;
        var bx = (4.05581*(10)**-36) / (at.getDistanceToNearestGoldAtomx())**2;
        //console.log(a + "," + b);
        forcey = a * by;
        forcex = a* bx;
        forcey = forcey*10**-7;
        forcex = forcex*10**-7;
        beschleunigungy = round(forcey/at.getMasse(),3);
        beschleunigungx = round(forcex/at.getMasse(),3);
        console.log("Force: " + forcex);
        console.log("Beschleunigung: " + beschleunigungx);
        console.log("Beschleunigung: " + beschleunigungy);



      };

      function round(wert, dez) {
        wert = parseFloat(wert);
        if (!wert) return 0;
        dez = parseInt(dez);
        if (!dez) dez=0;

        var umrechnungsfaktor = Math.pow(10,dez);

        return Math.round(wert * umrechnungsfaktor) / umrechnungsfaktor;
}
    }


    let canvas = new p5(sketch);
