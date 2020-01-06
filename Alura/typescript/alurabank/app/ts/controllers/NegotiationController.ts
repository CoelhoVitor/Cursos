import { Negotiation, Negotiations } from "../models/index";
import { MessageView, NegotiationsView } from "../views/index";
import { NegotiationService } from "../services/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { print } from "../helpers/index";

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

  private _service = new NegotiationService();

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

    print(negotiation, this._negotiations);
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

    this._service.getNegotiations(isOk).then(negotiationsToImport => {
      const negotiationsAlreadyImported = this._negotiations.toArray();

      negotiationsToImport
        .filter(
          negotiation =>
            !negotiationsAlreadyImported.some(alreadyImported =>
              negotiation.isEqual(alreadyImported)
            )
        )
        .forEach(negotiation => this._negotiations.add(negotiation));
      this._negotiationsView.update(this._negotiations);
    });
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
