import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-vocab-detail',
  templateUrl: './vocab-detail.component.html',
  styleUrls: ['./vocab-detail.component.css']
})
export class VocabDetailComponent implements OnInit {
  id: number;
  wordData;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wordsService: WordsService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'), 10);
      this.wordsService.getWordDetails(this.id)
      .subscribe(details => {
        this.wordData = details;
      });
    });
  }

}
