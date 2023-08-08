import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  prod:any;

  constructor(private activeRoute: ActivatedRoute,private prodService:ProductService) { }

  ngOnInit(): void {
    const prodId = this.activeRoute.snapshot.params['pId'];
    this.prod=this.prodService.getProductById(prodId);
    //return params number 0
    console.log(prodId +"is prod id");
  }

}
