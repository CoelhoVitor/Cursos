import { Negotiation, Negotiations, PartialNegotiation } from "../models/index";
import { MessageView, NegotiationsView } from "../views/index";
import { domInject, throttle } from "../helpers/decorators/index";

let timer = 0;

export class NegotiationController {
  // private _inputDate: HTMLInputElement;
  @domInject("#data")
  private _inputDate: JQuery;

  @domInject("#quantidade")
  private _inputAmount: JQuery;

  @domInject("#valor")
  private _inputValue: JQuery;

  // private _negotiations: Negotiations = new Negotiations();
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView("#negociacoesView", true);
  private _messageView = new MessageView("#mensagemView");

  constructor() {
    // this._inputDate = <HTMLInputElement>document.querySelector("#data");

    this._negotiationsView.update(this._negotiations);
  }

  private _isBusinessDay(date: Date) {
    return date.getDay() != WeekDay.Saturday && date.getDay() != WeekDay.Sunday;
  }

  @throttle()
  add(): void {
    let date = new Date(this._inputDate.val().toString());

    if (!this._isBusinessDay(date)) {
      this._messageView.update("Somente negociações em dias úteis");
    }

    const negotiation = new Negotiation(
      //new Date(this._inputDate.value.replace(/-/g, ",")),
      // this._inputDate.valueAsDate,
      date,
      parseInt(this._inputAmount.val().toString()),
      parseFloat(this._inputValue.val().toString())
    );

    this._negotiations.add(negotiation);

    this._negotiationsView.update(this._negotiations);
    this._messageView.update("Negociação adicionada com sucesso!");
  }

  @throttle()
  importData() {
    function isOk(res: Response) {
      if (res.ok) {
        return res;
      } else {
        throw new Error(res.statusText);
      }
    }

    fetch("http://localhost:8080/dados")
      .then(res => isOk(res))
      .then(res => res.json())
      .then((datas: PartialNegotiation[]) => {
        datas
          .map(data => new Negotiation(new Date(), data.vezes, data.montante))
          .forEach(negotitation => this._negotiations.add(negotitation));
        this._negotiationsView.update(this._negotiations);
      })
      .catch(err => console.log(err.message));
  }
}

enum WeekDay {
  Sunday,
  Monday,
  Thuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}
