"use strict";
const quote = document.querySelector(".js-quote");
const author = document.querySelector(".js-author");
const quoteButton = document.querySelector(".js-quote-button");

fetch("http://api.quotable.io/random")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    quote.innerHTML = data.content;
    quote.id = data._id;
    author.innerHTML = data.author;
  });
