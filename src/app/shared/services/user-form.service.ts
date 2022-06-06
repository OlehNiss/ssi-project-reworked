import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "../helpers/customValidators";

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  constructor(private fb: FormBuilder) {}

  public formTemplate() : FormGroup {
    return this.fb.group({
      firstName: new FormControl('',
        [
          Validators.required,
          Validators.minLength(2)
        ]),
      lastName: new FormControl('',
        [
          Validators.required,
          Validators.minLength(2)
        ]),
      email: new FormControl('',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(CustomValidators.EMAIL)
        ]),
      phone: new FormControl('',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.pattern(CustomValidators.PHONE)
        ])
    })

  }
}
