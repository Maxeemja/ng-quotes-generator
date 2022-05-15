import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../Quote';
const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://quote-garden.herokuapp.com/api/v3/';

  constructor(private http: HttpClient) {}

  _transformData(data: any) {
    return {
      id: data._id,
      text: data.quoteText,
      author: data.quoteAuthor,
      genre: data.quoteGenre,
    };
  }

  getRandomNum() {
    return Math.floor(Math.random() * (7000 - 1)) + 1;
  }

  getQuote(): Observable<any> {
    return this.http
      .get<any>(this.apiUrl + `quotes?limit=1&page=${this.getRandomNum()}`)
      .pipe(map((res) => this._transformData(res.data[0])));
  }
  getQuotes(author?: string): Observable<Quote[]> {
    return this.http
      .get<any>(this.apiUrl + `quotes?author=${author}&limit=5`)
      .pipe(
        map((res) => res.data),
        map((data) => data.map((el: Quote) => this._transformData(el)))
      );
  }
}
