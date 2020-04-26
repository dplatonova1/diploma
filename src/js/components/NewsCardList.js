
export class NewsCardList {
    constructor(container, cardArray) {
      this.container = container;
      this.cardArray = cardArray;
    }
    
    render() {
      const container1 = this.container;
      while (container1.firstChild) {
        container1.removeChild(container1.firstChild);
      }
      this.cardArray.forEach(function(item) {
        const cardTemplate = item.create();
        container1.appendChild(cardTemplate);
      });  
    }
  }
  