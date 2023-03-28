import { Injectable } from '@angular/core';
import request from 'graphql-request';
import { from, map, of } from 'rxjs';
import { Record } from 'src/app/shared/models/record.model';
import { getQuestionsAndAnswers } from '../query/questionsAndAnswers.query';
import { getArticles } from '../query/articles.query';
import { environment } from '../../../environments/environment.development';
import { Article } from 'src/app/shared/models/article.model';
import { questionsAndAnswers } from '../mock-data/questionsAndAnswers';
import { articles } from '../mock-data/articles';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  getQuestionsAndAnswers() {
    return of(questionsAndAnswers);
    // return from(
    //   // questionsAndAnswers
    //   request<{ records: Record[] }>(
    //     environment.graphCmsEndpoint,
    //     getQuestionsAndAnswers()
    //   )
    // ).pipe(map(data => data.records));
  }

  getArticles() {
    return of(articles);
    // return from(
    //   request<{ articles: Article[] }>(
    //     environment.graphCmsEndpoint,
    //     getArticles()
    //   )
    // ).pipe(map(data => data.articles));
  }
}
