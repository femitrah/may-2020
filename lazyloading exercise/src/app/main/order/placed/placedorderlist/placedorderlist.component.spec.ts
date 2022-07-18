import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedorderlistComponent } from './placedorderlist.component';

describe('PlacedorderlistComponent', () => {
  let component: PlacedorderlistComponent;
  let fixture: ComponentFixture<PlacedorderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacedorderlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacedorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
