export default class GoldAtom{
  masse: number;
  public CorX: number = 630;
  public CorY: number = 360;

  constructor(x:number, y:number){
    this.CorX = x;
    this.CorY = y;
  }


  getMasse(): number{
    return this.masse;
  }
  getCorX(): number{
    return this.CorX;
  }

  getCorY(): number{
    return this.CorY;
  }

  setCorX(CorX: number):void{
    this.CorX = CorX;
  }

  setCorY(CorY: number):void{
    this.CorY = CorY;
  }

}
