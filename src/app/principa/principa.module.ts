import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipaRoutingModule } from './principa-routing.module';
import { PagePrincipalComponent } from './presentation/page/page-principal/page-principal.component';
import { PrincipalComponent } from './presentation/views/principal/principal.component';


@NgModule({
  declarations: [
    PagePrincipalComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    PrincipaRoutingModule
  ],
  exports:[PagePrincipalComponent]
})
export class PrincipaModule { }
