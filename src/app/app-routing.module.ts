import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/guards/auth.guard";
import {ListGuard} from "./shared/guards/list.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    canActivate: [ListGuard]
  },
  {
    path: 'list',
    loadChildren: () => import('./modules/list-users/list-users.module').then(m => m.ListUsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add',
    loadChildren: () => import('./modules/add-user/add-user.module').then(m => m.AddUserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./modules/edit-user/edit-user.module').then(m => m.EditUserModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
