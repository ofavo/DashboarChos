import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { NbCardModule, NbSidebarModule, NbInputModule, NbButtonModule, NbActionsModule, NbCheckboxModule, NbUserModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbSpinnerModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [LoginComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  imports: [
    ParticlesModule,
    HttpClientModule,
    CommonModule,
    LoginRoutingModule,
    NbCardModule,
    NbSidebarModule.forRoot(), 
    NbSpinnerModule,
    NbInputModule,
 
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
  
    NbSelectModule,
    NbIconModule,
  ]
})
export class LoginModule { }
