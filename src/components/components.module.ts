import { NgModule } from '@angular/core';
import { AddProductComponent } from './add-product/add-product';
import { AddCustomerComponent } from './add-customer/add-customer';
import { DisplayProductComponent } from './display-product/display-product';
import { AccountPopoverComponent } from './account-popover/account-popover';
import { DisplayBrouillonComponent } from './display-brouillon/display-brouillon';
@NgModule({
	declarations: [AddProductComponent,
    DisplayProductComponent,AddCustomerComponent,
    AccountPopoverComponent,
    DisplayBrouillonComponent],
	imports: [],
	exports: [AddProductComponent,
    DisplayProductComponent,AddCustomerComponent,
    AccountPopoverComponent,
    DisplayBrouillonComponent]
})
export class ComponentsModule {}
