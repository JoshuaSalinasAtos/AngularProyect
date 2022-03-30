import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-dialog',
  template: `
   <h1>im a component</h1>
  `
}) export class DialogContentComponent {

}

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
})
export class NavbarComponent implements OnInit {
  public user$!: Observable<User>;
  constructor(public readonly auth: AuthService,
    private afs: AngularFirestore,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.user$ = (this.auth.user$.asObservable() as Observable<User>);
  }
  openDialog() {
    this.dialog.open(DialogContentComponent);
  }
  @Input() admin!: boolean;

  logout() {
    this.auth.safeSignOut();
  }
}
