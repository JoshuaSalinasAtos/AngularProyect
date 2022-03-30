import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { Product } from 'src/app/models/products.models';

import {MatDialog} from '@angular/material/dialog';




@Component({
  selector: 'app-funko-create',
  templateUrl: './admin-funko-create.component.html',
  styleUrls: ['./admin-funko-create.component.scss']
})

export class AdminFunkoCreateComponent implements OnInit {
  public funko$!: Observable<Product>;
  public isCreation$: Observable<boolean> = of(true);
  public productForm: FormGroup = new FormGroup({
    id: new FormControl(undefined), // ! @ except this one 
    name: new FormControl(undefined, [Validators.required, Validators.minLength(10)]),
    img: new FormControl(undefined, [Validators.required]),
    price: new FormControl(undefined, [Validators.required]),
    stock: new FormControl(undefined, [Validators.required]),
    brand: new FormControl(undefined, [Validators.required, Validators.minLength(10)]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore,
    
  ) { }

  ngOnInit(): void {
    this.isCreation$ = this.activatedRoute.params.pipe(
      map((params) => params['funkoId'] ? false : true)
    )
    
    this.funko$ = this.isCreation$.pipe(switchMap((componentInvokationType) => {
      // * @ false for edition 
      // * @ true for creation
      if (!componentInvokationType) {
        return this.activatedRoute.params.pipe(
          map((params) => params['funkoId']),
          switchMap((funkoId: string) => this.afs.doc<Product>(`products/${funkoId}`).valueChanges({ idField: 'id' }))
        ) as Observable<Product>;
      }
      return of(null);
    })) as Observable<Product>;
    this.funko$.pipe(take(1)).subscribe((funkoData) => {
      if (funkoData) {
        this.productForm.patchValue(funkoData);
      }
    })
  }

  public cleanFields(): void {
    this.productForm.reset();
  }

  public createFunko(product: FormGroup): void {
    const funko: Product = product.value;
    this.isCreation$.pipe(take(1)).subscribe(async (isCreation) => {
      if (isCreation) {
        funko.id = this.afs.createId();
      }
      try {
        await this.afs.doc<Product>(`products/${funko.id}`).set(funko, { merge: true }); // * @update
      } catch (error) {
        window.alert(error);
      }
    })
  }

}
export class InputFormExample {}
export class ButtonOverviewExample {}

