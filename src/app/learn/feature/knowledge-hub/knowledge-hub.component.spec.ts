import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { questionsAndAnswers } from 'src/app/shared/mock-data/questionsAndAnswers';
import { RecordsService } from '../../../shared/data-access/graph-cms.service';
import { CategoriesComponent } from './knowledge-hub.component';

class MockRecordsService {
  getQuestionsAndAnswers() {
    return of(questionsAndAnswers);
  }
}

describe('LearnComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesComponent],
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

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
