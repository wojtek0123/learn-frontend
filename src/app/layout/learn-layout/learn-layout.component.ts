import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-learn-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './learn-layout.component.html',
  styleUrls: ['./learn-layout.component.css'],
})
export class LearnLayoutComponent {}
