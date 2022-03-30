import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/products.models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  public funkos$!:Observable<Array<Product>>;
  constructor(
    private afs:AngularFirestore,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.funkos$ = this.afs.collection<Product>('products').valueChanges({idField:'id'});
  }

  public async deleteFunko(productId: string): Promise<void> {
    console.log(productId);
      try {
        await this.afs.doc<Product>(`products/${productId}`).delete().then(() => { // * @delete
        this.router.navigate(['/admin/products']);
      });
      } catch (error) {
        window.alert(error);
      }
   }
}
