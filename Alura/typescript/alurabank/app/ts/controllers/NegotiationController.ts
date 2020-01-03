class NegotiationController {
  // private _inputDate: HTMLInputElement;
  private _inputDate: JQuery;
  private _inputAmount: JQuery;
  private _inputValue: JQuery;

  // private _negotiations: Negotiations = new Negotiations();
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView("#negociacoesView");
  private _messageView = new MessageView("#mensagemView");

  constructor() {
    // this._inputDate = <HTMLInputElement>document.querySelector("#data");
    this._inputDate = $("#data");
    this._inputAmount = $("#quantidade");
    this._inputValue = $("#valor");

    this._negotiationsView.update(this._negotiations);
  }

  add(event: Event): void {
    event.preventDefault();

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
