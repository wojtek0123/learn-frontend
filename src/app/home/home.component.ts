import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationLinksComponent } from './feature/navigation-links/navigation-links.component';
import { AccordionComponent } from '../shared/ui/accordion/accordion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavigationLinksComponent, AccordionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
