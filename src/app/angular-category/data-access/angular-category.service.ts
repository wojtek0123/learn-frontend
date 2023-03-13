import { Injectable } from '@angular/core';
import request, { gql } from 'graphql-request';
import { environment } from 'src/environments/environments';

const getData = gql`
  query Informations {
    informations(where: { category: angular }) {
      answer
      createdAt
      id
      linkReadMore
      publishedAt
      question
      updatedAt
      createdAt
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class AngularService {
  getData() {
    return request(environment.graphCmsEndpoint, getData);
  }
}
