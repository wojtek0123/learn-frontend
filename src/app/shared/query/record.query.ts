import { gql } from 'graphql-request';
import { Categories } from 'src/app/models/categories.model';

export const getRecords = (category: Categories) => {
  return gql`
    query Records {
      records(where: { category: ${category} }) {
        answer
        createdAt
        id
        linkReadMore
        publishedAt
        question
        updatedAt
        createdAt
        answerMd {
          id
          url
        }
      }
    }
  `;
};
