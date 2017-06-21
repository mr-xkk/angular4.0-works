import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodedetailComponent } from './codedetail.component';

describe('CodedetailComponent', () => {
  let component: CodedetailComponent;
  let fixture: ComponentFixture<CodedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
