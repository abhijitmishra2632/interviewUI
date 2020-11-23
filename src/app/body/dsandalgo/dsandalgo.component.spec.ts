import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsandalgoComponent } from './dsandalgo.component';

describe('DsandalgoComponent', () => {
  let component: DsandalgoComponent;
  let fixture: ComponentFixture<DsandalgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsandalgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsandalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
