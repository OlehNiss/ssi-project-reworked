import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user.component';
import { EditUserRoutingModule } from "./edit-user-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserFormModule } from "../../shared/component/user-form/user-form.module";

@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    EditUserRoutingModule,
    UserFormModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditUserModule { }
