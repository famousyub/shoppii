import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurruserComponent } from './curruser.component';

describe('CurruserComponent', () => {
  let component: CurruserComponent;
  let fixture: ComponentFixture<CurruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
