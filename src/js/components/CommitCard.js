import {dateConverter} from '../utils/DateConverter.js';
import {imageChecker} from '../utils/ImageChecker.js';

export class CommitCard {
    constructor(name, email, date, message, avatar) {
      this.name = name;
      this.email = email;
      this.date = dateConverter(date);
      this.message = message;
      this.avatar = imageChecker(avatar)
    }
    create() {
        const commitCard = document.createElement("div");
        commitCard.classList.add("swiper-slide");
        const template = 
        `<p class="slide__date typo typo_fs_xs typo_lh_s">${this.date}</p>

        <div class="slide__author">
            <div class="slide__image" style='background-image: url(${this.avatar})'></div>
            <div class="slide__author-wrapper">
                <h3 class="slide__name typo typo_ff_roboto-slab typo_fs_m typo_lh_sm">${this.name}
                </h3>
                <p class="slide__email typo typo_fs_xs typo_lh_s">${this.email}</p>
            </div>
        </div>

        <p class="typo typo_fs_s typo_lh_s">${this.message}</p>`;
        commitCard.insertAdjacentHTML("beforeend", template);
        return commitCard;
      }
    }