import { gql } from 'graphql-request';

export const getQuestionsAndAnswers = () => {
  return gql`
    query Records {
      records(first: 1000) {
        answer
        createdAt
        id
        category
        linkReadMore
        publishedAt
        question
        createdAt
        updatedAt
        answerMd {
          id
          url
        }
      }
    }
  `;
};
