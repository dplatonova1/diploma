import { DataStorage } from "../modules/DataStorage.js";
import { dateToDays } from "../utils/DateConverter.js";
import { countMentions } from "../utils/countMentions.js";

export class Statistics {
  constructor(news, input) {
    this.input = input; //забираем из хранилища последний инпут
    this.news = news; //забрать объект из хранилища
    this._dict = {}; //создание пустого объекта для дальнейшей группировки
  }

  _showRelated(array) {
    const date = new Date();
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return array.filter(function (elem) {
      const publicationDateConvert = new Date(elem.publishedAt);
      if (publicationDateConvert <= date && publicationDateConvert >= weekAgo) {
        return publicationDateConvert;
      } else {
        return false;
      }
    });
  }

  groupArticles() {
    function arrayToDates(date, title, description) {
      //здесь мы распределяем весь массив статей на дату публикации, тайтл и описание, в которых в дальнейшем подсчитаем упоминания
      return {
        date: dateToDays(date),
        title,
        description,
      };
    }

    function makeDateGroups(key, object, dict) {
      //функция создания массива, сгруппированного по датам
      if (!dict[key]) {
        dict[key] = [];
      }
      dict[key].push(object);
    }
    const related = this._showRelated(this.news.articles);
    const arrayOfData = related.map((elem) => {
      elem = arrayToDates(
        elem.publishedAt,
        countMentions(elem.title, this.input),
        countMentions(elem.description, this.input)
      );
      return elem;
    });
    arrayOfData.forEach((element) => {
      makeDateGroups(element.date, element, this._dict);
    });
  }


  createStatisticsHeader() {
    const related = this._showRelated(this.news.articles);
    //массив заголовков
    const arrayofTitles = related.filter((elem) =>
      countMentions(elem.title, this.input)
    );
    const analyticsStatItem = document.createElement("div");
    analyticsStatItem.classList.add("analytics__stat");
    const template = `
        <h2 class="typo typo_ff_roboto-slab typo_fs_l typo_lh_l">Вы спросили: «${this.input}»</h2>
        <p class="typo typo_fs_sm typo_lh_sm">Новостей за неделю: <span class="analytics__quantity">${related.length}</span></p>
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
    const dict = this._dict;
    const result = {};
    Object.keys(dict).forEach(function (elem) {
      const statArr = dict[elem].filter((element) => {
        return element.title || element.description;
      });
      dateCountGroup(elem, statArr.length, result);
    });
    
    const analyticsChartbox = document.createElement("div");
    const sortedByDate = Object.entries(result).sort();
    sortedByDate.forEach(function (element) {
      const template = `
    <div class="analytics__chart">
    <p class="chart_date typo typo_fs_sm">${element[0]}</p>

    <div class="analytics__graph">
        <div class="analytics__graphlevel" style="width: ${element[1]}%">
            <p class="chart_count typo typo_fs_xxs">${element[1]}</p>
        </div>
    </div>
    `;
      analyticsChartbox.insertAdjacentHTML("beforeend", template);
    });
    analyticsChartbox.classList.add("analytics__chartbox");
    return analyticsChartbox;
  }
}
