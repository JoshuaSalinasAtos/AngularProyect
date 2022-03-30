import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { delay, map, Observable, of } from 'rxjs';
import { Product } from 'src/app/models/products.models';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  public user$!: Observable<User>; // * @
  constructor( private readonly auth: AuthService ) {}

  ngOnInit(): void {

    this.user$ = (this.auth.user$.asObservable() as Observable<User>).pipe(delay(2000));
  }

}