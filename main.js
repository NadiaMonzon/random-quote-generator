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
};

const changeClassName = () => {
  quote.classList.add("animate__bounceOut");
  quote.classList.remove("animate__bounceIn");
  author.classList.add("animate__bounceOut");
  author.classList.remove("animate__bounceIn");
};

const handleClick = () => {
  getQuote();
  changeClassName();
};

getQuote();

quoteButton.addEventListener("click", handleClick);
