import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
