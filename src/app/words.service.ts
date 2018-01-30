import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class WordsService {
  definition;
  word;

  constructor(
    private http: HttpClient,
  ) { }

  sendDefinition(data) {
    this.definition = data;
  }

  sendWord(data) {
    this.word = data;
  }

  getDefinition() {
    return this.definition;
  }

  getWord() {
    return this.word;
  }

  saveWord(data) {
    return this.http.post(`http://localhost:1337/words/`, data)
    .map(res => {
      console.log(res);
    })
    .catch(this._errorHandler);
  }

  getWords(): Observable<any> {
    return this.http.get(`http://localhost:1337/words/`)
    .map((res: Observable<any>) => {
      const words = [];
      res.forEach((word) => {
        words.push({
          word : word.word,
          definition: word.definition,
          id: word.id,
        });
      });
      return words;
    })
    .catch(this._errorHandler);
  }

  getWordDetails(id: number): Observable<any> {
    return this.http.get(`http://localhost:1337/words/${id}/`)
    .map((res: Observable<any>) => {
      console.log('res', res);
      return res;
    })
    .catch(this._errorHandler);
  }

  private _errorHandler(error: Response): Observable<any> {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }

}
