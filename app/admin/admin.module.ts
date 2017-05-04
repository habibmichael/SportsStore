/**
 * Created by mh122354 on 4/24/2017.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {Form, FormsModule} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    { path: "main", component: AdminComponent },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule,FormsModule, routing],
    declarations: [AuthComponent, AdminComponent]
})

export class AdminModule{}