import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { RecordsService } from '../shared/data-access/records.service';
import { Record } from '../models/record.model';
import { AccordionComponent } from './ui/accordion/accordion.component';
import { MenuComponent } from './ui/menu/menu.component';
import { NavigationComponent } from '../shared/ui/navigation/navigation.component';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [
    CommonModule,
    AccordionComponent,
    RouterModule,
    MenuComponent,
    NavigationComponent,
  ],
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
})
export class LearnComponent implements OnInit {
  data!: Observable<{ records: Record[] }>;

  constructor(
    private route: ActivatedRoute,
    private recordsService: RecordsService
  ) {}

  ngOnInit(): void {
    this.data = this.route.params.pipe(
      map(params => params['category']),
      switchMap(category => this.recordsService.getData(category))
    );
  }
}
