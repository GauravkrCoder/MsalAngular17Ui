import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPermanentAddressComponent } from './student-permanent-address.component';

describe('StudentPermanentAddressComponent', () => {
  let component: StudentPermanentAddressComponent;
  let fixture: ComponentFixture<StudentPermanentAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPermanentAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPermanentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
