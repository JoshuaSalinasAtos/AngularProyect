import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,  map, switchMap, delay, take, combineLatest, forkJoin, of } from 'rxjs';
import { Product } from 'src/app/models/products.models';
import { User } from 'src/app/models/user.model';
import { Shop } from 'src/app/models/shop.model';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/compat/app';
export interface PurchasedFunko {
  purchaseId:string;
  funko:Product;
  user: Pick<User, 'uid' | 'name'> 
}

export interface relationalExample {
  purchaseId:string,
  funkoId:string,
  uid:string,
}

@Component({
  selector: 'app-customer-shopping-cart',
  templateUrl: './customer-shopping-cart.component.html',
  styleUrls: ['./customer-shopping-cart.component.scss']
})
export class CustomerShoppingCart implements OnInit {
  public purchaseList$!:Observable<Array<Shop>>;
  public funko$!:Observable<Array<Product>>;
  public user$!: Observable<User>; 

  constructor(
    private activatedRoute: ActivatedRoute, 
    private afs: AngularFirestore, 
    private router:Router,
    private readonly auth: AuthService
    ) { }

    ngOnInit(): void {
      this.funko$ = this.afs.collection<Product>('products').valueChanges({idField:'id'});
      const documentReference = this.afs.doc<Product>('/products/${id}'); 
      documentReference.valueChanges({idField:'id'}).pipe(take(1)).subscribe({
        next: (product) => {
          const Product = product!;
          documentReference.update({
            stock: firebase.firestore.FieldValue.increment(-1) as unknown as number
          }).then(() => {
            console.log("did something")
          })
        }
      })
    }
  
    public async buyFunko(funko:Product):Promise<void> {
      this.auth.user$.pipe(take(1)).subscribe({
        next: async (user) => {
          try {
            const { uid, name } = user as User; // * @ user
            const purchaseId:string = this.afs.createId();
            await this.afs.doc<any>(`Shop/${purchaseId}`).set({
              purchaseId:purchaseId,
              funkoId:funko.id,
              uid:uid,
            });
          } catch (error) {
            window.alert(error);
          }        
        }
      })
    }
  
}
  
export class InputFormExample {}
export class ButtonOverviewExample {}