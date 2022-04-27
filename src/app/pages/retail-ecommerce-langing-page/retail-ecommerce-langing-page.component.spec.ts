import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailEcommerceLangingPageComponent } from './retail-ecommerce-langing-page.component';

describe('RetailEcommerceLangingPageComponent', () => {
  let component: RetailEcommerceLangingPageComponent;
  let fixture: ComponentFixture<RetailEcommerceLangingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailEcommerceLangingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailEcommerceLangingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
