import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Click to scroll into the view"', () => {
    const header = (fixture.nativeElement as HTMLElement).querySelector(
      'h3'
    )?.textContent;

    expect(header).toMatch(/click to scroll into the view/i);
  });

  it('should display "No question to display!"', () => {
    const text = (fixture.nativeElement as HTMLElement).querySelector(
      '.no-data-message'
    )?.textContent;
    expect(text).toMatch(/no question to display!/i);
  });

  it('should display "What is a HTML?"', () => {
    component.records = [
      {
        question: 'What is a HTML?',
        category: 'html',
        createdAt: '',
        id: '1',
        publishedAt: '',
        updatedAt: '',
        answer: '',
        answerMd: {
          id: '2',
          url: '',
        },
        linkReadMore: '',
      },
    ];

    fixture.detectChanges();

    const question = (fixture.nativeElement as HTMLElement).querySelector(
      'li button'
    )?.textContent;

    expect(question).toMatch(/what is a html?/i);
  });
});
