import {errorSpan, searchButton, inputField } from "../constants/constants.js"

export class SearchInput {
  constructor(callback){
    this.callback=callback;
  }
  validate(event){
    if(event.target.checkValidity()){
      inputField.removeAttribute('disabled');
      searchButton.removeAttribute('disabled');
      return errorSpan.textContent='';
    } else{  
      errorSpan.classList.add('error');
      return errorSpan.textContent='Нужно ввести ключевое слово';
    }
  }
}
