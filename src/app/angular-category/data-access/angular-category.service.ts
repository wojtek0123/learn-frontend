import { Injectable } from '@angular/core';
import request from 'graphql-request';
import { from } from 'rxjs';
import { Record } from 'src/app/models/record.model';
import { getRecords } from '../../shared/data-access/record.query';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AngularCategoryService {
  getData() {
    return from(
      request<{ records: Record[] }>(
        environment.graphCmsEndpoint,
        getRecords('angular')
      )
    );
  }
}
