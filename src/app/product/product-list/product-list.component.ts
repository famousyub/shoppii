import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';
import { ProdcatService } from 'src/app/shared/services/prodcat.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products = [];
  producty:any;

  proddj :any ;

  products_:any ;
  searchForm;
  searchFormy;
  constructor(private productservice: ProdcatService,private formBuilder:FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });

    this.searchFormy = this.formBuilder.group({
      search: '',
    });
  }

  ngOnInit(): void {
    

    this.productservice.getAllProducts().subscribe(res=>{
      console.table(res);
      this.products_ = res;
      
    })

    this.productservice.getAllprods().subscribe(res=>{
      console.table(res);
      this.proddj = res ;
    })

    this.fetchallproduct();
    setTimeout(() => {
      this.fetchallproduct
      
    }, 5000);
   

    setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true
    }, 8000)
  }

  fetchallproduct(){
    this.productservice.fetchProducts().subscribe(res=>{
      console.table(res);
      this.producty=res;
      
    })
  }
}
