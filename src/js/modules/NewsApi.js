export class NewsApi {
  constructor(options) {
    this.options = options;
  }
  getNews() {
    return fetch(`${this.options.baseUrl}`, {
      headers: this.options.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => console.log(`Во время запроса произошла ошибка ${err}. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`));
  }
}
