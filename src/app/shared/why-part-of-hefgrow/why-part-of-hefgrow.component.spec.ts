import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyPartOfHefgrowComponent } from './why-part-of-hefgrow.component';

describe('WhyPartOfHefgrowComponent', () => {
  let component: WhyPartOfHefgrowComponent;
  let fixture: ComponentFixture<WhyPartOfHefgrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyPartOfHefgrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyPartOfHefgrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
