import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDistNewComponent } from './email-dist-new.component';

describe('EmailDistNewComponent', () => {
  let component: EmailDistNewComponent;
  let fixture: ComponentFixture<EmailDistNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailDistNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailDistNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
