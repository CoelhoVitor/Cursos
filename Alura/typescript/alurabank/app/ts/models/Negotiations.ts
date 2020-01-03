import { Negotiation } from "./Negotiation";

export class Negotiations {
  // private _negotiations: Negotiation[] = [];
  private _negotiations: Array<Negotiation> = [];

  add(negotiation: Negotiation): void {
    this._negotiations.push(negotiation);
  }

  toArray(): Negotiation[] {
    return ([] as Negotiation[]).concat(this._negotiations);
  }
}
