import { Component, OnInit } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public user$!: Observable<User>; // * @
  constructor( private readonly auth: AuthService ) {}

  ngOnInit(): void {

    this.user$ = (this.auth.user$.asObservable() as Observable<User>).pipe(delay(2000));
  }

}
