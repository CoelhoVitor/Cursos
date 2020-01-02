class NegotiationController {
  private _inputDate: HTMLInputElement;
  private _inputAmount: HTMLInputElement;
  private _inputValue: HTMLInputElement;

  // private _negotiations: Negotiations = new Negotiations();
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView("#negociacoesView");
  private _messageView = new MessageView("#mensagemView");

  constructor() {
    this._inputDate = <HTMLInputElement>document.querySelector("#data");
    this._inputAmount = <HTMLInputElement>document.querySelector("#quantidade");
    this._inputValue = <HTMLInputElement>document.querySelector("#valor");

    this._negotiationsView.update(this._negotiations);
  }

  add(event: Event): void {
    event.preventDefault();

    const negotiation = new Negotiation(
      //new Date(this._inputDate.value.replace(/-/g, ",")),
      this._inputDate.valueAsDate,
      parseInt(this._inputAmount.value),
      parseFloat(this._inputValue.value)
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
