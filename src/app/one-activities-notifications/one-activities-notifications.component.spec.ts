import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneActivitiesNotificationsComponent } from './one-activities-notifications.component';

describe('OneActivitiesNotificationsComponent', () => {
  let component: OneActivitiesNotificationsComponent;
  let fixture: ComponentFixture<OneActivitiesNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneActivitiesNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneActivitiesNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
