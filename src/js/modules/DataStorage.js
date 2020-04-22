export class DataStorage {
  constructor(options) {
    this.options = options;
  }
  checkStorage(storage, property){
    if (storage.includes(property)&&dateStamp===new Date()){
return property;
    } else {
      return storage.length=0;
    }
  }
  setData(){
    localStorage.setItem('newscards', JSON.stringify(cards));//записали принятые от сервера данные в локальное хранилище
  }
  getData() {
    if (localStorage.getItem("newscards")) {
      newscards = JSON.parse(localStorage.getItem("newscards"));
      console.log(newscards);
    }
  }
}
// запрос к этому классу создаётся при сабмите формы, до обращения к апи. 
// он проверяет, есть ли в хранилище данные, и если есть, отдаёт их отсюда. 
// нужна временная метка, поставим день. если временная метка последнего сохранения отличается 
// от временной метки запроса, то говорим, что хранилище пустое и обращаемся к апи 
// и забираем данные запроса оттуда. если времменная метка в рамках дня - ок, берем отсюда. 
// передаем в класс статистики.
