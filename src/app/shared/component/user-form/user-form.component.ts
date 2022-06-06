import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserFormService} from "../../services/user-form.service";
import {IUser} from "../../models/user.interface";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() formData!: FormGroup;
  @Input() editMode!: boolean;

  @Output() submitEvent = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm (): void {
    this.submitEvent.emit(this.formData.value);
  }
}
