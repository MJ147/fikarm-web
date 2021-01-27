import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { ProductGridComponent } from './components/home/product-grid/product-grid.component';
import { SearchResultsComponent } from './components/home/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductGridComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
