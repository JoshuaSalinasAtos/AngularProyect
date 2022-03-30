import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFunkoCreateComponent } from './admin-funko-create.component';

describe('AdminFunkoCreateComponent', () => {
  let component: AdminFunkoCreateComponent;
  let fixture: ComponentFixture<AdminFunkoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFunkoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFunkoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
