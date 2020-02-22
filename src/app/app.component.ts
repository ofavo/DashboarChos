import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboar';
  constructor(private router: Router){
      let user = localStorage.getItem('user');
      if(!user){
        this.router.navigateByUrl('init/login')
      }
  }
}
