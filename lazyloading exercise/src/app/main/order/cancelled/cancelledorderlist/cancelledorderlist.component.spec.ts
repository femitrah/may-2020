import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledorderlistComponent } from './cancelledorderlist.component';

describe('CancelledorderlistComponent', () => {
  let component: CancelledorderlistComponent;
  let fixture: ComponentFixture<CancelledorderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelledorderlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelledorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
