import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { HomeComponent } from './home/home.component';
import { ToolMenuComponent } from './tool-menu/tool-menu.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'dragdrop', component: DragDropComponent },
	{ path: 'toolmenu', component: ToolMenuComponent },
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
