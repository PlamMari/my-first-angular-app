import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvwComponent } from './uvw.component';

describe('UvwComponent', () => {
  let component: UvwComponent;
  let fixture: ComponentFixture<UvwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UvwComponent]
    });
    fixture = TestBed.createComponent(UvwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
