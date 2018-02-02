import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { WordsService } from '../words.service';
import { DefinitionService } from '../definition.service';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {
  word: string;
  definition: string;

  constructor(
    private wordsService: WordsService,
  ) {
    this.definition = this.wordsService.getDefinition();
    this.word = this.wordsService.getWord();
   }

   postWord() {
     this.wordsService.saveWord({
       word: this.word,
       definition: this.definition
     })
     .subscribe(
      res => res,
      err => console.log(err));
   }

  ngOnInit() {
  }

}
