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
  }
}
