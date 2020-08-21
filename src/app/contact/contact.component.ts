import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.userData();
  }

  ngOnInit(): void {
  }

  userData() {
    this.editForm = this.fb.group({
      name: [ '', this.required],
      subject: [ '',  this.required] ,
      email: [ '', this.required],
      message: [ '', this.required],
    });
  }

  onSubmit() {
    if (!this.editForm.valid) {
      this.showFormErrors(this.editForm.controls);
      return;
    }
    console.log('hay')
    this.editForm.reset();
  }

  showFormErrors = (controls: { [key: string]: AbstractControl }) => {
    Object.values(controls).forEach(control => {
      control.markAsTouched({ onlySelf: true });
    });
  };

  required(ac: AbstractControl) {
    return /\S/.test(ac.value) ? null : { 'required': true };
  }

}
