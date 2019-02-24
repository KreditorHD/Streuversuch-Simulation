import GA from "./GoldAtom"
//import * as p5 from 'p5';
import AT from "./AlphaTeilchen"


//var at: AT = new AT(630,710);
//var at1: AT = new AT(700,710);
//var at2: AT = new AT(720,710);
//var at3: AT = new AT(610,710);
//var at4: AT = new AT(590,710);
var alphaTeilchenArray = [];
var width = 800;
var height = 600;
var ga = new GA(700,200);
var ga2 = new GA(100,200);
var ga3 = new GA(400,300);
var paused = true;
var goldAtomArray = [ga,ga2,ga3];
var consoleLogArray: AT[] = [];
var abgelengt: AT[] = [];
var slider = <HTMLInputElement>document.getElementById("myRange");

slider.oninput = function() {
  document.getElementById("Value").innerHTML = slider.value;
}

  const sketch = (s) => {


      s.preload = () => {

      }

      s.setup = () => {
        s.createCanvas(width, height);
        newAT(parseInt(slider.value));
        console.log(slider.value);
        s.background(255);
        s.drawGold();
        s.noStroke();
        simplifyDraw(alphaTeilchenArray);
        s.DataLog();
        console.log("Jana, ich hab dich lieb!");

      };


      s.draw = () => {
        if(paused == false){
        s.drawGold();
        s.noStroke();

        simplifyDraw(alphaTeilchenArray);
        s.DataLog();
      }

      };


      s.drawGold = () => {
        s.fill(255,0,0);
        s.stroke(0,0,0);
        for(var i = 0;i<goldAtomArray.length;i++){
        s.ellipse(goldAtomArray[i].getCorX(), goldAtomArray[i].getCorY(),10, 10);
      }
      };

      s.drawAplha = (atp: AT) => {
          if(round((atp.getVelocityX()*10**7),3)>100 || round((atp.getVelocityX()*10**7),3)< -100){
          s.fill(255,0,0);

          var isInside=false;
          for(var i=-1;i<abgelengt.length;i++){
            if(atp == abgelengt[i+1]){

              isInside = true;
            }

            }
            if(isInside == false){

              abgelengt.push(atp);
          }

        }else{s.fill(0,255,0)}



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

        if(atp.getCorY() < atp.getNearestGoldAtom().getCorY()){
          var speedy = atp.getVelocityY() - atp.beschleunigungy;
        }else{
           speedy = atp.getVelocityY() + atp.beschleunigungy;
        }

        atp.setCorY(atp.getCorY() + speedy);

        atp.setVelocityY(speedy);
        atp.setVelocityX(speedx);
      };

      s.calcMinDistance = (atp: AT) => {
        var distances = [];
        var d;
        for(var i = 0;i<goldAtomArray.length;i++){
         d = (goldAtomArray[i].getCorY() - atp.getCorY())**2 + (goldAtomArray[i].getCorX()- atp.getCorX())**2;
         d = Math.sqrt(d);
         distances.push(d);
      }
        for(var i = 0;i<distances.length;i++){
          if(distances[i] <= d){
            d=distances[i];
            atp.setNearestGoldAtom(goldAtomArray[i]);
          }else{}
        }
        atp.setDistanceToNearestGoldAtomy(d*10**-4); //*10**-4
        atp.setDistanceToNearestGoldAtomx(d*10**-4); //*10**-4

        //Berechnung der Coulombkraft und die resultierende Beschleunigung

        var a = 1/(4*Math.PI*(8.85419*10**-12))
        var by = (3.204*(10)**-19) / (atp.getDistanceToNearestGoldAtomy())**2;
        var bx = (3.204*(10)**-19) / (atp.getDistanceToNearestGoldAtomx())**2;
        atp.forcey = a * by;
        atp.forcex = a * bx;
        atp.forcey = atp.forcey*10**-25;
        atp.forcex = atp.forcex*10**-25;
        atp.beschleunigungy = atp.round(atp.forcey/atp.getMasse(),2);
        atp.beschleunigungx = atp.round(atp.forcex/atp.getMasse(),2);



      };

      s.keyPressed = () =>{
        if(paused == true && s.keyCode == 80){
          paused = false;
        }else if(s.keyCode == 80){
        paused = true;
      }
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
            document.getElementById("GY").innerHTML = "Abgelengte Alpha-Teilchen: " + abgelengt.length.toString();
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
    alphaTeilchenArray.push(new AT(Math.random()*width,590+i*10))
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

document.getElementById("restart").onclick = function () {
      paused = true
      s.background(255);
      var a = alphaTeilchenArray.length;
      for(var i = 0;i<a;i++){
        alphaTeilchenArray.pop();
        console.log(alphaTeilchenArray.length);

      }
      console.log(slider.value)
      newAT(parseInt(slider.value));
      for(var i=0;i=abgelengt.length;i++){
        abgelengt.pop();
      }
      document.getElementById("GY").innerHTML = "Abgelengte Alpha-Teilchen: " + abgelengt.length.toString();
      s.drawGold();
      s.noStroke();
      simplifyDraw(alphaTeilchenArray);
      s.DataLog();

    }
  }

    let canvas = new p5(sketch);
