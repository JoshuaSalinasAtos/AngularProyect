import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,  map, switchMap, delay } from 'rxjs';
import { Product } from 'src/app/models/products.models';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {
  public products$!:Observable<Array<Product>>;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private afs: AngularFirestore, 
    private router:Router
    ) { }

  ngOnInit(): void {
    this.products$ = this.afs.collection<Product>('products').valueChanges({idField:'id'});
  }
}
