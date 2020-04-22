import { NewsCard } from "./NewsCard.js";
import { NewsCardList } from "./NewsCardList.js";
import { NewsApi } from "../modules/NewsApi.js";

//бахнем константы 
const results = document.querySelector(".results");
const resultsContainer = document.querySelector(".results__container");
const resultsMore = document.querySelector(".results__more");
const preloader = document.querySelector(".preloader");
const nothingFound = document.querySelector(".nothing");
const error = document.querySelector(".error");
//до сюда перенесла в index.js
let date = new Date();
let weekAgo = new Date();
weekAgo.setDate(weekAgo.getDate() - 7);


//валидируем форму, позже забрать функцию как метод класса, но сейчас пока перенесла в индекс
export default function validate(event){
  if(event.target.checkValidity()){
    return error.textContent='';
  } else{
    document.getElementById('error').classList.add('error');
    return error.textContent='Нужно ввести ключевое слово';
  }
};


export function lotsofstuff (event) {//очень большая функция, нужно разделить на куски

  event.preventDefault(); //предотвращаем перезагрузку
  results.classList.remove("segment_hidden");
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

        localStorage.setItem('newscards', JSON.stringify(cards));//записали принятые от сервера данные в локальное хранилище
        const cardlist = new NewsCardList(resultsContainer, resultsArray);
        cardlist.render(); //рендерим контейнер с карточками

        let resultSize=3;
        
        function resultSizeIncrement (){
          console.log(cardlist.cardArray.slice(0, resultSize));
          if (resultSize<=cardlist.cardArray.length){
            return resultSize= resultSize+3;
          } else {
            return resultsMore.classList.add("segment_hidden");
          }  
        }

        resultsMore.addEventListener('click', resultSizeIncrement);//по клику на показать ещё мы три раза показываем айтемы аррэя

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
  event.target.reset();
}

document.forms.search.elements.search.addEventListener("input", validate);//перенесла в index.js
document.forms.search.addEventListener("submit", validate);//перенесла в index.js
document.forms.search.addEventListener("submit", lotsofstuff);//перенесла в index.js


// export class SearchInput {
//   constructor(callback){
//     this.callback=callback;
//   }
//   validate(event){
//     if(event.target.checkValidity()){
//       return error.textContent='';
//     } else{
//       document.getElementById('error').classList.add('error');
//       return error.textContent='Нужно ввести ключевое слово';
//     }
//   }
// }