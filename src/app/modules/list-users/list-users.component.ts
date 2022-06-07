import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { IUser } from "../../shared/models/user.interface";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit, AfterViewInit {
  public dataSource!: MatTableDataSource<IUser>;
  public displayedColumns: string[] = ['id','firstName', 'lastName', 'email', 'phone', 'edit', 'delete'];

  private users!: IUser[]

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data: IUser[] = JSON.parse(localStorage.getItem('userData')!);
    this.users = data ? data : [];

    this.dataSource = new MatTableDataSource<IUser>(this.users);
  }

  ngAfterViewInit (): void {
    this.dataSource.paginator = this.paginator;
  }

  public editUser (id: number): void {
    this.router.navigate(['/edit/', id]);
  }

  public deleteUser (index: number): void {
    const userData =  JSON.parse(localStorage.getItem('userData')!);

    userData.splice(index, 1);

    this.dataSource.data = userData;
    localStorage.setItem('userData', JSON.stringify(userData));
  }
}
