import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuteMessageComponent } from './cute-message.component';

describe('CuteMessageComponent', () => {
  let component: CuteMessageComponent;
  let fixture: ComponentFixture<CuteMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuteMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuteMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
