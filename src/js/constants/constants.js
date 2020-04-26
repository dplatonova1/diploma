export {results, resultsContainer, resultsMore, preloader, error, nothingFound, inputValue, pageSize}

const results = document.querySelector(".results");
const resultsContainer = document.querySelector(".results__container");
const resultsMore = document.querySelector(".results__more");
const preloader = document.querySelector(".preloader");
const nothingFound = document.querySelector(".nothing");
const error = document.querySelector(".error");
const inputValue = document.forms.search.elements.search.value;
const pageSize = 3;
