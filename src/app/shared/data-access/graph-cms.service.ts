import { Injectable } from '@angular/core';
import request from 'graphql-request';
import { from, map, of } from 'rxjs';
import { Record } from 'src/app/shared/models/record.model';
import { getQuestionsAndAnswers } from '../query/questionsAndAnswers.query';
import { getArticles } from '../query/articles.query';
import { Article } from 'src/app/shared/models/article.model';
import { questionsAndAnswers } from '../mock-data/questionsAndAnswers';
import { articles } from '../mock-data/articles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  getQuestionsAndAnswers() {
    if (environment.production) {
      return from(
        request<{ records: Record[] }>(
          environment.graphCmsEndpoint,
          getQuestionsAndAnswers()
        )
      ).pipe(map(data => data.records));
    } else {
      return of(questionsAndAnswers);
    }
  }

  getArticles() {
    if (environment.production) {
      return from(
        request<{ articles: Article[] }>(
          environment.graphCmsEndpoint,
          getArticles()
        )
      ).pipe(map(data => data.articles));
    } else {
      return of(articles);
    }
  }
}
