import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { InitRoutingModule } from './init-routing.module';
import { InitComponent } from './init.component';
import { NbSidebarModule, NbCardModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [InitComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  imports: [
    HttpClientModule,
    CommonModule,
    InitRoutingModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
  ]
})
export class InitModule { }
