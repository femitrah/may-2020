import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedorderlistComponent } from './completedorderlist.component';

describe('CompletedorderlistComponent', () => {
  let component: CompletedorderlistComponent;
  let fixture: ComponentFixture<CompletedorderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedorderlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
