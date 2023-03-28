import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Article } from '../shared/models/article.model';
import { RecordsService } from '../shared/data-access/graph-cms.service';
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
    this.articles$ = this.recordsService.getArticles();
  }
}
