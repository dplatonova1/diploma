import { DataStorage } from "../modules/DataStorage.js";
import { dateToDays } from "../utils/DateConverter.js";
import {countMentions} from "../utils/countMentions.js"

export class Statistics {
  constructor(news, input) {
    this.input = input;
    this.news = news; //забрать объект из локал сторэйджа
    this.dict = {}; //создание пустого массива для дальнейшей группировки
  }

  showRelated(){
    let date = new Date();
    let weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    let filteredByDate = this.news.articles.filter(function(elem){
      const publicationDateConvert = new Date(elem.publishedAt)
      if(publicationDateConvert<=date && publicationDateConvert >= weekAgo ){
      return publicationDateConvert;}
      else {
        return false;
      }
    })
    return filteredByDate;
  }

  groupArticles() {
    function arrayToDates(date, title, description) {
      //здесь мы распределяем весь массив статей на дату публикации, тайтл и описание, в которых в дальнейшем подсчитаем упоминания
      return {
        date: dateToDays(date),
        title,
        description
      };
    }

    function makeDateGroups(key, object, dict) {
      //функция создания массива, сгруппированного по датам
      if (!dict[key]) {
        dict[key] = [];
      }
      dict[key].push(object);
    }

    const arrayOfData = this.news.articles.map((elem) => {
      elem = arrayToDates(elem.publishedAt, countMentions(elem.title),countMentions(elem.description));
      return elem;
    });
    arrayOfData.forEach((element) => {
      makeDateGroups(element.date, element, this.dict);
    });
  }
  createStatisticsHeader() {
        //массив заголовков
        const arrayofTitles = this.news.articles.filter(
          (elem) => countMentions(elem.title)
        )
    const analyticsStatItem = document.createElement("div");
    analyticsStatItem.classList.add("analytics__stat");
    const template = `
        <h2 class="typo typo_ff_roboto-slab typo_fs_l typo_lh_l">Вы спросили: «${this.input}»</h2>
        <p class="typo typo_fs_sm typo_lh_sm">Новостей за неделю: <span class="analytics__quantity">${
          this.news.totalResults
        }</span></p>
        <p class="typo typo_fs_sm typo_lh_sm">Упоминаний в заголовках: <span
                class="analytics__quantity">${arrayofTitles.length}</span></p>
    `;
    analyticsStatItem.insertAdjacentHTML("afterbegin", template);
    return analyticsStatItem;
  }
  createAnalyticsGraphs() {
    function dateCountGroup(key, object, dict) {
      //функция создания массива, сгруппированного по датам
      if (!dict[key]) {
        dict[key] = object;
      }
    }
    const dict = this.dict;
    const result = {};
    Object.keys(dict).forEach(function (elem) {
    let statArr = dict[elem].filter((element) =>{
      return element.title||element.description;    
    })
    dateCountGroup(elem, statArr.length, result);
   });
  const analyticsChartbox = document.createElement("div");

   Object.entries(result).forEach(function(element){
    const template = `
    <div class="analytics__chart">
    <p class="chart_date typo typo_fs_sm">${element[0]}</p>

    <div class="analytics__graph">
        <div class="analytics__graphlevel" style="width: ${element[1]}%">
            <p class="chart_count typo typo_fs_xxs">${element[1]}</p>
        </div>
    </div>
    `;
    analyticsChartbox.insertAdjacentHTML("afterbegin", template);
   });
    analyticsChartbox.classList.add("analytics__chartbox");
    return analyticsChartbox;
  }
}
