import { NgModule } from '@angular/core';
import { AddProductComponent } from './add-product/add-product';
import { AddCustomerComponent } from './add-customer/add-customer';
import { AccountPopoverComponent } from './account-popover/account-popover';
import { DisplayBrouillonComponent } from './display-brouillon/display-brouillon';
import { DisplayProductComponent } from './display-product/display-product';

@NgModule({
	declarations: [
    DisplayProductComponent,
	  AddProductComponent,
    AddCustomerComponent,
    AccountPopoverComponent,
    DisplayBrouillonComponent
  ],
	imports: [],
	exports: [
    DisplayProductComponent,
	  AddProductComponent,
    AddCustomerComponent,
    AccountPopoverComponent,
    DisplayBrouillonComponent
  ]
})
export class ComponentsModule {}
