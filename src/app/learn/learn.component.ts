import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { RecordsService } from '../shared/data-access/records.service';
import { Record } from '../models/record.model';
import { AccordionComponent } from './ui/accordion/accordion.component';
import { MenuComponent } from './ui/menu/menu.component';
import { NavigationComponent } from '../shared/ui/navigation/navigation.component';
import { Categories } from '../models/categories.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AccordionComponent,
    RouterModule,
    MenuComponent,
    NavigationComponent,
  ],
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
})
export class LearnComponent implements OnInit {
  records$ = new Observable<{ records: Record[] }>();
  selectedCategory: Categories = 'all';
  filteredData$ = new Observable<Record[]>();
  categories$ = new Observable<Categories[]>();

  constructor(private recordsService: RecordsService) {}

  ngOnInit(): void {
    this.records$ = this.recordsService.getRecords();

    this.categories$ = this.records$.pipe(
      map(data => data.records.flatMap(record => record.category))
    );

    this.filteredData$ = this.records$.pipe(map(data => data.records));
  }

  onSelect() {
    if (this.selectedCategory === 'all') {
      this.filteredData$ = this.records$.pipe(map(data => data.records));
      return;
    }

    this.filteredData$ = this.records$.pipe(
      map(data =>
        data.records.filter(record => record.category === this.selectedCategory)
      )
    );
  }
}
