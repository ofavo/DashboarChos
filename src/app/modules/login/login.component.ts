import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LoginServiceService } from './login-service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  firstFormGroup: FormGroup;
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  loading = false;
  public url = environment.api + 'api/access/login';
  constructor( public _formBuilder: FormBuilder,private router: Router, public http: LoginServiceService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
     
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required],
        
    });
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100 vh',
      'z-index': 1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };
  this.myParams = {
    particles: {
        number: {
            value: 600,
        },
        color: {
            value: '#FFFFFF'
        },
        shape: {
            type: 'triangle',
        },
}
};
  }
  login(){
    this.loading = true;
    let env = {
      email : this.firstFormGroup.value.email,
      password : this.firstFormGroup.value.password
    }
    this.http.postdata(this.url,env).subscribe((data : any) =>{
      if(data.message != 'error'){
        localStorage.setItem('email',this.firstFormGroup.value.email,)
            localStorage.setItem('user',data.message.token);
            this.loading = false;
            this.router.navigateByUrl('init/demo');
      }
    })
  }
  toggleLoadingAnimation() {
  
    setTimeout(() => this.loading = false, 3000);
  }
  

}
