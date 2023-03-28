import { Article } from 'src/app/shared/models/article.model';
import { SearchPipe } from './search.pipe';

const articles: Article[] = [
  {
    id: '123456',
    link: 'https://example.com/article1',
    tags: ['science', 'technology'],
    description: 'A breakthrough in artificial intelligence research',
    createdAt: '2022-01-01',
    publishedAt: '2022-01-15',
    title: 'AI researchers achieve new milestone',
  },
  {
    id: '234567',
    link: 'https://example.com/article2',
    tags: ['health', 'medicine'],
    description: 'A new drug shows promise in treating cancer',
    createdAt: '2022-02-01',
    publishedAt: '2022-02-15',
    title: 'New cancer treatment drug discovered',
  },
  {
    id: '345678',
    link: 'https://example.com/article3',
    tags: ['politics', 'economics'],
    description: 'The government announces new tax policies',
    createdAt: '2022-03-01',
    publishedAt: '2022-03-15',
    title: 'Government announces new tax policies',
  },
  {
    id: '456789',
    link: 'https://example.com/article4',
    tags: ['entertainment', 'music'],
    description: 'A new album from a popular artist is released',
    createdAt: '2022-04-01',
    publishedAt: '2022-04-15',
    title: 'New album from popular artist',
  },
  {
    id: '567890',
    link: 'https://example.com/article5',
    tags: ['sports', 'basketball'],
    description: 'The NBA playoffs begin with some exciting matchups',
    createdAt: '2022-05-01',
    publishedAt: '2022-05-15',
    title: 'NBA playoffs begin with exciting matchups',
  },
  {
    id: '678901',
    link: 'https://example.com/article6',
    tags: ['travel', 'adventure'],
    description: 'Exploring the natural wonders of a remote island',
    createdAt: '2022-06-01',
    publishedAt: '2022-06-15',
    title: 'Adventure on a remote island',
  },
  {
    id: '789012',
    link: 'https://example.com/article7',
    tags: ['education', 'technology'],
    description: 'How technology is changing the way we learn',
    createdAt: '2022-07-01',
    publishedAt: '2022-07-15',
    title: 'Technology and the future of education',
  },
  {
    id: '890123',
    link: 'https://example.com/article8',
    tags: ['business', 'finance'],
    description: 'A new startup receives funding from investors',
    createdAt: '2022-08-01',
    publishedAt: '2022-08-15',
    title: 'New startup secures funding from investors',
  },
  {
    id: '890123',
    link: 'https://example.com/article9',
    tags: ['food', 'recipes'],
    description: 'A delicious new recipe for a popular dish',
    createdAt: '2022-08-01',
    publishedAt: '2022-08-15',
    title: 'New recipe for popular dish',
  },
  {
    id: '901234',
    link: 'https://example.com/article10',
    tags: ['business', 'finance'],
    description: 'A new startup secures funding from venture capitalists',
    createdAt: '2022-09-01',
    publishedAt: '2022-09-15',
    title: 'Startup secures funding from VCs',
  },
];

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
