export class DataStorage {
  constructor() { 
  }

  setData(key, data){
    localStorage.setItem(`${key}`,  JSON.stringify(data));//записали принятые от сервера данные в локальное хранилище
  }
  
  getData(key) {
    const getObject = JSON.parse(localStorage.getItem(`${key}`));
    return getObject;  
  }
}
