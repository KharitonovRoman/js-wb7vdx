import DonateForm from '/src/modules/donate-form';
import DonateList from '/src/modules/donate-list';
import * as utils from '/src/core/utils/index';

export default class App {
  #donateForm;
  #donateList;

  constructor() {
    const mockDonates = [
      { amount: 4, date: new Date() },
      { amount: 20, date: new Date() },
      { amount: 3, date: new Date() },
      { amount: 1, date: new Date() },
    ];
    this.state = {
      donates: mockDonates,
      totalAmount: utils.calculateSumOfNumbers(
        mockDonates.map((donate) => donate.amount)
      ),
    };
    this.#donateForm = new DonateForm(
      this.state.totalAmount,
      this.createNewDonate.bind(this)
    );
    this.#donateList = new DonateList(this.state.donates);
  }

  createNewDonate(newDonate) {
    this.state.donates.push(newDonate);
    this.state.totalAmount = utils.calculateSumOfNumbers(
      this.state.donates.map((donate) => donate.amount)
    );
    this.#donateForm.updateTotalAmount(Number(this.state.totalAmount));
    this.#donateList.updateDonates(this.state.donates);
  }

  run() {
    const donateFormHTML = this.#donateForm.render();
    const donateListHTML = this.#donateList.render();
    document.body.append(donateFormHTML, donateListHTML);
  }
}
