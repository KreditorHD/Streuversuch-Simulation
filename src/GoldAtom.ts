export default class GoldAtom{
  masse: number;
  CorX: number = 630;
  CorY: number = 360;

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
