import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBannerComponent } from './flex-banner.component';

describe('FlexBannerComponent', () => {
  let component: FlexBannerComponent;
  let fixture: ComponentFixture<FlexBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
