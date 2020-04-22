import "./pages/index.css";

import img from './images/author.jpg';
import ico from './images/favicon.ico';
import lead from './images/lead.jpg';
import robotomedium from './vendor/fonts/roboto-medium.woff';
import robotoregular from './vendor/fonts/roboto-regular.woff';
import robotoslab from './vendor/fonts/robotoslab-regular.woff';
import sourcesans from './vendor/fonts/sourcesanspro-regular.woff';
import {SearchInput} from './js/components/SearchInput.js';
import {DataStorage} from './js/modules/DataStorage.js';
import * as constants from './js/constants/constants.js';
import validate from './js/components/SearchInput.js'
import lotsofstuff from './js/components/SearchInput.js'

// let date = new Date();
// let weekAgo = new Date();
// weekAgo.setDate(weekAgo.getDate() - 7);

//все, что ниже, точно должно быть тут

// const serverUrl =
// "http://newsapi.org/v2/everything?" +
// `q=${document.forms.search.elements.search.value}&` +
// `from=${weekAgo}&` +
// `to=${date}&` +
// "language=ru&" +
// "pageSize=100";

// const newsApi = new NewsApi({
// baseUrl: serverUrl,
// method: "GET",
// headers: {
//   authorization: "08608a159aee4ba9bd4fe32e49e872a1",
// },
// }); //создаём экземпляр класса апи для новостей


//отправляем запрос к апи
// newsApi
//     .getNews() 
//     .then(function (cards) {
//       if (cards.articles.length === 0) {
//         nothingFound.classList.remove("segment_hidden");
//         preloader.classList.add("segment_hidden");
//         results.classList.add("segment_hidden");
//       } else {   
//         nothingFound.classList.add("segment_hidden");
//         const resultsArray = cards.articles.map(function (element) {
//           const card = new NewsCard(
//             element.title,
//             element.urlToImage,
//             element.publishedAt,
//             element.description,
//             element.source.name,
//             element.url
//           );
//           return card;
//         });

//         localStorage.setItem('newscards', JSON.stringify(cards));//записали принятые от сервера данные в локальное хранилище
//         const cardlist = new NewsCardList(resultsContainer, resultsArray);
//         cardlist.render(); //рендерим контейнер с карточками

//         let resultSize=3;
        
//         function resultSizeIncrement (){
//           console.log(cardlist.cardArray.slice(0, resultSize));
//           if (resultSize<=cardlist.cardArray.length){
//             return resultSize= resultSize+3;
//           } else {
//             return resultsMore.classList.add("segment_hidden");
//           }  
//         }

//         resultsMore.addEventListener('click', resultSizeIncrement);//по клику на показать ещё мы три раза показываем айтемы аррэя

//         window.setTimeout(function () {
//           preloader.classList.add("segment_hidden");
//           resultsMore.classList.remove("segment_hidden"); //и показываем кнопку
//         });
//       }
//     })

//     .catch(() => {
//       nothingFound.classList.remove("segment_hidden");
//       preloader.classList.add("segment_hidden");
//       results.classList.add("segment_hidden");
//     });



//добавляем обработчики
// document.forms.search.elements.search.addEventListener("input", validate);
// document.forms.search.addEventListener("submit", validate);
// document.forms.search.addEventListener("submit", lotsofstuff);
