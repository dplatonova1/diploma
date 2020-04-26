import {error} from "../constants/constants.js"

export class SearchInput {
  constructor(callback){
    this.callback=callback;
  }
  validate(event){
    if(event.target.checkValidity()){
      return error.textContent='';
    } else{
      document.getElementById('error').classList.add('error');
      return error.textContent='Нужно ввести ключевое слово';
    }
  }
}
