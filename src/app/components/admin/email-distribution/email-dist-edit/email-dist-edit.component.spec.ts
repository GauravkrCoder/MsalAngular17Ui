import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDistEditComponent } from './email-dist-edit.component';

describe('EmailDistEditComponent', () => {
  let component: EmailDistEditComponent;
  let fixture: ComponentFixture<EmailDistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailDistEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailDistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
