import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentContactFormComponent } from './student-contact-form.component';

describe('StudentContactFormComponent', () => {
  let component: StudentContactFormComponent;
  let fixture: ComponentFixture<StudentContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentContactFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
