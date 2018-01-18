import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatFormFieldControl } from '@angular/material';

import { DefinitionService } from '../definition.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  vocabDefinition;

  constructor(private definitionService: DefinitionService) { }

  getDefinition(vocabword: string) {
    this.definitionService.getDefinition(vocabword)
    .subscribe(data => this.vocabDefinition = data);
  }

  ngOnInit() {
  }

}
