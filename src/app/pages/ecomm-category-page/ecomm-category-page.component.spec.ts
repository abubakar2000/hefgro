import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommCategoryPageComponent } from './ecomm-category-page.component';

describe('EcommCategoryPageComponent', () => {
  let component: EcommCategoryPageComponent;
  let fixture: ComponentFixture<EcommCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
