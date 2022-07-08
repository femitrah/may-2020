import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlohTwoComponent } from './bloh-two.component';

describe('BlohTwoComponent', () => {
  let component: BlohTwoComponent;
  let fixture: ComponentFixture<BlohTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlohTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlohTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
