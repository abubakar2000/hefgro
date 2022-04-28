import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommSearchPageComponent } from './ecomm-search-page.component';

describe('EcommSearchPageComponent', () => {
  let component: EcommSearchPageComponent;
  let fixture: ComponentFixture<EcommSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommSearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
