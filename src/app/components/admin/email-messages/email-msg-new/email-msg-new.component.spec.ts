import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMsgNewComponent } from './email-msg-new.component';

describe('EmailMsgNewComponent', () => {
  let component: EmailMsgNewComponent;
  let fixture: ComponentFixture<EmailMsgNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailMsgNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailMsgNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
