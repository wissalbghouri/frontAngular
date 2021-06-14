import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisedialogComponent } from './entreprisedialog.component';

describe('EntreprisedialogComponent', () => {
  let component: EntreprisedialogComponent;
  let fixture: ComponentFixture<EntreprisedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreprisedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprisedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
