import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute } from '@angular/router';
// import {} from '@angular/common/testing'
import { ActivatedRoute, convertToParamMap } from '@angular/router';
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
            paramMap: of(convertToParamMap({ name: 'angular' })),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
