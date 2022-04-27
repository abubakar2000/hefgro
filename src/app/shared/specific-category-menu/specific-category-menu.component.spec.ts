import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCategoryMenuComponent } from './specific-category-menu.component';

describe('SpecificCategoryMenuComponent', () => {
  let component: SpecificCategoryMenuComponent;
  let fixture: ComponentFixture<SpecificCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificCategoryMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
