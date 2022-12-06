"use strict";

const quote = document.querySelector(".js-quote");
const author = document.querySelector(".js-author");
const quoteButton = document.querySelector(".js-quote-button");
const container = document.querySelector(".js-container");
const mainContainer = document.querySelector(".js-main");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderQuotes(data);
    })
    .catch((error) => console.log(error));
};

const generateClassNumber = (max) => {
  return Math.ceil(Math.random() * max);
};

const renderQuotes = (data) => {
  quote.innerHTML = data.content;
  quote.id = data._id;
  author.innerHTML = data.author;
  quote.classList.add("animate__bounceIn");
  quote.classList.remove("animate__bounceOut");
  author.classList.add("animate__bounceIn");
  author.classList.remove("animate__bounceOut");
  mainContainer.classList.add(`main-${generateClassNumber(10)}`);
  quoteButton.classList.add(`main-${generateClassNumber(10)}`);
  quote.classList.add(`letter-color-${generateClassNumber(10)}`);
  author.classList.add(`letter-color-${generateClassNumber(10)}`);
};

const changeAnimation = () => {
  quote.classList.add("animate__bounceOut");
  quote.classList.remove("animate__bounceIn");
  author.classList.add("animate__bounceOut");
  author.classList.remove("animate__bounceIn");
};

const changeColors = () => {
  console.log(mainContainer.classList);
  mainContainer.classList.remove(mainContainer.classList.item(1));
  quoteButton.classList.remove(quoteButton.classList.item(2));
  quote.classList.remove(quote.classList.item(1));
  author.classList.remove(author.classList.item(2));
};

const handleClick = () => {
  console.log(generateClassNumber(10));
  getQuote();
  changeAnimation();
  changeColors();
};

getQuote();

quoteButton.addEventListener("click", handleClick);

//.item()
