/**
 * Created by mhabib on 4/19/2017.
 */

import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";

@NgModule({
    providers:[ProductRepository,StaticDataSource, Cart]
})

export class ModelModule{ }