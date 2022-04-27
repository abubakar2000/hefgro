import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassMenuComponent } from './glass-menu.component';

describe('GlassMenuComponent', () => {
  let component: GlassMenuComponent;
  let fixture: ComponentFixture<GlassMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
