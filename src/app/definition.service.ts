import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const DEFINITION_KEY = makeStateKey('definition');

@Injectable()
export class DefinitionService {

  constructor(
    private http: HttpClient,
    private state: TransferState
  ) { }

    getDefinition(vocabword) {

      return this.http.post('http://localhost:1337/definition/', vocabword)
      .map((res: any) => {
        return res.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
      })
      .catch(this._errorHandler);
    }

    private _errorHandler(error: Response) {
      return Observable.throw(error || 'Server Error');
    }
}
