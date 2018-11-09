import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IconStackedComponent } from './components/icon-stacked/icon-stacked.component';
import { ToolMenuComponent } from './components/tooltip-menu/tooltip-menu.component';

@NgModule({
	imports: [ CommonModule, MDBBootstrapModule.forRoot() ],
	declarations: [ ToolMenuComponent, IconStackedComponent ],
	exports: [ MDBBootstrapModule, ToolMenuComponent, IconStackedComponent ],
	providers: [],
	schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule {}
