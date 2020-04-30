import Swiper from 'swiper';
// import { Swiper, Navigation, Pagination} from 'swiper/js/swiper.esm.js';
// Swiper.use([Navigation, Pagination]);
export class CommitCardList {
    constructor(container, initialArray) {
      this.container = container;
      this.cardArray = initialArray;
    }
    
    render() {
      const cardsContainer = this.container;
      while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
      }
      this.cardArray.forEach(function(item) {
        const cardTemplate = item.create();
        cardsContainer.appendChild(cardTemplate);
      });
      const swiper = new Swiper(".swiper-container", {
        initialSlide: 0,
        grabCursor: true,
        slidesPerView: 4,
        spaceBetween: 16,
        slidesPerGroup: 1,
        slidesOffsetBefore: 88,
        slidesOffsetAfter: 88,
        setWrapperSize: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
          breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
          440: {
            slidesPerView: 2,
            spaceBetween: 8,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,

          },
          768: {
            slidesPerView: 3,
            spaceBetween: 8,
            slidesOffsetBefore: 24,
            slidesOffsetAfter: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          }
        }
      });
    }
  }
  