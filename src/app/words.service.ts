import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';

const WORDS_KEY = makeStateKey('words');
const WORD_DEFINITION_KEY = makeStateKey('wordDefinition');

@Injectable()
export class WordsService {
  definition;
  word;

  constructor(
    private http: HttpClient,
    private state: TransferState
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

  deleteWord(id: number): Observable<any> {
    return this.http.delete(`http://localhost:1337/words/${id}/`)
    .map(res => res)
    .catch(this._errorHandler);
  }

  saveWord(data) {
    return this.http.post(`http://localhost:1337/words/`, data)
    .map(res => res)
    .catch(this._errorHandler);
  }

  getWords(): Observable<any> {
    const words = this.state.get(WORDS_KEY, null as any);
    if (words) {
      return Observable.of(words);
    }

    return this.http.get(`http://localhost:1337/words/`)
    .map((res: Observable<any>) => {
      // const words = [];
      // res.forEach((word) => {
      //   words.push({
      //     word : word.word,
      //     definition: word.definition,
      //     id: word.id,
      //   });
      // })
      this.state.set(WORDS_KEY, res as any);
      return res;
    })
    .catch(this._errorHandler);
  }

  getWordDetails(id: number): Observable<any> {
    let wordDefinition = this.state.get(WORD_DEFINITION_KEY, null as any);
    if (wordDefinition && wordDefinition.id === id) {
      return Observable.of(wordDefinition);
    }

    return this.http.get(`http://localhost:1337/words/${id}/`)
    .map((res: Observable<any>) => {
      wordDefinition = res;
      this.state.set(WORD_DEFINITION_KEY, wordDefinition as any);
      return wordDefinition;
    })
    .catch(this._errorHandler);
  }

  private _errorHandler(error: Response): Observable<any> {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }

}
