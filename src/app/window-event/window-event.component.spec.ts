import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowEventComponent } from './window-event.component';

describe('WindowEventComponent', () => {
  let component: WindowEventComponent;
  let fixture: ComponentFixture<WindowEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
