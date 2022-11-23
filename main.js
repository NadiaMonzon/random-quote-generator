"use strict";

const quote = document.querySelector(".js-quote");
const author = document.querySelector(".js-author");
const quoteButton = document.querySelector(".js-quote-button");
const container = document.querySelector(".js-container");
const mainContainer = document.querySelector(".js-main");

const getQuote = () => {
  fetch("http://api.quotable.io/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quote.innerHTML = data.content;
      quote.id = data._id;
      author.innerHTML = data.author;
      // changeClassName();
    })
    .catch((error) => console.log(error));
};

const generateClassNumber = (max) => {
  return Math.ceil(Math.random() * max);
};

// const changeClassName = () => {
//   console.log(mainContainer.classList);
//   for (let i = 0; i < mainContainer.classList.length; i++) {
//     if (i === mainContainer.classList.length) {
//       mainContainer.classList.remove(`main-${generateClassNumber(10)}`);
//       mainContainer.classList.add(`main-${generateClassNumber(10)}`);
//     }
//   }
// };
const handleClick = () => {
  getQuote();
  // changeClassName();
};

getQuote();

quoteButton.addEventListener("click", handleClick);
