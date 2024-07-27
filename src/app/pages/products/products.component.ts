import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  product: any;
  productId: any;
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.productId = (this.route.snapshot.paramMap.get('id'));
    if (this.productId) {   
      this.fetchProductDetails(this.productId);
    }
  }
 
  async fetchProductDetails(id: any) {
    try {
      console.log('testtt',id);
      
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      let data = response; // Use the response directly
      this.product = await data.json()
      console.log(this.product);
      
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }
}
