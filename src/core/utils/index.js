import moment from 'moment';

export function calculateSumOfNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

export function getFormattedTime(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}
