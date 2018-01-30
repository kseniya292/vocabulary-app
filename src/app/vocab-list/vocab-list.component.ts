import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-vocab-list',
  templateUrl: './vocab-list.component.html',
  styleUrls: ['./vocab-list.component.css']
})
export class VocabListComponent implements OnInit {
  wordList;

  constructor(
    private wordsService: WordsService
  ) { }

  ngOnInit() {
    this.wordsService.getWords()
    .subscribe(data => this.wordList = data);
  }

}
