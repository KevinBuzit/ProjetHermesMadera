import { NgModule } from '@angular/core';
import { AddProductComponent } from './add-product/add-product';
import { AddCustomerComponent } from './add-customer/add-customer';
import { DisplayProductComponent } from './display-product/display-product';

@NgModule({
	declarations: [
    DisplayProductComponent,
	  AddProductComponent,
    AddCustomerComponent
  ],
	imports: [],
	exports: [
    DisplayProductComponent,
	  AddProductComponent,
    AddCustomerComponent
  ]
})
export class ComponentsModule {}
