var Negotiations = /** @class */ (function () {
    function Negotiations() {
        // private _negotiations: Negotiation[] = [];
        this._negotiations = [];
    }
    Negotiations.prototype.add = function (negotiation) {
        this._negotiations.push(negotiation);
    };
    Negotiations.prototype.toArray = function () {
        return [].concat(this._negotiations);
    };
    return Negotiations;
}());
