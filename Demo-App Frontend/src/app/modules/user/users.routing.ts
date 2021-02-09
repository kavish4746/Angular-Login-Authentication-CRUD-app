import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/services/auth/auth.guard';
import { UsersComponent } from './users/users.component';

const arr: Routes = [
  { path: '', component: UsersComponent }
];

export const routingUserArr = RouterModule.forChild(arr);