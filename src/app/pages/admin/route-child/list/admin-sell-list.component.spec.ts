import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellListComponent } from './admin-sell-list.component';

describe('AdminSellListComponent', () => {
  let component: AdminSellListComponent;
  let fixture: ComponentFixture<AdminSellListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSellListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
