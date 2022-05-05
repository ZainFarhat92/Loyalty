import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRewardsComponent } from './one-rewards.component';

describe('OneRewardsComponent', () => {
  let component: OneRewardsComponent;
  let fixture: ComponentFixture<OneRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneRewardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
