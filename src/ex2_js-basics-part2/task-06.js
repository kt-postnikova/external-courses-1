module.exports = function checkIsPrimes(number) {
  if (number >= 1000) {
    return 'Данные неверны';
  }

  if (number === 1 || number === 0) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }

  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) {
      return `Число ${number} - составное число`;
    }
  }
  return `Число ${number} - простое число`;
};
