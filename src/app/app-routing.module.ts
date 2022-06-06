import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./modules/list-users/list-users.module').then(m => m.ListUsersModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./modules/add-user/add-user.module').then(m => m.AddUserModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./modules/edit-user/edit-user.module').then(m => m.EditUserModule)
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
