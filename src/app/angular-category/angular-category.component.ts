import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularCategoryService } from './data-access/angular-category.service';
import { Record } from '../models/record.model';
import { AccordionComponent } from '../shared/ui/accordion/accordion.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learn-angular',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './angular-category.component.html',
  styleUrls: ['./angular-category.component.css'],
})
export class AngularCategoryComponent implements OnInit {
  data!: Observable<{ records: Record[] }>;

  constructor(private angularCategoryService: AngularCategoryService) {}

  ngOnInit(): void {
    this.data = this.angularCategoryService.getData();

    this.data.subscribe(data => console.log(data));
  }
}
