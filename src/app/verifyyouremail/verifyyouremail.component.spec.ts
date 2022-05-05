import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyyouremailComponent } from './verifyyouremail.component';

describe('VerifyyouremailComponent', () => {
  let component: VerifyyouremailComponent;
  let fixture: ComponentFixture<VerifyyouremailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyyouremailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyyouremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
