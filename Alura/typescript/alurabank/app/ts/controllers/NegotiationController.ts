import { Negotiation, Negotiations } from "../models/index";
import { MessageView, NegotiationsView } from "../views/index";
import { domInject } from "../helpers/decorators/index";

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
    this._inputDate = $("#data");
    this._inputAmount = $("#quantidade");
    this._inputValue = $("#valor");

    this._negotiationsView.update(this._negotiations);
  }

  private _isBusinessDay(date: Date) {
    return date.getDay() != WeekDay.Saturday && date.getDay() != WeekDay.Sunday;
  }

  add(event: Event): void {
    event.preventDefault();

    let date = new Date(this._inputDate.val().toString());

    if (!this._isBusinessDay(date)) {
      this._messageView.update("Somente negociações em dias úteis");
    }

    const negotiation = new Negotiation(
      //new Date(this._inputDate.value.replace(/-/g, ",")),
      // this._inputDate.valueAsDate,
      new Date(this._inputDate.val().toString()),
      parseInt(this._inputAmount.val().toString()),
      parseFloat(this._inputValue.val().toString())
    );

    this._negotiations.toArray().forEach(negotiation => {
      console.log(negotiation.date);
      console.log(negotiation.amount);
      console.log(negotiation.value);
    });

    this._negotiations.add(negotiation);

    this._negotiationsView.update(this._negotiations);
    this._messageView.update("Negociação adicionada com sucesso!");
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
