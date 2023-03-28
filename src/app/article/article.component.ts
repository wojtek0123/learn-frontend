import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Article } from '../models/article.mode';
import { RecordsService } from '../shared/data-access/records.service';
import { SearchPipe } from '../shared/pipe/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, SearchPipe, FormsModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  articles$ = new Observable<Article[]>();
  phrase = '';

  constructor(private recordsService: RecordsService) {}

  ngOnInit() {
    this.articles$ = this.recordsService
      .getArticles()
      .pipe(map(articles => articles.articles));
  }
}
