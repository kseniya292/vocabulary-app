import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class DefinitionService {

  constructor(
    private http: HttpClient,
  ) { }

    getDefinition(vocabword) {

      return this.http.post('http://localhost:1337/definition/', {definition: vocabword})
      .map((res: any) => {
        return {
          word: res.results[0].id,
          definition: res.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0],
        };
      })
      .catch(this._errorHandler);
    }

    private _errorHandler(error: Response) {
      console.error(error);
      return Observable.throw(error || 'Server Error');
    }
}
