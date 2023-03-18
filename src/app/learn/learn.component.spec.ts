import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { RecordsService } from '../shared/data-access/records.service';
import { LearnComponent } from './learn.component';

class MockRecordsService {
  getData() {
    return of({
      records: [
        {
          id: '1',
          question: 'What is Angular Framework?',
          answer:
            'Angular is a TypeScript-based open-source front-end platform that makes it easy to build web, mobile and desktop applications. The major features of this framework include declarative templates, dependency injection, end to end tooling which ease application development.',
          answerMd: {
            id: '2',
            url: '',
          },
          category: 'angular',
          createdAt: '',
          linkReadMore: '',
          publishedAt: '',
          updatedAt: '',
        },
      ],
    });
  }
}

describe('LearnComponent', () => {
  let component: LearnComponent;
  let fixture: ComponentFixture<LearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ category: 'angular' })),
          },
        },
        {
          provide: RecordsService,
          useClass: MockRecordsService,
        },
      ],
    }).compileComponents();

    // recordsService = TestBed.inject(RecordsService);

    fixture = TestBed.createComponent(LearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
