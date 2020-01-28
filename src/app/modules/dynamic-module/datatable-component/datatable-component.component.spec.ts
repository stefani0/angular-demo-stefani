import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableComponentComponent } from './datatable-component.component';

describe('DatatableComponentComponent', () => {
  let component: DatatableComponentComponent;
  let fixture: ComponentFixture<DatatableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
