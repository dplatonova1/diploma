
export class NewsCardList {
    constructor(container, cardArray) {
      this.container = container;
      this.cardArray = cardArray;
    }
    
    render() {
      const container1 = this.container;
      this.container.innerHTML = "";
      this.cardArray.forEach(function(item) {
        const cardTemplate = item.create();
        container1.appendChild(cardTemplate);
      });
    }
  }
  