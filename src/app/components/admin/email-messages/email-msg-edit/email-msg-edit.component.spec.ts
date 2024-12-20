import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMsgEditComponent } from './email-msg-edit.component';

describe('EmailMsgEditComponent', () => {
  let component: EmailMsgEditComponent;
  let fixture: ComponentFixture<EmailMsgEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailMsgEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailMsgEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
