import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-links',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.css'],
})
export class NavigationLinksComponent {}
