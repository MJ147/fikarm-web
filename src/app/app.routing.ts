import { Route } from '@angular/router';

export const routes: Route[] = [
	{
		path: '',
		loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'products/:productId',
		loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
	},
];
