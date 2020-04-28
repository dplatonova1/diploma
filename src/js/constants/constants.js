export {results, resultsContainer, resultsMore, preloader, 
    nothingFound, inputValue, pageSize, errorSpan, searchButton, inputField, badRequest}

const results = document.querySelector(".results");
const resultsContainer = document.querySelector(".results__container");
const resultsMore = document.querySelector(".results__more");
const preloader = document.querySelector(".preloader");
const nothingFound = document.querySelector(".nothing");
const inputValue = document.forms.search.elements.search.value;
const pageSize = 3;
const errorSpan = document.querySelector('.search__error');
const searchButton = document.querySelector('.search__button');
const inputField = document.querySelector('.search__input-text');
const badRequest = document.querySelector('.bad-request');