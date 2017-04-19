/**
 * Created by mhabib on 4/19/2017.
 */

import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers:[ProductRepository,StaticDataSource]
})

export class ModelModule{ }