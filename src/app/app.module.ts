import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ToolMenuComponent } from './tool-menu/tool-menu.component';

@NgModule({
	declarations: [
		AppComponent,
		DragDropComponent,
		HomeComponent,
		FooterComponent,
		ToolMenuComponent,
		DatepickerComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MDBBootstrapModule.forRoot(),
		SharedModule,
		BrowserAnimationsModule,
		DragDropModule
	],
	schemas: [ NO_ERRORS_SCHEMA ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
