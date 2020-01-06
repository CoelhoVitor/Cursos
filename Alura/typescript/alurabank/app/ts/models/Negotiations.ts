import { Negotiation, MyObject } from "./index";

export class Negotiations implements MyObject<Negotiations> {
  // private _negotiations: Negotiation[] = [];
  private _negotiations: Array<Negotiation> = [];

  add(negotiation: Negotiation): void {
    this._negotiations.push(negotiation);
  }

  toArray(): Negotiation[] {
    return ([] as Negotiation[]).concat(this._negotiations);
  }

  toText(): void {
    console.log("-- toText --");
    console.log(JSON.stringify(this._negotiations));
  }

  isEqual(negotiations: Negotiations): boolean {
    return (
      JSON.stringify(this._negotiations) ==
      JSON.stringify(negotiations.toArray())
    );
  }
}
