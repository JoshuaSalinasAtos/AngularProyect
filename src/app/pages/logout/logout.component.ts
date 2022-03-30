import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService, SignInData } from 'src/app/services/auth.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {
  
  constructor(
    private readonly auth:AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit(): void {
  }

  logout(): void{
      this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
