import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExContadorComponent } from './ex-contador.component';

describe('ExContadorComponent', () => {
  let component: ExContadorComponent;
  let fixture: ComponentFixture<ExContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExContadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
