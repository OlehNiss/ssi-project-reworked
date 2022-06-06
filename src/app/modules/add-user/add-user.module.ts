import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user.component';
import { AddUserRoutingModule } from "./add-user-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserFormModule } from "../../shared/component/user-form/user-form.module";

@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AddUserRoutingModule,
    UserFormModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddUserModule { }
