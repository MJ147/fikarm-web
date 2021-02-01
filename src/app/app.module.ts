import { FlexLayoutModule } from '@angular/flex-layout';
import { routes } from './app.routing';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FlexLayoutModule,
		RouterModule.forRoot(routes),

		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatToolbarModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
