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
} from "./js/constants/constants.js";

const dataStorage = new DataStorage();

let date =  new Date();
let ISOdate = date.toISOString();
let weekAgo = new Date();
weekAgo.setDate(weekAgo.getDate() - 7);
let ISOweekAgo = weekAgo.toISOString();


const searchInput = new SearchInput(search);

function search(event) {
  event.preventDefault(); //предотвращаем перезагрузку
  let inputValue = document.forms.search.elements.search.value;
  dataStorage.setData("lastInput", inputValue);
  results.classList.remove("segment_hidden");
  const serverUrl =
    "http://newsapi.org/v2/everything?" +
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
        nothingFound.classList.remove("segment_hidden");
        preloader.classList.add("segment_hidden");
        results.classList.add("segment_hidden");
      } else {
        nothingFound.classList.add("segment_hidden");
        const resultsArray = cards.articles.map(function (element) {
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
        dataStorage.setData(`data`, cards);

        let cardlist = new NewsCardList(
          resultsContainer,
          resultsArray.slice(0, pageSize)
        );

        cardlist.render(); //рендерим контейнер с карточками
        if (resultsArray.length <= pageSize) {
          resultsMore.classList.add("segment_hidden");
        }
        let resultSize = pageSize;

        function resultSizeIncrement() { //коллбэк для кнопки "показать ещё"
          resultSize += pageSize;
          let list = resultsArray.slice(0, resultSize);
          cardlist = new NewsCardList(resultsContainer, list);
          cardlist.render();
          if (resultsArray.length <= resultSize) {
            resultsMore.classList.add("segment_hidden");
          }
        }

        resultsMore.addEventListener("click", resultSizeIncrement); 

        window.setTimeout(function () {
          preloader.classList.add("segment_hidden");
          resultsMore.classList.remove("segment_hidden"); //и показываем кнопку
        });
      }
    })

    .catch(() => {
      nothingFound.classList.remove("segment_hidden");
      preloader.classList.add("segment_hidden");
      results.classList.add("segment_hidden");
    });
}

//добавляем обработчики
document.forms.search.elements.search.addEventListener("input", searchInput.validate);
document.forms.search.addEventListener("submit", searchInput.validate);
document.forms.search.addEventListener("submit", search);
