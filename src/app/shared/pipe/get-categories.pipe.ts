import { Pipe, PipeTransform } from '@angular/core';
import { Categories } from '../models/categories.model';
import { Record } from '../models/record.model';

@Pipe({
  name: 'getCategories',
  standalone: true,
})
export class GetCategoriesPipe implements PipeTransform {
  transform(questionsAndAnswers: Record[]): Categories[] {
    return [
      ...new Set([...questionsAndAnswers.flatMap(item => item.category)]),
    ];
  }
}
