import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationLinksComponent } from './feature/navigation-links/navigation-links.component';
import { AccordionComponent } from '../shared/ui/accordion/accordion.component';
import { AngularService } from '../angular-category/data-access/angular-category.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavigationLinksComponent, AccordionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private angularService: AngularService) {}

  async ngOnInit() {
    const response = await this.angularService.getData();
    console.log(response);
  }
}
