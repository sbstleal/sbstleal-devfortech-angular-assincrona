import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExPipesComponent } from './ex-pipes.component';

describe('ExPipesComponent', () => {
  let component: ExPipesComponent;
  let fixture: ComponentFixture<ExPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
