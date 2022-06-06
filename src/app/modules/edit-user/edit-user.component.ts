import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../shared/models/user.interface";
import {UserFormService} from "../../shared/services/user-form.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public formData: FormGroup = this.userFormsService.formTemplate();

  private editId!: number;
  private users: IUser[] = [];
  private userPreviousData!: IUser;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userFormsService: UserFormService
  ) { }

  ngOnInit(): void {
    this.editId = parseInt(this.activatedRoute.snapshot.params['id']);

    const data = localStorage.getItem('userData');
    if (data){
      this.users = JSON.parse(data);
      this.users.forEach((user: IUser, index: number) => {
        if(index === this.editId){
          this.userPreviousData = user;
        }
      });
    }

    this.formData.setValue(this.userPreviousData);
  }

  public editUser (updatedUser: IUser): void {
    this.formData.markAllAsTouched();

    if(this.formData.valid){
      this.users = this.users.map((user: IUser, index: number)  => index === this.editId ? updatedUser : user)
      localStorage.setItem('userData', JSON.stringify(this.users))
      this.router.navigate(['/list']);
    }
  }
}
