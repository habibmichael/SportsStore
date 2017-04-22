/**
 * Created by mhabib on 4/19/2017.
 */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";

@NgModule({
    imports:[BrowserModule,StoreModule,
        RouterModule.forRoot([
            { path: "store",component: StoreComponent,
              canActivate: [StoreFirstGuard]
            },
            { path: "cart", component: CartDetailComponent,
              canActivate: [StoreFirstGuard]
            },
            { path: "checkout", component: CheckoutComponent,
              canActivate: [StoreFirstGuard]
            },
            { path: "**", redirectTo: "/store"}
        ])],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})

export class AppModule{}