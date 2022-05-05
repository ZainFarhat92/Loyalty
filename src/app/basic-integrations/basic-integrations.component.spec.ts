import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicIntegrationsComponent } from './basic-integrations.component';

describe('BasicIntegrationsComponent', () => {
  let component: BasicIntegrationsComponent;
  let fixture: ComponentFixture<BasicIntegrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicIntegrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
