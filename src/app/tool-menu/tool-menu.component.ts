import { Component, OnInit } from '@angular/core';
import { TooltipTemplates } from '../shared/enums/tooltip-menu-templates';
import { TooltipMenuSettings } from '../shared/models/tooltip-menu-settings';

@Component({
	selector: 'app-tool-menu',
	templateUrl: './tool-menu.component.html',
	styleUrls: [ './tool-menu.component.scss' ]
})
export class ToolMenuComponent implements OnInit {
	private _tooltipMenu: Map<string, TooltipMenuSettings> = new Map<string, TooltipMenuSettings>([
		[
			'info',
			{
				templateType: TooltipTemplates.Content,
				placement: 'bottom',
				text:
					'This tooltip template is to give user information. The content of the element can change depending of the user needs',
				widthText: '159'
			}
		],
		[
			'action',
			{
				templateType: TooltipTemplates.Action,
				iconAction: 'fa-plus-circle',
				placement: 'bottom',
				title: 'create new',
				dynamicOptions: () => {
					const options = [
						{
							icon: 'fa-pencil',
							label: 'edit',
							action: () => {}
						},
						{
							icon: 'fa-save',
							label: 'save',
							action: () => {}
						},
						{
							icon: 'fa-folder-open',
							label: 'open folder',
							action: () => {}
						},
						{
							icon: 'fa-files-o',
							label: 'copy',
							action: () => {}
						}
					];
					return options;
				}
			}
		]
	]);

	public get infoToolMenu() {
		return this._tooltipMenu.get('info');
	}

	public get actionTooltipMenuSettings(): TooltipMenuSettings {
		return this._tooltipMenu.get('action');
	}

	constructor() {}

	public ngOnInit() {}
}
