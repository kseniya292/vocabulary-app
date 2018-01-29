import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatFormFieldControl } from '@angular/material';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { DefinitionService } from '../definition.service';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  errorMsg: string;

  constructor(
    private definitionService: DefinitionService,
    private wordsService: WordsService,
    private router: Router
  ) { }

  // calls the getDefinition service
  getDefinition(vocabword) {
    this.definitionService.getDefinition({definition: vocabword})
    .subscribe(data => {
      // sends word and definition to shared service
      this.wordsService.sendWord(vocabword);
      this.wordsService.sendDefinition(data);

      // navigate to definition component
      this.router.navigate(['/definition']);
    },
    error => this.errorMsg = 'server is down'
  );

  }

  ngOnInit() {
  }

}
