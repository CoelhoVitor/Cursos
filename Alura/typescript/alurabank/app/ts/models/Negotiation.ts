import { MyObject } from "./index";

export class Negotiation implements MyObject<Negotiation> {
  /*
  private _date: Date;
  private _amount: number;
  private _value: number;

  constructor(date: Date, amount: number, value: number) {
    this._date = date;
    this._amount = amount;
    this._value = value;
  }
  */

  constructor(
    private _date: Date,
    private _amount: number,
    private _value: number
  ) {}

  get volume() {
    return this._amount * this._value;
  }

  toText(): void {
    console.log("-- toText --");
    console.log(
      `Data: ${this._date}
        Quantidade: ${this._amount}, 
        Valor: ${this._value}, 
        Volume: ${this.volume}`
    );
  }

  isEqual(negotiation: Negotiation): boolean {
    return (
      this._date.getDate() == negotiation._date.getDate() &&
      this._date.getMonth() == negotiation._date.getMonth() &&
      this._date.getFullYear() == negotiation._date.getFullYear()
    );
  }
}
