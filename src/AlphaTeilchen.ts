export default class AlphaTeilchen{
private masse: number = 6.64*10**-27;
private velocityX: number = 0;
private velocityY: number = -20000000*10**-7;
private  CorX: number = 640;
private  CorY: number = 710;
private timeInS: number = 0;
private streckeInM: number = 0;
private  DistanceToNearestGoldAtomy: number;
private  DistanceToNearestGoldAtomx: number;

public getMasse(): number{
  return this.masse;
}

public getVelocityX(): number{

  return this.velocityX;
}

public getVelocityY(): number{

  return this.velocityY;
}

public getCorX(): any{
  return this.CorX;
}

public getCorY(): any{
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
}
