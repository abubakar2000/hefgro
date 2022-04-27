import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDailyDealsComponent } from './top-daily-deals.component';

describe('TopDailyDealsComponent', () => {
  let component: TopDailyDealsComponent;
  let fixture: ComponentFixture<TopDailyDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDailyDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDailyDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
