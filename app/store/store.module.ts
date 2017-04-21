/**
 * Created by mhabib on 4/21/2017.
 */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {Form, FormsModule} from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";

@NgModule({
    imports: [ModelModule,BrowserModule,FormsModule],
    declarations: [StoreComponent],
    exports: [StoreComponent]
})

export class StoreModule{}