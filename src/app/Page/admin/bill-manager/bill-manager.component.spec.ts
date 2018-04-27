import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillManagerComponent } from './bill-manager.component';

describe('BillManagerComponent', () => {
  let component: BillManagerComponent;
  let fixture: ComponentFixture<BillManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
