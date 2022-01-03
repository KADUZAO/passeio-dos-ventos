const button = document.querySelector(".card__face--front i");
const card = document.querySelector(".card__inner");

button.addEventListener("click", () => {
    card.classList.add("is-flipped");
})

const buttonTwo = document.querySelector(".card__face--back i");

buttonTwo.addEventListener("click", () => {
    card.classList.remove("is-flipped");
})

//****************************************************************** */

const buttonThree = document.querySelector(".card__face--front.two i");
const cardTwo = document.querySelector(".card__inner.two");

buttonThree.addEventListener("click", () => {
    cardTwo.classList.add("is-flipped");
})

const buttonFour = document.querySelector(".card__face--back.two i");

buttonFour.addEventListener("click", () => {
    cardTwo.classList.remove("is-flipped");
})

//****************************************************************** */

const buttonFive = document.querySelector(".card__face--front.three i");
const cardThree = document.querySelector(".card__inner.three");

buttonFive.addEventListener("click", () => {
    cardThree.classList.add("is-flipped");
})

const buttonSix = document.querySelector(".card__face--back.three i");

buttonSix.addEventListener("click", () => {
    cardThree.classList.remove("is-flipped");
})

//****************************************************************** */

const buttonSeven = document.querySelector(".card__face--front.four i");
const cardFour = document.querySelector(".card__inner.four");

buttonSeven.addEventListener("click", () => {
    cardFour.classList.add("is-flipped");
})

const buttonEight = document.querySelector(".card__face--back.four i");

buttonEight.addEventListener("click", () => {
    cardFour.classList.remove("is-flipped");
})