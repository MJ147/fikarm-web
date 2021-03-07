import { Product } from './../../../services/product.service';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
	selector: 'app-product-grid',
	styleUrls: ['./product-grid.component.less'],
	templateUrl: './product-grid.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGridComponent {
	@Input() products: Product[];
	readonly columns$: Observable<number>;
	readonly breakpointsToColumnsNumber = new Map([
		['xs', 1],
		['sm', 2],
		['md', 3],
		['lg', 4],
		['xl', 5],
	]);

	constructor(private media: MediaObserver) {
		// If the initial screen size is xs ObservableMedia doesn't emit an event
		// and grid-list rendering fails. Once the following issue is closed, this
		// comment can be removed: https://github.com/angular/flex-layout/issues/388
		this.columns$ = this.media.asObservable().pipe(
			map((mc) => this.breakpointsToColumnsNumber.get(mc[0].mqAlias) as number),
			startWith(3),
		);
	}
}
