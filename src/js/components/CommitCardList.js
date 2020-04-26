
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
    }
  }
  