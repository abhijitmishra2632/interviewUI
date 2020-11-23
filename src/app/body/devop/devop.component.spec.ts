import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopComponent } from './devop.component';

describe('DevopComponent', () => {
  let component: DevopComponent;
  let fixture: ComponentFixture<DevopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
