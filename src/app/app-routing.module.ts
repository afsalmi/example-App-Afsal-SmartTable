import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './structure/services/logged-in.guard';

const routes: Routes = [
  {
    path: 'protected', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent,
    data: { title: 'HOME' }
  },
  {
    path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    data: { title: 'Login' }
  },
  {
    path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    data: { title: 'Dashboard' }, canActivate: [LoggedInGuard]
  },
  {
    path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.EWalletModule),
    data: { title: 'User' }, canActivate: [LoggedInGuard]
  },
  {
    path: '**', component: HomeComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
