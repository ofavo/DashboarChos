import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './modules/init/init.component';
import { LoginComponent } from './modules/login/login.component';



const routes: Routes = [
  { path: 'init', component: InitComponent,
    children: [
      {path: 'profile',
      loadChildren: './modules/profile/profile.module#ProfileModule'},
      {path: 'demo',
      loadChildren: './modules/demo/demo.module#DemoModule'},
    ]
  /**   
    {path: 'home/:id',
    loadChildren: './modules/page-one/page-one.module#PageOneModule'},
  */ 
},
{path: 'init/login', component: LoginComponent},
//{path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
