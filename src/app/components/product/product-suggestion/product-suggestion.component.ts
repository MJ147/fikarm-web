import { map, startWith } from 'rxjs/operators';
import { Component, Input } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { Product } from 'src/app/services/product.service';

@Component({
	selector: 'app-product-suggestion',
	templateUrl: './product-suggestion.component.html',
	styleUrls: ['./product-suggestion.component.less'],
})
export class ProductSuggestionComponent {
	@Input() products: Product[];
	readonly columns$: Observable<number>;
	readonly breakpointsToColumnsNumber = new Map([
		['xs', 2],
		['sm', 3],
		['md', 5],
		['lg', 2],
		['xl', 3],
	]);

	constructor(private _media: MediaObserver) {
		// If the initial screen size is xs ObservableMedia doesn't emit an event
		// and grid-list rendering fails. Once the following issue is closed, this
		// comment can be removed: https://github.com/angular/flex-layout/issues/388
		this.columns$ = this._media.asObservable().pipe(
			map((m) => this.breakpointsToColumnsNumber.get(m[0].mqAlias) as number),
			startWith(3), // bug workaround
		);
	}
}
