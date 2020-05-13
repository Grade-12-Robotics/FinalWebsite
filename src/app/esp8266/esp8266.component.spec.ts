import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Esp8266Component } from './esp8266.component';

describe('Esp8266Component', () => {
  let component: Esp8266Component;
  let fixture: ComponentFixture<Esp8266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Esp8266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Esp8266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
