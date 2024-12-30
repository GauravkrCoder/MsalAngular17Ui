import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentInfoFormComponent } from '../shared/components/student-info-form/student-info-form.component';
import { StudentPresentAddressComponent } from '../shared/components/student-present-address/student-present-address.component';
import { StudentPermanentAddressComponent } from '../shared/components/student-permanent-address/student-permanent-address.component';
import { StudentContactFormComponent } from '../shared/components/student-contact-form/student-contact-form.component';
import { StudentAcademicRecordsComponent } from '../shared/components/student-academic-records/student-academic-records.component';
import { StudentDecalarationFormComponent } from '../shared/components/student-decalaration-form/student-decalaration-form.component';

@Component({
  selector: 'app-add-request',
  standalone: true,
  imports: [
    CommonModule,
    StudentInfoFormComponent,
    StudentPresentAddressComponent,
    StudentPermanentAddressComponent,
    StudentContactFormComponent,
    StudentAcademicRecordsComponent,
    StudentDecalarationFormComponent
  ],
  templateUrl: './add-request.component.html',
  styleUrl: './add-request.component.scss'
})
export class AddRequestComponent {

}
