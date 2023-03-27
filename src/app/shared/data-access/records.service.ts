import { Injectable } from '@angular/core';
import request from 'graphql-request';
import { from } from 'rxjs';
import { Record } from 'src/app/models/record.model';
import { getRecords } from '../query/records.query';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  getRecords() {
    return from(
      request<{ records: Record[] }>(environment.graphCmsEndpoint, getRecords())
    );
  }
}
