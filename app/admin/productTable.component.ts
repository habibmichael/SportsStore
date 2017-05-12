/**
 * Created by mh122354 on 4/27/2017.
 */
import { Component } from "@angular/core";
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
    moduleId: module.id,
    templateUrl: 'productTable.component.html'
})

export class ProductTableComponent{

    constructor(private repository: ProductRepository){}

    getProducts(): Product[] {
        return this.repository.getProducts();
    }

    deleteProduct(id: number){
        this.respository.deleteProduct(id);
    }
}