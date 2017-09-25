import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaveComponent } from './gave.component';

describe('GaveComponent', () => {
  let component: GaveComponent;
  let fixture: ComponentFixture<GaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
