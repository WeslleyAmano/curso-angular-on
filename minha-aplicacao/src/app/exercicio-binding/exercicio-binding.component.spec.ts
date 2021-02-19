import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioBindingComponent } from './exercicio-binding.component';

describe('ExercicioBindingComponent', () => {
  let component: ExercicioBindingComponent;
  let fixture: ComponentFixture<ExercicioBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
