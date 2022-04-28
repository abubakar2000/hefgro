import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomCategoryListViewComponent } from './ecom-category-list-view.component';

describe('EcomCategoryListViewComponent', () => {
  let component: EcomCategoryListViewComponent;
  let fixture: ComponentFixture<EcomCategoryListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomCategoryListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomCategoryListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
