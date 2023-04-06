import { AuthService } from './../../core/service/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading:boolean=false;
  apiError:string="";
  isNotValidForm:boolean=false;
  constructor(private _authService: AuthService,private _router:Router){
    this._authService.checkLocalStorage();
  }


registerForm:FormGroup=new FormGroup({
  name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email:new FormControl("",[Validators.required,Validators.email]),
  password: new FormControl("", [Validators.required, Validators.pattern(/^[A-z][a-z-0-9]{3,8}$/)]),
  rePassword: new FormControl("", [Validators.required, Validators.pattern(/^[A-z][a-z-0-9]{3,8}$/)]),
  phone: new FormControl('', [Validators.required, Validators.minLength(11), ]),
});

register(form: FormGroup){
  console.log('hello',form);
if(form.valid==true){
  this.isLoading = true;
  this._authService.register(form.value).subscribe({
next:(data:any)=>{
      console.log(data);
      this.isLoading = false;

      this._router.navigate(['/login']);

},
error:(err:any) => {
  console.log(err);
  console.log(err.error.message);

  this.apiError = err.error.message;
    }
  })
}else{
  this.isNotValidForm=true;
}

}
}
