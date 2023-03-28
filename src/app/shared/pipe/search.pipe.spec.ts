import { SearchPipe } from './search.pipe';
import { articles } from '../mock-data/articles';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return all articles when phrase is empty string', () => {
    const pipe = new SearchPipe();
    const filteredArticles = pipe.transform(articles, '');
    expect(filteredArticles).toHaveSize(10);
  });

  it('should return empty array of articles when start array has length of 0', () => {
    const pipe = new SearchPipe();
    const filteredArticles = pipe.transform([], '');
    expect(filteredArticles).toHaveSize(0);
  });

  it('should return empty array when phrase is "abcdef123"', () => {
    const pipe = new SearchPipe();
    const phrase = 'abcdef123';
    const filteredArticles = pipe.transform(articles, phrase);

    expect(filteredArticles).toHaveSize(0);
  });

  it('should return one object', () => {
    const pipe = new SearchPipe();
    const phrase = 'AI researchers achieve new milestone';
    const filteredArticles = pipe.transform(articles, phrase);

    expect(filteredArticles).toHaveSize(1);
    expect(filteredArticles.at(0)?.title).toMatch(
      /ai researchers achieve new milestone/i
    );
  });

  it('should return array with length of 6 when phrase is "new"', () => {
    const pipe = new SearchPipe();
    const phrase = 'new';
    const filteredArticles = pipe.transform(articles, phrase);

    expect(filteredArticles).toHaveSize(6);
  });
});
