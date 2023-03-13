import { Categories } from './categories.model';

export interface Information {
  id: string;
  question: string;
  answer: string;
  category: Categories;
  linkReadMore: string;
  updatedAt: string;
  publishedAt: string;
  createdAt: string;
}
