import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoffreComponent } from './appoffre.component';

describe('AppoffreComponent', () => {
  let component: AppoffreComponent;
  let fixture: ComponentFixture<AppoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
