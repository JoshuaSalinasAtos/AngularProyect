import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,  map, switchMap, delay } from 'rxjs';
import { Shop } from 'src/app/models/shop.model';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-sell-list.component.html',
  styleUrls: ['./admin-sell-list.component.scss']
})
export class AdminSellListComponent implements OnInit {
  public purchaseList$!:Observable<Array<Shop>>;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private afs: AngularFirestore, 
    private router:Router
    ) { }

  ngOnInit(): void {
    this.purchaseList$ = this.afs.collection<Shop>('Shop').valueChanges({idField:'id'});
    
  }
}