var NegotiationController = /** @class */ (function () {
    function NegotiationController() {
        // private _negotiations: Negotiations = new Negotiations();
        this._negotiations = new Negotiations();
        this._negotiationsView = new NegotiationsView("#negociacoesView");
        this._messageView = new MessageView("#mensagemView");
        this._inputDate = document.querySelector("#data");
        this._inputAmount = document.querySelector("#quantidade");
        this._inputValue = document.querySelector("#valor");
        this._negotiationsView.update(this._negotiations);
    }
    NegotiationController.prototype.add = function (event) {
        event.preventDefault();
        var negotiation = new Negotiation(
        //new Date(this._inputDate.value.replace(/-/g, ",")),
        this._inputDate.valueAsDate, parseInt(this._inputAmount.value), parseFloat(this._inputValue.value));
        this._negotiations.toArray().forEach(function (negotiation) {
            console.log(negotiation.date);
            console.log(negotiation.amount);
            console.log(negotiation.value);
        });
        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
        this._messageView.update("Negociação adicionada com sucesso!");
    };
    return NegotiationController;
}());
