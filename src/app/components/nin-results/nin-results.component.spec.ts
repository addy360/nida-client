import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinResultsComponent } from './nin-results.component';

describe('NinResultsComponent', () => {
  let component: NinResultsComponent;
  let fixture: ComponentFixture<NinResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
