import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product-create/product.model';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(Products: Product[], searchValue: string): Product[] {
    if(!Products || !searchValue){
      return Products;
    }
    return Products.filter(product =>
      product.id.toString().includes(searchValue)|| 
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

}
