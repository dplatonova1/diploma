
export class CommitCardList {
    constructor(container, initialArray) {
      this.container = container;
      this.cardArray = initialArray;
    }
    
    render() {
      const cardsContainer = this.container;
      this.container.innerHTML = "";
      this.cardArray.forEach(function(item) {
        const cardTemplate = item.create();
        cardsContainer.appendChild(cardTemplate);
      });
    }
  }
  