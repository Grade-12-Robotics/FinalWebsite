import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutespComponent } from './aboutesp.component';

describe('AboutespComponent', () => {
  let component: AboutespComponent;
  let fixture: ComponentFixture<AboutespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
