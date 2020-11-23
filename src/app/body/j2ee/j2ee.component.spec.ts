import { ComponentFixture, TestBed } from '@angular/core/testing';

import { J2eeComponent } from './j2ee.component';

describe('J2eeComponent', () => {
  let component: J2eeComponent;
  let fixture: ComponentFixture<J2eeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ J2eeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(J2eeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
