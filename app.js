let soldOut = document.querySelector('.sold-out');

// INVENTORY:
let cappuccino = 0;
let houseCoffee = 0;
let espresso = 12;
let coffeeLatte = 13;
let chocolateCoffee = 0;
let valentineSpecial = 12;

let coffees = [cappuccino, houseCoffee, espresso, coffeeLatte, chocolateCoffee, valentineSpecial]
// RATINGS


if (coffees ===0) {
    soldOut.innerHTML = 'Sold out';
}
else {
    soldOut.innerHTML = '';
}