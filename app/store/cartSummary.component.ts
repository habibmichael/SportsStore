/**
 * Created by mh122354 on 4/22/2017.
 */

import { Component } from "@angular/core";
import { Cart } from "./cart.model";

@Component({
    selector: "cart-summary",
    moduleId:module.id,
    templateUrl: "app/store/cartSummary.component.html"
})

export class CartSummaryComponent{

    constructor(public cart: Cart){}
}