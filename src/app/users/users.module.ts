import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';



import { UserComponent } from './presentation/views/user/user.component';
import { PageUserComponent } from './presentation/page/page-user/page-user.component';
import { UserlistComponent } from './presentation/views/userlist/userlist.component';
import { UsernolistComponent } from './presentation/views/usernolist/usernolist.component';


@NgModule({
  declarations: [
    PageUserComponent,
    UserComponent,
    UserlistComponent,
    UsernolistComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    PageUserComponent
  ]
})
export class UsersModule { }
