import { Injectable } from '@angular/core';
import request from 'graphql-request';
import { from } from 'rxjs';
import { Record } from 'src/app/models/record.model';
import { getRecords } from '../query/record.query';
import { environment } from '../../../environments/environment.development';
import { Categories } from 'src/app/models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  getData(category: Categories) {
    return from(
      request<{ records: Record[] }>(
        environment.graphCmsEndpoint,
        getRecords(category)
      )
    );
  }
}
