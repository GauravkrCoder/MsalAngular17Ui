import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPresentAddressComponent } from './student-present-address.component';

describe('StudentPresentAddressComponent', () => {
  let component: StudentPresentAddressComponent;
  let fixture: ComponentFixture<StudentPresentAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPresentAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPresentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
