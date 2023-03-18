import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Record } from 'src/app/models/record.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() records: Record[] = [];

  scrollIntoView(id: string) {
    document.getElementById(id)?.scrollIntoView();
  }
}
