import { NgModule } from '@angular/core';
import { AddProductComponent } from './add-product/add-product';
import { AddCustomerComponent } from './add-customer/add-customer';
import { DisplayProductComponent } from './display-product/display-product';
@NgModule({
	declarations: [AddProductComponent,
    DisplayProductComponent,AddCustomerComponent],
	imports: [],
	exports: [AddProductComponent,
    DisplayProductComponent,AddCustomerComponent]
})
export class ComponentsModule {}
