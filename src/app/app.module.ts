import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { PagePrincipalComponent } from './principa/presentation/page/page-principal/page-principal.component';
import { PrincipaModule } from './principa/principa.module';

import { PageProductComponent } from './products/presentation/page/page-product/page-product.component';
import { ProductsModule } from './products/products.module';
import { PageUserComponent } from './users/presentation/page/page-user/page-user.component';
import { UsersModule } from './users/users.module';

const routes : Routes=[
  {path:'',component:PageLoginComponent},
  {path:'products',component:PageProductComponent},
  {path:'principal',component:PagePrincipalComponent},
  {path:'users', 
  component:PageUserComponent,
  loadChildren: ()=>import('./users/users.module').then((m)=>m.UsersModule)},
  {path:'**', redirectTo:''}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProductsModule,
    UsersModule,
    PrincipaModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
