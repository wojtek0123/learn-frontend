import { gql } from 'graphql-request';

export const getArticles = () => {
  return gql`
    query Articles {
      articles(first: 10000) {
        title
        id
        description
        createdAt
        link
        publishedAt
        tags
      }
    }
  `;
};
