import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinInputComponent } from './nin-input.component';

describe('NinInputComponent', () => {
  let component: NinInputComponent;
  let fixture: ComponentFixture<NinInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
