import { NgModule } from '@angular/core';
import { AddProductComponent } from './add-product/add-product';
import { AddCustomerComponent } from './add-customer/add-customer';
@NgModule({
	declarations: [AddProductComponent,
    AddCustomerComponent],
	imports: [],
	exports: [AddProductComponent,
    AddCustomerComponent]
})
export class ComponentsModule {}
