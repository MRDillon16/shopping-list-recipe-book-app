import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ShoppingListEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppinglistComponent } from "./shopping-list.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ShoppinglistComponent,
        ShoppingListEditComponent,
    ],
    imports: [
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ShoppinglistComponent },
        ]),
        SharedModule
    ],
})

export class ShoppingListModule {

}