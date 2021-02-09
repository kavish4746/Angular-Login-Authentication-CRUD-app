import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/Components/page-not-found/page-not-found.component';
import { AuthGuard } from './core/services/auth/auth.guard';

const routes: Routes = [
  
  {path:'', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.loginModule) 
  },
  { path:'home',
    loadChildren: () => import('./modules/user/users.module').then(m => m.UserModule) ,
    canActivate:[AuthGuard]
  },
  {path: 'addupdateuser', 
    loadChildren: () => import('./modules/userAddUpdate/add-update-user-page.module').then(m => m.AddUpdateModule) ,
    canActivate:[AuthGuard]
  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
