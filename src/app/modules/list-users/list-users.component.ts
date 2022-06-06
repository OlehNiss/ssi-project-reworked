import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { IUser } from "../../shared/models/user.interface";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  public dataSource!: MatTableDataSource<IUser>;
  public readonly displayedColumns: string[] = ['position','firstName', 'lastName', 'email', 'phone', 'edit', 'delete'];

  private users: IUser[] = []

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('userData');
    this.users = data ? JSON.parse(data) : [];

    this.dataSource = new MatTableDataSource(this.users);
  }

  public editUser (id: number): void {
    this.router.navigate(['/edit/', id]);
  }

  public deleteUser (id: number): void {
    const data = localStorage.getItem('userData');

    if (data){
      this.dataSource.data = JSON.parse(data)
    }

    this.dataSource.data = this.dataSource.data.filter((user, index) => {
      return index != id
    });
    localStorage.setItem('userData', JSON.stringify(this.dataSource.data));
  }
}
