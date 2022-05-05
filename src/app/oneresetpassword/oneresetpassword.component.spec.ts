import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneresetpasswordComponent } from './oneresetpassword.component';

describe('OneresetpasswordComponent', () => {
  let component: OneresetpasswordComponent;
  let fixture: ComponentFixture<OneresetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneresetpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneresetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
