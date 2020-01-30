'use strict';
const nameChina = 'Китай';
const nameChile = 'Чили';
const nameAustralia = 'Австралия';
const nameIndia = 'Индия';
const nameJamaica = 'Ямайка';
const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;
const userChoice = prompt('Укажите название страны');
let message;
switch (userChoice.toLowerCase()) {
  case nameChina.toLowerCase():
    message = `Доставка в ${nameChina} будет стоить ${priceChina} кредитов`;
    break;
  case nameChile.toLowerCase():
    message = `Доставка в ${nameChile} будет стоить ${priceChile} кредитов`;
    break;
  case nameAustralia.toLowerCase():
    message = `Доставка в ${nameAustralia} будет стоить ${priceAustralia} кредитов`;
    break;
  case nameIndia.toLowerCase():
    message = `Доставка в ${nameIndia} будет стоить ${priceIndia} кредитов`;
    break;
  case nameJamaica.toLowerCase():
    message = `Доставка в ${nameJamaica} будет стоить ${priceJamaica} кредитов`;
    break;
  default:
    alert((message = `В вашей стране доставка не доступна`));
}
console.log(message);
