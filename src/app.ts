import GA from "./GoldAtom"
//import * as p5 from 'p5';
import AT from "./AlphaTeilchen"


//var at: AT = new AT(630,710);
//var at1: AT = new AT(700,710);
//var at2: AT = new AT(720,710);
//var at3: AT = new AT(610,710);
//var at4: AT = new AT(590,710);
var alphaTeilchenArray = [];

var ga = new GA(630,360);
var ga2 = new GA(100,300);
var ga3 = new GA(250,330);
var ga4 = new GA(800,300);
var ga5 = new GA(1000,360);

var goldAtomArray = [ga,ga2,ga3,ga4,ga5];
var consoleLogArray: AT[] = [];

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
        s.DataLog();
      //  console.table([{DistanceX: at.getDistanceToNearestGoldAtomx(), DistanceY: at.getDistanceToNearestGoldAtomy(), ForceX: at.forcex, ForceY: at.forcey}])

      };

      s.drawGold = () => {
        s.fill(255,0,0);
        for(var i = 0;i<goldAtomArray.length;i++){
        s.ellipse(goldAtomArray[i].getCorX(), goldAtomArray[i].getCorY(),10, 10);
      }
      };

      s.drawAplha = (atp: AT) => {
        if(atp.getCorX()> 1280 || atp.getCorX()< 0 || atp.getCorY()> 900 || atp.getCorY()< 0){
          atp.setCorX(Math.random()*1280);
          atp.setCorY(710);
          atp.setVelocityX(0);
          atp.setVelocityY(-20000000*10**-7);
          atp.beschleunigungx = 0;
          atp.beschleunigungy = 0;
        }
        if(atp.getIsClicked() == false){s.fill(0,255,0);}
        else{s.fill(0,0,255)}

        s.ellipse(atp.getCorX(), atp.getCorY(), 5, 5);
        var speedy = atp.getVelocityY() + atp.beschleunigungy;
        if(!(atp.getCorX() == atp.getNearestGoldAtom().getCorX())){
          if(atp.getCorX() > atp.getNearestGoldAtom().getCorX()){
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
        //console.log(speedx);
      };

      s.calcMinDistance = (atp: AT) => {
        var distances = [];
        var d;
        for(var i = 0;i<goldAtomArray.length;i++){
        //var d = (ga.getCorY() - atp.getCorY())**2 + (ga.getCorX() - atp.getCorX())**2;
         d = (goldAtomArray[i].getCorY() - atp.getCorY())**2 + (goldAtomArray[i].getCorX()- atp.getCorX())**2;
        //console.log(d);
        d = Math.sqrt(d);
        distances.push(d);
        //if(d < 0){d= d*-1}
      }
        for(var i = 0;i<distances.length;i++){
          if(distances[i] <= d){
            //console.log(distances[i]);
          //  console.log(d);
            d=distances[i];

            atp.setNearestGoldAtom(goldAtomArray[i]);
            //console.log(atp.getNearestGoldAtom());

          }else{}
        }
        //console.log(d)
        atp.setDistanceToNearestGoldAtomy(d*10**-4);
        atp.setDistanceToNearestGoldAtomx(d*10**-4);

        var a = 1/(4*Math.PI*(8.85419*10**-12))
        var by = (4.05581*(10)**-36) / (atp.getDistanceToNearestGoldAtomy())**2;
        var bx = (4.05581*(10)**-36) / (atp.getDistanceToNearestGoldAtomx())**2;
        //console.log(a + "," + b);
        atp.forcey = a * by;
        atp.forcex = a * bx;
        atp.forcey = atp.forcey*10**-7;
        atp.forcex = atp.forcex*10**-7;
        atp.beschleunigungy = atp.round(atp.forcey/atp.getMasse(),2);
        atp.beschleunigungx = atp.round(atp.forcex/atp.getMasse(),2);



      };


      s.calcForce = (atp) =>{



      }

      s.mousePressed = () =>{
        console.log("Clicked");
        alphaTeilchenArray.forEach(function (element){element.clicked(s.mouseY,s.mouseX);})
      }

      s.showConsole = (p: AT) =>{
        if(p.getIsClicked() == true && consoleLogArray[0] == null){
            consoleLogArray[0] = p;


        }else if(p.getIsClicked() == true && consoleLogArray[0] != p){
          consoleLogArray[0].setIsClicked(false);
          consoleLogArray[0] = p;
        }
      }

      s.DataLog = () => {
        consoleLogArray.forEach(function (element) {
            console.table([{DistanceX: element.getDistanceToNearestGoldAtomx(), DistanceY: element.getDistanceToNearestGoldAtomy(), ForceX: element.forcex, ForceY: element.forcey}])
            console.clear();
            document.getElementById("GY").innerHTML = "Geschwindigkeit in Y Richtung: " + round((element.getVelocityY()*10**7)*-1,3).toString() + " m/s";
            document.getElementById("GX").innerHTML = "Geschwindigkeit in X Richtung: " + round((element.getVelocityX()*10**7),3).toString() + " m/s";
        })
      }

      function round(wert, dez) {
        wert = parseFloat(wert);
        if (!wert) return 0;
        dez = parseInt(dez);
        if (!dez) dez=0;

        var umrechnungsfaktor = Math.pow(10,dez);

        return Math.round(wert * umrechnungsfaktor) / umrechnungsfaktor;
      }







let ia:number;
function newAT(n:number){
  for(var i=0;i<n;i++){
    alphaTeilchenArray.push(new AT(Math.random()*1280,600))
  }
}

function simplifyDraw(p: AT[]){
  for(var i = 0;i<p.length;i++){
    s.calcMinDistance(p[i]);
    s.showConsole(p[i]);
    s.drawAplha(p[i]);
    //s.calcForce(p[i]);

  }
  i = ia;
}

}

    let canvas = new p5(sketch);
