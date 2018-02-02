import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-vocab-list',
  templateUrl: './vocab-list.component.html',
  styleUrls: ['./vocab-list.component.css']
})
export class VocabListComponent implements OnInit {
  wordList = [];

  constructor(
    private wordsService: WordsService,
    private route: ActivatedRoute,
  ) { }


  deleteWord(id) {
      this.wordsService.deleteWord(id)
      .subscribe(res => res);
  }

  removeWord(index: number) {
    this.wordList.splice(index, 1);
}

  ngOnInit() {
    this.wordsService.getWords()
    .subscribe(data => this.wordList = data);
  }

}
