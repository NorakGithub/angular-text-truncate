import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTextTruncateComponent } from './angular-text-truncate.component';

describe('AngularTextTruncateComponent', () => {
  let component: AngularTextTruncateComponent;
  let fixture: ComponentFixture<AngularTextTruncateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTextTruncateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTextTruncateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
