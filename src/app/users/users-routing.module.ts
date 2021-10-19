import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUserComponent } from './presentation/page/page-user/page-user.component';
import { UserComponent } from './presentation/views/user/user.component';
import { UserlistComponent } from './presentation/views/userlist/userlist.component';
import { UsernolistComponent } from './presentation/views/usernolist/usernolist.component';

const routes: Routes = [
  {path:'users/list', component:UserlistComponent},
  {path:'users/listn', component:UsernolistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
