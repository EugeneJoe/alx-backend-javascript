import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } else {
      throw TypeError('amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw TypeError('amount must be a Currency object');
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) === 'number' && typeof (conversionRate) === 'number') {
      return amount * conversionRate;
    }
    throw TypeError('Arguments must be numbers');
  }
}
