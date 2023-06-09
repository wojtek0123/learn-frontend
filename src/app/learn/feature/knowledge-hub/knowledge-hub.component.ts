import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { RecordsService } from '../../../shared/data-access/graph-cms.service';
import { Record } from '../../../shared/models/record.model';
import { AccordionComponent } from '../../ui/accordion/accordion.component';
import { MenuComponent } from '../../ui/menu/menu.component';
import { NavigationComponent } from '../../../shared/ui/navigation/navigation.component';
import { Categories } from '../../../shared/models/categories.model';
import { FormsModule } from '@angular/forms';
import { GetCategoriesPipe } from 'src/app/shared/pipe/get-categories.pipe';

@Component({
  selector: 'app-knowledge-hub',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AccordionComponent,
    RouterModule,
    MenuComponent,
    NavigationComponent,
    GetCategoriesPipe,
  ],
  templateUrl: './knowledge-hub.component.html',
  styleUrls: ['./knowledge-hub.component.css'],
})
export class KnowledgeHubComponent implements OnInit {
  records$ = new Observable<Record[]>();
  selectedCategory: Categories = 'all';
  filteredData$ = new Observable<Record[]>();
  categories$ = new Observable<Categories[]>();

  constructor(private recordsService: RecordsService) {}

  ngOnInit() {
    this.records$ = this.recordsService.getQuestionsAndAnswers();
    this.filteredData$ = this.records$;
  }

  onSelect() {
    if (this.selectedCategory === 'all') {
      this.filteredData$ = this.records$;
      return;
    }

    this.filteredData$ = this.records$.pipe(
      map(data =>
        data.filter(record => record.category === this.selectedCategory)
      )
    );
  }
}
