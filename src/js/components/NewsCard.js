import {dateConverter} from '../utils/DateConverter.js';
import {imageChecker} from '../utils/ImageChecker.js';

export class NewsCard {
    constructor(title, link, date, text, sourcename, sourcelink) {
      this.link = imageChecker(link);
      this.date = dateConverter(date);
      this.title = title;
      this.text = text;
      this.sourcename = sourcename;
      this.sourcelink = sourcelink;
    }
    create() {
        const resultsCard = document.createElement("div");
        resultsCard.classList.add("results__card");
        const template = 
        `<a href="${this.sourcelink}" target="_blank" class="content__link"><div class="results__image" style='background-image: url(${this.link})'></div> 
        <p class="results__date typo typo_fs_sm typo_lh_sm">${this.date}</p>
        <h3 class="results__cardtitle typo typo_ff_roboto-slab typo_fs_m">${this.title}
        </h3>
        <p class="results__paragraph typo typo_fs_s typo_lh_s">${this.text}</p>
        <p class="results__source typo typo_ff_roboto-slab typo_fs_s typo_lh_s">${this.sourcename}</p>
        </a>`;
        resultsCard.insertAdjacentHTML("beforeend", template);
        return resultsCard;
      }
    }