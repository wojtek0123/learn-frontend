import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../../models/article.mode';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(articles: Article[], phrase: string): Article[] {
    return articles.filter(article =>
      article.title.toLocaleLowerCase().includes(phrase.toLocaleLowerCase())
    );
  }
}
