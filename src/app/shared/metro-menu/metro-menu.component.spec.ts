import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroMenuComponent } from './metro-menu.component';

describe('MetroMenuComponent', () => {
  let component: MetroMenuComponent;
  let fixture: ComponentFixture<MetroMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetroMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
