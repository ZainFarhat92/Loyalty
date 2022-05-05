import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TworesetpasswordComponent } from './tworesetpassword.component';

describe('TworesetpasswordComponent', () => {
  let component: TworesetpasswordComponent;
  let fixture: ComponentFixture<TworesetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TworesetpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TworesetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
