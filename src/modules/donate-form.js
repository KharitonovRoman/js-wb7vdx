import { Settings as settings } from '../core/constants/Settings';

export default class DonateForm {
  constructor(totalAmount, createNewDonate) {
    this.form = document.createElement('form');
    this.h1 = document.createElement('h1');
    this.label = document.createElement('label');
    this.input = document.createElement('input');
    this.button = document.createElement('button');

    this.totalAmount = totalAmount;
    this.createNewDonate = createNewDonate;
  }

  updateTotalAmount(newAmount) {
    this.h1.textContent = `${newAmount}${settings.currency}`;
  }

  render() {
    this.form.className = 'donate-form';
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.createNewDonate({
        date: new Date(),
        amount: Number(this.input.value),
      });
      this.input.value = '';
    });

    this.h1.id = 'total-amount';
    this.h1.textContent = `${this.totalAmount}${settings.currency}`;

    this.label.className = 'donate-form__input-label';
    this.label.textContent = `Введите сумму в ${settings.currency}`;

    this.input.className = 'donate-form__donate-input';
    this.input.setAttribute('name', 'amount');
    this.input.setAttribute('type', 'number');
    this.input.setAttribute('min', '1');
    this.input.setAttribute('max', '100');
    this.input.setAttribute('required', '');

    this.button.className = 'donate-form__submit-button';
    this.button.setAttribute('type', 'submit');
    this.button.textContent = 'Задонатить';

    this.label.append(this.input);
    this.form.append(this.h1, this.label, this.button);

    return this.form;
  }
}
