/**
 * Created by mhabib on 4/19/2017.
 */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";

@NgModule({
    imports:[BrowserModule,StoreModule],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})

export class AppModule{}