import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationLinksComponent } from './feature/navigation-links/navigation-links.component';
import { NavigationComponent } from '../shared/ui/navigation/navigation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavigationLinksComponent, NavigationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
