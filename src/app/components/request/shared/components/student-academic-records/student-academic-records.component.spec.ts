import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAcademicRecordsComponent } from './student-academic-records.component';

describe('StudentAcademicRecordsComponent', () => {
  let component: StudentAcademicRecordsComponent;
  let fixture: ComponentFixture<StudentAcademicRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAcademicRecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentAcademicRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
