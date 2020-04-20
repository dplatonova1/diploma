import { NewsCard } from "./NewsCard.js";
import { NewsCardList } from "./NewsCardList.js";
import { NewsApi } from "../modules/NewsApi.js";

//бахнем константы
const results = document.querySelector(".results");
const resultsContainer = document.querySelector(".results__container");
const resultsMore = document.querySelector(".results__more");
const preloader = document.querySelector(".preloader");
const nothingFound = document.querySelector(".nothing");
let date = new Date();
let weekAgo = new Date();
weekAgo.setDate(weekAgo.getDate() - 7);
document.forms.search.addEventListener("submit", function (event) {
  //вешаем обраблтчик на сабмит формы
  event.preventDefault(); //предотвращаем перезагрузку
  results.classList.remove("segment_hidden");
  // const serverUrl = process.env.NODE_ENV === 'development' ? 'http://praktikum.tk/cohort8' : 'https://praktikum.tk/cohort8';
  const serverUrl =
    "http://newsapi.org/v2/everything?" +
    `q=${document.forms.search.elements.search.value}&` +
    `from=${weekAgo}&` +
    `to=${date}&` +
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
    .getNews() //в это же время отправляем запрос на апи
    .then(function (cards) {
      if (cards.articles.length === 0) {
        nothingFound.classList.remove("segment_hidden");
        preloader.classList.add("segment_hidden");
        results.classList.add("segment_hidden");
      } else {
       
        const resultsArray = cards.articles.map(function (element) {
          const card = new NewsCard(
            element.title,
            element.urlToImage,
            element.publishedAt,
            element.description,
            element.source.name
          );
          return card;
        });
        const cardlist = new NewsCardList(resultsContainer, resultsArray);
        cardlist.render(); //рендерим контейнер с карточками
     
        window.setTimeout(function () {
          preloader.classList.add("segment_hidden");
          resultsMore.classList.remove("segment_hidden"); //и показываем кнопку
        });
      }
    })


    // .catch(() => {
    //   nothingFound.classList.remove("segment_hidden");
    //   preloader.classList.add("segment_hidden");
    //   results.classList.add("segment_hidden");
    // });
});


//управление длиной страницы

//сперва мы выдаем пэйджсайз 3
//по клику на показать ещё перезаписываем значение пэйджсайз=пс+3
//и так пока пэйджсайз не будет 100, или конец массива,  кнопку убираем