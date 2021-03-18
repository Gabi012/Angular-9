import { Product } from './product-create/product.model';
import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'productFilter'
})

export class productfilterPipe implements PipeTransform{
    transform(products: Product[], searchTerm: string): Product[]{
        if(!products || !searchTerm){
            return products;
        }else{
            return products.filter(product =>
            product.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()))
        
        }
        
    }
}
