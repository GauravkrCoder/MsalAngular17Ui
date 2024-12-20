import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMsgFormComponent } from './email-msg-form.component';

describe('EmailMsgFormComponent', () => {
  let component: EmailMsgFormComponent;
  let fixture: ComponentFixture<EmailMsgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailMsgFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailMsgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
