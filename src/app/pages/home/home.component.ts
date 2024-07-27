import { Component } from '@angular/core';
import { Product } from '../../interface/appInterfaces';
import { Router } from '@angular/router';
import { CardsComponent } from '../../ui/cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  
constructor(public router:Router){}

items:Product[] = [];
sectionCategory:string[] = [];
sectionTitle:string[] = [];
async ngOnInit(){
 await this.fetchAPI()
  if(this.items){
    this.sectionCategory = this.getUniqueCategories(this.items);
    this.sectionTitle = this.capitalizeFirstLetter(this.sectionCategory)
    console.log(this.sectionCategory)
  }
}

display(id:any){
  this.router.navigate([`/products`,id])
}

async fetchAPI(){
  const url = 'https://dummyjson.com/products';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    this.items = data.products;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
getUniqueCategories(items: Product[]): string[] {
  const categories = items.map(item => item.category);
  return Array.from(new Set(categories));
}
capitalizeFirstLetter(myString: string[]): string[] {
  if (!myString) return myString;
  let output:string[] = [];
  myString.forEach(item =>{
    output.push(item.charAt(0).toUpperCase() + item.slice(1))
  })
  return output;
}

}
