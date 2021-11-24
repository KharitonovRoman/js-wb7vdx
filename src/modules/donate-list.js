import { Settings as settings } from '../core/constants/Settings';
import { getFormattedTime } from '../core/utils/index';

export default class DonateList {
  #donates;

  constructor(donates) {
    this.donatesContainer = document.createElement('div');
    this.donatesContainerDonates = document.createElement('div');
    this.title = document.createElement('h2');
    this.#donates = donates;
  }

  updateDonates(updatedDonates) {
    this.renderDonateList(updatedDonates);
  }

  renderDonateList(donates) {
    this.donatesContainerDonates.textContent = '';
    donates.forEach((donateItem) => {
      const donateItemBlock = document.createElement('div');
      donateItemBlock.className = 'donate-item';
      donateItemBlock.innerHTML = `${getFormattedTime(
        donateItem.date
      )} - <b>${parseInt(donateItem.amount, 10)}${settings.currency}</b>`;
      this.donatesContainerDonates.insertAdjacentElement(
        'beforeend',
        donateItemBlock
      );
    });
  }

  render() {
    this.donatesContainer.className = 'donates-container';
    this.title.className = 'donates-container__title';
    this.title.textContent = 'Список донатов';
    this.donatesContainerDonates.className = 'donates-container__donates';

    this.renderDonateList(this.#donates);
    this.donatesContainer.append(this.title, this.donatesContainerDonates);

    return this.donatesContainer;
  }
}
