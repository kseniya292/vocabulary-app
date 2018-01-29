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
    console.log(data);
    this.word = data;
  }

  getDefinition() {
    return this.definition;
  }

  getWord() {
    return this.word;
  }

  // postWord(data): Observable<any> {
  //   return this.http.post(`http://localhost:1337/words/`, data)
  //   .map(res => res.json())
  //   .catch(this._errorHandler);
  // }

  // getWords() {
  //   return this.http.get(`http://localhost:1337/words/`)
  //   .map(res => res.json())
  //   .catch(this._errorHandler);
  // }

  private _errorHandler(error: Response): Observable<any> {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }

}
