import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { routingLoginArr } from './login.routing';
import { SharedModule} from '../../Shared/shared/shared.module'

@NgModule({
declarations: [
    LoginComponent
],
imports: [
  CommonModule,
  routingLoginArr,
  SharedModule
]
})
export class loginModule {}