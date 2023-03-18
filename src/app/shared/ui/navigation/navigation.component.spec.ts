import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap,
  provideRouter,
  Router,
} from '@angular/router';
import { of } from 'rxjs';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ name: 'angular' })),
          },
        },
        provideRouter([{ path: '**', component: NavigationComponent }]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display logo text', () => {
    const logo = (fixture.nativeElement as HTMLSpanElement).querySelectorAll(
      '.navigation-logo a span'
    );

    expect(logo[0].textContent).toMatch('<');
    expect(logo[1].textContent).toMatch(/learn frontend/i);
    expect(logo[2].textContent).toMatch('/>');
  });

  it('should display inner text of links', () => {
    const links = compiled.querySelectorAll('.navigation-link a');

    expect(links[0].textContent).toMatch(/learn/i);
    expect(links[1].textContent).toMatch(/quiz/i);
    expect(links[2].textContent).toMatch(/articles/i);
  });

  it('should change route to "learn"', async () => {
    const link = fixture.nativeElement.querySelector(
      '.navigation-link:nth-child(1) a'
    );

    await link.click();
    fixture.detectChanges();
    expect(TestBed.inject(Router).url).toEqual('/learn');
  });
});
