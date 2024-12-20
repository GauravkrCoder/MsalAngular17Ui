import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDistFormComponent } from './email-dist-form.component';

describe('EmailDistFormComponent', () => {
  let component: EmailDistFormComponent;
  let fixture: ComponentFixture<EmailDistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailDistFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailDistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
