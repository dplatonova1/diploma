export class NewsCardList {
    constructor(container) {
      this.container = container;
    }
    
    clear(){
      const container = this.container;
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }

    render(array) {
      const container = this.container;
      array.forEach(function(item) {
        const cardTemplate = item.create();
        container.appendChild(cardTemplate);
      });  
    }
  }
  