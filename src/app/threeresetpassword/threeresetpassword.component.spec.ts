import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeresetpasswordComponent } from './threeresetpassword.component';

describe('ThreeresetpasswordComponent', () => {
  let component: ThreeresetpasswordComponent;
  let fixture: ComponentFixture<ThreeresetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeresetpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeresetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
