import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.less'],
})
export class ProductDetailComponent implements OnInit {
	@Input() product: Product;

	constructor() {}

	ngOnInit(): void {}
}
