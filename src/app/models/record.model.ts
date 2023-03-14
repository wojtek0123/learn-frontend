import { Categories } from './categories.model';

export interface Record {
  id: string;
  question: string;
  answer: string;
  category: Categories;
  linkReadMore: string;
  updatedAt: string;
  publishedAt: string;
  createdAt: string;
}
