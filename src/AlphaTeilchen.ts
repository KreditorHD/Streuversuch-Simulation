import GA from "./GoldAtom"
import * as p5 from "p5"
export default class AlphaTeilchen{
private masse: number = 6.64*10**-27;
private velocityX: number = 0;
private velocityY: number = -20000000*10**-7;
private  CorX: number;
public  CorY: number;
private timeInS: number = 0;
private streckeInM: number = 0;
private  DistanceToNearestGoldAtomy: number = null;
private  DistanceToNearestGoldAtomx: number = null;
public   forcey: number = 0;
public   forcex: number = 0;
public   beschleunigungy = 0;
public   beschleunigungx = 0;
public nearestGoldAtom: GA;
private isClicked: boolean = false;

constructor(x:number, y:number){
  this.CorX = x;
  this.CorY = y;
}

public getNearestGoldAtom(){
  return this.nearestGoldAtom;
}

public getIsClicked(){
  return this.isClicked;
}

public setNearestGoldAtom(ga: GA){
  this.nearestGoldAtom = new GA(ga.getCorX(),ga.getCorY());

}

public getMasse(): number{
  return this.masse;
}

public getVelocityX(): number{

  return this.velocityX;
}

public getVelocityY(): number{

  return this.velocityY;
}

public getCorX(): number{
  return this.CorX;
}

public getCorY(): number{
  return this.CorY;
}

public getDistanceToNearestGoldAtomy(): number{
  return this.DistanceToNearestGoldAtomy;
}

public getDistanceToNearestGoldAtomx(): number{
  return this.DistanceToNearestGoldAtomx;
}

public setVelocityX(vX: number):void{
  this.velocityX = vX;
}

public setIsClicked(b: boolean):void{
  this.isClicked = b;
}

public setVelocityY(vY: number):void{
  this.velocityY = vY;
}

public setCorX(CorX: number):void{
  this.CorX = CorX;
}

public setCorY(CorY: number):void{
  this.CorY = CorY;
}

public setDistanceToNearestGoldAtomy(dinstance: number){
  this.DistanceToNearestGoldAtomy = dinstance;
}

public setDistanceToNearestGoldAtomx(dinstance: number){
  this.DistanceToNearestGoldAtomx = dinstance;
}

public getTime(): number{
  return this.timeInS;
}

public getStrecke(): number{
  return this.streckeInM;
}

public round(wert, dez) {
  wert = parseFloat(wert);
  if (!wert) return 0;
  dez = parseInt(dez);
  if (!dez) dez=0;

  var umrechnungsfaktor = Math.pow(10,dez);

  return Math.round(wert * umrechnungsfaktor) / umrechnungsfaktor;
}

public clicked(mouseY:number,mouseX:number){
var d = (mouseY - this.getCorY())**2 + (mouseX - this.getCorX())**2;
 d = Math.sqrt(d);

 if(d < 15){
   console.log("AtomClicked");
   this.setIsClicked(true);
 }
}

}
