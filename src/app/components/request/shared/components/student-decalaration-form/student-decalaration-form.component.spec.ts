import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDecalarationFormComponent } from './student-decalaration-form.component';

describe('StudentDecalarationFormComponent', () => {
  let component: StudentDecalarationFormComponent;
  let fixture: ComponentFixture<StudentDecalarationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDecalarationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentDecalarationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
