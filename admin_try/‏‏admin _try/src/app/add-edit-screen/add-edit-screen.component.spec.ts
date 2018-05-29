import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditScreenComponent } from './add-edit-screen.component';

describe('AddEditScreenComponent', () => {
  let component: AddEditScreenComponent;
  let fixture: ComponentFixture<AddEditScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
