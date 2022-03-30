import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, map, Subject, takeUntil, tap } from 'rxjs';
import { Roles, User } from '../models/user.model';
import firebase from 'firebase/compat/app';
import { formatDate } from '@angular/common';

export interface SignInData {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout(arg0: { returnTo: string; }) {
    throw new Error('Method not implemented.');
  }
  public user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null); // * @
  private singOutFlusher: Subject<void> = new Subject<void>();
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private readonly router: Router,
  ) { }

  /**
   * @description
   * @param signInData 
   * @returns 
   */
  public async signIn(signInData: SignInData): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(signInData.email, signInData.password).then((UserCredential) => {
      this.afs.doc<User>(`/users/${UserCredential.user!.uid}`).valueChanges({ idField: 'uid' }).pipe(
        takeUntil(this.singOutFlusher),
        tap((user) => {
          if (user) {
            this.user$.next(user);
          }
        }),
        map((user) => user?.roles),
        distinctUntilChanged(),
      ).subscribe({
        next: (roles) => {
          const definedRoles: Roles = roles!;
          if (definedRoles) {
            this.reRoute(definedRoles);
          }
        },
      });
    }).catch((err) => {
      window.alert(err);
    })
  }
  /**
   * @description
   * @param roles 
   */
  private reRoute(roles: Roles): void {

    if (roles.admin && !roles.customer) {
      this.router.navigate(['/admin']);
    } else if (!roles.admin && roles.customer) {
      this.router.navigate(['/customer']);
    } else {
      this.safeSignOut();
    }
  }
  /**
   * @description
   * @returns 
   */
  public async safeSignOut(): Promise<boolean | void> {
    return await this.afAuth.signOut().then(() => {
      this.singOutFlusher.next();
      //this.singOutFlusher.complete();
      return this.router.navigate(['/']);
    })
  }
  public async loginGoogle(){
    try{
      return await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(e){
      return this.afAuth.signOut();
    }

    
  }
  



}