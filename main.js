"use strict";

const quote = document.querySelector(".js-quote");
const author = document.querySelector(".js-author");
const quoteButton = document.querySelector(".js-quote-button");
const container = document.querySelector(".js-container");

const getQuote = () => {
  fetch("http://api.quotable.io/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quote.innerHTML = data.content;
      quote.id = data._id;
      author.innerHTML = data.author;
      changeClassName();
    })
    .catch((error) => console.log(error));
};

const generateClassNumber = (max) => {
  return Math.ceil(Math.random() * max);
};

const changeClassName = () => {
  console.log(container.classList);
  for (let i = 0; i < container.classList.length; i++) {
    if (i === container.classList.length) {
      container.classList.remove(`container-${generateClassNumber(10)}`);
      container.classList.add(`container-${generateClassNumber(10)}`);
    }
  }
};
const handleClick = () => {
  getQuote();
  changeClassName();
};

getQuote();

quoteButton.addEventListener("click", handleClick);
