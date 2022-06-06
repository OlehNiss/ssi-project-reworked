import { Component, OnInit } from '@angular/core';
import {IUser} from "../../shared/models/user.interface";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserFormService} from "../../shared/services/user-form.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public formData: FormGroup = this.userFormsService.formTemplate();

  constructor(private router: Router, private userFormsService: UserFormService) {}

  ngOnInit(): void {}

  public addNewUser (newUser: IUser): void  {
    this.formData.markAllAsTouched();

    if (this.formData.valid) {
      const localData = localStorage.getItem('userData');

      const users = localData ? JSON.parse(localData) : [];
      users.push(newUser);

      localStorage.setItem('userData', JSON.stringify(users));

      this.router.navigate(['/list']);
    }
  }
}
