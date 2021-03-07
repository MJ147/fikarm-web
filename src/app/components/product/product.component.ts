import { Product, ProductService } from './../../services/product.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
})
export class ProductComponent {
	product$: Observable<Product>;
	suggestedProducts$: Observable<Product[]>;

	constructor(private _route: ActivatedRoute, private _productService: ProductService) {
		this.product$ = this._route.paramMap.pipe(
			map((params) => parseInt(params.get('productId') || '', 10)),
			filter((productId) => !!productId),
			switchMap((productId) => this._productService.getById(productId)),
		);
		this.suggestedProducts$ = this._productService.getAll();
	}
}
