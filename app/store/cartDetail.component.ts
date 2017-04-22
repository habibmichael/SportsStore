/**
 * Created by mh122354 on 4/22/2017.
 */

import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({

    moduleId:module.id,
    templateUrl:"cartDetail.component.html"
})

export class CartDetailComponent{

    constructor(public cart: Cart){}
}
