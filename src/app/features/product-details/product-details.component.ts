import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details',
  imports: [RouterModule,CommonModule,FontAwesomeModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  ID=0;
  productObj:any={};
  selectedImage:any;
  productQuantitiy:number=1;

  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;


  constructor(myActivated:ActivatedRoute,private myProductsService: ProductsService){
    this.ID= myActivated.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.myProductsService.getProductById(this.ID).subscribe({
      next: (data)=>this.productObj=data ,
      error:(error)=>console.log(error)
    })
  }

  getImag(event:Event){
    const img= event.target as HTMLImageElement;
    this.selectedImage=img.src;
  }

  decreaseQuantity(){
    if(this.productQuantitiy>1){
      this.productQuantitiy-=1;
    }
  }
  increaseQuantity(){
      this.productQuantitiy+=1;
  }

  getStarArray(rating: number) {
    let fullStars = Math.floor(rating);
    let halfStar = rating % 1 !== 0 ? 1 : 0;
    let emptyStars = 5 - fullStars - halfStar;
    return { fullStars, halfStar, emptyStars };
  }
  
}
