var Negotiation = /** @class */ (function () {
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
    function Negotiation(_date, _amount, _value) {
        this._date = _date;
        this._amount = _amount;
        this._value = _value;
    }
    Object.defineProperty(Negotiation.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negotiation.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negotiation.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negotiation.prototype, "volume", {
        get: function () {
            return this._amount * this._value;
        },
        enumerable: true,
        configurable: true
    });
    return Negotiation;
}());
