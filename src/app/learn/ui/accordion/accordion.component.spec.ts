import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    component.record = {
      id: '1',
      question: 'What is Angular Framework?',
      answer:
        'Angular is a TypeScript-based open-source front-end platform that makes it easy to build web, mobile and desktop applications. The major features of this framework include declarative templates, dependency injection, end to end tooling which ease application development.',
      answerMd: undefined,
      category: 'angular',
      createdAt: '',
      linkReadMore: '',
      publishedAt: '',
      updatedAt: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change show value after a function call', () => {
    expect(component.show).withContext('off at first').toBeFalse();
    component.onShow();
    expect(component.show).withContext('after click').toBeTrue();
    component.onShow();
    expect(component.show).withContext('after another click').toBeFalse();
  });

  it('should display a question "What is Angular Framework?"', () => {
    const question = (fixture.nativeElement as HTMLElement).querySelector('h2');
    expect(question?.textContent).toMatch(/what is angular framework/i);
  });

  it('should change a button text content', () => {
    const button = fixture.nativeElement.querySelector('.accordion-expand-btn');
    expect(button?.textContent).toMatch(/show answer/i);
    component.onShow();
    fixture.detectChanges();
    expect(button?.textContent).toMatch(/hide answer/i);
    component.onShow();
    fixture.detectChanges();
    expect(button?.textContent).toMatch(/show answer/i);
  });

  it('should have not class "show" before click and have after', () => {
    const accordionBody =
      fixture.nativeElement.querySelector('.accordion-body');
    expect(accordionBody).not.toHaveClass('show');
    component.onShow();
    fixture.detectChanges();
    expect(accordionBody).toHaveClass('show');
  });

  it('should display answer', () => {
    const answer = (fixture.nativeElement as HTMLDivElement).querySelector(
      '.accordion-text'
    );

    component.onShow();
    fixture.detectChanges();

    expect(answer?.textContent).toMatch(
      /Angular is a TypeScript-based open-source front-end platform that makes it easy to build web, mobile and desktop applications. The major features of this framework include declarative templates, dependency injection, end to end tooling which ease application development./i
    );
  });
});
