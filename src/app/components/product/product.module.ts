import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSuggestionComponent } from './product-suggestion/product-suggestion.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ProductComponent, ProductDetailComponent, ProductSuggestionComponent],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatButtonModule,
		MatGridListModule,
		RouterModule.forChild([{ path: '', component: ProductComponent }]),
	],
})
export class ProductModule {}
