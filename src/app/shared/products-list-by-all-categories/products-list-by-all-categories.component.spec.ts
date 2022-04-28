import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListByAllCategoriesComponent } from './products-list-by-all-categories.component';

describe('ProductsListByAllCategoriesComponent', () => {
  let component: ProductsListByAllCategoriesComponent;
  let fixture: ComponentFixture<ProductsListByAllCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListByAllCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListByAllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
