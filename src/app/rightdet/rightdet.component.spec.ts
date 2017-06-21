import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightdetComponent } from './rightdet.component';

describe('RightdetComponent', () => {
  let component: RightdetComponent;
  let fixture: ComponentFixture<RightdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
