import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServidorComponent } from './edit-servidor.component';

describe('EditServidorComponent', () => {
  let component: EditServidorComponent;
  let fixture: ComponentFixture<EditServidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditServidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
