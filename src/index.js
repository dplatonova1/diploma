import "./pages/index.css";

import img from "./images/author.jpg";
import ico from "./images/favicon.ico";
import lead from "./images/lead.jpg";
import robotomedium from "./vendor/fonts/roboto-medium.woff";
import robotoregular from "./vendor/fonts/roboto-regular.woff";
import robotoslab from "./vendor/fonts/robotoslab-regular.woff";
import sourcesans from "./vendor/fonts/sourcesanspro-regular.woff";
import { NewsCard } from "./js/components/NewsCard.js";
import { NewsCardList } from "./js/components/NewsCardList.js";
import { NewsApi } from "./js/modules/NewsApi.js";
import { SearchInput } from "./js/components/SearchInput.js";
import { DataStorage } from "./js/modules/DataStorage.js";
import {
  results,
  resultsContainer,
  resultsMore,
  preloader,
  nothingFound,
  pageSize,
  inputField,
  searchButton,
  badRequest,
} from "./js/constants/constants.js";

const dataStorage = new DataStorage();
const date = new Date();
const ISOdate = date.toISOString();
const weekAgo = new Date();
weekAgo.setDate(weekAgo.getDate() - 7);
const ISOweekAgo = weekAgo.toISOString();
const searchInput = new SearchInput(search);
const cardlist = new NewsCardList(resultsContainer);
let currentSize = 0;

function search(event) {
  event.preventDefault(); //предотвращаем перезагрузку
  cardlist.clear();
  const inputValue = document.forms.search.elements.search.value;
  inputField.setAttribute("disabled", "disabled");
  results.classList.add("segment_hidden");
  preloader.classList.remove("segment_hidden");
  const serverUrl =
    "https://newsapi.org/v2/everything?" +
    `q=${inputValue}&` +
    `from=${ISOweekAgo}&` +
    `to=${ISOdate}&` +
    "language=ru&" +
    "pageSize=100";

  const newsApi = new NewsApi({
    baseUrl: serverUrl,
    method: "GET",
    headers: {
      authorization: "08608a159aee4ba9bd4fe32e49e872a1",
    },
  }); //создаём экземпляр класса апи для новостей
  newsApi
    .getNews() //в это же время отправляем запрос к апи
    .then(function (cards) {
      if (cards.articles.length === 0) {
        badRequest.classList.add("segment_hidden");
        searchButton.removeAttribute("disabled");
        inputField.removeAttribute("disabled");
        nothingFound.classList.remove("segment_hidden");
        preloader.classList.add("segment_hidden");
        results.classList.add("segment_hidden");
      } else {
        badRequest.classList.add("segment_hidden");
        results.classList.remove("segment_hidden");
        nothingFound.classList.add("segment_hidden");
        preloader.classList.add("segment_hidden");
        searchButton.removeAttribute("disabled");
        inputField.removeAttribute("disabled");
        const resultsCards = cards.articles.map(function (element) {
          const card = new NewsCard(
            element.title,
            element.urlToImage,
            element.publishedAt,
            element.description,
            element.source.name,
            element.url
          );
          return card;
        });

        if (`${inputValue}` in localStorage) {
          dataStorage.getData("data");
        } else {
          dataStorage.setData("lastInput", inputValue);
          dataStorage.setData("data", cards);
        }

        resultSizeIncrement();

        if (resultsCards.length <= currentSize) {
          resultsMore.classList.add("segment_hidden");
        } else {
          resultsMore.classList.remove("segment_hidden");
        }

        window.setTimeout(function () {
          preloader.classList.add("segment_hidden");
        });
      }
    })

    .catch((err) => {
      console.log(`Во время запроса произошла ошибка ${err}`);
      badRequest.classList.remove("segment_hidden");
      searchButton.removeAttribute("disabled");
      inputField.removeAttribute("disabled");
      preloader.classList.add("segment_hidden");
      results.classList.add("segment_hidden");
    });
}

function resultSizeIncrement() {
  //коллбэк для кнопки "показать ещё"
  const data = dataStorage.getData("data");
  const list = data.articles.slice(currentSize, currentSize + pageSize);
  const resultsCards = list.map(function (element) {
    const card = new NewsCard(
      element.title,
      element.urlToImage,
      element.publishedAt,
      element.description,
      element.source.name,
      element.url
    );
    return card;
  });
  cardlist.render(resultsCards);
  currentSize += pageSize;
  if (data.articles.length <= currentSize) {
    resultsMore.classList.add("segment_hidden");
  }
}

//добавляем обработчики

document.forms.search.elements.search.addEventListener(
  "input",
  searchInput.validate
);
document.forms.search.addEventListener("submit", searchInput.validate);
document.forms.search.addEventListener("submit", search);
resultsMore.addEventListener("click", () => {
  resultSizeIncrement();
});
