import { questionsAndAnswers } from '../mock-data/questionsAndAnswers';
import { GetCategoriesPipe } from './get-categories.pipe';

describe('GetCategoriesPipe', () => {
  it('create an instance', () => {
    const pipe = new GetCategoriesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty array', () => {
    const pipe = new GetCategoriesPipe();
    const categories = pipe.transform([]);
    expect(categories).toHaveSize(0);
  });

  it('should return six categories', () => {
    const pipe = new GetCategoriesPipe();
    const categories = pipe.transform(questionsAndAnswers);
    expect(categories).toHaveSize(6);
  });
});
