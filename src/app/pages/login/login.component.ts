import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService, SignInData } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public signInForm!: FormGroup;
  email!:string;
  constructor(
    private readonly auth:AuthService,
  ) { }

  ngOnInit(): void {
    this.signInForm = this.initSignInForm();
  }

  public get emailErrors(): ValidationErrors | null {
    return this.signInForm.get('email')!.errors ;
  }
  /**
   * @description this function returns the initiall state for our signInForm
   * @returns FormGroup 
   */
  private initSignInForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required],),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  public signIn(signInForm: FormGroup): void {
    const emailAndPassword: SignInData = signInForm.value;
    this.auth.signIn(emailAndPassword);
  }
  public async onGoogleLogin(){
    try{
      this.auth.loginGoogle();
    }catch(e){console.log(e)}
  }

}
