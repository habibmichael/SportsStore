/**
 * Created by mhabib on 4/19/2017.
 */

import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [HttpModule],
    providers:[ProductRepository,StaticDataSource, Cart,
               Order, OrderRepository,
        {provide: StaticDataSource, useClass: RestDataSource}]
})

export class ModelModule{ }