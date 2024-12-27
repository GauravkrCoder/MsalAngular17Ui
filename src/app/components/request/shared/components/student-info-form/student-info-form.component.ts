import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengUiComponentsModule } from '../../../../../primeng-ui-components.module';

@Component({
  selector: 'app-student-info-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, PrimengUiComponentsModule],
  templateUrl: './student-info-form.component.html',
  styleUrl: './student-info-form.component.scss'
})
export class StudentInfoFormComponent implements OnInit {

  public studentInfoForm: FormGroup;
  FloatLabelModule: any;
  categoryList: any = [
    { catgry_nme: 'SC / ST' },
    { catgry_nme: 'OBC' },
    { catgry_nme: 'General' },
  ];
  selectedCity: any

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initStudentInfoForm()
  }

  initStudentInfoForm() {
    this.studentInfoForm = this._fb.group({
      student_name: [''],
      mother_name: [''],
      father_name: [''],
      date_of_birth: [''],
      nationality: [''],
      category: [''],
      aadhaar_no: ['']
    })
  }

}
