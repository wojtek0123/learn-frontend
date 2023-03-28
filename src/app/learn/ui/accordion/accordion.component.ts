import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { Record } from 'src/app/shared/models/record.model';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() record: Record | undefined = undefined;
  show = false;

  onShow() {
    this.show = !this.show;
  }
}
