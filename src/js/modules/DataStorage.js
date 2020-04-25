export class DataStorage {
  constructor() {
    
  }
//   checkStorage(storage, property){
//     if (storage.includes(property)&&dateStamp===new Date()){
// return property;
//     } else {
//       return storage.length=0;
//     }
//   }
  setData(key, data){
    localStorage.setItem(`${key}`, JSON.stringify(data));//записали принятые от сервера данные в локальное хранилище
  }
  getData(key) {
    const getObject = JSON.parse(localStorage.getItem(`${key}`));
     return getObject;  
  }
}
// запрос к этому классу создаётся при сабмите формы, до обращения к апи. 
// он проверяет, есть ли в хранилище данные, и если есть, отдаёт их отсюда. 
// нужна временная метка, поставим день. если временная метка последнего сохранения отличается 
// от временной метки запроса, то говорим, что хранилище пустое и обращаемся к апи 
// и забираем данные запроса оттуда. если времменная метка в рамках дня - ок, берем отсюда. 
// передаем в класс статистики.
