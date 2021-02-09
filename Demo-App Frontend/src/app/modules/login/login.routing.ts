import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const arr: Routes = [
  { path: '', component: LoginComponent }
];

export const routingLoginArr = RouterModule.forChild(arr);