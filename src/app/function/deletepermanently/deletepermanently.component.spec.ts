import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepermanentlyComponent } from './deletepermanently.component';

describe('DeletepermanentlyComponent', () => {
  let component: DeletepermanentlyComponent;
  let fixture: ComponentFixture<DeletepermanentlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletepermanentlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepermanentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
