import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class DefinitionService {

  private baseUrl = 'https://od-api.oxforddictionaries.com/api/v1/entries/en/';

  constructor(
    private http: HttpClient
  ) { }

    getDefinition(vocabword: string) {
      const headers = { 'app_id': '3e23ba37', 'app_key': '90da04772846856a4fc02a7146753d12' };
      // headers.append('app_id', '3e23ba37');
      // headers.append('app_key', '90da04772846856a4fc02a7146753d12');
      // const options = new RequestOptions({headers: headers});

      return this.http.get(`${this.baseUrl}${vocabword}`, {headers})
      .map((res: any) => console.log(res));
    }
}
