import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap,
  provideRouter,
  Router,
} from '@angular/router';
import { of } from 'rxjs';

import { NavigationLinksComponent } from './navigation-links.component';

describe('NavigationLinksComponent', () => {
  let component: NavigationLinksComponent;
  let fixture: ComponentFixture<NavigationLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationLinksComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ category: 'angular' })),
          },
        },
        provideRouter([{ path: '**', component: NavigationLinksComponent }]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change route', async () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    const paths = [
      '/category/html',
      '/category/css',
      '/category/javascript',
      '/category/typescript',
      '/category/angular',
      '/category/rxjs',
    ];

    for (let i = 0; i < links.length; i++) {
      await links[i].click();

      fixture.detectChanges();
      expect(TestBed.inject(Router).url).toEqual(paths[i]);
    }
  });
});
