import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageqComponent } from './messageq.component';

describe('MessageqComponent', () => {
  let component: MessageqComponent;
  let fixture: ComponentFixture<MessageqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
